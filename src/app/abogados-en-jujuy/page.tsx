import type { Metadata } from "next";
import Link from "next/link";

import JsonLd from "@/components/seo/jsonLd";
import { articles } from "@/lib/articles";
import {
  absoluteUrl,
  createBreadcrumbSchema,
  createFaqSchema,
  lawyersInJujuyFaqs,
  practiceAreas,
  serviceAreas,
  siteConfig,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Abogados en Jujuy | Estudio Jurídico Baiud",
  description:
    "Abogados en Jujuy para divorcios, sucesiones, despidos y asesoramiento civil. Consultá con la Dra. Lidia Cristina Baiud en San Salvador de Jujuy.",
  keywords: [
    "abogados en jujuy",
    "abogada en jujuy",
    "abogados san salvador de jujuy",
    "estudio juridico jujuy",
    "abogada laboral jujuy",
    "abogada de familia jujuy",
    "sucesiones en jujuy",
  ],
  alternates: {
    canonical: absoluteUrl("/abogados-en-jujuy"),
  },
  openGraph: {
    type: "website",
    url: absoluteUrl("/abogados-en-jujuy"),
    title: "Abogados en Jujuy | Estudio Jurídico Baiud",
    description:
      "Asesoramiento legal en Jujuy para derecho de familia, sucesiones, despidos, reclamos laborales y conflictos civiles.",
    siteName: siteConfig.name,
    locale: "es_AR",
    images: [
      {
        url: absoluteUrl("/herobanner.webp"),
        alt: "Estudio Jurídico Baiud en San Salvador de Jujuy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abogados en Jujuy | Estudio Jurídico Baiud",
    description:
      "Abogados en Jujuy para divorcios, sucesiones, despidos y asesoramiento legal integral.",
    images: [absoluteUrl("/herobanner.webp")],
  },
};

const featuredArticles = articles.filter((article) =>
  [
    "divorcio-en-jujuy",
    "sucesion-herencia-jujuy",
    "despido-injustificado-jujuy",
  ].includes(article.slug),
);

export default function AbogadosEnJujuyPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Inicio", path: "/" },
    { name: "Abogados en Jujuy", path: "/abogados-en-jujuy" },
  ]);

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Abogados en Jujuy",
    url: absoluteUrl("/abogados-en-jujuy"),
    description:
      "Página de aterrizaje para consultas legales en Jujuy orientada a familia, sucesiones, trabajo y derecho civil.",
    isPartOf: {
      "@id": absoluteUrl("/#website"),
    },
    about: {
      "@id": absoluteUrl("/#legalservice"),
    },
    inLanguage: "es-AR",
  };

  return (
    <main className="mx-auto min-h-screen w-full max-w-7xl px-6 py-20 xl:max-w-[1380px]">
      <JsonLd data={pageSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={createFaqSchema(lawyersInJujuyFaqs)} />

      <section className="rounded-[2rem] bg-slate-950 px-8 py-12 text-white shadow-2xl md:px-12">
        <span className="text-xs font-semibold uppercase tracking-[0.45em] text-amber-300">
          Abogados en Jujuy
        </span>
        <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
          Asesoramiento legal en Jujuy con foco en familia, trabajo y sucesiones
        </h1>
        <p className="mt-6 max-w-3xl text-lg font-light leading-relaxed text-slate-200">
          Si buscás abogados en Jujuy para resolver un divorcio, una sucesión,
          un despido o un conflicto civil, el Estudio Jurídico Baiud brinda
          atención profesional en San Salvador de Jujuy y seguimiento cercano de
          cada etapa del caso.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/#Contact"
            className="rounded-full border border-amber-400/60 bg-amber-400/90 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-amber-300"
          >
            Agendar consulta
          </Link>
          <a
            href={siteConfig.social.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/15"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </section>

      <section className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl bg-white p-8 shadow-lg">
          <h2 className="text-3xl font-black text-slate-950">
            Qué tipo de casos atendemos en la provincia de Jujuy
          </h2>
          <p className="mt-4 text-base font-light leading-relaxed text-slate-600">
            El objetivo del sitio no es atraer tráfico genérico, sino consultas
            reales de personas que necesitan ayuda legal concreta. Por eso la
            estructura apunta a búsquedas de alta intención como abogada en
            Jujuy, abogados en San Salvador de Jujuy, divorcio en Jujuy,
            sucesiones en Jujuy y reclamos laborales en Jujuy.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {practiceAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-amber-50 p-8 shadow-lg">
          <h2 className="text-3xl font-black text-slate-950">
            Cobertura local y atención
          </h2>
          <p className="mt-4 text-base font-light leading-relaxed text-slate-700">
            La oficina se encuentra en {siteConfig.address.streetAddress},{" "}
            {siteConfig.address.addressLocality}. Además de consultas
            presenciales, el estudio recibe casos de distintas ciudades de la
            provincia y organiza instancias online cuando el asunto lo permite.
          </p>
          <ul className="mt-6 space-y-2 text-sm font-medium text-slate-700">
            {serviceAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-12 rounded-3xl bg-white p-8 shadow-lg">
        <h2 className="text-3xl font-black text-slate-950">
          Contenido legal que refuerza autoridad temática
        </h2>
        <p className="mt-4 max-w-3xl text-base font-light leading-relaxed text-slate-600">
          Para ganar visibilidad orgánica no alcanza con una home bien escrita.
          También hacen falta páginas que respondan preguntas concretas con
          profundidad. Por eso el sitio ya tiene artículos orientados a
          intenciones de búsqueda fuertes dentro de Jujuy.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {featuredArticles.map((article) => (
            <article
              key={article.slug}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">
                {article.category}
              </span>
              <h3 className="mt-3 text-xl font-bold text-slate-950">
                {article.title}
              </h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-slate-600">
                {article.description}
              </p>
              <Link
                href={`/articulos/${article.slug}`}
                className="mt-5 inline-block text-sm font-semibold text-amber-700 hover:text-amber-800"
              >
                Leer artículo
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-3xl bg-white p-8 shadow-lg">
        <h2 className="text-3xl font-black text-slate-950">
          Preguntas frecuentes sobre abogados en Jujuy
        </h2>
        <div className="mt-8 grid gap-4">
          {lawyersInJujuyFaqs.map((faq) => (
            <details
              key={faq.question}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
            >
              <summary className="cursor-pointer list-none text-lg font-semibold text-slate-950">
                {faq.question}
              </summary>
              <p className="mt-4 text-sm font-light leading-relaxed text-slate-600 md:text-base">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
