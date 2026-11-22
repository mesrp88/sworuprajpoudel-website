import Link from "next/link";
import { ButtonLink, Container, Eyebrow, PhotoPlaceholder, Tag } from "@/components/ui";
import { site } from "@/content/site";
import { getMaterials, getProjects, getServices } from "@/lib/content";

const steps = [
  { n: "01", title: "Tell me about your idea", text: "A short call or message about your product, scale and location." },
  { n: "02", title: "Get a clear plan", text: "Fibre, process and machine recommendations that fit your budget." },
  { n: "03", title: "Build and run", text: "Support with machines, suppliers, trials and troubleshooting." },
];

export default async function Home() {
  const [services, materials, projects] = await Promise.all([getServices(), getMaterials(), getProjects()]);

  return (
    <>
      {/* Hero */}
      <section>
        <Container className="grid items-center gap-12 py-16 md:grid-cols-[1.15fr_1fr] md:py-24">
          <div>
            <Eyebrow>Consulting · Based in Nepal</Eyebrow>
            <h1 className="mt-5 font-display text-4xl leading-[1.08] font-medium md:text-6xl">
              Compostable hygiene products, <em className="text-leaf">engineered</em> from natural fibres.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-soft">{site.shortBio}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact">Book a consultation →</ButtonLink>
              <ButtonLink href="/services" variant="ghost">
                See how I can help
              </ButtonLink>
            </div>
          </div>
          <div className="relative">
            <PhotoPlaceholder label="you at the production line" className="aspect-[4/5]" />
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-line bg-paper p-5 shadow-sm md:block">
              <p className="font-display text-3xl text-leaf">Fibre → Pad</p>
              <p className="text-xs text-ink-soft">Process, machines and sourcing</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="border-y border-line/70 bg-paper-deep/50">
        <Container className="grid gap-6 py-10 sm:grid-cols-3">
          {site.stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-4xl text-leaf">{s.value}</p>
              <p className="mt-1 text-sm text-ink-soft">{s.label}</p>
            </div>
          ))}
        </Container>
      </section>

      {/* Services */}
      <section>
        <Container className="py-20">
          <Eyebrow>Where I can help</Eyebrow>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-medium md:text-4xl">
            From the fibre to the finished pad — and every machine in between.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                href={`/services#${s.slug}`}
                className="group rounded-2xl border border-line bg-paper p-7 transition hover:-translate-y-1 hover:border-leaf hover:shadow-md"
              >
                <p className="font-display text-sm text-fibre">0{i + 1}</p>
                <h3 className="mt-3 font-display text-2xl font-medium">{s.title}</h3>
                <p className="mt-3 text-sm text-ink-soft">{s.summary}</p>
                <p className="mt-6 text-sm font-medium text-leaf group-hover:underline">Learn more →</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Materials */}
      <section className="bg-leaf text-paper">
        <Container className="py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fibre-light">Materials I work with</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-medium md:text-4xl">
            Agricultural waste today. Absorbent, compostable products tomorrow.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {materials.map((m) => (
              <Link
                key={m.slug}
                href={`/materials/${m.slug}`}
                className="group rounded-2xl border border-paper/15 p-7 transition hover:bg-paper/5"
              >
                <h3 className="font-display text-2xl">{m.name}</h3>
                <p className="mt-1 text-sm text-fibre-light">{m.tagline}</p>
                <p className="mt-4 text-sm text-paper/75">{m.summary}</p>
                <p className="mt-6 text-sm font-medium group-hover:underline">Read more →</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Projects */}
      <section>
        <Container className="py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>Selected work</Eyebrow>
              <h2 className="mt-3 font-display text-3xl font-medium md:text-4xl">Projects</h2>
            </div>
            <ButtonLink href="/projects" variant="ghost">
              All projects →
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {projects.slice(0, 3).map((p) => (
              <Link key={p.slug} href={`/projects/${p.slug}`} className="group">
                <PhotoPlaceholder label={p.title} className="aspect-[4/3]" />
                <p className="mt-4 text-xs uppercase tracking-widest text-fibre">{p.category}</p>
                <h3 className="mt-1 font-display text-xl font-medium group-hover:text-leaf">{p.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.slice(0, 2).map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="border-t border-line/70">
        <Container className="py-20">
          <Eyebrow>How we work together</Eyebrow>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="border-t-2 border-fibre pt-5">
                <p className="font-display text-sm text-fibre">{s.n}</p>
                <h3 className="mt-2 font-display text-xl font-medium">{s.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{s.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section>
        <Container>
          <div className="fibre-pattern rounded-3xl border border-line px-8 py-14 text-center md:px-16">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-medium md:text-4xl">
              Planning a compostable pad line, or stuck on a machine?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ink-soft">
              Tell me what you&apos;re working on. I&apos;ll get back to you as soon as I can.
            </p>
            <div className="mt-8 flex justify-center">
              <ButtonLink href="/contact">Start a conversation →</ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
