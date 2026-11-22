import Image from "next/image";
import Link from "next/link";
import { ProcessIcon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { ButtonLink, Container, Eyebrow, Media, Photo, Tag } from "@/components/ui";
import { applications, faqs, processSteps } from "@/content/home";
import { site } from "@/content/site";
import { getMaterials, getProjects, getServices } from "@/lib/content";

export default async function Home() {
  const [services, materials, projects] = await Promise.all([getServices(), getMaterials(), getProjects()]);

  return (
    <>
      {/* Full-bleed hero */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <Image
          src="/images/consulting-meeting.jpg"
          alt="Sworup Raj Poudel discussing compostable sanitary pads in a consultation meeting"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "50% 35%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#13221a] via-[#13221a]/70 to-[#13221a]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#13221a]/80 to-transparent" />
        <Container className="relative flex min-h-[88vh] flex-col justify-end pt-24 pb-16 md:pb-24">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-fibre-light">
            Natural fibres · Engineered solutions
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.02] font-medium md:text-7xl lg:text-8xl">
            Engineering what <em className="text-fibre-light">nature</em> already grew.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-paper/80">{site.tagline}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-paper px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-fibre-light"
            >
              Book a consultation →
            </Link>
            <Link
              href="#process"
              className="rounded-full border border-paper/40 px-6 py-3 text-sm font-medium transition-colors hover:border-paper"
            >
              See the process
            </Link>
          </div>
        </Container>
      </section>

      {/* Poetic intro */}
      <section>
        <Container className="grid gap-12 py-24 md:grid-cols-[1fr_1.4fr] md:py-32">
          <Reveal>
            <p className="font-display text-6xl leading-[0.95] font-medium text-leaf md:text-7xl">
              Fibre.
              <br />
              Process.
              <br />
              <span className="text-clay">Machine.</span>
            </p>
            <Photo
              src="/images/fibre-in-hand.jpg"
              alt="Hands pulling apart processed banana fibre"
              className="mt-10 aspect-[4/3]"
              position="55% 60%"
            />
          </Reveal>
          <Reveal delay={150}>
            <p className="font-display text-2xl leading-snug md:text-3xl">
              What if the stem left behind after a banana harvest could become a sanitary pad — one that returns to
              the soil instead of lasting for centuries?
            </p>
            <p className="mt-6 text-lg text-ink-soft">{site.shortBio}</p>
            <div className="mt-8">
              <ButtonLink href="/about" variant="ghost">
                My story →
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Process strip: soil to soil */}
      <section id="process" className="scroll-mt-20 border-y border-line/70 bg-paper-deep/40">
        <Container className="py-24">
          <Reveal>
            <Eyebrow>Soil to soil</Eyebrow>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-medium md:text-5xl">
              From plant waste to finished product — and back.
            </h2>
          </Reveal>
          <ol className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((s, i) => (
              <li key={s.n}>
                <Reveal delay={(i % 3) * 120}>
                  <div className="flex items-center gap-4 text-leaf">
                    <ProcessIcon name={s.icon} />
                    <span className="font-display text-5xl text-line">{s.n}</span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-medium">{s.title}</h3>
                  <p className="mt-2 text-ink-soft">{s.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
          <p className="mt-16 text-sm text-ink-soft">
            I can help at every step —{" "}
            <Link href="/services" className="font-medium text-leaf underline-offset-4 hover:underline">
              see services
            </Link>
            .
          </p>
        </Container>
      </section>

      {/* Applications grid */}
      <section>
        <Container className="py-24">
          <Reveal>
            <Eyebrow>Naturally designed for everyday products</Eyebrow>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-medium md:text-5xl">What natural fibre can become.</h2>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {applications.map((a, i) => (
              <Reveal key={a.title} delay={(i % 3) * 100}>
                <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
                  {"image" in a && a.image ? (
                    <Image
                      src={a.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="fibre-pattern absolute inset-0 transition-transform duration-700 group-hover:scale-105" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-paper">
                    <p className="text-xs uppercase tracking-widest text-fibre-light">{a.group}</p>
                    <h3 className="mt-1 font-display text-2xl">{a.title}</h3>
                    <p className="text-sm text-paper/75">{a.note}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Services: alternating image/text */}
      <section className="border-t border-line/70">
        <Container className="py-24">
          <Reveal>
            <Eyebrow>Where I can help</Eyebrow>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-medium md:text-5xl">
              Engineering support, from first idea to running line.
            </h2>
          </Reveal>
          <div className="mt-16 space-y-20">
            {services.map((s, i) => (
              <Reveal key={s.slug}>
                <div className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <Media src={s.image} alt={s.title} className="aspect-[5/4]" />
                  <div>
                    <p className="font-display text-clay">0{i + 1}</p>
                    <h3 className="mt-2 font-display text-3xl font-medium">{s.title}</h3>
                    <p className="mt-4 text-lg text-ink-soft">{s.summary}</p>
                    <ul className="mt-6 space-y-2">
                      {s.points.slice(0, 3).map((p) => (
                        <li key={p} className="flex gap-3 text-sm">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-leaf" />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/services#${s.slug}`}
                      className="mt-6 inline-block text-sm font-medium text-leaf underline-offset-4 hover:underline"
                    >
                      More about this →
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* R&D teaser */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <Image
          src="/images/lab-overhead.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "50% 45%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#13221a] via-[#13221a]/85 to-[#13221a]/30" />
        <Container className="relative py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fibre-light">Research, development & testing</p>
          <h2 className="mt-3 max-w-xl font-display text-4xl font-medium md:text-5xl">
            Evidence <em className="text-fibre-light">before</em> production.
          </h2>
          <p className="mt-5 max-w-lg text-lg text-paper/80">
            Fibre treatment trials, absorbency tests and test-liquid research — so every improvement is backed by
            results.
          </p>
          <Link
            href="/research"
            className="mt-8 inline-block rounded-full bg-paper px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-fibre-light"
          >
            Inside the lab →
          </Link>
        </Container>
      </section>

      {/* Materials band */}
      <section className="bg-leaf text-paper">
        <Container className="py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fibre-light">Regenerative materials</p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl font-medium md:text-5xl">
            Agricultural waste today. Compostable products tomorrow.
          </h2>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-paper/15 md:grid-cols-3">
            {materials.map((m) => (
              <Link key={m.slug} href={`/materials/${m.slug}`} className="group bg-leaf p-8 transition-colors hover:bg-leaf-dark">
                <h3 className="font-display text-3xl">{m.name}</h3>
                <p className="mt-1 text-sm text-fibre-light">{m.tagline}</p>
                <p className="mt-5 text-sm text-paper/75">{m.summary}</p>
                <p className="mt-8 text-sm font-medium group-hover:underline">Explore →</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section>
        <Container className="grid gap-10 py-20 sm:grid-cols-3">
          {site.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 120}>
              <p className="font-display text-6xl text-leaf">{s.value}</p>
              <p className="mt-2 text-ink-soft">{s.label}</p>
            </Reveal>
          ))}
        </Container>
      </section>

      {/* Projects */}
      <section className="border-t border-line/70">
        <Container className="py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>Selected work</Eyebrow>
              <h2 className="mt-3 font-display text-4xl font-medium md:text-5xl">Projects</h2>
            </div>
            <ButtonLink href="/projects" variant="ghost">
              All projects →
            </ButtonLink>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {projects.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 120}>
                <Link href={`/projects/${p.slug}`} className="group block">
                  <Media src={p.image} alt={p.title} className="aspect-[4/3]" />
                  <p className="mt-4 text-xs uppercase tracking-widest text-clay">{p.category}</p>
                  <h3 className="mt-1 font-display text-xl font-medium group-hover:text-leaf">{p.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.slice(0, 2).map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-t border-line/70 bg-paper-deep/40">
        <Container className="grid gap-12 py-24 md:grid-cols-[1fr_1.5fr]">
          <div>
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-3 font-display text-4xl font-medium">Frequently asked</h2>
          </div>
          <div className="divide-y divide-line border-y border-line">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-xl">
                  {f.q}
                  <span className="text-2xl text-leaf transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* Closing statement + CTA */}
      <section className="relative -mb-24 overflow-hidden bg-ink text-paper">
        <Image src="/images/banana-fibre-closeup.jpg" alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[#13221a]/80" />
        <Container className="relative py-28 text-center">
          <p className="font-display text-5xl leading-tight font-medium md:text-7xl">
            From fibre, <em className="text-fibre-light">back to soil</em>.
          </p>
          <p className="mx-auto mt-6 max-w-xl text-lg text-paper/80">
            Planning a compostable pad line, or stuck on a machine? Tell me what you&apos;re working on.
          </p>
          <div className="mt-10 flex justify-center">
            <Link
              href="/contact"
              className="rounded-full bg-paper px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-fibre-light"
            >
              Start a conversation →
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
