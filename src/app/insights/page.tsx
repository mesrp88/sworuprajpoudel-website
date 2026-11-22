import type { Metadata } from "next";
import Link from "next/link";
import { Container, PageHeader } from "@/components/ui";
import { getPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Insights",
  description: "Articles on natural-fibre hygiene products, processing and machinery.",
};

export default async function InsightsPage() {
  const posts = await getPosts();
  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Notes from the workshop and the lab."
        intro="Articles on natural fibres, processing and machinery for compostable hygiene products."
      />
      <Container className="max-w-3xl divide-y divide-line py-10">
        {posts.map((p) => (
          <Link key={p.slug} href={`/insights/${p.slug}`} className="group block py-8">
            <time className="font-display font-medium text-sm text-fibre" dateTime={p.date}>
              {new Date(p.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
            </time>
            <h2 className="mt-2 font-display text-2xl font-medium group-hover:text-leaf">{p.title}</h2>
            <p className="mt-2 text-ink-soft">{p.excerpt}</p>
          </Link>
        ))}
      </Container>
    </>
  );
}
