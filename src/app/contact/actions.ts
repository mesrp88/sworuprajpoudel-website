"use server";

import { site } from "@/content/site";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<"name" | "email" | "message", string>>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendEnquiry(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Honeypot: bots fill hidden fields, people don't.
  if (formData.get("company_website")) return { status: "success" };

  const data = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    organisation: String(formData.get("organisation") ?? "").trim(),
    type: String(formData.get("type") ?? "").trim(),
    interest: String(formData.get("interest") ?? "").trim(),
    country: String(formData.get("country") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };

  const errors: ContactState["errors"] = {};
  if (!data.name) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(data.email)) errors.email = "Please enter a valid email address.";
  if (data.message.length < 10) errors.message = "Please tell me a little more (at least 10 characters).";
  if (Object.keys(errors).length) return { status: "error", errors };

  const text = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || "-"}`,
    `Organisation: ${data.organisation || "-"}`,
    `Type: ${data.type || "-"}`,
    `Interested in: ${data.interest || "-"}`,
    `Country: ${data.country || "-"}`,
    "",
    data.message,
  ].join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !to) {
    // Not configured yet (e.g. local development): log instead of emailing.
    console.log("[contact] New enquiry (email not configured):\n" + text);
    return { status: "success", message: "Thanks! Your message has been received." };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL ?? `${site.name} website <onboarding@resend.dev>`,
        to: [to],
        reply_to: data.email,
        subject: `New enquiry from ${data.name}${data.interest ? ` — ${data.interest}` : ""}`,
        text,
      }),
    });
    if (!res.ok) throw new Error(`Resend responded ${res.status}`);
  } catch (err) {
    console.error("[contact] Failed to send", err);
    return {
      status: "error",
      message: "Sorry, something went wrong sending your message. Please try WhatsApp or phone instead.",
    };
  }

  return { status: "success", message: "Thanks! Your message has been sent — I'll be in touch soon." };
}
