// Published case studies (external). Summaries are our own words; the full text lives on PANORAMA.

export type Publication = {
  title: string;
  url: string;
  publisher: string;
  date: string; // ISO
  location: string;
  summary: string;
  covers: string[];
  image: string;
  position?: string;
  relatedProject?: string; // project slug
};

export const publications: Publication[] = [
  {
    title: "Engineering the Production of Compostable Menstrual Pads Using Plant-Based Fiber as the Main Absorbent Core",
    url: "https://panorama.solutions/en/solution/engineering-production-compostable-menstrual-pads-using-plant-based-fiber-main-absorbent",
    publisher: "PANORAMA Solutions · NIDISI gGmbH",
    date: "2026-03-26",
    location: "Bharatpur, Chitwan, Nepal",
    summary:
      "How a low-cost, semi-automatic line makes compostable menstrual pads with banana fibre as the absorbent core, replacing plastic parts and creating local jobs.",
    covers: ["Factory layout and workflow", "Fluffy absorbent core making", "Layer assembly", "Machine specs, safety and maintenance"],
    image: "/images/banana-fibre-closeup.jpg",
    position: "45% 65%",
    relatedProject: "core-shifting-dual-glue",
  },
  {
    title: "Sustainable Banana Fiber Extraction and Composting with Replicable Machine Designs",
    url: "https://panorama.solutions/en/solution/sustainable-banana-fiber-extraction-and-composting-replicable-machine-designs",
    publisher: "PANORAMA Solutions · NIDISI gGmbH",
    date: "2026-03-26",
    location: "Nawalpur, Gandaki, Nepal",
    summary:
      "Turning banana stems from local farmers into usable fibre with replicable machines, and composting the leftover biomass back to the farms.",
    covers: ["Sourcing banana fibre", "Automatic stem cutter (3D models)", "Semi-automatic fibre extractor", "Waste to organic compost"],
    image: "/images/raw-banana-fibre.jpg",
    relatedProject: "fibre-extractor",
  },
  {
    title: "From Natural Banana Fibre to Paper: A Practical Solution Centred on Equipment Design for Small Scale Production",
    url: "https://panorama.solutions/en/solution/natural-banana-fibre-paper-practical-solution-centred-equipment-design-small-scale",
    publisher: "PANORAMA Solutions · NIDISI gGmbH",
    date: "2026-03-26",
    location: "Rural Nepal",
    summary:
      "An open-source, low-tech method for making paper from banana fibre at small scale, with shared machine models, factory layout and water-system designs.",
    covers: ["Process flow and factory layout", "Machinery, 3D models and safety", "Water and wastewater systems", "Production and maintenance"],
    image: "/images/raw-banana-fibre-bundle.jpg",
    position: "50% 40%",
  },
];
