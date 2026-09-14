import type { Metadata } from "next";

import { absoluteUrl, siteConfig } from "@/lib/site";

export type ArticleMeta = {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  modifiedAt: string;
  // Título corto para <title>: el layout le agrega " | Estudio Jurídico Baiud".
  seoTitle?: string;
  keywords?: string[];
};

const AUTHOR_NAME = "Dra. Lidia Cristina Baiud";

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
  {
    slug: "migracion-extranjeros-jujuy",
    title:
      "Migración y residencia en Argentina: guía completa para extranjeros en Jujuy",
    description:
      "Todo lo que necesitás saber sobre residencia temporaria, permanente, nacionalización y regularización migratoria en Argentina. Asesoramiento legal en Jujuy.",
    category: "Derecho Migratorio",
    publishedAt: "2026-03-31",
    modifiedAt: "2026-03-31",
  },
  {
    slug: "abogados-comercio-exterior-aduana-jujuy",
    title:
      "Abogados de comercio exterior en Jujuy: importación, exportación y aduana",
    seoTitle: "Abogados de comercio exterior y aduana en Jujuy",
    description:
      "Guía legal para importar y exportar desde Jujuy: alta como importador ante ARCA, Código Aduanero, Zona Franca Perico, multas, secuestro de mercadería y cómo defenderte.",
    category: "Comercio Exterior y Aduana",
    publishedAt: "2026-09-14",
    modifiedAt: "2026-09-14",
    keywords: [
      "abogado comercio exterior jujuy",
      "abogado aduanero jujuy",
      "abogados importación jujuy",
      "abogado exportación jujuy",
      "importar desde jujuy",
      "infracciones aduaneras jujuy",
      "secuestro de mercadería aduana",
      "defensa contrabando jujuy",
      "zona franca perico",
      "aduana la quiaca",
      "paso de jama comercio exterior",
      "alta importador arca",
    ],
  },
  {
    slug: "abogados-mineria-litio-jujuy",
    title:
      "Abogados de minería en Jujuy: litio, concesiones, superficiarios y comunidades",
    seoTitle: "Abogados de minería y litio en Jujuy",
    description:
      "Guía de derecho minero en Jujuy: cateos y concesiones ante el Juzgado Administrativo de Minas, servidumbres, derechos de superficiarios y comunidades, RIGI y proveedores del litio.",
    category: "Derecho Minero",
    publishedAt: "2026-09-14",
    modifiedAt: "2026-09-14",
    keywords: [
      "abogado minero jujuy",
      "abogados minería jujuy",
      "abogado litio jujuy",
      "derecho minero jujuy",
      "juzgado administrativo de minas jujuy",
      "concesión minera jujuy",
      "servidumbre minera indemnización",
      "derechos del superficiario minería",
      "proveedores mineros jujuy",
      "rigi minería jujuy",
      "consulta previa comunidades indígenas minería",
      "cantera de áridos jujuy",
    ],
  },
  {
    slug: "abogados-productores-tabacaleros-jujuy",
    title:
      "Abogados para productores tabacaleros en Jujuy: FET, contratos, campo y trabajo rural",
    seoTitle: "Abogados para productores de tabaco en Jujuy",
    description:
      "Guía legal para productores de tabaco en Jujuy: reclamos por el Fondo Especial del Tabaco, liquidaciones de acopio, arriendos, trabajadores rurales, sucesiones de fincas y deudas del campo.",
    category: "Derecho Agrario",
    publishedAt: "2026-09-14",
    modifiedAt: "2026-09-14",
    keywords: [
      "abogado tabaco jujuy",
      "abogado productores tabacaleros jujuy",
      "fondo especial del tabaco fet",
      "reclamo fet jujuy",
      "abogado agrario jujuy",
      "arrendamiento rural jujuy",
      "contrato de aparcería tabaco",
      "trabajadores rurales ley 26.727",
      "sucesión finca rural jujuy",
      "abogado perico jujuy",
      "abogado el carmen jujuy",
      "abogado monterrico jujuy",
    ],
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
    ...(article.keywords && { keywords: article.keywords.join(", ") }),
    inLanguage: "es-AR",
    author: {
      "@type": "Person",
      name: AUTHOR_NAME,
      jobTitle: "Abogada",
      url: siteConfig.url,
      worksFor: {
        "@id": absoluteUrl("/#organization"),
      },
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

export function createArticleMetadata(article: ArticleMeta): Metadata {
  const url = absoluteUrl(`/articulos/${article.slug}`);
  const title = article.seoTitle ?? article.title;
  const image = {
    url: absoluteUrl("/herobanner.webp"),
    alt: `${article.title} | ${siteConfig.name}`,
  };

  return {
    title,
    description: article.description,
    keywords: article.keywords,
    authors: [{ name: AUTHOR_NAME, url: siteConfig.url }],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      url,
      title,
      description: article.description,
      siteName: siteConfig.name,
      locale: "es_AR",
      publishedTime: article.publishedAt,
      modifiedTime: article.modifiedAt,
      authors: [AUTHOR_NAME],
      section: article.category,
      tags: article.keywords,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: article.description,
      images: [image.url],
    },
  };
}
