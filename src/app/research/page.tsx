import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ButtonLink, Container, Eyebrow, Media, Photo, Tag } from "@/components/ui";
import { rdOffers, rdSteps, testAreas } from "@/content/research";
import { getProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "R&D and testing",
  description:
    "Research, product development and lab testing for natural-fibre sanitary pads: absorbency testing, test liquids, fibre treatment and quality control.",
};

export default async function ResearchPage() {
  const research = (await getProjects()).filter((p) => p.category === "Research" || p.category === "Product & process");

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <Image
          src="/images/filling-burette.jpg"
          alt="Sworup Raj Poudel pouring test liquid into a burette in the lab"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "40% 55%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#13221a] via-[#13221a]/80 to-[#13221a]/10" />
        <Container className="relative py-28 md:py-40">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-fibre-light">Research, development & testing</p>
          <h1 className="mt-5 max-w-2xl font-display text-5xl leading-[1.05] font-medium md:text-7xl">
            Evidence <em className="text-fibre-light">before</em> production.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-paper/80">
            Every improvement to a natural-fibre pad starts in the lab: treating fibre, testing absorbency and measuring
            results until they can be repeated.
          </p>
        </Container>
      </section>

      {/* Intro */}
      <section>
        <Container className="grid items-center gap-12 py-24 md:grid-cols-2">
          <Reveal>
            <Eyebrow>Why it matters</Eyebrow>
            <h2 className="mt-3 font-display text-4xl font-medium">Natural fibre behaves differently from plastic.</h2>
            <div className="mt-6 space-y-4 text-lg text-ink-soft">
              <p>
                Fibre from banana stems or bagasse varies with the plant, the season and how it&apos;s processed. To make a
                pad that performs reliably, you need to understand the material and test the product.
              </p>
              <p>
                At NIDISI-Sparsa Nepal, I run experiments on fibre treatment, pad structure and absorbency to find out what
                actually works, then turn those results into changes on the production line.
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <Photo
              src="/images/lab-overhead.jpg"
              alt="Lab bench with banana fibre sample, scale, stopwatch, glassware and digital burette"
              className="aspect-[4/3]"
              position="50% 40%"
            />
          </Reveal>
        </Container>
      </section>

      {/* What we test */}
      <section className="border-y border-line/70 bg-paper-deep/40">
        <Container className="py-24">
          <Reveal>
            <Eyebrow>In the lab</Eyebrow>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-medium md:text-5xl">What I test.</h2>
          </Reveal>
          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {testAreas.map((t, i) => (
              <Reveal key={t.title} delay={(i % 2) * 120}>
                <Photo src={t.image} alt={t.title} className="aspect-[3/2]" position={t.position} />
                <h3 className="mt-5 font-display text-2xl font-medium">{t.title}</h3>
                <p className="mt-2 text-ink-soft">{t.text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* R&D process */}
      <section>
        <Container className="py-24">
          <Reveal>
            <Eyebrow>How R&D works</Eyebrow>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-medium md:text-5xl">From question to production line.</h2>
          </Reveal>
          <ol className="mt-14 grid gap-8 md:grid-cols-5">
            {rdSteps.map((s, i) => (
              <li key={s.n}>
                <Reveal delay={i * 100}>
                  <div className="border-t-2 border-fibre pt-5">
                    <p className="font-display text-3xl text-line">{s.n}</p>
                    <h3 className="mt-2 font-display text-xl font-medium">{s.title}</h3>
                    <p className="mt-2 text-sm text-ink-soft">{s.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Offers */}
      <section className="bg-leaf text-paper">
        <Container className="py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fibre-light">How I can help</p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl font-medium md:text-5xl">R&D support for your product.</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {rdOffers.map((o) => (
              <div key={o.title} className="border-t border-paper/25 pt-6">
                <h3 className="font-display text-2xl">{o.title}</h3>
                <p className="mt-3 text-paper/75">{o.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Related projects */}
      <section>
        <Container className="py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>Research projects</Eyebrow>
              <h2 className="mt-3 font-display text-4xl font-medium">Recent work</h2>
            </div>
            <ButtonLink href="/projects" variant="ghost">
              All projects →
            </ButtonLink>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {research.slice(0, 3).map((p) =>
              (
                <Link key={p.slug} href={`/projects/${p.slug}`} className="group block">
                  <Media src={p.image} alt={p.title} className="aspect-[4/3]" />
                  <p className="mt-4 text-xs uppercase tracking-widest text-clay">{p.category}</p>
                  <h3 className="mt-1 font-display text-xl font-medium group-hover:text-leaf">{p.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.slice(0, 2).map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </Link>
              ),
            )}
          </div>
          <div className="mt-16 text-center">
            <ButtonLink href="/contact">Discuss an R&D project →</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
