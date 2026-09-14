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

const article = articleMap["sucesion-herencia-jujuy"];

export const metadata: Metadata = createArticleMetadata(article);

const faqs: FaqItem[] = [
  {
    question: "¿Es obligatorio hacer la sucesión?",
    answer:
      "Sí. Para que los herederos puedan disponer de los bienes de una persona fallecida (vender, escriturar, transferir un auto o cobrar cuentas) hay que tramitar la sucesión, haya testamento o no.",
  },
  {
    question: "¿Cuánto tarda una sucesión en Jujuy?",
    answer:
      "Una sucesión simple, con acuerdo entre herederos y pocos bienes, suele llevar entre 6 y 12 meses. Si hay muchos herederos, desacuerdos o bienes difíciles de valuar, puede extenderse entre 18 y 36 meses.",
  },
  {
    question: "¿Quién hereda si no hay testamento?",
    answer:
      "La ley fija un orden: primero los descendientes (hijos, nietos) y, si no hay, los ascendientes (padres, abuelos). El cónyuge hereda junto con ellos. Si no hay descendientes, ascendientes ni cónyuge, heredan los parientes colaterales hasta el cuarto grado.",
  },
  {
    question: "¿Qué pasa si postergamos la sucesión?",
    answer:
      "Los bienes siguen a nombre de la persona fallecida y no se pueden vender ni transferir. Con el tiempo se complican la documentación, las deudas y los acuerdos entre herederos, por eso conviene iniciarla cuanto antes.",
  },
];

export default function SucesionHerenciaJujuyPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-6 py-20">
      <JsonLd data={createArticleSchema(article)} />
      <JsonLd
        data={createBreadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Artículos", path: "/articulos" },
          { name: "Sucesiones y herencias en Jujuy", path: `/articulos/${article.slug}` },
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
          El trámite de sucesión es un proceso legal necesario para transferir
          los bienes de una persona fallecida a sus herederos. En esta guía te
          explicamos paso a paso cómo realizar el trámite sucesorio en la
          provincia de Jujuy y cómo el Estudio Jurídico LCB puede asistirte
          durante todo el proceso.
        </p>

        <div className={articleBodyClass}>
          <h2 className="mt-12 text-3xl font-bold text-slate-950">
            ¿Qué es una sucesión?
          </h2>

          <p>
            La sucesión es el procedimiento legal mediante el cual se transmiten
            los derechos y obligaciones de una persona fallecida (causante) a sus
            herederos. Este proceso es obligatorio en Argentina y debe realizarse
            tanto si existe testamento como si no.
          </p>

          <p>Existen dos tipos de sucesión:</p>

          <ul>
            <li>
              <strong>Sucesión testamentaria:</strong> Cuando el causante dejó un
              testamento que expresa su voluntad sobre la distribución de sus
              bienes.
            </li>
            <li>
              <strong>Sucesión legítima o ab intestato:</strong> Cuando no existe
              testamento y la herencia se distribuye según el orden de herederos
              establecido por ley.
            </li>
          </ul>

          <h2 className="mt-12 text-3xl font-bold text-slate-950">
            Documentación necesaria para iniciar una sucesión en Jujuy
          </h2>

          <p>
            Para iniciar el trámite sucesorio en San Salvador de Jujuy, necesitás
            reunir la siguiente documentación:
          </p>

          <ol>
            <li>Acta de defunción del causante</li>
            <li>DNI del causante y de todos los herederos</li>
            <li>Acta de matrimonio del causante (si corresponde)</li>
            <li>Actas de nacimiento de los herederos</li>
            <li>Testamento (si existe)</li>
            <li>
              Certificado de domicilio del último domicilio del causante
            </li>
            <li>
              Títulos de propiedad, escrituras y documentación de bienes muebles e
              inmuebles
            </li>
            <li>Declaración jurada de herederos</li>
          </ol>

          <h2 className="mt-12 text-3xl font-bold text-slate-950">
            Procedimiento de sucesión en Jujuy: paso a paso
          </h2>

          <h3 className="text-2xl font-semibold text-slate-900">
            1. Apertura del juicio sucesorio
          </h3>
          <p>
            El trámite se inicia presentando una demanda de declaratoria de
            herederos ante el Juzgado Civil correspondiente en Jujuy. Es
            fundamental contar con un abogado especializado desde el inicio.
          </p>

          <h3 className="text-2xl font-semibold text-slate-900">
            2. Publicación de edictos
          </h3>
          <p>
            Se publican edictos en el Boletín Oficial y en un diario de amplia
            circulación durante tres días consecutivos, citando a herederos y
            acreedores a hacer valer sus derechos.
          </p>

          <h3 className="text-2xl font-semibold text-slate-900">
            3. Declaratoria de herederos
          </h3>
          <p>
            Una vez vencidos los plazos de publicación y no habiendo oposición, el
            juez dicta la declaratoria de herederos, reconociendo quiénes son los
            herederos legítimos.
          </p>

          <h3 className="text-2xl font-semibold text-slate-900">
            4. Inventario y avalúo de bienes
          </h3>
          <p>
            Se realiza un inventario detallado de todos los bienes del causante,
            con sus respectivas valuaciones fiscales y de mercado.
          </p>

          <h3 className="text-2xl font-semibold text-slate-900">
            5. Pago de deudas y gastos del proceso
          </h3>
          <p>
            Se cancelan las deudas del causante y se pagan la tasa de justicia y
            los gastos del trámite. En Jujuy no se cobra impuesto a la herencia;
            ese impuesto existe en la provincia de Buenos Aires, así que puede
            corresponder si hay bienes ubicados allí.
          </p>

          <h3 className="text-2xl font-semibold text-slate-900">
            6. Partición de bienes
          </h3>
          <p>
            Los herederos acuerdan cómo se dividirán los bienes. Si no hay
            acuerdo, el juez puede ordenar una partición judicial.
          </p>

          <h3 className="text-2xl font-semibold text-slate-900">
            7. Inscripción de bienes
          </h3>
          <p>
            Finalmente, se inscriben los bienes a nombre de los nuevos titulares
            en los registros correspondientes (Registro de la Propiedad Inmueble,
            Registro Automotor, etc.).
          </p>

          <h2 className="mt-12 text-3xl font-bold text-slate-950">
            Orden de herederos según la ley argentina
          </h2>

          <p>
            Cuando no existe testamento, el Código Civil y Comercial establece el
            siguiente orden de herederos:
          </p>

          <ol>
            <li>
              <strong>Descendientes:</strong> Hijos, nietos, bisnietos.
            </li>
            <li>
              <strong>Ascendientes:</strong> Padres, abuelos (si no hay
              descendientes).
            </li>
            <li>
              <strong>Cónyuge:</strong> Hereda en concurrencia con descendientes o
              ascendientes.
            </li>
            <li>
              <strong>Colaterales:</strong> Hermanos, sobrinos (hasta el cuarto
              grado).
            </li>
          </ol>

          <h2 className="mt-12 text-3xl font-bold text-slate-950">
            Plazos y costos del trámite sucesorio en Jujuy
          </h2>

          <p>
            Los plazos del trámite sucesorio varían según la complejidad del caso:
          </p>

          <ul>
            <li>
              <strong>Sucesión simple:</strong> Entre 6 y 12 meses cuando hay
              acuerdo entre herederos y pocos bienes.
            </li>
            <li>
              <strong>Sucesión compleja:</strong> Puede extenderse entre 18 y 36
              meses si hay múltiples herederos, desacuerdos o bienes de difícil
              valuación.
            </li>
          </ul>

          <p>
            Los costos incluyen honorarios profesionales, tasa de justicia,
            publicación de edictos y gastos administrativos.
            En el Estudio Jurídico LCB te brindamos un presupuesto claro y
            transparente desde la primera consulta.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-slate-950">
            Errores comunes al tramitar una sucesión
          </h2>

          <ul>
            <li>
              <strong>Retrasar el inicio del trámite:</strong> Muchas familias
              postergan la sucesión, generando complicaciones legales y
              patrimoniales.
            </li>
            <li>
              <strong>No contar con asesoramiento legal:</strong> El proceso
              sucesorio tiene múltiples etapas técnicas que requieren experiencia
              profesional.
            </li>
            <li>
              <strong>Omitir bienes del inventario:</strong> Es fundamental
              declarar todos los bienes del causante para evitar problemas futuros.
            </li>
            <li>
              <strong>No pagar impuestos:</strong> El incumplimiento puede generar
              multas y recargos significativos.
            </li>
          </ul>

          <h2 className="mt-12 text-3xl font-bold text-slate-950">
            ¿Por qué elegir al Estudio Jurídico LCB para tu sucesión?
          </h2>

          <p>
            Con amplia experiencia en derecho sucesorio en Jujuy, la Dra. Lidia
            Cristina Baiud te brinda un servicio integral que incluye:
          </p>

          <ul>
            <li>Asesoramiento personalizado desde la primera consulta</li>
            <li>
              Gestión completa del trámite ante los juzgados y organismos públicos
            </li>
            <li>Mediación entre herederos para evitar conflictos</li>
            <li>Transparencia en costos y plazos</li>
            <li>Atención cercana y humana en momentos difíciles</li>
          </ul>
        </div>

        <ArticleFaqs faqs={faqs} />

        <ArticleCta
          title="¿Necesitás iniciar un trámite sucesorio?"
          text="Contactá al Estudio LCB para una consulta personalizada. Te acompañamos en cada etapa del proceso sucesorio con profesionalismo y cercanía."
        />

        <RelatedArticles
          slugs={[
            "divorcio-en-jujuy",
            "abogados-productores-tabacaleros-jujuy",
            "abogados-mineria-litio-jujuy",
          ]}
        />
      </article>
    </main>
  );
}
