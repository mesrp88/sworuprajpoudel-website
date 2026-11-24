import type { Metadata } from "next";
import Link from "next/link";
import { Container, Eyebrow, PageHeader, Photo } from "@/components/ui";
import { publications } from "@/content/publications";
import { getPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Published case studies and articles on compostable menstrual pads, banana fibre extraction, banana fibre paper and small-scale machinery.",
};

const fmt = (d: string) => new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

export default async function InsightsPage() {
  const posts = await getPosts();
  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Notes from the workshop and the lab."
        intro="Published case studies and articles on natural fibres, processing and machinery for compostable hygiene products."
      />

      {/* Published case studies */}
      <section id="published" className="scroll-mt-20">
        <Container className="py-20">
          <Eyebrow>Published case studies</Eyebrow>
          <h2 className="mt-3 max-w-3xl font-display text-4xl font-semibold md:text-5xl">
            Open, replicable solutions, documented on PANORAMA.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-ink-soft">
            Detailed write-ups of our work in Nepal, with machine designs, layouts and processes that other communities
            can reuse. Published with NIDISI gGmbH on PANORAMA Solutions.
          </p>

          <ul className="mt-12 space-y-10">
            {publications.map((p) => (
              <li key={p.url}>
                <article className="grid gap-6 border-t border-line pt-10 md:grid-cols-[1fr_1.6fr] md:gap-10">
                  <Photo src={p.image} alt={p.imageAlt} className="aspect-[4/3]" position={p.position} />
                  <div className="flex flex-col">
                    <p className="font-display text-sm font-medium text-clay">
                      {p.publisher} · <time dateTime={p.date}>{fmt(p.date)}</time>
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-semibold md:text-3xl">
                      <a href={p.url} target="_blank" rel="noopener" className="hover:text-leaf">
                        {p.title}
                      </a>
                    </h3>
                    <p className="mt-1 font-display text-sm text-ink-soft">{p.location}</p>
                    <p className="mt-4 text-ink-soft">{p.summary}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {p.covers.map((c) => (
                        <li
                          key={c}
                          className="rounded border border-line bg-paper px-2.5 py-0.5 font-display text-xs text-ink-soft"
                        >
                          {c}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap items-center gap-5">
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener"
                        className="inline-flex rounded-md bg-leaf px-5 py-2.5 font-display font-semibold text-paper transition-colors hover:bg-leaf-dark"
                      >
                        Read on PANORAMA
                      </a>
                      {p.relatedProject && (
                        <Link
                          href={`/projects/${p.relatedProject}`}
                          className="font-display text-sm font-medium text-leaf underline-offset-4 hover:underline"
                        >
                          Related project
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Articles */}
      <section className="border-t border-line/70 bg-paper-deep/40">
        <Container className="max-w-3xl py-16">
          <Eyebrow>Articles</Eyebrow>
          <div className="mt-4 divide-y divide-line">
            {posts.map((p) => (
              <Link key={p.slug} href={`/insights/${p.slug}`} className="group block py-8">
                <time className="font-display text-sm font-medium text-fibre" dateTime={p.date}>
                  {fmt(p.date)}
                </time>
                <h2 className="mt-2 font-display text-2xl font-medium group-hover:text-leaf">{p.title}</h2>
                <p className="mt-2 text-ink-soft">{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
