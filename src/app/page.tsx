import Image from "next/image";
import Link from "next/link";
import { Chapter } from "@/components/Chapter";
import { ConsultingOptions } from "@/components/ConsultingOptions";
import { ProcessScrolly } from "@/components/ProcessScrolly";
import { Reveal } from "@/components/Reveal";
import { SectionDots } from "@/components/SectionDots";
import { ButtonLink, Container, Media, Photo, Tag } from "@/components/ui";
import { applications, faqs, processSteps } from "@/content/home";
import { site } from "@/content/site";
import { getMaterials, getProjects, getServices } from "@/lib/content";

export default async function Home() {
  const [services, materials, projects] = await Promise.all([
    getServices(),
    getMaterials(),
    getProjects(),
  ]);
  const groups = [...new Set(applications.map((a) => a.group))];

  return (
    <>
      <SectionDots
        items={[
          { id: "idea", label: "The idea" },
          { id: "process", label: "Soil to soil" },
          { id: "products", label: "What fibre becomes" },
          { id: "help", label: "Where I can help" },
          { id: "options", label: "Ways to work together" },
          { id: "lab", label: "Inside the lab" },
          { id: "materials", label: "Materials" },
          { id: "work", label: "Selected work" },
          { id: "faq", label: "Questions" },
          { id: "talk", label: "Let's talk" },
        ]}
      />
      {/* Full-bleed hero */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <Image
          src="/images/consulting-meeting.jpg"
          alt="Sworup Raj Poudel discussing compostable sanitary pads in a consultation meeting"
          fill
          priority
          sizes="100vw"
          className="hero-photo object-cover"
          style={{ objectPosition: "50% 35%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-leaf-night via-leaf-night/70 to-leaf-night/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-leaf-night/85 to-transparent" />
        <Container className="relative flex h-[calc(100svh-var(--header-h))] min-h-[30rem] flex-col justify-end py-[clamp(1.5rem,6vh,4rem)]">
          <p className="hero-fade inline-flex w-fit items-center gap-2.5 rounded-full border border-paper/25 bg-paper/10 px-4 py-1.5 font-display text-sm font-medium text-paper/90 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-fibre-light" />
            Natural-fibre consulting · Bharatpur, Nepal
          </p>
          <h1 className="mt-[clamp(0.5rem,2vh,1.25rem)] font-display text-[clamp(3rem,min(12.5vw,13svh),8.5rem)] leading-[0.92] font-bold">
            <span className="hero-line">
              <span>Engineering what</span>
            </span>
            <span className="hero-line">
              <span>nature already</span>
            </span>
            <span className="hero-line">
              <span>grew.</span>
            </span>
          </h1>
          <p className="hero-fade mt-[clamp(0.75rem,2.5vh,1.75rem)] max-w-xl text-base text-paper/85 md:text-lg">
            {site.tagline}
          </p>
          <div className="hero-fade mt-[clamp(1rem,3.5vh,2.25rem)] flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-md bg-paper px-6 py-3 font-display font-semibold text-ink transition-colors hover:bg-fibre-light"
            >
              Book a consultation
            </Link>
            <Link
              href="#process"
              className="rounded-md border border-paper/40 px-6 py-3 font-display font-semibold transition-colors hover:border-paper"
            >
              See the process
            </Link>
          </div>
        </Container>
      </section>

      {/* Poetic intro */}
      <section id="idea" data-chapter="The idea" className="scroll-mt-20">
        <Container className="py-24 md:py-32">
          <Chapter n="01">The idea</Chapter>
          <div className="mt-10 grid gap-12 md:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <p className="font-display text-6xl leading-[0.95] font-medium text-leaf md:text-7xl">
                Fibre.
                <br />
                Process.
                <br />
                Machine.
              </p>
              <Photo
                src="/images/banana-fibre-closeup.jpg"
                alt="Processed banana fibre fluff next to a Sparsa pad box"
                className="mt-10 aspect-[4/3]"
                position="55% 60%"
              />
            </Reveal>
            <Reveal delay={150}>
              <p className="font-display text-2xl leading-snug md:text-3xl">
                What if the stem left behind after a banana harvest could become
                a sanitary pad — one that returns to the soil instead of lasting
                for centuries?
              </p>
              <p className="mt-6 text-lg text-ink-soft">{site.shortBio}</p>
              <div className="mt-8">
                <ButtonLink href="/about" variant="ghost">
                  My story
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Process strip: soil to soil */}
      <section
        id="process"
        data-chapter="Soil to soil"
        className="scroll-mt-20 border-y border-line/70 bg-paper-deep/40"
      >
        <Container className="py-24">
          <Reveal>
            <Chapter n="02">Soil to soil</Chapter>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-medium md:text-5xl">
              From plant waste to finished product — and back.
            </h2>
          </Reveal>
          <ProcessScrolly steps={processSteps} />
          <p className="mt-16 text-sm text-ink-soft">
            I can help at every step —{" "}
            <Link
              href="/services"
              className="font-medium text-leaf underline-offset-4 hover:underline"
            >
              see services
            </Link>
            .
          </p>
        </Container>
      </section>

      {/* Applications grid */}
      <section
        id="products"
        data-chapter="What fibre becomes"
        className="scroll-mt-20"
      >
        <Container className="py-24">
          <Reveal>
            <Chapter n="03">What fibre becomes</Chapter>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-medium md:text-5xl">
              What natural fibre can become.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-3">
            {groups.map((g) => (
              <div key={g}>
                <p className="font-display text-base font-medium text-clay">
                  {g}
                </p>
                <ul className="mt-3 border-t border-ink/80">
                  {applications
                    .filter((a) => a.group === g)
                    .map((a) => (
                      <li key={a.title} className="border-b border-line py-4">
                        <h3 className="font-display text-2xl font-semibold">
                          {a.title}
                        </h3>
                        <p className="mt-0.5 text-ink-soft">{a.note}</p>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Services: alternating image/text */}
      <section
        id="help"
        data-chapter="Where I can help"
        className="scroll-mt-20 border-t border-line/70"
      >
        <Container className="py-24">
          <Reveal>
            <Chapter n="04">Where I can help</Chapter>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-medium md:text-5xl">
              Engineering support, from first idea to running line.
            </h2>
          </Reveal>
          <div className="mt-16 space-y-20">
            {services.map((s, i) => (
              <Reveal key={s.slug}>
                <div
                  className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
                >
                  <Media
                    src={s.image}
                    alt={s.title}
                    className="aspect-[5/4]"
                    icon={s.slug === "machinery" ? "machine" : undefined}
                  />
                  <div>
                    <h3 className="font-display text-3xl font-medium">
                      {s.title}
                    </h3>
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
                      More about this
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Ways to work together */}
      <section
        id="options"
        data-chapter="Ways to work together"
        className="scroll-mt-20 border-t border-line/70 bg-paper-deep/40"
      >
        <Container className="py-24">
          <Chapter n="05">Ways to work together</Chapter>
          <h2 className="mt-3 max-w-2xl font-display text-4xl font-semibold md:text-5xl">
            Start with a free 15-minute call.
          </h2>
          <div className="mt-12">
            <ConsultingOptions />
          </div>
        </Container>
      </section>

      {/* R&D teaser */}
      <section
        id="lab"
        data-chapter="Inside the lab"
        className="scroll-mt-20 relative overflow-hidden bg-ink text-paper"
      >
        <Image
          src="/images/lab-overhead.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "50% 45%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-leaf-night via-leaf-night/85 to-leaf-night/30" />
        <Container className="relative py-28">
          <Chapter n="06" dark>
            Inside the lab
          </Chapter>
          <h2 className="mt-3 max-w-xl font-display text-4xl font-medium md:text-5xl">
            Evidence before production.
          </h2>
          <p className="mt-5 max-w-lg text-lg text-paper/80">
            Fibre treatment trials, absorbency tests and test-liquid research —
            so every improvement is backed by results.
          </p>
          <Link
            href="/research"
            className="mt-8 inline-block rounded-md bg-paper px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-fibre-light"
          >
            Inside the lab
          </Link>
        </Container>
      </section>

      {/* Materials band */}
      <section
        id="materials"
        data-chapter="Materials"
        className="scroll-mt-20 bg-leaf text-paper"
      >
        <Container className="py-24">
          <Chapter n="07" dark>
            Materials
          </Chapter>
          <h2 className="mt-3 max-w-2xl font-display text-4xl font-medium md:text-5xl">
            Agricultural waste today. Compostable products tomorrow.
          </h2>
          <Link
            href="/materials#buy"
            className="mt-6 inline-block rounded-md border border-paper/40 px-5 py-2.5 text-sm font-medium transition-colors hover:border-paper"
          >
            Buy banana fibre & fluff
          </Link>
          <div className="mt-14 grid gap-px overflow-hidden rounded-md bg-paper/15 md:grid-cols-3">
            {materials.map((m) => (
              <Link
                key={m.slug}
                href={`/materials/${m.slug}`}
                className="group bg-leaf p-8 transition-colors hover:bg-leaf-dark"
              >
                <h3 className="font-display text-3xl">{m.name}</h3>
                <p className="mt-1 text-sm text-fibre-light">{m.tagline}</p>
                <p className="mt-5 text-sm text-paper/75">{m.summary}</p>
                <p className="mt-8 text-sm font-medium group-hover:underline">
                  Explore
                </p>
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
      <section
        id="work"
        data-chapter="Selected work"
        className="scroll-mt-20 border-t border-line/70"
      >
        <Container className="py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Chapter n="08">Selected work</Chapter>
              <h2 className="mt-3 font-display text-4xl font-medium md:text-5xl">
                Projects
              </h2>
            </div>
            <ButtonLink href="/projects" variant="ghost">
              All projects
            </ButtonLink>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {projects.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 120}>
                <Link href={`/projects/${p.slug}`} className="group block">
                  <Media
                    src={p.image}
                    alt={p.title}
                    icon={p.category === "Machinery" ? "machine" : undefined}
                    className="aspect-[4/3]"
                  />
                  <p className="font-display font-medium mt-4 text-sm text-clay">
                    {p.category}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-medium group-hover:text-leaf">
                    {p.title}
                  </h3>
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
      <section
        id="faq"
        data-chapter="Questions"
        className="scroll-mt-20 border-t border-line/70 bg-paper-deep/40"
      >
        <Container className="grid gap-12 py-24 md:grid-cols-[1fr_1.5fr]">
          <div>
            <Chapter n="09">Questions</Chapter>
            <h2 className="mt-3 font-display text-5xl font-semibold">
              Things you might be wondering.
            </h2>
          </div>
          <div className="divide-y divide-line border-y border-line">
            {faqs.map((f, i) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-xl">
                  <span className="flex gap-5">
                    <span className="w-8 shrink-0 text-base font-medium text-clay">
                      Q{i + 1}
                    </span>
                    <span>{f.q}</span>
                  </span>
                  <span className="text-2xl text-leaf transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 pl-[3.25rem] text-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* Closing statement + CTA */}
      <section
        id="talk"
        data-chapter="Let's talk"
        className="scroll-mt-20 relative -mb-24 overflow-hidden bg-ink text-paper"
      >
        <Image
          src="/images/banana-fibre-closeup.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-leaf-night/80" />
        <Container className="relative py-28">
          <Chapter n="10" dark>
            Let&apos;s talk
          </Chapter>
          <h2 className="mt-6 max-w-4xl font-display text-6xl font-bold md:text-8xl">
            From fibre, back to soil.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-paper/80">
            Planning a compostable pad line, stuck on a machine, or looking for
            fibre? Tell me what you&apos;re working on.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/contact?option=intro-call"
              className="rounded-md bg-paper px-6 py-3 font-display font-semibold text-ink transition-colors hover:bg-fibre-light"
            >
              Book the free 15-minute call
            </Link>
            <Link
              href="/materials#buy"
              className="rounded-md border border-paper/40 px-6 py-3 font-display font-semibold transition-colors hover:border-paper"
            >
              Buy fibre &amp; fluff
            </Link>
          </div>
          <p className="mt-8 flex flex-wrap gap-x-5 gap-y-2 font-display text-sm text-paper/70">
            <span>Or reach me directly:</span>
            <a
              href={`mailto:${site.email}`}
              className="underline decoration-paper/30 underline-offset-4 hover:text-paper"
            >
              {site.email}
            </a>
            {site.social.linkedin && (
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener"
                className="underline decoration-paper/30 underline-offset-4 hover:text-paper"
              >
                LinkedIn
              </a>
            )}
          </p>
        </Container>
      </section>
    </>
  );
}
