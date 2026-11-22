import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink, Container, Eyebrow, Media } from "@/components/ui";
import { getMaterial, getMaterials } from "@/lib/content";

export async function generateStaticParams() {
  return (await getMaterials()).map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: PageProps<"/materials/[slug]">): Promise<Metadata> {
  const m = await getMaterial((await params).slug);
  return m ? { title: m.name, description: m.summary } : {};
}

export default async function MaterialPage({ params }: PageProps<"/materials/[slug]">) {
  const m = await getMaterial((await params).slug);
  if (!m) notFound();

  return (
    <Container className="py-16">
      <Eyebrow>Material</Eyebrow>
      <h1 className="mt-3 font-display text-4xl font-medium md:text-5xl">{m.name}</h1>
      <p className="mt-2 text-lg text-fibre">{m.tagline}</p>

      <div className="mt-10 grid gap-10 md:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="text-lg text-ink-soft">{m.summary}</p>
          <p className="mt-6">
            <span className="font-semibold">Where it comes from: </span>
            {m.source}
          </p>

          <h2 className="mt-10 font-display text-2xl font-medium">Typical processing</h2>
          <ol className="mt-4 space-y-3">
            {m.processing.map((step, i) => (
              <li key={step} className="flex gap-4">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-leaf text-xs text-paper">
                  {i + 1}
                </span>
                <span className="pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className="space-y-6">
          <Media src={m.image} alt={m.name} className="aspect-square" />
          <div className="rounded-2xl border border-line p-6">
            <h2 className="font-display text-xl">Key properties</h2>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-ink-soft">
              {m.properties.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <h2 className="mt-6 font-display text-xl">Products</h2>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-ink-soft">
              {m.products.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-14 flex flex-wrap gap-3">
        <ButtonLink href="/contact">Ask about {m.name.toLowerCase()} →</ButtonLink>
        {m.slug === "banana-fibre" && (
          <ButtonLink href="/materials#buy" variant="ghost">
            Buy banana fibre or fluff
          </ButtonLink>
        )}
        <ButtonLink href="/materials" variant="ghost">
          All materials
        </ButtonLink>
      </div>
    </Container>
  );
}
