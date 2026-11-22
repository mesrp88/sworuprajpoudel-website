import type { Metadata } from "next";
import Link from "next/link";
import { Container, Media, PageHeader, Tag } from "@/components/ui";
import { getProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description: "Machinery, product and research projects in natural-fibre hygiene products.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Machines designed, problems solved."
        intro="A selection of machinery, product and research work. More detail and photos are being added."
      />
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Link key={p.slug} href={`/projects/${p.slug}`} className="group">
            <Media src={p.image} alt={p.title} className="aspect-[4/3]" />
            <p className="mt-4 text-xs uppercase tracking-widest text-fibre">{p.category}</p>
            <h2 className="mt-1 font-display text-xl font-medium group-hover:text-leaf">{p.title}</h2>
            <p className="mt-2 text-sm text-ink-soft">{p.summary}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </Link>
        ))}
      </Container>
    </>
  );
}
