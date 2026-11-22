import type { Material } from "./types";

// General background only — replace or expand with your own data and photos.
export const materials: Material[] = [
  {
    slug: "banana-fibre",
    name: "Banana fibre",
    tagline: "From farm waste to absorbent core",
    summary:
      "Banana plants are cut down after each harvest, leaving stems that are usually thrown away. The fibre extracted from those stems can be processed into an absorbent, compostable material for sanitary pads.",
    source: "Pseudo-stems of banana plants left after fruit harvest",
    properties: [
      "Plant-based and compostable",
      "Strong, long fibres that can be cut to length",
      "Absorbency improves with the right treatment",
      "Turns an agricultural waste stream into income for farmers",
    ],
    processing: [
      "Extraction from the stem (decortication)",
      "Drying",
      "Cutting to a set length",
      "Alkaline (NaOH) treatment, then neutralisation and washing",
      "Drying and forming into an absorbent core",
    ],
    products: ["Sanitary pad absorbent cores", "Paper and board", "Textiles and composites"],
  },
  {
    slug: "sugarcane-bagasse",
    name: "Sugarcane bagasse",
    tagline: "A by-product of sugar mills",
    summary:
      "Bagasse is the fibrous residue left after sugarcane is crushed for juice. It is produced in large volumes and can be pulped for compostable products.",
    source: "Residue from sugarcane crushing at sugar mills",
    properties: [
      "Widely available near sugar-producing regions",
      "Pulps readily into sheets and moulded forms",
      "Plant-based and compostable",
    ],
    processing: ["Collection and cleaning", "Pulping", "Bleaching or treatment where needed", "Forming and drying"],
    products: ["Pulp for absorbent layers", "Moulded packaging", "Paper products"],
  },
  {
    slug: "hemp",
    name: "Hemp",
    tagline: "Fast-growing and durable",
    summary:
      "Industrial hemp grows quickly with relatively few inputs and yields strong bast fibre and softer inner material, both of which have uses in hygiene and textile products.",
    source: "Stalks of industrial hemp plants",
    properties: ["Strong, durable fibres", "Naturally antimicrobial properties are often reported", "Plant-based and compostable"],
    processing: ["Retting", "Decortication", "Cleaning and carding", "Forming into non-woven or textile layers"],
    products: ["Reusable cloth pads", "Non-woven layers", "Textiles"],
  },
];
