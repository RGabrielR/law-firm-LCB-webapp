import type { Metadata } from "next";
import Link from "next/link";

import JsonLd from "@/components/seo/jsonLd";
import { articleMap, createArticleSchema } from "@/lib/articles";
import { absoluteUrl, createBreadcrumbSchema } from "@/lib/site";

const article = articleMap["migracion-extranjeros-jujuy"];

export const metadata: Metadata = {
  title: "Migración y residencia en Argentina: guía para extranjeros en Jujuy",
  description:
    "Guía completa sobre trámites de residencia, nacionalización y regularización migratoria en Argentina. Asesoramiento legal especializado para extranjeros en Jujuy con la Dra. Lidia Baiud.",
  keywords: [
    "abogada migración jujuy",
    "residencia permanente argentina extranjeros",
    "nacionalidad argentina requisitos",
    "tramitar residencia argentina",
    "regularización migratoria jujuy",
    "radicación argentina extranjeros",
    "ciudadanía argentina trámite",
    "visa argentina trabajo",
    "reunificación familiar argentina",
    "abogada extranjería jujuy",
  ],
  alternates: {
    canonical: absoluteUrl("/articulos/migracion-extranjeros-jujuy"),
  },
  openGraph: {
    title:
      "Migración y residencia en Argentina: guía para extranjeros en Jujuy",
    description:
      "Todo lo que necesitás saber sobre residencia, nacionalización y regularización migratoria en Argentina. Asesoramiento legal profesional en Jujuy.",
    type: "article",
    url: absoluteUrl("/articulos/migracion-extranjeros-jujuy"),
  },
};

export default function MigracionExtranjerosJujuyPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-6 py-20">
      <JsonLd data={createArticleSchema(article)} />
      <JsonLd
        data={createBreadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Artículos", path: "/articulos" },
          {
            name: "Migración y residencia en Argentina",
            path: "/articulos/migracion-extranjeros-jujuy",
          },
        ])}
      />

      <article className="prose prose-slate max-w-none">
        <div className="mb-8">
          <Link
            href="/articulos"
            className="text-sm font-semibold text-amber-600 no-underline hover:text-amber-700"
          >
            ← Volver a artículos
          </Link>
        </div>

        <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">
          Derecho Migratorio
        </span>

        <h1 className="mt-4 text-4xl font-black leading-tight text-slate-950 md:text-5xl">
          Migración y Residencia en Argentina: Guía Completa para Extranjeros en
          Jujuy
        </h1>

        <p className="lead text-xl font-light leading-relaxed text-slate-600">
          Si sos extranjero y querés vivir, trabajar o establecerte legalmente en
          Argentina, entender el sistema migratorio es el primer paso. En esta
          guía te explicamos los tipos de residencia, los requisitos para
          obtener la nacionalidad y cómo el Estudio Jurídico Baiud puede
          acompañarte en cada etapa del proceso.
        </p>

        <h2 className="mt-12 text-3xl font-bold text-slate-950">
          Marco legal de la migración en Argentina
        </h2>

        <p>
          La migración en Argentina se rige principalmente por la{" "}
          <strong>Ley 25.871 de Migraciones</strong> (y sus modificatorias), que
          establece los derechos y obligaciones de los extranjeros en el
          territorio nacional. Argentina se destaca a nivel regional por su
          política migratoria amplia, que reconoce la migración como un derecho
          humano y facilita la regularización de personas de países del
          MERCOSUR.
        </p>

        <p>
          La Dirección Nacional de Migraciones (DNM) es el organismo responsable
          de gestionar los trámites migratorios, y cada provincia cuenta con
          delegaciones donde se pueden iniciar los procesos. En Jujuy, la
          delegación regional atiende casos de toda la región del NOA.
        </p>

        <h2 className="mt-12 text-3xl font-bold text-slate-950">
          Tipos de residencia en Argentina
        </h2>

        <p>
          Existen distintas categorías de residencia según el origen del
          extranjero y el motivo de su estadía:
        </p>

        <h3 className="text-2xl font-semibold text-slate-900">
          Residencia transitoria
        </h3>
        <p>
          Es la autorización para permanecer en el país por un tiempo
          determinado, sin intención de radicarse en forma permanente. Incluye
          turistas, estudiantes, trabajadores temporales y personas en tránsito.
          Los plazos varían entre 90 días y 2 años según la subcategoría.
        </p>

        <h3 className="text-2xl font-semibold text-slate-900">
          Residencia temporaria
        </h3>
        <p>
          Permite residir en Argentina por un plazo determinado, generalmente de
          hasta 2 años, con posibilidad de renovación. Es el paso previo a la
          residencia permanente. Se otorga por motivos como:
        </p>
        <ul>
          <li>
            <strong>Trabajo:</strong> Contrato laboral con empleador argentino o
            ejercicio de actividad económica propia.
          </li>
          <li>
            <strong>Estudio:</strong> Inscripción en institución educativa
            reconocida.
          </li>
          <li>
            <strong>Reunificación familiar:</strong> Vínculo con ciudadano
            argentino o residente permanente (cónyuge, conviviente, hijos,
            padres).
          </li>
          <li>
            <strong>MERCOSUR y países asociados:</strong> Los nacionales de
            Bolivia, Brasil, Chile, Colombia, Ecuador, Paraguay, Perú, Uruguay y
            Venezuela pueden acceder mediante el Acuerdo de Residencia del
            MERCOSUR, con requisitos simplificados.
          </li>
          <li>
            <strong>Rentistas e inversionistas:</strong> Quienes demuestren
            ingresos propios suficientes o realicen inversiones en el país.
          </li>
        </ul>

        <h3 className="text-2xl font-semibold text-slate-900">
          Residencia permanente
        </h3>
        <p>
          Autoriza a vivir y trabajar en Argentina de manera indefinida. Pueden
          acceder a ella quienes:
        </p>
        <ul>
          <li>
            Hayan tenido residencia temporaria por al menos 2 años continuos.
          </li>
          <li>Sean cónyuge, padre o hijo de ciudadano argentino.</li>
          <li>
            Sean jubilados o pensionados de organismos internacionales o países
            extranjeros.
          </li>
        </ul>

        <h2 className="mt-12 text-3xl font-bold text-slate-950">
          Documentación requerida para tramitar la residencia
        </h2>

        <p>
          Si bien los requisitos varían según la categoría, los documentos más
          habituales son:
        </p>

        <ol>
          <li>Pasaporte vigente o documento de identidad del país de origen</li>
          <li>
            Certificado de antecedentes penales del país de origen (con
            apostilla, si corresponde)
          </li>
          <li>
            Partida de nacimiento (con apostilla o legalización consular)
          </li>
          <li>
            Documentación que acredite el motivo de residencia (contrato de
            trabajo, certificado de matrimonio, certificado de estudios, etc.)
          </li>
          <li>Comprobante de domicilio en Argentina</li>
          <li>Fotografías tipo carné</li>
          <li>Pago de tasas administrativas correspondientes</li>
        </ol>

        <p>
          Los documentos extranjeros deben estar <strong>apostillados</strong>{" "}
          o legalizados por el consulado argentino en el país de origen, y
          traducidos al español por traductor público matriculado si están en
          otro idioma.
        </p>

        <h2 className="mt-12 text-3xl font-bold text-slate-950">
          Nacionalización: cómo obtener la ciudadanía argentina
        </h2>

        <p>
          La nacionalidad argentina por naturalización está regulada por la{" "}
          <strong>Ley 346 de Ciudadanía y Naturalización</strong>. Para
          solicitarla, el extranjero debe cumplir con los siguientes requisitos:
        </p>

        <h3 className="text-2xl font-semibold text-slate-900">
          Requisitos generales
        </h3>
        <ul>
          <li>
            <strong>Residencia mínima de 2 años</strong> en el territorio
            argentino de forma continua y legal.
          </li>
          <li>
            Tener más de 18 años de edad.
          </li>
          <li>
            No tener antecedentes penales en Argentina ni en el país de origen.
          </li>
          <li>
            Demostrar medios lícitos de vida (trabajo, negocio, profesión,
            renta).
          </li>
          <li>
            Conocimiento básico del idioma español y de la historia y la
            constitución argentina (evaluado en la entrevista judicial).
          </li>
        </ul>

        <h3 className="text-2xl font-semibold text-slate-900">
          Procedimiento de naturalización
        </h3>
        <ol>
          <li>
            <strong>Presentación de la solicitud</strong> ante el Juzgado
            Federal con competencia electoral del domicilio del solicitante.
          </li>
          <li>
            <strong>Verificación de documentación</strong> por parte del
            tribunal, que puede requerir documentación adicional.
          </li>
          <li>
            <strong>Entrevista ante el juez</strong>, donde se evalúa el
            conocimiento del idioma y la historia argentina.
          </li>
          <li>
            <strong>Resolución judicial</strong> concediendo o denegando la
            ciudadanía.
          </li>
          <li>
            <strong>Inscripción en el Registro Nacional Electoral</strong> y
            obtención del DNI argentino.
          </li>
        </ol>

        <p>
          La doble nacionalidad es posible en Argentina. Obtener la ciudadanía
          argentina no implica perder automáticamente la del país de origen,
          aunque esto depende de la legislación de cada país.
        </p>

        <h2 className="mt-12 text-3xl font-bold text-slate-950">
          Regularización migratoria y el Programa Patria Grande
        </h2>

        <p>
          Muchos extranjeros se encuentran en situación migratoria irregular,
          ya sea porque ingresaron al país sin documentación o porque su
          residencia venció sin renovarse. Argentina cuenta con mecanismos de
          regularización, entre ellos el{" "}
          <strong>Programa Patria Grande</strong>, que facilita el proceso para
          nacionales de países del MERCOSUR y asociados.
        </p>

        <p>
          La regularización migratoria es fundamental porque permite:
        </p>

        <ul>
          <li>Acceder al sistema de salud pública sin restricciones.</li>
          <li>
            Inscribir a los hijos en instituciones educativas públicas y privadas.
          </li>
          <li>Obtener el DNI argentino para extranjeros.</li>
          <li>
            Trabajar de manera formal y acceder a la protección laboral.
          </li>
          <li>
            Abrir cuentas bancarias y acceder a créditos.
          </li>
          <li>
            Evitar sanciones, multas o expulsión del territorio nacional.
          </li>
        </ul>

        <h2 className="mt-12 text-3xl font-bold text-slate-950">
          Casos especiales: refugiados y protección internacional
        </h2>

        <p>
          Argentina es signataria de la Convención sobre el Estatuto de los
          Refugiados de 1951 y cuenta con la{" "}
          <strong>Ley 26.165 de Reconocimiento y Protección al Refugiado</strong>
          . Si una persona no puede regresar a su país por temor fundado a
          persecución por motivos de raza, religión, nacionalidad, pertenencia a
          un grupo social u opiniones políticas, puede solicitar el{" "}
          <strong>estatuto de refugiado</strong> ante el CONARE (Comité Nacional
          para los Refugiados).
        </p>

        <p>
          Durante el proceso de determinación de la condición de refugiado, el
          solicitante no puede ser expulsado del país y tiene derecho a
          asesoramiento legal gratuito.
        </p>

        <h2 className="mt-12 text-3xl font-bold text-slate-950">
          Jujuy como provincia de destino migratorio
        </h2>

        <p>
          La provincia de Jujuy, por su ubicación fronteriza con Bolivia y Chile,
          recibe de forma constante flujos migratorios tanto regionales como
          extrarregionales. Las comunidades boliviana y peruana tienen una
          presencia histórica significativa en la provincia, y muchos extranjeros
          eligen Jujuy para establecerse de manera definitiva.
        </p>

        <p>
          Contar con asesoramiento legal local es especialmente valioso en Jujuy,
          donde el conocimiento de la realidad regional y los vínculos con las
          instituciones competentes (Delegación de Migraciones, Juzgados
          Federales, Registro Civil) marcan la diferencia en la resolución de
          cada caso.
        </p>

        <h2 className="mt-12 text-3xl font-bold text-slate-950">
          ¿Por qué contar con una abogada especializada en derecho migratorio?
        </h2>

        <p>
          Los trámites migratorios involucran documentación compleja, plazos
          estrictos y requisitos que varían según la situación particular de cada
          persona. Un error en la presentación puede derivar en demoras
          significativas o en la denegación de la solicitud. La Dra. Lidia
          Cristina Baiud ofrece:
        </p>

        <ul>
          <li>
            <strong>Evaluación personalizada</strong> de la situación migratoria
            y la vía legal más conveniente para cada caso.
          </li>
          <li>
            <strong>Gestión integral de la documentación</strong>, incluyendo
            apostillas, traducciones y legalizaciones.
          </li>
          <li>
            <strong>Representación ante organismos</strong> como la Dirección
            Nacional de Migraciones y los Juzgados Federales.
          </li>
          <li>
            <strong>Acompañamiento en todo el proceso</strong>, desde la
            residencia temporaria hasta la naturalización.
          </li>
          <li>
            Asesoramiento en español y comprensión de la realidad cultural de
            los principales grupos migratorios de la región.
          </li>
        </ul>

        <div className="mt-16 rounded-3xl bg-amber-50 p-8 not-prose">
          <h3 className="text-2xl font-bold text-slate-950">
            ¿Necesitás regularizar tu situación migratoria o tramitar la
            ciudadanía argentina?
          </h3>
          <p className="mt-4 text-base font-light text-slate-700">
            Contactá al Estudio Baiud para una consulta personalizada. Te
            asesoramos en cada etapa del trámite para que puedas establecerte
            legalmente en Argentina con seguridad y tranquilidad.
          </p>
          <Link
            href="/#Contact"
            className="mt-6 inline-block rounded-full border border-amber-400/60 bg-amber-400/90 px-8 py-4 text-base font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-amber-300"
          >
            Agendar consulta
          </Link>
        </div>
      </article>
    </main>
  );
}
