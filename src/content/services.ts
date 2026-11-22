import type { Service } from "./types";

export const services: Service[] = [
  {
    slug: "product-process",
    title: "Product & process consulting",
    summary:
      "Develop compostable sanitary pads and other hygiene products from natural fibres, and set up a process that produces them consistently.",
    points: [
      "Choosing the right fibre — banana, sugarcane bagasse or hemp — for your product and region",
      "Fibre extraction, cutting and alkaline (NaOH) treatment, including neutralisation",
      "Absorbent core and pad structure: top sheet, distribution layer, core, barrier",
      "Lamination and gluing to stop the core shifting in use",
      "Absorbency and quality testing methods for finished pads",
      "Compostability and end-of-life considerations",
    ],
    forWho:
      "Social enterprises, NGOs and start-ups launching menstrual hygiene products, and manufacturers moving away from plastic-based pads.",
    image: "/images/fibre-in-hand.jpg",
  },
  {
    slug: "machinery",
    title: "Machinery design & selection",
    summary:
      "As a mechanical engineer, I help you choose, design or improve the machines on your line — so they fit your scale, budget and local workshop capacity.",
    points: [
      "Machine selection for small and medium production lines",
      "Custom machine design and CAD — fibre extractors, cutters, dryers",
      "Tooling such as rotary dies that can be made in a normal workshop",
      "Upgrades and troubleshooting: glue applicators, feeding, cutting and sealing",
      "Production line layout and capacity planning",
    ],
    forWho:
      "Producers who need equipment that works with local fabrication skills, and teams scaling from manual to semi-automatic production.",
  },
  {
    slug: "research-testing",
    title: "R&D & product testing",
    summary:
      "Lab trials and testing to develop new products, improve existing ones and keep quality consistent.",
    points: [
      "Fibre treatment trials: concentration, time, neutralisation",
      "Absorbency testing with suitable test liquids",
      "Practical quality-control tests for daily production",
      "Advice on setting up a simple testing lab",
    ],
    forWho:
      "Producers who want evidence that their product works, and teams developing a new natural-fibre product.",
    image: "/images/pouring-test-liquid.jpg",
  },
  {
    slug: "sourcing",
    title: "Machine & raw-material sourcing",
    summary:
      "Connect with suppliers of machines and raw materials for natural-fibre hygiene products, with an engineer checking that what you buy fits your process.",
    points: [
      "Finding and comparing machine suppliers",
      "Sourcing fibres and other raw materials",
      "Checking specifications and quotations before you buy",
      "Support during installation and commissioning",
    ],
    forWho:
      "Anyone setting up a new line who wants an independent technical opinion before spending money.",
    image: "/images/consulting-product-review.jpg",
  },
];
