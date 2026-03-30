import { absoluteUrl, siteConfig } from "@/lib/site";

export type ArticleMeta = {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  modifiedAt: string;
};

export const articles: ArticleMeta[] = [
  {
    slug: "divorcio-en-jujuy",
    title: "Divorcio en Jujuy: guía completa de trámites y procedimientos",
    description:
      "Todo lo que necesitás saber sobre el proceso de divorcio en la provincia de Jujuy: requisitos, plazos, documentación y estrategias legales.",
    category: "Derecho de Familia",
    publishedAt: "2025-10-18",
    modifiedAt: "2026-03-30",
  },
  {
    slug: "sucesion-herencia-jujuy",
    title: "Sucesiones y herencias en Jujuy: cómo tramitar correctamente",
    description:
      "Guía completa sobre trámites de sucesión y herencia en Jujuy, con documentación, plazos y recomendaciones prácticas.",
    category: "Derecho Civil",
    publishedAt: "2025-10-18",
    modifiedAt: "2026-03-30",
  },
  {
    slug: "despido-injustificado-jujuy",
    title: "Despido injustificado en Jujuy: derechos y compensaciones",
    description:
      "Conocé tus derechos ante un despido sin causa en Jujuy, qué indemnizaciones corresponden y cómo reclamar correctamente.",
    category: "Derecho Laboral",
    publishedAt: "2025-10-18",
    modifiedAt: "2026-03-30",
  },
  {
    slug: "reforma-laboral-argentina",
    title: "Nueva ley laboral 27.802: qué cambia y cómo te afecta en Argentina",
    description:
      "Explicación clara de la nueva ley 27.802 de modernización laboral y su impacto concreto para trabajadores y empleadores en Jujuy.",
    category: "Derecho Laboral",
    publishedAt: "2026-03-30",
    modifiedAt: "2026-03-30",
  },
];

export const articleMap = Object.fromEntries(
  articles.map((article) => [article.slug, article]),
) as Record<string, ArticleMeta>;

export function createArticleSchema(article: ArticleMeta) {
  const articleUrl = absoluteUrl(`/articulos/${article.slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.modifiedAt,
    mainEntityOfPage: articleUrl,
    articleSection: article.category,
    inLanguage: "es-AR",
    author: {
      "@type": "Person",
      name: "Dra. Lidia Cristina Baiud",
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/logo.webp"),
      },
    },
    image: absoluteUrl("/herobanner.webp"),
  };
}
