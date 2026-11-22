import type { Metadata } from "next";
import { ButtonLink, Container, Eyebrow, PhotoPlaceholder } from "@/components/ui";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: `${site.name} — mechanical engineer and Technical Lead Engineer at NIDISI-Sparsa Nepal.`,
};

const timeline = [
  { when: "Education", what: "Bachelor's degree in Mechanical Engineering" },
  { when: "4+ years", what: "Technical Lead Engineer at NIDISI-Sparsa Nepal — compostable sanitary pads from banana fibre" },
  { when: "R&D", what: "Fibre treatment, pad structure, absorbency testing and machine improvement" },
];

export default function AboutPage() {
  return (
    <Container className="py-16">
      <div className="grid gap-12 md:grid-cols-[1fr_1.3fr]">
        <PhotoPlaceholder label="portrait" className="aspect-[4/5]" />
        <div>
          <Eyebrow>About</Eyebrow>
          <h1 className="mt-3 font-display text-4xl font-medium md:text-5xl">Hi, I&apos;m {site.name}.</h1>
          <p className="mt-2 text-fibre">{site.role}</p>
          <div className="mt-6 space-y-4 text-lg text-ink-soft">
            <p>
              I&apos;m a mechanical engineer from Nepal. For more than four years I&apos;ve worked as a technical lead
              at NIDISI-Sparsa Nepal, where we make compostable sanitary pads from banana fibre.
            </p>
            <p>
              That work sits right where materials meet machines: extracting and treating fibre, designing the pad
              structure, and building or improving the equipment that makes it — often with the tools available in
              a local workshop.
            </p>
            <p>
              I now help others do the same: entrepreneurs, NGOs and manufacturers who want to make hygiene products
              from natural fibres, and who need practical, affordable engineering to get there.
            </p>
            {/* TODO: add your own story — why this work matters to you */}
          </div>

          <h2 className="mt-12 font-display text-2xl font-medium">Background</h2>
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {timeline.map((t) => (
              <li key={t.what} className="grid gap-1 py-4 sm:grid-cols-[8rem_1fr]">
                <span className="text-sm font-semibold text-leaf">{t.when}</span>
                <span>{t.what}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/contact">Work with me →</ButtonLink>
            {/* TODO: put your CV at public/cv.pdf, then uncomment:
            <a href="/cv.pdf" className="...">Download CV</a> */}
          </div>
        </div>
      </div>
    </Container>
  );
}
