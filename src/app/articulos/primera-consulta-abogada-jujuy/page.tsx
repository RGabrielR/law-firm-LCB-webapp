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

const article = articleMap["primera-consulta-abogada-jujuy"];

export const metadata: Metadata = createArticleMetadata(article);

const faqs: FaqItem[] = [
  {
    question: "¿La consulta online sirve igual que la presencial?",
    answer:
      "Para la mayoría de los temas, sí. Se conversa por videollamada o WhatsApp, se revisan los documentos que mandás por foto o PDF y se define cómo seguir. La consulta presencial conviene cuando hay mucha documentación en papel o cuando preferís hablar cara a cara.",
  },
  {
    question: "¿Lo que le cuento a la abogada queda en privado?",
    answer:
      "Sí. Todo lo que contás en la consulta está protegido por el secreto profesional: la abogada no puede revelarlo ni declarar sobre eso, aunque después no la contrates.",
  },
  {
    question: "¿Tengo que decidir en la primera consulta si inicio un reclamo?",
    answer:
      "No. La primera consulta sirve para entender tu situación, conocer las opciones y los costos. Podés tomarte el tiempo que necesites, salvo que haya un plazo corriendo: en ese caso te lo vamos a advertir con claridad.",
  },
  {
    question: "¿Qué pasa si no tengo todos los papeles?",
    answer:
      "Consultá igual. Muchos documentos se pueden pedir después a organismos públicos, bancos o empleadores. Lo importante es no perder un plazo mientras se juntan los papeles.",
  },
];

export default function PrimeraConsultaAbogadaJujuyPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-6 py-20">
      <JsonLd data={createArticleSchema(article)} />
      <JsonLd
        data={createBreadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Artículos", path: "/articulos" },
          { name: "Primera consulta legal", path: `/articulos/${article.slug}` },
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
          Ir a un estudio jurídico por primera vez genera dudas: qué contar, qué
          llevar, cuánto va a costar. Esta guía te ayuda a aprovechar la
          consulta al máximo, ya sea en la oficina de San Salvador de Jujuy o
          desde tu casa por videollamada.
        </p>

        <div className={articleBodyClass}>
          <h2>Para qué sirve la primera consulta</h2>
          <p>
            En la primera consulta la abogada escucha tu situación, revisa la
            documentación y te explica en lenguaje claro:
          </p>
          <ul>
            <li>Qué derechos tenés y qué riesgos existen.</li>
            <li>Qué opciones hay: negociar, mediar, reclamar o no hacer nada.</li>
            <li>Si hay algún plazo corriendo que no se puede dejar pasar.</li>
            <li>Cuánto puede tardar y qué costos tendría cada camino.</li>
          </ul>

          <h2>Qué llevar (o mandar por WhatsApp)</h2>
          <ul>
            <li>Tu DNI y los datos de la otra parte, si los tenés.</li>
            <li>
              Toda notificación que hayas recibido: cartas documento, cédulas
              judiciales, intimaciones de Rentas o ARCA, resoluciones de ANSES.
            </li>
            <li>
              Contratos, recibos de sueldo, escrituras, títulos del auto,
              facturas o comprobantes relacionados.
            </li>
            <li>Mensajes, mails o fotos que prueben lo que pasó.</li>
            <li>
              Una línea de tiempo corta con fechas: cuándo empezó el problema y
              qué pasó después.
            </li>
          </ul>
          <p>
            Si no tenés todo, no importa: con lo que haya se puede empezar a
            analizar el caso.
          </p>

          <h2>Qué preguntar</h2>
          <ul>
            <li>¿Tengo un plazo para reclamar o para responder?</li>
            <li>¿Qué pasa si no hago nada?</li>
            <li>¿Conviene intentar un acuerdo antes de ir a juicio?</li>
            <li>¿Cuánto puede tardar y qué etapas tiene?</li>
            <li>
              ¿Cómo se calculan los honorarios y qué otros gastos hay (tasas,
              peritos, sellados)?
            </li>
            <li>¿Cómo me voy a enterar de los avances?</li>
          </ul>

          <h2>Consulta online: cómo funciona</h2>
          <p>
            Si vivís lejos de la capital, trabajás en horario de oficina o
            simplemente te resulta más cómodo, la consulta se puede hacer online:
          </p>
          <ol>
            <li>Escribís por WhatsApp contando brevemente el tema.</li>
            <li>Se coordina día y horario para la videollamada o llamada.</li>
            <li>
              Mandás fotos o PDF de los documentos antes de la consulta, para
              que la abogada llegue con el caso leído.
            </li>
            <li>
              Después de la charla recibís los próximos pasos por escrito.
            </li>
          </ol>
          <p>
            Si más adelante hace falta firmar algo o ir a una audiencia, se
            coordina la presencia en la oficina de San Salvador de Jujuy o el
            traslado cuando el caso lo requiere.
          </p>

          <h2>Honorarios: siempre claros y por escrito</h2>
          <p>
            Los honorarios de los abogados en Jujuy tienen como referencia la
            ley arancelaria provincial y dependen del tipo de caso y del
            trabajo que requiera. Lo importante es que sepas desde el inicio
            cuánto vas a pagar, cómo y en qué momento, y que quede por escrito.
            En el Estudio Jurídico LCB te damos un presupuesto claro antes de
            empezar.
          </p>

          <h2>Por qué no conviene esperar</h2>
          <p>
            Muchos derechos se pierden por el paso del tiempo. Una carta
            documento sin responder, un recurso administrativo fuera de plazo o
            una deuda que prescribe pueden cambiar por completo el resultado. Una
            consulta a tiempo casi siempre sale más barata que tratar de
            arreglar el problema después.
          </p>
        </div>

        <ArticleFaqs faqs={faqs} />

        <ArticleCta
          title="¿Querés hacer tu consulta?"
          text="Escribinos por WhatsApp contando brevemente tu situación y coordinamos una consulta presencial en San Salvador de Jujuy u online."
        />

        <RelatedArticles
          slugs={[
            "como-es-un-juicio-en-jujuy",
            "mediacion-jujuy",
            "despido-injustificado-jujuy",
          ]}
        />
      </article>
    </main>
  );
}
