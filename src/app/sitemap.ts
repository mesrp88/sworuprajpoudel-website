import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { getMaterials, getPosts, getProjects } from "@/lib/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [materials, projects, posts] = await Promise.all([getMaterials(), getProjects(), getPosts()]);
  const pages = ["", "/services", "/research", "/materials", "/projects", "/insights", "/about", "/contact"];
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}` })),
    ...materials.map((m) => ({ url: `${site.url}/materials/${m.slug}` })),
    ...projects.map((p) => ({ url: `${site.url}/projects/${p.slug}` })),
    ...posts.map((p) => ({ url: `${site.url}/insights/${p.slug}`, lastModified: p.date })),
  ];
}
