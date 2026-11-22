// Homepage sections: process strip, applications and FAQ.
// Edit freely — these are drafts written from what you've shared so far.

export const processSteps = [
  {
    n: "01",
    icon: "leaf",
    title: "Grow & collect",
    text: "Banana stems, sugarcane bagasse or hemp — often waste left after harvest.",
  },
  {
    n: "02",
    icon: "extract",
    title: "Extract",
    text: "Decortication separates usable fibre from the plant.",
  },
  {
    n: "03",
    icon: "treat",
    title: "Treat",
    text: "Cutting, alkaline treatment, neutralising and drying make the fibre absorbent.",
  },
  {
    n: "04",
    icon: "layers",
    title: "Build the core",
    text: "Fibre is formed into an absorbent core and layered with top sheet and barrier.",
  },
  {
    n: "05",
    icon: "machine",
    title: "Manufacture",
    text: "Gluing, compressing, cutting and sealing on machines built for the job.",
  },
  {
    n: "06",
    icon: "soil",
    title: "Back to soil",
    text: "After use, a compostable product can break down instead of lasting for centuries.",
  },
] as const;

export const applications = [
  { title: "Sanitary pads", group: "Menstrual care", note: "Compostable absorbent cores" },
  { title: "Panty liners", group: "Menstrual care", note: "Thin natural-fibre layers" },
  { title: "Reusable cloth pads", group: "Menstrual care", note: "Hemp and other textile fibres" },
  { title: "Absorbent cores", group: "Components", note: "For pads and other hygiene products", image: "/images/banana-fibre-closeup.jpg" },
  { title: "Fibre paper & board", group: "Materials", note: "From banana fibre and bagasse" },
  { title: "Moulded packaging", group: "Materials", note: "From sugarcane bagasse pulp" },
];

export const faqs = [
  {
    q: "I'm just starting out. Can you still help?",
    a: "Yes. Many projects start with an idea and a fibre that's available locally. We can begin by working out what's realistic for your budget, scale and location.",
  },
  {
    q: "Which fibres do you work with?",
    a: "Mainly banana fibre, sugarcane bagasse and hemp. If you have access to another natural fibre, get in touch and we can look at whether it suits your product.",
  },
  {
    q: "Can the machines be made locally?",
    a: "Often, yes. I design with ordinary workshop capability in mind, so equipment can be built and maintained close to where it's used.",
  },
  {
    q: "Do you help with buying machines and raw materials?",
    a: "Yes. I can connect you with suppliers, compare options and check specifications before you buy.",
  },
  {
    q: "How does a consultation work?",
    a: "Start with a free 15-minute introductory call. Book it through the contact form or message me on WhatsApp. If I can help, I'll suggest the right next step, such as a feasibility assessment, and send you a quote before any paid work starts.",
  },
];
