// Content types. These mirror the schemas the CMS will use later,
// so pages don't need to change when content moves out of these files.

export type Service = {
  slug: string;
  title: string;
  summary: string;
  points: string[];
  forWho: string;
};

export type Material = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  source: string;
  properties: string[];
  processing: string[];
  products: string[];
};

export type Project = {
  slug: string;
  title: string;
  category: "Machinery" | "Product & process" | "Research";
  year?: string;
  summary: string;
  challenge: string;
  approach: string[];
  outcome: string;
  tags: string[];
  draft?: boolean; // shows a "details coming soon" note
};

export type Post = {
  slug: string;
  title: string;
  date: string; // ISO
  excerpt: string;
  body: string[]; // paragraphs
};
