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

const article = articleMap["abogados-productores-tabacaleros-jujuy"];

export const metadata: Metadata = createArticleMetadata(article);

const faqs: FaqItem[] = [
  {
    question: "¿Qué hago si no me pagaron el FET o me lo pagaron incompleto?",
    answer:
      "Primero revisá tu liquidación de acopio y que tu inscripción como productor esté vigente y con los datos bancarios correctos. Después reclamá por escrito y guardá constancia. Si no hay respuesta o el descuento no está justificado, se puede presentar un reclamo administrativo formal y, si hace falta, recurrir a la justicia.",
  },
  {
    question: "¿Conviene hacer por escrito el arriendo de una finca tabacalera?",
    answer:
      "Sí. Un contrato escrito deja claro el plazo, el precio (en dinero o en kilos de tabaco), quién paga las mejoras como estufas y galpones, qué pasa con el FET y cómo se termina la relación. Los acuerdos de palabra son la causa más común de conflictos entre dueños y productores.",
  },
  {
    question: "¿Tengo que registrar a los trabajadores de la cosecha?",
    answer:
      "Sí. El Régimen de Trabajo Agrario alcanza también a los trabajadores temporarios y permanentes discontinuos de la cosecha. No registrarlos expone al productor a multas y a reclamos laborales, y deja al trabajador sin cobertura de riesgos del trabajo si sufre un accidente.",
  },
  {
    question: "Murió el titular de la finca: ¿qué pasa con la producción y el FET?",
    answer:
      "Los herederos pueden seguir produciendo, pero para cobrar a nombre propio, actualizar registros, arrendar o vender necesitan iniciar la sucesión. Conviene empezarla antes de la campaña siguiente para no quedar afuera de pagos y programas.",
  },
];

export default function ProductoresTabacalerosJujuyPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-6 py-20">
      <JsonLd data={createArticleSchema(article)} />
      <JsonLd
        data={createBreadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Artículos", path: "/articulos" },
          {
            name: "Guía del tabaco jujeño",
            path: `/articulos/${article.slug}`,
          },
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
          El tabaco sostiene a miles de familias en los valles de Jujuy. Detrás
          de cada campaña hay contratos de acopio, pagos del Fondo Especial del
          Tabaco, arriendos, trabajadores de cosecha y fincas que pasan de una
          generación a otra. Esta guía reúne los problemas legales más comunes
          del productor tabacalero y cómo resolverlos.
        </p>

        <div className={articleBodyClass}>
          <h2>El tabaco en Jujuy</h2>
          <p>
            Jujuy es una de las principales provincias productoras de{" "}
            <strong>tabaco Virginia</strong> del país. La producción se
            concentra en el Valle de los Pericos y zonas cercanas:{" "}
            <strong>Perico, El Carmen, Monterrico, San Antonio</strong> y
            alrededores. Una gran parte de los productores son pequeños y
            medianos, y se organizan a través de la Cooperativa de Tabacaleros
            de Jujuy y la Cámara del Tabaco de Jujuy.
          </p>

          <h2>El Fondo Especial del Tabaco (FET)</h2>
          <p>
            El FET fue creado por la <strong>Ley Nacional del Tabaco (19.800)</strong>{" "}
            y se financia con una parte del precio de venta de los cigarrillos.
            En líneas generales, la mayor parte de lo recaudado se paga a los
            productores como complemento del precio por kilo de tabaco
            entregado, y otra parte financia programas provinciales para el
            sector.
          </p>
          <p>
            Con esos fondos, por ejemplo, el Gobierno de Jujuy otorgó para la{" "}
            <strong>campaña 2026/2027</strong> un aporte no reintegrable por
            hectárea para la etapa de plantación, pagado en cuotas según la
            disponibilidad de los fondos nacionales. Para cobrar hay que estar
            inscripto y tener los datos bancarios confirmados en la plataforma
            del Ministerio de Desarrollo Económico y Producción.
          </p>
          <p>Los reclamos más frecuentes vinculados al FET son:</p>
          <ul>
            <li>Demoras o pagos incompletos.</li>
            <li>Descuentos no explicados en la liquidación.</li>
            <li>
              Productores que quedan fuera por problemas de inscripción,
              cambios de titularidad o fallecimiento del titular.
            </li>
            <li>
              Conflictos entre dueño de la tierra y productor sobre quién
              cobra.
            </li>
          </ul>

          <h2>Venta, acopio y liquidaciones</h2>
          <p>
            El tabaco se entrega a la cooperativa o a empresas acopiadoras, que
            lo clasifican por clase y calidad. De esa clasificación depende el
            precio. Además, es común recibir insumos, plantines o anticipos a
            cuenta de la cosecha, que después se descuentan de la liquidación.
          </p>
          <p>
            Por eso conviene guardar cada remito, boleta de clasificación y
            resumen de cuenta corriente. Cuando la clasificación, los descuentos
            o el saldo de deuda no coinciden con lo que el productor entregó y
            recibió, esa documentación es la base del reclamo.
          </p>

          <h2>La tierra: arriendos, aparcerías y títulos</h2>
          <p>
            Muchos productores trabajan tierra ajena. Los contratos de{" "}
            <strong>arrendamiento y aparcería rural</strong> se rigen por la Ley
            13.246 y sus reformas. Lo recomendable es que consten por escrito
            y definan:
          </p>
          <ul>
            <li>Plazo y renovación.</li>
            <li>Precio, en dinero o en porcentaje o kilos de producción.</li>
            <li>
              Quién invierte y quién se queda con las mejoras (estufas de
              curado, galpones, riego).
            </li>
            <li>Quién cobra el FET y los aportes por hectárea.</li>
            <li>Causas de rescisión y entrega del campo.</li>
          </ul>
          <p>
            Otro problema muy frecuente en los valles son las fincas sin título
            al día: campos de abuelos sin sucesión, condominios entre hermanos
            o familias que ocupan la tierra hace décadas sin escritura. Según el
            caso se resuelve con una sucesión, una división de condominio o un
            juicio de usucapión (prescripción adquisitiva).
          </p>

          <h2>Trabajadores rurales y cosecha</h2>
          <p>
            El <strong>Régimen de Trabajo Agrario (Ley 26.727)</strong> regula
            el trabajo en el campo, con las modificaciones que introdujo la{" "}
            <Link
              href="/articulos/reforma-laboral-argentina"
              className="font-semibold text-amber-700 underline hover:text-amber-800"
            >
              reforma laboral
            </Link>
            . Para el productor tabacalero, los puntos clave son:
          </p>
          <ul>
            <li>
              Registrar a todos los trabajadores, incluidos los{" "}
              <strong>temporarios</strong> y{" "}
              <strong>permanentes discontinuos</strong> de la cosecha.
            </li>
            <li>
              Contar con cobertura de riesgos del trabajo y elementos de
              protección, especialmente en el manejo de agroquímicos y en el
              curado.
            </li>
            <li>
              Condiciones adecuadas de alojamiento cuando los trabajadores viven
              en la finca durante la campaña.
            </li>
            <li>
              La prohibición del trabajo infantil y las restricciones para
              adolescentes.
            </li>
            <li>
              La responsabilidad que puede alcanzar al productor cuando contrata
              cuadrillas a través de terceros.
            </li>
          </ul>

          <h2>Clima, deudas y emergencia agropecuaria</h2>
          <p>
            Una granizada puede arruinar una campaña entera. Cuando una zona es
            declarada en <strong>emergencia o desastre agropecuario</strong>{" "}
            (Ley 26.509), los productores afectados pueden acceder a prórrogas
            impositivas y otros beneficios, siempre que tramiten el certificado
            correspondiente. También son habituales las consultas por
            reclamos a aseguradoras, refinanciación de deudas con cooperativas
            o proveedores, embargos y, en casos graves, concursos preventivos.
          </p>

          <h2>Cómo te acompaña el Estudio Jurídico Baiud</h2>
          <ul>
            <li>Reclamos por el FET, aportes y liquidaciones de acopio.</li>
            <li>Redacción y revisión de contratos de arriendo y aparcería.</li>
            <li>Sucesiones, divisiones de condominio y usucapión de fincas.</li>
            <li>Registración y conflictos laborales con trabajadores rurales.</li>
            <li>
              Reclamos a aseguradoras y negociación de deudas del campo.
            </li>
          </ul>
          <p>
            Atendemos en San Salvador de Jujuy y coordinamos consultas con
            productores de Perico, El Carmen, Monterrico y toda la zona
            tabacalera.
          </p>
        </div>

        <ArticleFaqs faqs={faqs} />

        <ArticleCta
          title="¿Sos productor tabacalero y tenés un problema legal?"
          text="Traé tu liquidación, el contrato de la finca o las notificaciones que recibiste. Revisamos el caso y te explicamos qué podés reclamar y cómo."
        />

        <RelatedArticles
          slugs={[
            "sucesion-herencia-jujuy",
            "reforma-laboral-argentina",
            "abogados-comercio-exterior-aduana-jujuy",
          ]}
        />
      </article>
    </main>
  );
}
