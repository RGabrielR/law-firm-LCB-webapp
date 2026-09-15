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

const article = articleMap["mediacion-jujuy"];

export const metadata: Metadata = createArticleMetadata(article);

const faqs: FaqItem[] = [
  {
    question: "¿La mediación es obligatoria en Jujuy antes de un juicio?",
    answer:
      "La Ley 6.353, sancionada en 2023, establece la mediación prejudicial obligatoria para la mayoría de los conflictos. Su puesta en marcha se está completando por etapas, así que en cada caso hay que verificar si hoy se exige antes de demandar. Aunque no sea obligatoria, intentar mediar suele ahorrar tiempo y dinero.",
  },
  {
    question: "¿Qué temas no se pueden mediar?",
    answer:
      "Según la Ley 6.353, la mediación prejudicial obligatoria no se aplica, entre otros casos, a divorcios, nulidad de matrimonio, filiación y adopción, aunque sí a las cuestiones económicas que se derivan de ellos. Tampoco se pueden arbitrar temas de familia, estado civil o capacidad de las personas.",
  },
  {
    question: "¿Necesito ir con abogada a la mediación?",
    answer:
      "Es muy recomendable. El mediador es neutral y no asesora a ninguna de las partes. Tu abogada te explica qué conviene aceptar, revisa que el acuerdo sea claro y que se pueda hacer cumplir si la otra parte no lo respeta.",
  },
  {
    question: "¿Qué pasa si la otra parte no cumple el acuerdo de mediación?",
    answer:
      "Un acuerdo bien redactado y, cuando corresponde, homologado por el juez, se puede ejecutar judicialmente como si fuera una sentencia. Por eso es clave cuidar la redacción: montos, fechas, formas de pago y qué pasa si alguien incumple.",
  },
];

export default function MediacionJujuyPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-6 py-20">
      <JsonLd data={createArticleSchema(article)} />
      <JsonLd
        data={createBreadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Artículos", path: "/articulos" },
          { name: "Mediación y arbitraje", path: `/articulos/${article.slug}` },
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
          No todos los conflictos tienen que terminar en un juicio largo. La
          mediación y el arbitraje permiten resolver problemas con vecinos,
          socios, inquilinos, familiares o clientes de forma más rápida y
          económica. Esta guía explica cómo funcionan en Jujuy.
        </p>

        <div className={articleBodyClass}>
          <h2>Qué es la mediación</h2>
          <p>
            Es un procedimiento en el que un <strong>mediador neutral</strong>{" "}
            ayuda a las partes a conversar y a encontrar un acuerdo. El mediador
            no decide ni impone nada: si no hay acuerdo, cada parte queda libre
            para ir a la justicia. Lo que se dice en la mediación es
            confidencial.
          </p>

          <h2>La Ley 6.353 de mediación de Jujuy</h2>
          <p>
            En noviembre de 2023 la Legislatura sancionó la{" "}
            <strong>Ley 6.353</strong>, que ordena los distintos tipos de
            mediación en la provincia: judicial, extrajudicial, escolar,
            comunitaria y <strong>prejudicial obligatoria</strong>. Esta última
            exige intentar una mediación antes de iniciar la mayoría de los
            juicios.
          </p>
          <p>
            La implementación de la ley se está completando por etapas, con la
            reglamentación y la organización de los registros de mediadores.
            Por eso, antes de demandar, conviene verificar qué se exige hoy
            para tu tipo de caso.
          </p>
          <p>
            La propia ley excluye de la mediación prejudicial obligatoria,
            entre otros temas, los <strong>divorcios</strong>, la nulidad de
            matrimonio, la filiación y la adopción. Sí se pueden mediar las
            cuestiones económicas que surgen de esos procesos, como la división
            de bienes.
          </p>

          <h2>Dónde se hace una mediación en Jujuy</h2>
          <ul>
            <li>
              <strong>Mediación judicial:</strong> la organiza el Poder Judicial
              de Jujuy, a través de su Departamento de Mediación, dentro de
              procesos ya iniciados.
            </li>
            <li>
              <strong>Mediación extrajudicial y prejudicial:</strong> con
              mediadores registrados, por ejemplo en el Instituto de Mediación
              del Colegio de Abogados y Procuradores de Jujuy.
            </li>
            <li>
              <strong>Mediación comunitaria:</strong> para conflictos
              vecinales, como la que ofrece la Dirección de Mediación de la
              Municipalidad de San Salvador de Jujuy.
            </li>
          </ul>
          <p>
            Quienes no tienen recursos pueden pedir que la mediación
            prejudicial obligatoria sea gratuita, en los centros públicos de
            mediación.
          </p>

          <h2>Cómo es una mediación, paso a paso</h2>
          <ol>
            <li>Se solicita la mediación y se cita a la otra parte.</li>
            <li>
              En la primera reunión el mediador explica las reglas y cada parte
              cuenta su punto de vista.
            </li>
            <li>
              Puede haber reuniones conjuntas o por separado para acercar
              posiciones.
            </li>
            <li>
              Si hay acuerdo, se firma un acta. Si no, se deja constancia y
              queda habilitada la vía judicial.
            </li>
          </ol>

          <h2>Qué es el arbitraje y cuándo conviene</h2>
          <p>
            En el arbitraje las partes eligen a un <strong>árbitro</strong> o
            tribunal arbitral que <strong>sí decide</strong> el conflicto, y su
            laudo es obligatorio. Se usa sobre todo en contratos comerciales,
            entre socios o con proveedores, cuando se busca rapidez,
            confidencialidad y alguien con conocimiento técnico del tema.
          </p>
          <p>
            Para que haya arbitraje tiene que existir un{" "}
            <strong>acuerdo por escrito</strong>, normalmente una cláusula en el
            contrato. El Código Civil y Comercial no permite arbitrar cuestiones
            de estado civil, capacidad de las personas, familia, relaciones de
            consumo ni conflictos laborales.
          </p>

          <h2>Cómo te acompaña el Estudio Jurídico LCB</h2>
          <ul>
            <li>Evaluar si conviene mediar, negociar o ir directo a juicio.</li>
            <li>Acompañarte en cada audiencia de mediación.</li>
            <li>
              Redactar acuerdos claros y ejecutables, y pedir su homologación.
            </li>
            <li>Redactar cláusulas arbitrales en contratos comerciales.</li>
          </ul>
          <p>
            Si la mediación no prospera, te explicamos{" "}
            <Link
              href="/articulos/como-es-un-juicio-en-jujuy"
              className="font-semibold text-amber-700 underline hover:text-amber-800"
            >
              cómo sigue el juicio
            </Link>
            .
          </p>
        </div>

        <ArticleFaqs faqs={faqs} />

        <ArticleCta
          title="¿Querés resolver un conflicto sin llegar a juicio?"
          text="Contanos el problema y te decimos si conviene mediar, negociar o reclamar judicialmente, y cuánto puede costar cada camino."
        />

        <RelatedArticles
          slugs={[
            "como-es-un-juicio-en-jujuy",
            "divorcio-en-jujuy",
            "sucesion-herencia-jujuy",
          ]}
        />
      </article>
    </main>
  );
}
