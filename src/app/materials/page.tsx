import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink, Container, Eyebrow, Media, PageHeader } from "@/components/ui";
import { fibreProducts, purchaseNote } from "@/content/products";
import { getMaterials } from "@/lib/content";

export const metadata: Metadata = {
  title: "Materials",
  description:
    "Banana fibre, sugarcane bagasse and hemp for compostable hygiene products. Buy banana fibre and fibre fluff in sample or bulk quantities.",
};

export default async function MaterialsPage() {
  const materials = await getMaterials();
  return (
    <>
      <PageHeader
        eyebrow="Materials"
        title="Natural fibres for compostable products."
        intro="Each fibre behaves differently in processing and in the final product. Here's an overview of the ones I work with."
      />
      <Container className="grid gap-8 py-16 md:grid-cols-3">
        {materials.map((m) => (
          <Link key={m.slug} href={`/materials/${m.slug}`} className="group">
            <Media src={m.image} alt={m.name} className="aspect-[4/3]" />
            <h2 className="mt-4 font-display text-2xl font-medium group-hover:text-leaf">{m.name}</h2>
            <p className="text-sm text-fibre">{m.tagline}</p>
            <p className="mt-3 text-sm text-ink-soft">{m.summary}</p>
          </Link>
        ))}
      </Container>

      {/* Buy fibre & fluff */}
      <section id="buy" className="scroll-mt-20 border-t border-line/70 bg-paper-deep/40">
        <Container className="py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Eyebrow>Buy fibre & fluff</Eyebrow>
              <h2 className="mt-3 font-display text-4xl font-medium">Need natural fibre for your product?</h2>
              <p className="mt-4 text-lg text-ink-soft">{purchaseNote}</p>
            </div>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {fibreProducts.map((p) => (
              <div key={p.slug} className="overflow-hidden rounded-2xl border border-line bg-paper">
                <Media src={p.image} alt={p.name} className="aspect-[16/9] rounded-none" position={p.position} />
                <div className="p-7">
                  <h3 className="font-display text-2xl font-medium">{p.name}</h3>
                  <p className="mt-2 text-ink-soft">{p.summary}</p>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-fibre">Used for</p>
                  <ul className="mt-2 space-y-1.5 text-sm">
                    {p.uses.map((u) => (
                      <li key={u} className="flex gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-leaf" />
                        {u}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 flex flex-wrap items-center gap-4">
                    <ButtonLink href={`/contact?interest=buy&product=${p.slug}`}>Request a quote →</ButtonLink>
                    <span className="text-xs text-ink-soft">Samples available</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
