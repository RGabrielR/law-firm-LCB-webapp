import type { MetadataRoute } from "next";

import { articles } from "@/lib/articles";
import { absoluteUrl } from "@/lib/site";

const staticPages = [
  {
    path: "/",
    priority: 1,
  },
  {
    path: "/abogados-en-jujuy",
    priority: 0.95,
  },
  {
    path: "/articulos",
    priority: 0.8,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticPages.map((page) => ({
    url: absoluteUrl(page.path),
    lastModified: new Date("2026-03-30"),
    changeFrequency: "weekly" as const,
    priority: page.priority,
  }));

  const articleEntries = articles.map((article) => ({
    url: absoluteUrl(`/articulos/${article.slug}`),
    lastModified: new Date(article.modifiedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...articleEntries];
}
