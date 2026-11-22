// Single place where pages get their content.
// Today it reads the files in src/content. When the CMS is connected,
// only these functions change — the pages stay the same.
import { services } from "@/content/services";
import { materials } from "@/content/materials";
import { projects } from "@/content/projects";
import { posts } from "@/content/posts";

export async function getServices() {
  return services;
}

export async function getMaterials() {
  return materials;
}
export async function getMaterial(slug: string) {
  return materials.find((m) => m.slug === slug) ?? null;
}

export async function getProjects() {
  return projects;
}
export async function getProject(slug: string) {
  return projects.find((p) => p.slug === slug) ?? null;
}

export async function getPosts() {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date));
}
export async function getPost(slug: string) {
  return posts.find((p) => p.slug === slug) ?? null;
}
