import type { Metadata } from "next";

import { absoluteUrl, siteConfig } from "@/lib/site";

export type ArticleMeta = {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  modifiedAt: string;
  // Título corto para <title>: el layout le agrega " | Estudio Jurídico LCB".
  seoTitle?: string;
  keywords?: string[];
};

const AUTHOR_NAME = "Dra. Lidia Cristina Baiud";

export const articles: ArticleMeta[] = [
  {
    slug: "divorcio-en-jujuy",
    title:
      "Divorcio en Jujuy: guía completa de trámites y procedimientos",
    seoTitle: "Divorcio en Jujuy: guía de trámites, plazos y costos",
    description:
      "Todo lo que necesitás saber sobre el divorcio en Jujuy: tipos de divorcio, requisitos, documentación, convenio regulador, plazos y costos.",
    category: "Derecho de Familia",
    publishedAt: "2025-10-18",
    modifiedAt: "2026-09-14",
    keywords: [
      "divorcio en jujuy",
      "como tramitar divorcio jujuy",
      "abogada divorcio jujuy",
      "divorcio express jujuy",
      "requisitos divorcio argentina",
      "abogada de familia jujuy",
      "convenio regulador divorcio",
      "cuota alimentaria jujuy",
    ],
  },
  {
    slug: "sucesion-herencia-jujuy",
    title:
      "Sucesiones y herencias en Jujuy: cómo tramitar correctamente",
    seoTitle: "Sucesiones y herencias en Jujuy: guía de trámites",
    description:
      "Guía completa sobre trámites de sucesión y herencia en Jujuy: documentación, pasos del juicio sucesorio, orden de herederos, plazos y errores comunes.",
    category: "Derecho Civil",
    publishedAt: "2025-10-18",
    modifiedAt: "2026-09-14",
    keywords: [
      "sucesion jujuy",
      "herencia jujuy",
      "tramite sucesorio jujuy",
      "abogada sucesiones jujuy",
      "como tramitar herencia argentina",
      "declaratoria de herederos jujuy",
      "orden de herederos argentina",
    ],
  },
  {
    slug: "despido-injustificado-jujuy",
    title:
      "Despido injustificado en Jujuy: derechos y compensaciones",
    seoTitle: "Despido sin causa en Jujuy: indemnización y reclamo",
    description:
      "Conocé tus derechos ante un despido sin causa en Jujuy: qué indemnizaciones corresponden, cómo se calculan, plazos y pasos para reclamar.",
    category: "Derecho Laboral",
    publishedAt: "2025-10-18",
    modifiedAt: "2026-09-14",
    keywords: [
      "despido injustificado jujuy",
      "indemnizacion despido jujuy",
      "abogada laboral jujuy",
      "despido sin causa argentina",
      "como reclamar despido injustificado",
      "liquidación final despido",
      "carta documento despido",
    ],
  },
  {
    slug: "reforma-laboral-argentina",
    title:
      "Nueva ley laboral 27.802: qué cambia y cómo te afecta en Argentina",
    seoTitle: "Ley 27.802 de modernización laboral: qué cambia",
    description:
      "Explicación clara de la Ley 27.802 de modernización laboral: indemnizaciones, Fondo de Asistencia Laboral, banco de horas, vacaciones y blanqueo, y su impacto en Jujuy.",
    category: "Derecho Laboral",
    publishedAt: "2026-03-30",
    modifiedAt: "2026-09-14",
    keywords: [
      "ley 27802 modernizacion laboral",
      "nueva ley laboral argentina 2026",
      "reforma laboral 2026 argentina",
      "fondo asistencia laboral FAL",
      "banco de horas argentina 2026",
      "indemnizacion nueva ley laboral",
      "empleo registrado blanqueo laboral",
      "reforma laboral jujuy 2026",
      "abogada laboral jujuy",
      "vacaciones fraccionadas ley 27802",
    ],
  },
  {
    slug: "migracion-extranjeros-jujuy",
    title:
      "Migración y residencia en Argentina: guía completa para extranjeros en Jujuy",
    seoTitle: "Residencia y ciudadanía argentina: guía para extranjeros",
    description:
      "Todo lo que necesitás saber sobre residencia temporaria, permanente, nacionalización y regularización migratoria en Argentina. Asesoramiento legal en Jujuy.",
    category: "Derecho Migratorio",
    publishedAt: "2026-03-31",
    modifiedAt: "2026-09-14",
    keywords: [
      "abogada migración jujuy",
      "residencia permanente argentina extranjeros",
      "nacionalidad argentina requisitos",
      "tramitar residencia argentina",
      "regularización migratoria jujuy",
      "radicación argentina extranjeros",
      "ciudadanía argentina trámite",
      "reunificación familiar argentina",
      "abogada extranjería jujuy",
    ],
  },
  {
    slug: "abogados-comercio-exterior-aduana-jujuy",
    title:
      "Guía legal del comercio exterior jujeño: importar y exportar por La Quiaca, Jama y Perico",
    seoTitle: "Guía legal del comercio exterior jujeño y la Aduana",
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
      "Guía legal de la minería jujeña: litio en la Puna, concesiones, superficiarios y comunidades",
    seoTitle: "Guía legal de la minería jujeña: litio y concesiones",
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
      "Guía legal del tabaco jujeño: FET, acopio, fincas y trabajo rural",
    seoTitle: "Guía legal del tabaco jujeño: FET, acopio y fincas",
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
