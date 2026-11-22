import { site } from "@/content/site";

/** Business and person details for search engines (schema.org JSON-LD). */
export function StructuredData() {
  const sameAs = Object.values(site.social).filter(Boolean);
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${site.url}/#person`,
        name: site.name,
        jobTitle: "Research and Product Development Engineer",
        worksFor: { "@type": "Organization", name: "NIDISI-Sparsa Nepal" },
        knowsAbout: [
          "Compostable sanitary pads",
          "Banana fibre",
          "Sugarcane bagasse",
          "Hemp fibre",
          "Natural fibre processing",
          "Machine design",
          "Absorbency testing",
        ],
        url: site.url,
        email: `mailto:${site.email}`,
        image: `${site.url}/images/consulting-product-review.jpg`,
        sameAs,
      },
      {
        "@type": "ProfessionalService",
        "@id": `${site.url}/#business`,
        name: `${site.name} — Natural-fibre hygiene & machinery consulting`,
        description:
          "Consulting on compostable sanitary pads and hygiene products from banana fibre, sugarcane bagasse and hemp; machinery design, selection and sourcing; R&D and product testing; banana fibre and fluff supply.",
        url: site.url,
        image: `${site.url}/opengraph-image.jpg`,
        telephone: site.phone.replace(/\s/g, ""),
        email: site.email,
        founder: { "@id": `${site.url}/#person` },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bharatpur",
          addressRegion: "Chitwan",
          addressCountry: "NP",
        },
        areaServed: "Worldwide",
        sameAs,
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
