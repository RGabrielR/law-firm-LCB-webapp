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
  title: "Abogados en Jujuy",
  description:
    "Abogados en Jujuy para divorcios, sucesiones, despidos, comercio exterior y aduana, minería y productores tabacaleros. Consultá con la Dra. Lidia Cristina Baiud en San Salvador de Jujuy.",
  keywords: [
    "abogados en jujuy",
    "abogada en jujuy",
    "abogados san salvador de jujuy",
    "estudio juridico jujuy",
    "abogada laboral jujuy",
    "abogada de familia jujuy",
    "sucesiones en jujuy",
    "abogado comercio exterior jujuy",
    "abogado aduanero jujuy",
    "abogado minero jujuy",
    "abogado litio jujuy",
    "abogado tabaco jujuy",
  ],
  alternates: {
    canonical: absoluteUrl("/abogados-en-jujuy"),
  },
  openGraph: {
    type: "website",
    url: absoluteUrl("/abogados-en-jujuy"),
    title: "Abogados en Jujuy | Estudio Jurídico LCB",
    description:
      "Asesoramiento legal en Jujuy para familia, sucesiones, reclamos laborales, comercio exterior y aduana, minería y productores tabacaleros.",
    siteName: siteConfig.name,
    locale: "es_AR",
    images: [
      {
        url: absoluteUrl("/herobanner.webp"),
        alt: "Estudio Jurídico LCB en San Salvador de Jujuy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abogados en Jujuy | Estudio Jurídico LCB",
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
    "abogados-comercio-exterior-aduana-jujuy",
    "abogados-mineria-litio-jujuy",
    "abogados-productores-tabacaleros-jujuy",
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
      "Página de aterrizaje para consultas legales en Jujuy orientada a familia, sucesiones, trabajo, derecho civil, comercio exterior, minería y tabaco.",
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
          un despido, un problema con la Aduana, un conflicto vinculado a la
          minería o un reclamo como productor tabacalero, el Estudio Jurídico
          Baiud brinda atención profesional en San Salvador de Jujuy y
          seguimiento cercano de cada etapa del caso.
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
            Además de los casos de familia, sucesiones y trabajo, el estudio
            acompaña a quienes viven de las actividades que mueven la economía
            jujeña: importadores y exportadores que operan por La Quiaca, el
            Paso de Jama o la Zona Franca Perico; superficiarios, proveedores y
            trabajadores de la minería del litio; y productores tabacaleros del
            Valle de los Pericos.
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
            Oficina en San Salvador de Jujuy
          </h2>
          <p className="mt-4 text-base font-light leading-relaxed text-slate-700">
            La oficina se encuentra en {siteConfig.address.streetAddress},{" "}
            {siteConfig.address.addressLocality}. Atendemos consultas de toda la
            provincia, con traslados cuando el caso lo requiere, e instancias
            online cuando el asunto lo permite.
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
          Guías legales para los casos más consultados en Jujuy
        </h2>
        <p className="mt-4 max-w-3xl text-base font-light leading-relaxed text-slate-600">
          Artículos escritos por el estudio que explican, paso a paso, cómo
          funcionan los trámites y reclamos más frecuentes en la provincia.
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
