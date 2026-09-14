import type { Metadata } from "next";
import Link from "next/link";

import {
  ArticleByline,
  ArticleCta,
  ArticleFaqs,
  RelatedArticles,
  articleBodyClass,
} from "@/components/articles/articleExtras";
import JsonLd from "@/components/seo/jsonLd";
import {
  articleMap,
  createArticleMetadata,
  createArticleSchema,
} from "@/lib/articles";
import {
  type FaqItem,
  createBreadcrumbSchema,
  createFaqSchema,
} from "@/lib/site";

const article = articleMap["divorcio-en-jujuy"];

export const metadata: Metadata = createArticleMetadata(article);

const faqs: FaqItem[] = [
  {
    question: "¿Me puedo divorciar si mi pareja no quiere?",
    answer:
      "Sí. Desde el Código Civil y Comercial de 2015 el divorcio puede pedirlo uno solo de los cónyuges, sin invocar causales ni esperar plazos de separación. Los desacuerdos sobre hijos, alimentos o bienes se resuelven dentro del proceso.",
  },
  {
    question: "¿Cuánto tarda un divorcio en Jujuy?",
    answer:
      "Un divorcio de común acuerdo suele resolverse en 3 a 6 meses. Si hay desacuerdos, puede extenderse entre 12 y 24 meses, según la complejidad del caso y la carga de trabajo del juzgado.",
  },
  {
    question: "¿Qué documentación necesito para divorciarme?",
    answer:
      "Acta de matrimonio, DNI de ambos cónyuges, actas de nacimiento de los hijos menores si los hay, comprobante de domicilio y, en el divorcio de común acuerdo, el convenio regulador.",
  },
  {
    question: "¿Qué pasa con los hijos y la casa en un divorcio?",
    answer:
      "Se definen en el convenio regulador o, si no hay acuerdo, los decide el juez: el cuidado de los hijos y el régimen de comunicación, la cuota alimentaria, quién se queda en la vivienda familiar y cómo se dividen los bienes gananciales.",
  },
];

export default function DivorcioEnJujuyPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-6 py-20">
      <JsonLd data={createArticleSchema(article)} />
      <JsonLd
        data={createBreadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Artículos", path: "/articulos" },
          { name: "Divorcio en Jujuy", path: `/articulos/${article.slug}` },
        ])}
      />
      <JsonLd data={createFaqSchema(faqs)} />

      <article>
        <Link
          href="/articulos"
          className="text-sm font-semibold text-amber-600 hover:text-amber-700"
        >
          ← Volver a artículos
        </Link>

        <span className="mt-8 block text-xs font-semibold uppercase tracking-wider text-amber-600">
          {article.category}
        </span>

        <h1 className="mt-4 text-4xl font-black leading-tight text-slate-950 md:text-5xl">
          {article.title}
        </h1>

        <ArticleByline article={article} />

        <p className="mt-8 text-xl font-light leading-relaxed text-slate-600">
          El proceso de divorcio puede resultar complejo y emocionalmente
          desafiante. En esta guía te explicamos todos los aspectos legales del
          divorcio en la provincia de Jujuy, los requisitos necesarios y cómo
          el Estudio Jurídico LCB puede acompañarte durante todo el proceso.
        </p>

        <div className={articleBodyClass}>
          <h2 className="mt-12 text-3xl font-bold text-slate-950">
            ¿Qué es el divorcio y cuáles son sus tipos?
          </h2>

          <p>
            El divorcio es la disolución legal del vínculo matrimonial. En
            Argentina, desde la reforma del Código Civil y Comercial de 2015, el
            divorcio puede tramitarse de manera unilateral, sin necesidad de
            invocar causales ni esperar plazos de separación.
          </p>

          <p>Existen dos modalidades principales:</p>

          <ul>
            <li>
              <strong>Divorcio de común acuerdo:</strong> Ambos cónyuges están de
              acuerdo en divorciarse y en las condiciones del divorcio (tenencia,
              alimentos, bienes).
            </li>
            <li>
              <strong>Divorcio unilateral o contencioso:</strong> Uno de los
              cónyuges solicita el divorcio sin el consentimiento del otro o
              existen desacuerdos sobre las condiciones.
            </li>
          </ul>

          <h2 className="mt-12 text-3xl font-bold text-slate-950">
            Requisitos para divorciarse en Jujuy
          </h2>

          <p>
            Para iniciar un trámite de divorcio en San Salvador de Jujuy,
            necesitás cumplir con los siguientes requisitos:
          </p>

          <ol>
            <li>Acta de matrimonio original o copia certificada</li>
            <li>DNI de ambos cónyuges</li>
            <li>Actas de nacimiento de hijos menores de edad (si los hay)</li>
            <li>Convenio regulador (en caso de divorcio de común acuerdo)</li>
            <li>Comprobante de domicilio actualizado</li>
          </ol>

          <h2 className="mt-12 text-3xl font-bold text-slate-950">
            Procedimiento del divorcio en Jujuy
          </h2>

          <p>El proceso de divorcio en Jujuy generalmente sigue estos pasos:</p>

          <h3 className="text-2xl font-semibold text-slate-900">
            1. Consulta legal inicial
          </h3>
          <p>
            Es fundamental contar con asesoramiento profesional desde el inicio.
            En el Estudio Jurídico LCB analizamos tu situación particular y te
            orientamos sobre la mejor estrategia legal.
          </p>

          <h3 className="text-2xl font-semibold text-slate-900">
            2. Presentación de la demanda
          </h3>
          <p>
            Se presenta la solicitud de divorcio ante el Juzgado de Familia
            correspondiente en Jujuy, adjuntando toda la documentación requerida.
          </p>

          <h3 className="text-2xl font-semibold text-slate-900">
            3. Audiencia judicial
          </h3>
          <p>
            El juez convoca a las partes a una o varias audiencias para ratificar
            la voluntad de divorciarse y, en su caso, homologar el convenio
            regulador.
          </p>

          <h3 className="text-2xl font-semibold text-slate-900">
            4. Sentencia de divorcio
          </h3>
          <p>
            Una vez cumplidos todos los requisitos, el juez dicta sentencia de
            divorcio, la cual deberá inscribirse en el Registro Civil.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-slate-950">
            Aspectos importantes del convenio regulador
          </h2>

          <p>
            El convenio regulador es el documento donde se establecen los acuerdos
            sobre:
          </p>

          <ul>
            <li>
              <strong>Tenencia y cuidado de los hijos:</strong> Quién ejercerá la
              responsabilidad parental y el régimen de comunicación.
            </li>
            <li>
              <strong>Cuota alimentaria:</strong> Monto y forma de pago de la
              manutención de los hijos.
            </li>
            <li>
              <strong>Distribución de bienes:</strong> Cómo se dividirán los
              bienes gananciales adquiridos durante el matrimonio.
            </li>
            <li>
              <strong>Vivienda familiar:</strong> Quién permanecerá en el hogar
              conyugal.
            </li>
          </ul>

          <h2 className="mt-12 text-3xl font-bold text-slate-950">
            Plazos y costos del divorcio en Jujuy
          </h2>

          <p>Los plazos varían según el tipo de divorcio:</p>

          <ul>
            <li>
              <strong>Divorcio de común acuerdo:</strong> Puede resolverse entre 3
              y 6 meses, dependiendo de la carga de trabajo del juzgado.
            </li>
            <li>
              <strong>Divorcio contencioso:</strong> Puede extenderse entre 12 y
              24 meses, según la complejidad del caso y los desacuerdos entre las
              partes.
            </li>
          </ul>

          <p>
            Los costos incluyen honorarios profesionales, tasas judiciales y
            gastos administrativos. En el Estudio Jurídico LCB ofrecemos
            consultas iniciales para evaluar tu caso y brindarte un presupuesto
            transparente.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-slate-950">
            ¿Por qué elegir al Estudio Jurídico LCB?
          </h2>

          <p>
            Con gran dedicación al ejercicio del derecho de familia en Jujuy, la
            Dra. Lidia Cristina Baiud brinda asesoramiento integral y
            personalizado durante todo el proceso de divorcio. Trabajamos con
            empatía, profesionalismo y estrategia para proteger tus derechos y los
            de tu familia.
          </p>
        </div>

        <ArticleFaqs faqs={faqs} />

        <ArticleCta
          title="¿Necesitás iniciar un proceso de divorcio?"
          text="Contactá al Estudio LCB para una consulta personalizada. Te acompañamos en cada etapa del proceso para proteger tus derechos y los de tu familia."
        />

        <RelatedArticles
          slugs={[
            "sucesion-herencia-jujuy",
            "despido-injustificado-jujuy",
            "migracion-extranjeros-jujuy",
          ]}
        />
      </article>
    </main>
  );
}
