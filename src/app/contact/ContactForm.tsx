"use client";

import { useSearchParams } from "next/navigation";
import { useActionState } from "react";
import { fibreProducts } from "@/content/products";
import { sendEnquiry, type ContactState } from "./actions";

const initial: ContactState = { status: "idle" };

const field =
  "mt-1.5 w-full rounded-md border border-line bg-paper px-4 py-3 text-base outline-none transition focus:border-leaf focus:ring-2 focus:ring-leaf/20";

export function ContactForm() {
  const [state, action, pending] = useActionState(sendEnquiry, initial);
  const params = useSearchParams();
  const buying = params.get("interest") === "buy";
  const product = fibreProducts.find((p) => p.slug === params.get("product"));

  if (state.status === "success") {
    return (
      <div className="rounded-md border border-leaf/30 bg-leaf/5 p-8" role="status">
        <p className="font-display text-2xl text-leaf">Message sent</p>
        <p className="mt-2 text-ink-soft">{state.message ?? "Thank you — I'll be in touch soon."}</p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-5" noValidate>
      {/* honeypot */}
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          Your name *
          <input name="name" required className={field} autoComplete="name" />
          {state.errors?.name && <span className="mt-1 block text-sm text-red-700">{state.errors.name}</span>}
        </label>
        <label className="block text-sm font-medium">
          Email *
          <input name="email" type="email" required className={field} autoComplete="email" />
          {state.errors?.email && <span className="mt-1 block text-sm text-red-700">{state.errors.email}</span>}
        </label>
        <label className="block text-sm font-medium">
          Phone / WhatsApp
          <input name="phone" type="tel" className={field} autoComplete="tel" />
        </label>
        <label className="block text-sm font-medium">
          Organisation
          <input name="organisation" className={field} autoComplete="organization" />
        </label>
        <label className="block text-sm font-medium">
          You are a…
          <select name="type" className={field} defaultValue="">
            <option value="">Select</option>
            <option>Start-up / entrepreneur</option>
            <option>NGO / social enterprise</option>
            <option>Manufacturer</option>
            <option>Researcher / student</option>
            <option>Supplier</option>
            <option>Other</option>
          </select>
        </label>
        <label className="block text-sm font-medium">
          Interested in
          <select name="interest" className={field} defaultValue={buying ? "Buying fibre or fluff" : ""}>
            <option value="">Select</option>
            <option>Product & process consulting</option>
            <option>Machinery design & selection</option>
            <option>Machine & raw-material sourcing</option>
            <option>R&D & product testing</option>
            <option>Buying fibre or fluff</option>
            <option>Something else</option>
          </select>
        </label>
      </div>
      {buying && (
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block text-sm font-medium">
            Product
            <select name="product" className={field} defaultValue={product?.name ?? ""}>
              <option value="">Select</option>
              {fibreProducts.map((p) => (
                <option key={p.slug}>{p.name}</option>
              ))}
            </select>
          </label>
          <label className="block text-sm font-medium">
            Quantity needed
            <input name="quantity" placeholder="e.g. 1 kg sample, 500 kg/month" className={field} />
          </label>
        </div>
      )}
      <label className="block text-sm font-medium">
        Country
        <input name="country" className={field} autoComplete="country-name" />
      </label>
      <label className="block text-sm font-medium">
        Tell me about your project *
        <textarea name="message" rows={6} required className={field} />
        {state.errors?.message && <span className="mt-1 block text-sm text-red-700">{state.errors.message}</span>}
      </label>

      {state.status === "error" && state.message && (
        <p className="rounded-md bg-red-50 p-4 text-sm text-red-800" role="alert">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="rounded-md bg-leaf px-6 py-3 font-medium text-paper transition-colors hover:bg-leaf-dark disabled:opacity-60"
      >
        {pending ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}
