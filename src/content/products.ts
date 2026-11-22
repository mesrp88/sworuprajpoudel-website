// Fibre and fluff available to buy. Enquiry only: no prices or online payment.
// TODO: add real specifications (fibre length, moisture, packing, minimum order) when ready.

export type FibreProduct = {
  slug: string;
  name: string;
  summary: string;
  uses: string[];
  image?: string;
  position?: string;
};

export const fibreProducts: FibreProduct[] = [
  {
    slug: "banana-fibre-fluff",
    name: "Banana fibre fluff",
    summary: "Processed, soft banana fibre ready to form into absorbent cores.",
    uses: ["Absorbent cores for sanitary pads", "Product development and trials"],
    image: "/images/banana-fibre-closeup.jpg",
    position: "40% 70%",
  },
  {
    slug: "banana-fibre",
    name: "Banana fibre",
    summary: "Natural fibre extracted from banana stems, for further processing.",
    uses: ["Fluff and absorbent material production", "Paper, textiles and composites"],
    // TODO: add a photo of raw banana fibre
  },
];

export const purchaseNote =
  "Available in sample and bulk quantities. Tell me what you need and I'll reply with price, availability and delivery options.";
