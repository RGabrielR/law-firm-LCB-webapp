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

const article = articleMap["jubilacion-pension-anses-jujuy"];

export const metadata: Metadata = createArticleMetadata(article);

const faqs: FaqItem[] = [
  {
    question: "¿Todavía existe la moratoria para jubilarse sin aportes?",
    answer:
      "La moratoria de la Ley 27.705 venció el 23 de marzo de 2025. Hoy quienes están cerca de la edad jubilatoria pueden usar el plan de pago de deuda previsional para completar años, y quienes ya tienen 65 años sin aportes suficientes pueden pedir la PUAM. Conviene revisar cada caso: a veces hay aportes que no figuran y se pueden reconocer.",
  },
  {
    question: "Soy empleado público de la provincia de Jujuy, ¿me jubilo por ANSES?",
    answer:
      "Sí. Jujuy transfirió su caja de jubilaciones a la Nación en los años noventa, así que los empleados públicos provinciales se jubilan por ANSES, con las mismas reglas generales que el resto de los trabajadores, salvo los regímenes especiales que correspondan.",
  },
  {
    question: "¿Puedo jubilarme si me faltan años de aportes?",
    answer:
      "Depende de tu edad y de tu historia laboral. Antes de dar nada por perdido, hay que revisar la historia laboral de ANSES: faltan aportes de empleadores que no los depositaron, trabajos no registrados que se pueden probar y, en el caso de las mujeres, el reconocimiento de años por hijo.",
  },
  {
    question: "ANSES me rechazó el trámite, ¿qué hago?",
    answer:
      "Leé la resolución y fijate la fecha de notificación. Se puede pedir que se revise en sede administrativa y, si se confirma el rechazo, iniciar una demanda ante la justicia federal. Traé la resolución a la consulta para no perder plazos.",
  },
];

export default function JubilacionPensionAnsesJujuyPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-6 py-20">
      <JsonLd data={createArticleSchema(article)} />
      <JsonLd
        data={createBreadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Artículos", path: "/articulos" },
          { name: "Guía previsional", path: `/articulos/${article.slug}` },
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
          Jubilarse, cobrar una pensión o reclamar un haber mal liquidado son
          trámites que se hacen ante ANSES, pero cada detalle de la historia
          laboral cambia el resultado. Esta guía resume las reglas vigentes en
          2026 y los problemas más comunes que vemos en Jujuy.
        </p>

        <div className={articleBodyClass}>
          <h2>Jubilación ordinaria: los requisitos</h2>
          <ul>
            <li>
              <strong>Edad:</strong> 60 años las mujeres y 65 los hombres. Las
              mujeres pueden optar por seguir trabajando hasta los 65.
            </li>
            <li>
              <strong>Aportes:</strong> 30 años de servicios con aportes.
            </li>
            <li>
              <strong>Reconocimiento por hijos:</strong> las mujeres suman un
              año de servicio por cada hijo, y dos por hijo adoptado o con
              discapacidad.
            </li>
          </ul>
          <p>
            En Jujuy, además, los <strong>empleados públicos provinciales</strong>{" "}
            también se jubilan por ANSES, porque la caja provincial fue
            transferida a la Nación en los años noventa.
          </p>

          <h2>Si te faltan años de aportes</h2>
          <p>
            La <strong>moratoria previsional</strong> de la Ley 27.705 venció
            el 23 de marzo de 2025. Desde entonces, las opciones principales
            son:
          </p>
          <ul>
            <li>
              <strong>Plan de pago de deuda previsional:</strong> pensado para
              quienes todavía no llegaron a la edad jubilatoria (en general,
              mujeres de 50 a 59 años y hombres de 55 a 64). Permite ir pagando
              en cuotas los períodos que faltan, antes de cumplir la edad.
            </li>
            <li>
              <strong>PUAM (Pensión Universal para el Adulto Mayor):</strong>{" "}
              desde los 65 años, sin importar los aportes. Equivale al 80% del
              haber mínimo e incluye cobertura de PAMI, pero es incompatible con
              otras jubilaciones o pensiones y exige requisitos de residencia en
              el país.
            </li>
          </ul>
          <p>
            Antes de elegir, conviene revisar la <strong>historia laboral</strong>{" "}
            en Mi ANSES. Es muy común encontrar años trabajados que no figuran:
            empleadores que retuvieron aportes y no los depositaron, trabajos
            en negro que se pueden probar o servicios en otras cajas que se
            pueden computar.
          </p>

          <h2>Pensión por fallecimiento</h2>
          <p>
            Cuando muere un jubilado o un trabajador en actividad, su familia
            puede pedir la pensión derivada. En líneas generales, tienen
            derecho:
          </p>
          <ul>
            <li>El cónyuge.</li>
            <li>
              El conviviente, si convivió al menos 5 años, o 2 años si tuvieron
              hijos en común.
            </li>
            <li>
              Los hijos solteros hasta los 18 años, y sin límite de edad si
              tienen una discapacidad que les impide trabajar.
            </li>
          </ul>
          <p>
            Probar la convivencia suele ser el punto más discutido: sirven
            informaciones sumarias, facturas a nombre de ambos, testigos y
            constancias de domicilio.
          </p>

          <h2>Retiro por invalidez</h2>
          <p>
            Lo puede pedir el trabajador en actividad que tenga una incapacidad
            física o intelectual del 66% o más que le impida trabajar. La
            evalúa una comisión médica, y es habitual que el porcentaje
            reconocido sea menor al real: en ese caso se puede cuestionar con
            estudios y dictámenes médicos.
          </p>

          <h2>Reclamos contra ANSES</h2>
          <p>Los motivos más comunes de reclamo son:</p>
          <ul>
            <li>Trámites rechazados o demorados sin explicación.</li>
            <li>Haberes mal calculados al momento de jubilarse.</li>
            <li>Aportes o servicios que ANSES no reconoce.</li>
            <li>Pensiones negadas por falta de prueba de la convivencia.</li>
          </ul>
          <p>
            Primero se reclama en sede administrativa y, si ANSES confirma su
            decisión, se puede demandar ante la <strong>justicia federal</strong>.
            Los plazos corren desde la notificación, así que no conviene dejar
            pasar el tiempo con una resolución en la mano.
          </p>

          <h2>Cómo te acompaña el Estudio Jurídico LCB</h2>
          <ul>
            <li>Revisión de la historia laboral y reconocimiento de servicios.</li>
            <li>Inicio y seguimiento de jubilaciones y pensiones.</li>
            <li>Prueba de convivencia para pensiones.</li>
            <li>Reclamos administrativos y judiciales contra ANSES.</li>
          </ul>
        </div>

        <ArticleFaqs faqs={faqs} />

        <ArticleCta
          title="¿Te falta poco para jubilarte o ANSES te rechazó un trámite?"
          text="Traé tu historia laboral de Mi ANSES o la resolución que recibiste. Revisamos tu caso y te decimos qué opciones tenés."
        />

        <RelatedArticles
          slugs={[
            "sucesion-herencia-jujuy",
            "tramites-administrativos-tributarios-jujuy",
            "primera-consulta-abogada-jujuy",
          ]}
        />
      </article>
    </main>
  );
}
