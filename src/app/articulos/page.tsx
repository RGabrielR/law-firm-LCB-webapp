import type { Metadata } from "next";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";

import JsonLd from "@/components/seo/jsonLd";
import { articles } from "@/lib/articles";
import { absoluteUrl, createBreadcrumbSchema, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Artículos legales en Jujuy",
  description:
    "Guías legales sobre divorcio, sucesiones, despidos y actualidad jurídica en Jujuy publicadas por el Estudio Jurídico Baiud.",
  keywords: [
    "artículos legales jujuy",
    "abogada jujuy blog",
    "divorcio en jujuy",
    "sucesiones en jujuy",
    "despido injustificado jujuy",
  ],
  alternates: {
    canonical: absoluteUrl("/articulos"),
  },
  openGraph: {
    type: "website",
    url: absoluteUrl("/articulos"),
    title: "Artículos legales en Jujuy",
    description:
      "Contenido legal orientado a búsquedas de alta intención en Jujuy: divorcios, sucesiones, reclamos laborales y actualidad jurídica.",
    siteName: siteConfig.name,
  },
};

export default function ArticulosPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Inicio", path: "/" },
    { name: "Artículos", path: "/articulos" },
  ]);

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Artículos legales en Jujuy",
    url: absoluteUrl("/articulos"),
    description:
      "Colección de artículos del Estudio Jurídico Baiud sobre derecho de familia, sucesiones y derecho laboral en Jujuy.",
    hasPart: articles.map((article) => ({
      "@type": "Article",
      headline: article.title,
      url: absoluteUrl(`/articulos/${article.slug}`),
    })),
  };

  return (
    <main className="mx-auto min-h-screen w-full max-w-7xl px-6 py-20 xl:max-w-[1380px]">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={collectionSchema} />

      <div className="mb-12 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.45em] text-amber-500">
          Recursos legales
        </span>
        <h1 className="mt-3 text-4xl font-black text-slate-950 sm:text-5xl">
          Artículos y guías legales para Jujuy
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg font-light text-slate-600">
          Contenido pensado para responder búsquedas concretas en Google: cómo
          tramitar un divorcio, iniciar una sucesión, reclamar un despido o
          entender cambios legales que impactan en la provincia.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <article
            key={article.slug}
            className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="flex flex-1 flex-col gap-4 p-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">
                {article.category}
              </span>
              <h2 className="text-xl font-bold text-slate-900">
                {article.title}
              </h2>
              <p className="text-sm font-light leading-relaxed text-slate-600">
                {article.description}
              </p>
            </div>
            <div className="p-6 pt-0">
              <Link
                href={`/articulos/${article.slug}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600 transition hover:text-amber-700"
              >
                Leer artículo completo
                <IoArrowForward
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 rounded-3xl bg-slate-950 p-8 text-center text-white md:p-12">
        <h2 className="text-2xl font-bold md:text-3xl">
          ¿Necesitás asesoramiento legal personalizado?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base font-light text-slate-200">
          Si tu caso requiere un análisis concreto, escribí al estudio para una
          consulta personalizada y definí el próximo paso con respaldo legal.
        </p>
        <Link
          href="/#Contact"
          className="mt-6 inline-block rounded-full border border-amber-400/60 bg-amber-400/90 px-8 py-4 text-base font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-amber-300"
        >
          Agendar consulta
        </Link>
      </div>
    </main>
  );
}
