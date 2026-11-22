import type { Metadata } from "next";
import { ButtonLink, Container, PageHeader } from "@/components/ui";
import { getServices } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Product and process consulting for natural-fibre sanitary pads, machinery design and selection, and machine and raw-material sourcing.",
};

export default async function ServicesPage() {
  const services = await getServices();
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Practical engineering help for natural-fibre hygiene products."
        intro="Work with me on one stage or the whole journey — from choosing a fibre to commissioning the line."
      />
      <Container className="divide-y divide-line">
        {services.map((s, i) => (
          <section key={s.slug} id={s.slug} className="grid scroll-mt-24 gap-8 py-16 md:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="font-display text-fibre">0{i + 1}</p>
              <h2 className="mt-2 font-display text-3xl font-medium">{s.title}</h2>
              <p className="mt-4 text-ink-soft">{s.summary}</p>
              <p className="mt-6 rounded-xl bg-paper-deep/70 p-4 text-sm">
                <span className="font-semibold">Good fit for: </span>
                {s.forWho}
              </p>
            </div>
            <ul className="space-y-3">
              {s.points.map((p) => (
                <li key={p} className="flex gap-3 rounded-xl border border-line bg-paper p-4">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-leaf" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </Container>
      <Container className="pt-8 text-center">
        <ButtonLink href="/contact">Discuss your project →</ButtonLink>
      </Container>
    </>
  );
}
