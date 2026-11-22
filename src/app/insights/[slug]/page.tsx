import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui";
import { getPost, getPosts } from "@/lib/content";

export async function generateStaticParams() {
  return (await getPosts()).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/insights/[slug]">): Promise<Metadata> {
  const p = await getPost((await params).slug);
  return p ? { title: p.title, description: p.excerpt } : {};
}

export default async function PostPage({ params }: PageProps<"/insights/[slug]">) {
  const p = await getPost((await params).slug);
  if (!p) notFound();

  return (
    <Container className="max-w-2xl py-16">
      <Link href="/insights" className="text-sm text-leaf hover:underline">
        ← All insights
      </Link>
      <time className="mt-8 block text-xs uppercase tracking-widest text-fibre" dateTime={p.date}>
        {new Date(p.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
      </time>
      <h1 className="mt-3 font-display text-4xl leading-tight font-medium">{p.title}</h1>
      <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-soft">
        {p.body.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </Container>
  );
}
