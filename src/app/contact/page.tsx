import type { Metadata } from "next";
import { Container, PageHeader } from "@/components/ui";
import { site } from "@/content/site";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a consultation on natural-fibre hygiene products or machinery.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your project."
        intro="Share a few details and I'll get back to you. The more you tell me about your product, scale and location, the more useful my first reply will be."
      />
      <Container className="grid gap-12 py-16 md:grid-cols-[1.6fr_1fr]">
        <ContactForm />
        <aside className="space-y-6">
          <div className="rounded-2xl border border-line p-6">
            <h2 className="font-display text-xl">Prefer to message directly?</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noopener"
                  className="font-medium text-leaf hover:underline"
                >
                  WhatsApp →
                </a>
              </li>
              <li>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:underline">
                  {site.phone}
                </a>
              </li>
              {site.email && (
                <li>
                  <a href={`mailto:${site.email}`} className="hover:underline">
                    {site.email}
                  </a>
                </li>
              )}
              <li className="text-ink-soft">{site.location}</li>
            </ul>
          </div>
          <div className="fibre-pattern rounded-2xl border border-line p-6 text-sm">
            <p className="font-semibold">Helpful to include</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-ink-soft">
              <li>What you want to make, and roughly how many per day</li>
              <li>Which fibres you have access to</li>
              <li>Machines you already own, if any</li>
              <li>Your timeline</li>
            </ul>
          </div>
        </aside>
      </Container>
    </>
  );
}
