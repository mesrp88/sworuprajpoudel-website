import type { Metadata } from "next";
import Link from "next/link";
import { Container, PageHeader, PhotoPlaceholder } from "@/components/ui";
import { getMaterials } from "@/lib/content";

export const metadata: Metadata = {
  title: "Materials",
  description: "Banana fibre, sugarcane bagasse and hemp for compostable hygiene products.",
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
            <PhotoPlaceholder label={m.name} className="aspect-[4/3]" />
            <h2 className="mt-4 font-display text-2xl font-medium group-hover:text-leaf">{m.name}</h2>
            <p className="text-sm text-fibre">{m.tagline}</p>
            <p className="mt-3 text-sm text-ink-soft">{m.summary}</p>
          </Link>
        ))}
      </Container>
    </>
  );
}
