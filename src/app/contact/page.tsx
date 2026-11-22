import type { Metadata } from "next";
import { Suspense } from "react";
import { Container, PageHeader, Photo } from "@/components/ui";
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
        <Suspense>
          <ContactForm />
        </Suspense>
        <aside className="space-y-6">
          <Photo
            src="/images/sworup-with-product.jpg"
            alt="Sworup Raj Poudel reviewing a natural-fibre sanitary pad"
            className="aspect-[4/3]"
            position="58% 40%"
          />
          <div className="fibre-pattern rounded-md border border-line p-6 text-sm">
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
