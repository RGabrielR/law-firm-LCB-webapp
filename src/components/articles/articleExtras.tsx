import Link from "next/link";

import { type ArticleMeta, articleMap } from "@/lib/articles";
import { type FaqItem, siteConfig } from "@/lib/site";

// El proyecto no tiene @tailwindcss/typography: las clases prose no aplican
// nada, así que el cuerpo de los artículos se estila con variantes arbitrarias.
export const articleBodyClass =
  "mt-10 text-base text-slate-700 md:text-lg [&_h2]:mt-14 [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:leading-tight [&_h2]:text-slate-950 [&_h3]:mt-8 [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:text-slate-900 [&_li]:leading-8 [&_ol]:mt-5 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_p]:mt-5 [&_p]:leading-8 [&_strong]:font-semibold [&_strong]:text-slate-900 [&_ul]:mt-5 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6";

function formatDate(date: string) {
  return new Date(`${date}T12:00:00`).toLocaleDateString("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export const ArticleByline = ({ article }: { article: ArticleMeta }) => {
  return (
    <p className="mt-6 text-sm text-slate-500">
      Por <strong className="text-slate-700">Dra. Lidia Cristina Baiud</strong>{" "}
      · Abogada en San Salvador de Jujuy · Actualizado el{" "}
      <time dateTime={article.modifiedAt}>{formatDate(article.modifiedAt)}</time>
    </p>
  );
};

export const ArticleFaqs = ({ faqs }: { faqs: FaqItem[] }) => {
  return (
    <section className="mt-16 px-0 lg:px-0">
      <h2 className="text-3xl font-bold text-slate-950">Preguntas frecuentes</h2>
      <div className="mt-6 grid gap-4">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition open:shadow-lg"
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
  );
};

export const ArticleCta = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className="mt-16 rounded-3xl bg-amber-50 p-8">
      <h2 className="text-2xl font-bold text-slate-950">{title}</h2>
      <p className="mt-4 text-base font-light leading-relaxed text-slate-700">
        {text}
      </p>
      <div className="mt-6 flex flex-wrap gap-4">
        <a
          href={siteConfig.social.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="inline-block rounded-full border border-amber-400/60 bg-amber-400/90 px-8 py-4 text-base font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-amber-300"
        >
          Consultar por WhatsApp
        </a>
        <Link
          href="/#Contact"
          className="inline-block rounded-full border border-slate-300 bg-white px-8 py-4 text-base font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-slate-100"
        >
          Agendar consulta
        </Link>
      </div>
      <p className="mt-6 text-xs font-light leading-relaxed text-slate-500">
        Este artículo brinda información general y no reemplaza el análisis de
        un caso concreto. La normativa cambia con frecuencia: antes de tomar
        una decisión, consultá con un profesional.
      </p>
    </div>
  );
};

export const RelatedArticles = ({ slugs }: { slugs: string[] }) => {
  const related = slugs
    .map((slug) => articleMap[slug])
    .filter((article): article is ArticleMeta => Boolean(article));

  return (
    <section className="mt-16 px-0 lg:px-0">
      <h2 className="text-2xl font-bold text-slate-950">
        Otros artículos que te pueden servir
      </h2>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {related.map((article) => (
          <Link
            key={article.slug}
            href={`/articulos/${article.slug}`}
            className="group flex flex-col gap-3 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">
              {article.category}
            </span>
            <span className="text-base font-bold text-slate-900 group-hover:text-amber-700">
              {article.title}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};
