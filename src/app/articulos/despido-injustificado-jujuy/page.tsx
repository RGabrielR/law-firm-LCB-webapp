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

const article = articleMap["despido-injustificado-jujuy"];

export const metadata: Metadata = createArticleMetadata(article);

const faqs: FaqItem[] = [
  {
    question: "¿Qué me corresponde si me despiden sin causa?",
    answer:
      "Indemnización por antigüedad, preaviso si no te lo dieron, integración del mes de despido, vacaciones y aguinaldo proporcionales, y agravantes si estabas mal registrado. Con la Ley 27.802 cambió la base de cálculo, así que conviene revisar la liquidación con un abogado.",
  },
  {
    question: "¿Tengo que firmar la liquidación que me ofrece la empresa?",
    answer:
      "No firmes ningún acuerdo sin consultarlo antes. Muchas liquidaciones no incluyen todos los rubros adeudados, y lo que se firma puede dificultar un reclamo posterior.",
  },
  {
    question: "¿Cuánto tiempo tengo para reclamar un despido?",
    answer:
      "La acción judicial laboral prescribe a los 2 años, pero conviene actuar cuanto antes: intimar al empleador y reunir la documentación rápido fortalece el reclamo.",
  },
  {
    question: "¿Cuánto demora un juicio laboral en Jujuy?",
    answer:
      "Si hay acuerdo en la etapa de conciliación puede resolverse en pocos meses. Un juicio laboral completo suele llevar entre 12 y 24 meses, según el caso y la carga de los juzgados.",
  },
];

export default function DespidoInjustificadoJujuyPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-6 py-20">
      <JsonLd data={createArticleSchema(article)} />
      <JsonLd
        data={createBreadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Artículos", path: "/articulos" },
          { name: "Despido injustificado en Jujuy", path: `/articulos/${article.slug}` },
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
          El despido sin causa es una situación que puede generar incertidumbre
          y preocupación. En esta guía te explicamos cuáles son tus derechos
          ante un despido injustificado en Jujuy, qué indemnizaciones te
          corresponden y cómo reclamarlas con el respaldo del Estudio Jurídico
          Baiud.
        </p>
        <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 px-6 py-4">
          <p className="text-sm font-semibold text-amber-800">
            Actualización 2026: la Ley 27.802 cambió la base de cálculo de la
            indemnización por despido. Leé{" "}
            <Link
              href="/articulos/reforma-laboral-argentina"
              className="underline hover:text-amber-900"
            >
              qué cambia con la nueva ley laboral
            </Link>{" "}
            antes de aceptar una liquidación.
          </p>
        </div>

        <div className={articleBodyClass}>
          <h2 className="mt-12 text-3xl font-bold text-slate-950">
            ¿Qué es un despido injustificado?
          </h2>

          <p>
            El despido injustificado, también llamado despido sin causa, ocurre
            cuando el empleador decide finalizar la relación laboral sin invocar
            ninguna de las causales graves establecidas en la Ley de Contrato de
            Trabajo (LCT). En Argentina, el empleador tiene el derecho de
            despedir sin expresar motivo, pero debe pagar las indemnizaciones
            correspondientes.
          </p>

          <p>
            Es importante distinguir el despido injustificado del despido con
            justa causa, donde el empleador invoca una falta grave del trabajador
            y no paga indemnización.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-slate-950">
            Indemnizaciones que corresponden por despido sin causa
          </h2>

          <p>
            Cuando un trabajador es despedido sin causa en Jujuy, tiene derecho a
            percibir las siguientes indemnizaciones y conceptos:
          </p>

          <h3 className="text-2xl font-semibold text-slate-900">
            1. Indemnización por antigüedad (Art. 245 LCT)
          </h3>
          <p>
            Es la indemnización principal y se calcula multiplicando la mejor
            remuneración mensual, normal y habitual percibida durante el último
            año por la cantidad de años trabajados o fracción mayor de 3 meses.
          </p>
          <p>
            <strong>Fórmula:</strong> Mejor sueldo x Años de antigüedad
          </p>

          <h3 className="text-2xl font-semibold text-slate-900">
            2. Preaviso (Art. 231 y 232 LCT)
          </h3>
          <p>
            Si el empleador no otorga el preaviso con la antelación legal (15
            días a 2 meses según antigüedad), debe pagar una indemnización
            sustitutiva equivalente a ese período.
          </p>

          <h3 className="text-2xl font-semibold text-slate-900">
            3. Integración del mes de despido (Art. 233 LCT)
          </h3>
          <p>
            Si el trabajador es despedido sin preaviso, además de la
            indemnización sustitutiva, tiene derecho a cobrar los días que faltan
            hasta completar el mes desde la fecha de notificación del despido.
          </p>

          <h3 className="text-2xl font-semibold text-slate-900">
            4. Vacaciones proporcionales y SAC proporcional
          </h3>
          <p>
            El trabajador tiene derecho a cobrar las vacaciones no gozadas y el
            sueldo anual complementario (aguinaldo) proporcional al tiempo
            trabajado en el año.
          </p>

          <h3 className="text-2xl font-semibold text-slate-900">
            5. Indemnización agravada por falta de registración
          </h3>
          <p>
            Si el trabajador estaba total o parcialmente en negro, puede reclamar
            indemnizaciones agravadas que duplican las sumas adeudadas.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-slate-950">
            Ejemplo práctico de cálculo de indemnización
          </h2>

          <p>
            Supongamos un trabajador con 5 años de antigüedad y un sueldo de
            $500.000:
          </p>

          <ul>
            <li>
              <strong>Indemnización por antigüedad:</strong> $500.000 x 5 años =
              $2.500.000
            </li>
            <li>
              <strong>Preaviso:</strong> $500.000 x 2 meses = $1.000.000
            </li>
            <li>
              <strong>Integración del mes:</strong> Variable según fecha de
              despido
            </li>
            <li>
              <strong>SAC proporcional:</strong> Variable según fecha de despido
            </li>
          </ul>

          <p>
            <strong>Total aproximado:</strong> $3.500.000 + conceptos
            proporcionales
          </p>

          <h2 className="mt-12 text-3xl font-bold text-slate-950">
            Plazos para reclamar un despido injustificado
          </h2>

          <p>
            Es fundamental conocer los plazos legales para no perder tus derechos:
          </p>

          <ul>
            <li>
              <strong>30 días corridos:</strong> Plazo para enviar carta documento
              reclamando las diferencias si la liquidación es incorrecta.
            </li>
            <li>
              <strong>2 años:</strong> Plazo de prescripción para iniciar un
              reclamo judicial laboral ante la Justicia del Trabajo de Jujuy.
            </li>
          </ul>

          <p>
            <strong>Importante:</strong> No firmes ningún acuerdo o recibo sin
            antes consultar con un abogado laboralista. Muchas veces los
            empleadores ofrecen liquidaciones que no contemplan todos los rubros
            adeudados.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-slate-950">
            Pasos a seguir ante un despido injustificado
          </h2>

          <h3 className="text-2xl font-semibold text-slate-900">
            1. Conservá toda la documentación
          </h3>
          <p>
            Recibos de sueldo, telegrama de despido, contrato de trabajo,
            constancia de aportes, comunicaciones con la empresa. Todo puede ser
            útil para tu reclamo.
          </p>

          <h3 className="text-2xl font-semibold text-slate-900">
            2. Consultá con un abogado laboralista
          </h3>
          <p>
            En el Estudio Jurídico LCB analizamos tu situación particular,
            revisamos la liquidación ofrecida y te orientamos sobre el mejor curso
            de acción.
          </p>

          <h3 className="text-2xl font-semibold text-slate-900">
            3. Enviá carta documento si hay diferencias
          </h3>
          <p>
            Si la liquidación es incorrecta o no te pagan, debemos intimar al
            empleador mediante carta documento dentro de los 30 días.
          </p>

          <h3 className="text-2xl font-semibold text-slate-900">
            4. Intentá una conciliación en SECLO
          </h3>
          <p>
            Antes de iniciar un juicio, es obligatorio intentar una conciliación
            ante el Servicio de Conciliación Laboral Obligatoria (SECLO) en
            Jujuy. Muchos casos se resuelven en esta etapa.
          </p>

          <h3 className="text-2xl font-semibold text-slate-900">
            5. Iniciá acción judicial si no hay acuerdo
          </h3>
          <p>
            Si no se llega a un acuerdo en SECLO, iniciamos demanda judicial ante
            el Juzgado del Trabajo de San Salvador de Jujuy para reclamar todas
            las indemnizaciones adeudadas.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-slate-950">
            Situaciones especiales en despidos
          </h2>

          <h3 className="text-2xl font-semibold text-slate-900">
            Despido durante el embarazo
          </h3>
          <p>
            La trabajadora embarazada tiene estabilidad especial. Si es
            despedida, puede optar por la reincorporación o cobrar una
            indemnización agravada de 13 meses de sueldo.
          </p>

          <h3 className="text-2xl font-semibold text-slate-900">
            Despido de delegados sindicales
          </h3>
          <p>
            Los representantes gremiales tienen protección especial y no pueden
            ser despedidos sin autorización judicial previa (tutela sindical).
          </p>

          <h3 className="text-2xl font-semibold text-slate-900">
            Despido discriminatorio
          </h3>
          <p>
            Si el despido se debe a motivos discriminatorios (género, edad,
            religión, etc.), corresponde una indemnización agravada adicional.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-slate-950">
            ¿Cuánto tiempo demora un juicio laboral en Jujuy?
          </h2>

          <p>
            Los plazos de un juicio laboral varían según la complejidad del caso
            y la carga de trabajo de los juzgados:
          </p>

          <ul>
            <li>
              <strong>Conciliación en SECLO:</strong> 1 a 3 meses
            </li>
            <li>
              <strong>Juicio laboral completo:</strong> 12 a 24 meses en promedio
            </li>
          </ul>

          <p>
            En el Estudio Jurídico LCB trabajamos para agilizar los trámites y
            buscar soluciones eficientes que protejan tus derechos.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-slate-950">
            ¿Por qué elegir al Estudio Jurídico LCB?
          </h2>

          <p>
            Con amplia experiencia en derecho laboral en Jujuy, la Dra. Lidia
            Cristina Baiud te ofrece:
          </p>

          <ul>
            <li>Asesoramiento integral desde la primera consulta</li>
            <li>
              Análisis detallado de tu liquidación y cálculo de rubros adeudados
            </li>
            <li>Representación en instancias administrativas y judiciales</li>
            <li>Defensa estratégica de tus derechos laborales</li>
            <li>Transparencia en honorarios y compromiso con tu caso</li>
          </ul>
        </div>

        <ArticleFaqs faqs={faqs} />

        <ArticleCta
          title="¿Te despidieron sin causa?"
          text="Contactá al Estudio LCB para una consulta personalizada. Revisamos tu liquidación y te acompañamos en cada etapa del reclamo para defender tus derechos laborales."
        />

        <RelatedArticles
          slugs={[
            "reforma-laboral-argentina",
            "sucesion-herencia-jujuy",
            "divorcio-en-jujuy",
          ]}
        />
      </article>
    </main>
  );
}
