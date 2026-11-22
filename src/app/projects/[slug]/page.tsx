import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink, Container, Eyebrow, PhotoPlaceholder, Tag } from "@/components/ui";
import { getProject, getProjects } from "@/lib/content";

export async function generateStaticParams() {
  return (await getProjects()).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const p = await getProject((await params).slug);
  return p ? { title: p.title, description: p.summary } : {};
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const p = await getProject((await params).slug);
  if (!p) notFound();

  return (
    <Container className="max-w-4xl py-16">
      <Eyebrow>{p.category}</Eyebrow>
      <h1 className="mt-3 font-display text-4xl leading-tight font-medium md:text-5xl">{p.title}</h1>
      <p className="mt-4 text-lg text-ink-soft">{p.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>

      <PhotoPlaceholder label={p.title} className="mt-10 aspect-[16/9]" />

      <div className="mt-12 grid gap-10 md:grid-cols-3">
        <section>
          <h2 className="font-display text-xl font-medium">The challenge</h2>
          <p className="mt-3 text-ink-soft">{p.challenge}</p>
        </section>
        <section>
          <h2 className="font-display text-xl font-medium">What I did</h2>
          {p.approach.length > 0 ? (
            <ul className="mt-3 list-disc space-y-2 pl-5 text-ink-soft">
              {p.approach.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 text-ink-soft">Details coming soon.</p>
          )}
        </section>
        <section>
          <h2 className="font-display text-xl font-medium">Outcome</h2>
          <p className="mt-3 text-ink-soft">{p.outcome}</p>
        </section>
      </div>

      {p.draft && (
        <p className="mt-12 rounded-xl bg-paper-deep/70 p-4 text-sm text-ink-soft">
          This case study is being written up — photos, drawings and results will be added soon.
        </p>
      )}

      <div className="mt-12 flex flex-wrap gap-3">
        <ButtonLink href="/contact">Need something similar? →</ButtonLink>
        <ButtonLink href="/projects" variant="ghost">
          All projects
        </ButtonLink>
      </div>
    </Container>
  );
}
