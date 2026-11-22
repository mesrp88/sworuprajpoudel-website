import type { Project } from "./types";

// Drafts written from what you've shared so far. Check what NIDISI-Sparsa is
// happy to make public, then add your own photos, numbers and results.
export const projects: Project[] = [
  {
    slug: "core-shifting-dual-glue",
    title: "Stopping absorbent-core shifting with a second glue applicator",
    category: "Product & process",
    summary:
      "Redesigning pad lamination so the banana-fibre core stays in place during use.",
    challenge:
      "The banana-fibre absorbent core absorbed well, but it was glued only from the top. During use it shifted and expanded, which affects comfort and reliability.",
    approach: [
      "Added a second glue applicator to spray the bottom barrier layer across its full width",
      "Introduced a distribution layer under the top sheet",
      "Fed the core between the two glued webs, then compressed, cut and sealed",
    ],
    outcome: "Details and results coming soon.",
    tags: ["Lamination", "Glue systems", "Sanitary pads"],
    draft: true,
    image: "/images/fibre-in-hand.jpg",
  },
  {
    slug: "rotary-die-absorbent-core",
    title: "Rotary die for cutting absorbent cores",
    category: "Machinery",
    summary:
      "A roller die that cuts a 70 mm absorbent-core roll into 230 mm pieces with curved ends — designed to be made in an ordinary workshop.",
    challenge:
      "Curved-end cores needed to be cut from a continuous 70 mm roll, but there was no access to a 5-axis machining centre to make a conventional rotary die.",
    approach: [
      "Designed the die geometry around a 230 mm repeat length",
      "Chose a construction method suited to standard workshop machines",
    ],
    outcome: "Details and results coming soon.",
    tags: ["Tooling", "Die cutting", "Workshop fabrication"],
    draft: true,
  },
  {
    slug: "test-liquids-absorbency",
    title: "Choosing test liquids for pad absorbency testing",
    category: "Research",
    summary:
      "Comparing liquids used to simulate menstrual fluid, so lab absorbency tests reflect how pads perform in real use.",
    challenge:
      "Absorbency results depend heavily on the test liquid. Water behaves very differently from menstrual fluid, so a reliable simulant was needed.",
    approach: [
      "Reviewed liquids used for pad testing, from animal blood to synthetic fluids and dye solutions",
      "Compared them on how closely they match real use and how practical they are in a small lab",
      "Set up dosing, timing and weighing for repeatable tests",
    ],
    outcome: "Details and results coming soon.",
    tags: ["Absorbency testing", "Test methods", "R&D"],
    draft: true,
    image: "/images/absorbency-drop-test.jpg",
  },
  {
    slug: "fibre-extractor",
    title: "Semi-automatic fibre extractor",
    category: "Machinery",
    summary:
      "A small, stable decorticator for extracting fibre from plant leaves, such as pineapple leaves.",
    challenge:
      "Small producers need a compact machine that extracts fibre reliably without the vibration problems of light-weight designs.",
    approach: [
      "CAD design of a compact semi-automatic extractor",
      "Attention to vibration control and material strength",
    ],
    outcome: "Details and results coming soon.",
    tags: ["CAD", "Decortication", "Fibre extraction"],
    draft: true,
  },
  {
    slug: "banana-fibre-naoh-treatment",
    title: "Optimising alkaline treatment of banana fibre",
    category: "Research",
    summary:
      "Studying how NaOH concentration, treatment time and fibre length affect banana fibre for absorbent cores, including the neutralisation step.",
    challenge:
      "Chaff-cut banana fibre must be treated with NaOH and then neutralised, but the right concentration and time for short fibre were not well defined.",
    approach: [
      "Reviewed published data on fibre length, NaOH concentration and time",
      "Kept only independently verified sources",
      "Looked at how to neutralise fibre after treatment",
    ],
    outcome: "Details and results coming soon.",
    tags: ["Fibre treatment", "R&D", "Banana fibre"],
    draft: true,
    image: "/images/titration-setup.jpg",
  },
  {
    slug: "textile-fibre-cutter",
    title: "Textile fibre cutter",
    category: "Machinery",
    summary: "CAD design of a cutter for textile fibres.",
    challenge: "Details coming soon.",
    approach: [],
    outcome: "Details coming soon.",
    tags: ["CAD", "Cutting"],
    draft: true,
  },
  {
    slug: "solar-dryer",
    title: "Active solar dryer system",
    category: "Machinery",
    summary: "An active solar drying system design.",
    challenge: "Details coming soon.",
    approach: [],
    outcome: "Details coming soon.",
    tags: ["Drying", "Solar"],
    draft: true,
  },
];
