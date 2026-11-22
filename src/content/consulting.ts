// Ways to work together. No prices on the site: each option ends in an enquiry.
// Edit freely — these are drafts.

export type ConsultingOption = {
  slug: string;
  name: string;
  length: string;
  summary: string;
  includes: string[];
  outcome: string;
  cta: string;
  free?: boolean;
};

export const consultingOptions: ConsultingOption[] = [
  {
    slug: "intro-call",
    name: "Introductory call",
    length: "15 minutes · free",
    summary: "A short call to hear about your idea and see whether I'm the right person to help.",
    includes: ["Your product, scale and location", "Fibres and machines you already have", "Honest view of what's realistic"],
    outcome: "You leave knowing the sensible next step.",
    cta: "Book the free call",
    free: true,
  },
  {
    slug: "feasibility",
    name: "Feasibility assessment",
    length: "1–2 weeks",
    summary: "A clear plan before you invest: which fibre, which process and which machines fit your budget.",
    includes: [
      "Fibre and product recommendation",
      "Process outline from raw fibre to finished pad",
      "Machine list with rough costs",
      "Risks and open questions",
    ],
    outcome: "A written report you can use to plan, raise funds or talk to suppliers.",
    cta: "Request a quote",
  },
  {
    slug: "line-setup",
    name: "Production line setup",
    length: "Project-based",
    summary: "Hands-on engineering to get your line running, from choosing machines to the first good batch.",
    includes: [
      "Machine selection, design or upgrades",
      "Supplier sourcing and quotation checks",
      "Installation, trials and fine-tuning",
      "Simple quality checks for daily production",
    ],
    outcome: "A working line that makes a consistent product.",
    cta: "Request a quote",
  },
  {
    slug: "ongoing-support",
    name: "Ongoing technical support",
    length: "Monthly or per issue",
    summary: "An engineer on call for troubleshooting, product testing and improvements once you're producing.",
    includes: [
      "Troubleshooting machines and product problems",
      "Absorbency and quality testing",
      "R&D on new fibres or product changes",
    ],
    outcome: "Problems solved quickly, and a product that keeps improving.",
    cta: "Request a quote",
  },
];
