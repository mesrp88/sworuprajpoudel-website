import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import Image from "next/image";
import { ButtonLink, Container, Eyebrow, Photo } from "@/components/ui";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: `${site.name} — mechanical engineer and Technical Lead Engineer at NIDISI-Sparsa Nepal.`,
};

const research = [
  { title: "Fibre treatment", text: "Alkaline (NaOH) treatment and neutralisation of banana fibre for absorbent cores." },
  { title: "Pad structure", text: "Layering, lamination and gluing so the core stays in place during use." },
  { title: "Absorbency testing", text: "Test liquids and methods for checking finished pads." },
  { title: "Machine design", text: "Extractors, cutters, dies and dryers that can be built in a local workshop." },
];

// TODO: add years to each milestone
const milestones = [
  { when: "Start", title: "Mechanical Engineering degree", text: "Bachelor's degree in Mechanical Engineering." },
  {
    when: "4+ years",
    title: "Technical Lead Engineer, NIDISI-Sparsa Nepal",
    text: "Leading technical work on compostable sanitary pads made from banana fibre.",
  },
  {
    when: "R&D",
    title: "Research and machine development",
    text: "Fibre treatment studies, pad lamination improvements, and machines such as a fibre extractor and rotary die.",
  },
  { when: "Now", title: "Independent consulting", text: "Helping others build natural-fibre hygiene products and the machines that make them." },
];

const values = [
  { title: "Practical", text: "Solutions that work with the budget, tools and skills you actually have." },
  { title: "Local first", text: "Machines and materials that can be made, sourced and repaired close to home." },
  { title: "Honest", text: "Clear advice on what will and won't work — before you spend money." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <Image
          src="/images/sworup-with-product.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "60% 40%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#13221a] via-[#13221a]/85 to-[#13221a]/30" />
        <Container className="relative py-24 md:py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-fibre-light">My story</p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[1.05] font-medium md:text-7xl">
            Built in the workshop, <em className="text-fibre-light">tested</em> in the lab.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-paper/80">
            I&apos;m {site.name}, a mechanical engineer from Nepal working where natural fibres meet machines.
          </p>
          <div className="mt-14 grid max-w-3xl gap-8 border-t border-paper/20 pt-8 sm:grid-cols-3">
            {site.stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-4xl text-fibre-light">{s.value}</p>
                <p className="mt-1 text-sm text-paper/70">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Profile */}
      <section>
        <Container className="grid gap-12 py-24 md:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <Photo
              src="/images/consulting-product-review.jpg"
              alt="Sworup Raj Poudel explaining a compostable sanitary pad product"
              className="aspect-[4/5]"
              position="54% 40%"
            />
          </Reveal>
          <Reveal delay={150}>
            <Eyebrow>How it started</Eyebrow>
            <h2 className="mt-3 font-display text-4xl font-medium">From mechanical engineering to menstrual hygiene.</h2>
            <p className="mt-2 text-clay">{site.role}</p>
            <div className="mt-6 space-y-4 text-lg text-ink-soft">
              <p>
                For more than four years I&apos;ve worked as a technical lead at NIDISI-Sparsa Nepal, where we make
                compostable sanitary pads from banana fibre.
              </p>
              <p>
                That work sits right where materials meet machines: extracting and treating fibre, designing the pad
                structure, and building or improving the equipment that makes it — often with the tools available in a
                local workshop.
              </p>
              <p>
                Now I help others do the same: entrepreneurs, NGOs and manufacturers who want to make hygiene products from
                natural fibres, and need practical, affordable engineering to get there.
              </p>
            </div>
            {/* TODO: replace with a quote in your own words */}
            <blockquote className="mt-10 border-l-4 border-fibre pl-6 font-display text-2xl leading-snug">
              “Good engineering should make sustainable products affordable — not just possible.”
            </blockquote>
          </Reveal>
        </Container>
      </section>

      {/* Research */}
      <section className="border-y border-line/70 bg-paper-deep/40">
        <Container className="py-24">
          <Eyebrow>From research to real products</Eyebrow>
          <h2 className="mt-3 max-w-2xl font-display text-4xl font-medium">What I work on.</h2>
          <p className="mt-3 text-ink-soft">
            See more on the{" "}
            <a href="/research" className="font-medium text-leaf underline-offset-4 hover:underline">
              R&D and testing page
            </a>
            .
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {research.map((r, i) => (
              <Reveal key={r.title} delay={i * 100}>
                <div className="h-full rounded-2xl border border-line bg-paper p-6">
                  <p className="font-display text-clay">0{i + 1}</p>
                  <h3 className="mt-3 font-display text-xl font-medium">{r.title}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{r.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section>
        <Container className="max-w-4xl py-24">
          <Eyebrow>Journey</Eyebrow>
          <h2 className="mt-3 font-display text-4xl font-medium">Milestones</h2>
          <ol className="relative mt-12 border-l-2 border-line pl-8">
            {milestones.map((m, i) => (
              <li key={m.title} className="relative pb-12 last:pb-0">
                <span className="absolute top-1.5 -left-[41px] h-4 w-4 rounded-full border-4 border-paper bg-leaf" />
                <Reveal delay={i * 80}>
                  <p className="text-sm font-semibold uppercase tracking-widest text-fibre">{m.when}</p>
                  <h3 className="mt-1 font-display text-2xl font-medium">{m.title}</h3>
                  <p className="mt-2 text-ink-soft">{m.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-leaf text-paper">
        <Container className="py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fibre-light">How I work</p>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="border-t border-paper/25 pt-6">
                <h3 className="font-display text-3xl">{v.title}</h3>
                <p className="mt-3 text-paper/75">{v.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Mission & vision */}
      <section>
        <Container className="grid gap-10 py-24 md:grid-cols-2">
          <div className="fibre-pattern rounded-3xl border border-line p-10">
            <Eyebrow>Mission</Eyebrow>
            <p className="mt-4 font-display text-2xl leading-snug">
              Help more people make affordable, compostable hygiene products from fibres that grow around them.
            </p>
          </div>
          <div className="rounded-3xl border border-line p-10">
            <Eyebrow>Vision</Eyebrow>
            <p className="mt-4 font-display text-2xl leading-snug">
              Period care that&apos;s good for the people who use it and returns to the soil when it&apos;s done.
            </p>
          </div>
        </Container>
        <Container className="text-center">
          <ButtonLink href="/contact">Work with me →</ButtonLink>
        </Container>
      </section>
    </>
  );
}
