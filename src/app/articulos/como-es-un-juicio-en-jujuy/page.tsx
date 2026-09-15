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

const article = articleMap["como-es-un-juicio-en-jujuy"];

export const metadata: Metadata = createArticleMetadata(article);

const faqs: FaqItem[] = [
  {
    question: "Me notificaron una demanda, ¿cuánto tiempo tengo para contestar?",
    answer:
      "En el juicio ordinario oral del Código Procesal Civil y Comercial de Jujuy, el plazo para contestar es de 15 días desde la notificación; en el proceso abreviado, de 10 días. Si no contestás a tiempo, se pueden tener por admitidos los hechos que afirma la otra parte. Consultá apenas recibas la cédula.",
  },
  {
    question: "¿Cuánto dura un juicio civil en Jujuy?",
    answer:
      "Depende del tipo de proceso, de la prueba y de la carga del juzgado. El código fija plazos máximos para cada etapa (por ejemplo, hasta 90 días de prueba en el juicio ordinario), pero en la práctica un juicio con peritos y testigos suele llevar más de un año, y más si se apela. Muchos casos terminan antes con un acuerdo.",
  },
  {
    question: "Ya tengo un juicio en curso, ¿puedo cambiar de abogado?",
    answer:
      "Sí. Podés cambiar de abogado en cualquier momento del proceso. El nuevo profesional se presenta en el expediente, revisa lo actuado y continúa desde el punto en que está la causa. Conviene hacerlo con tiempo y no a días de una audiencia o de un vencimiento.",
  },
  {
    question: "¿Puedo apelar si pierdo el juicio?",
    answer:
      "Sí. Contra la sentencia definitiva, el recurso de apelación se presenta dentro de los 10 días de notificada y en el mismo escrito hay que explicar por qué la sentencia está mal. Si no se expresan los agravios en ese momento, el recurso se declara desierto.",
  },
];

export default function ComoEsUnJuicioEnJujuyPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-6 py-20">
      <JsonLd data={createArticleSchema(article)} />
      <JsonLd
        data={createBreadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Artículos", path: "/articulos" },
          { name: "Cómo es un juicio en Jujuy", path: `/articulos/${article.slug}` },
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
          Iniciar un juicio o recibir una demanda da miedo, sobre todo cuando
          no se sabe qué viene después. Esta guía explica, en lenguaje simple,
          cómo es hoy un juicio civil en Jujuy, qué etapas tiene y qué papel
          cumplís vos en cada una.
        </p>

        <div className={articleBodyClass}>
          <h2>Un código nuevo, con audiencias orales</h2>
          <p>
            Desde 2024 rige en Jujuy el{" "}
            <strong>Código Procesal Civil y Comercial (Ley 6.358)</strong>. Sus
            ideas centrales son el expediente electrónico, la oralidad y la
            presencia del juez en las audiencias. Toda contienda que no tenga un
            trámite especial se tramita como <strong>juicio ordinario oral</strong>,
            y para casos más simples existe el <strong>proceso abreviado</strong>,
            con plazos más cortos.
          </p>
          <p>
            Antes de demandar, además, puede corresponder intentar una{" "}
            <Link
              href="/articulos/mediacion-jujuy"
              className="font-semibold text-amber-700 underline hover:text-amber-800"
            >
              mediación
            </Link>
            .
          </p>

          <h2>Las etapas del juicio ordinario oral</h2>

          <h3>1. Demanda</h3>
          <p>
            Se presenta en el expediente electrónico con los hechos, el
            reclamo y, desde el inicio, <strong>toda la prueba</strong>:
            documentos, testigos y los puntos para los peritos. Lo que no se
            ofrece en la demanda después cuesta mucho incorporarlo, por eso la
            preparación previa es clave.
          </p>

          <h3>2. Contestación</h3>
          <p>
            El demandado tiene <strong>15 días</strong> para contestar,
            ofrecer su prueba y, si corresponde, reconvenir (reclamar a su vez
            contra el actor). Si no contesta, se pueden tener por admitidos los
            hechos de la demanda. Cuando el demandado es el Estado provincial o
            un municipio, el plazo se amplía en 10 días.
          </p>

          <h3>3. Audiencia preliminar</h3>
          <p>
            Se celebra dentro de los <strong>40 días</strong> de convocada y la
            preside el juez en persona. Es la audiencia más importante del
            proceso. En ella el juez:
          </p>
          <ul>
            <li>Intenta que las partes lleguen a un acuerdo.</li>
            <li>Define cuáles son los hechos discutidos que hay que probar.</li>
            <li>Admite o rechaza la prueba y designa peritos.</li>
            <li>
              Fija el plazo de prueba, que no puede superar los{" "}
              <strong>90 días</strong>.
            </li>
            <li>Pone fecha a la audiencia de vista de causa.</li>
          </ul>
          <p>
            Tenés que ir personalmente o con instrucciones claras para tu
            abogada: quien no asiste sin justificación queda notificado de todo
            lo que se decida y no lo puede cuestionar.
          </p>

          <h3>4. Producción de la prueba</h3>
          <p>
            Se libran oficios, trabajan los peritos y se preparan las
            declaraciones. Es la etapa que más tiempo suele llevar.
          </p>

          <h3>5. Audiencia de vista de causa</h3>
          <p>
            Declaran las partes, los testigos y los peritos ante el juez, que
            también puede interrogar directamente. Al terminar, cada abogado
            tiene un tiempo, en principio de 30 minutos, para{" "}
            <strong>alegar</strong> sobre lo que se probó. El juez puede volver
            a intentar un acuerdo en cualquier momento.
          </p>

          <h3>6. Sentencia</h3>
          <p>
            Terminado el debate, la causa queda lista para sentencia, que el
            juez debe dictar dentro de los <strong>30 días</strong>.
          </p>

          <h3>7. Apelación</h3>
          <p>
            Quien no esté de acuerdo puede apelar dentro de los{" "}
            <strong>10 días</strong> de notificada la sentencia, explicando en
            el mismo escrito cuáles son los errores. Contra otras resoluciones
            del proceso el plazo general es de 5 días.
          </p>

          <h2>El proceso abreviado</h2>
          <p>
            Tiene la misma lógica pero más rápida: 10 días para contestar,
            audiencia preliminar dentro de los 15 días, hasta 30 días de prueba
            y una única audiencia videograbada con testigos, peritos y
            alegatos. La sentencia se dicta dentro de los 10 días. Por este
            trámite van, por ejemplo, muchos reclamos de consumidores.
          </p>

          <h2>Qué hacer si recibís una demanda</h2>
          <ol>
            <li>Anotá la fecha exacta en que te notificaron.</li>
            <li>No ignores la cédula aunque creas que no tenés razón o deuda.</li>
            <li>
              Juntá contratos, recibos, mensajes y todo lo que sirva para tu
              defensa, y pensá en posibles testigos.
            </li>
            <li>Consultá enseguida: 15 días pasan muy rápido.</li>
          </ol>

          <h2>Cómo te acompaña el Estudio Jurídico LCB</h2>
          <ul>
            <li>Evaluación previa: si conviene negociar, mediar o litigar.</li>
            <li>Preparación de la demanda o la contestación con toda la prueba.</li>
            <li>Presencia en cada audiencia y preparación de testigos.</li>
            <li>Toma de juicios en curso y apelaciones.</li>
            <li>Información clara sobre cada avance del expediente.</li>
          </ul>
        </div>

        <ArticleFaqs faqs={faqs} />

        <ArticleCta
          title="¿Te llegó una demanda o querés iniciar un juicio?"
          text="Mandanos la cédula o contanos el conflicto. Revisamos los plazos y te explicamos cuál es la mejor estrategia para tu caso."
        />

        <RelatedArticles
          slugs={[
            "mediacion-jujuy",
            "primera-consulta-abogada-jujuy",
            "sucesion-herencia-jujuy",
          ]}
        />
      </article>
    </main>
  );
}
