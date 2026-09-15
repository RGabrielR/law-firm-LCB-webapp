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

const article = articleMap["tramites-administrativos-tributarios-jujuy"];

export const metadata: Metadata = createArticleMetadata(article);

const faqs: FaqItem[] = [
  {
    question: "Me llegó una determinación de deuda de Rentas de Jujuy, ¿qué hago?",
    answer:
      "Fijate la fecha en que te notificaron. Según el Código Fiscal de Jujuy, tenés 15 días para presentar un recurso de reconsideración ante la Dirección Provincial de Rentas. Si no lo hacés, la determinación queda firme y pueden iniciarte una ejecución fiscal.",
  },
  {
    question: "¿Cuánto tiempo tengo para recurrir una decisión de un organismo provincial?",
    answer:
      "Los plazos de la Ley 1.886 de procedimiento administrativo son muy cortos: 5 días para el recurso de revocatoria y 10 días hábiles para el jerárquico, contados desde la notificación. Son improrrogables, así que conviene consultar enseguida.",
  },
  {
    question: "¿Puedo discutir una multa de ARCA?",
    answer:
      "Sí. Contra las determinaciones de impuestos y multas de ARCA se puede presentar recurso de reconsideración ante el mismo organismo o, según el caso, apelación ante el Tribunal Fiscal de la Nación, en general dentro de los 15 días hábiles de notificado.",
  },
  {
    question: "Ya me embargaron la cuenta por una deuda fiscal, ¿se puede hacer algo?",
    answer:
      "Sí. Se puede revisar si la deuda está bien calculada, si está prescripta o si hubo errores en el procedimiento, y plantear las defensas en la ejecución fiscal. También se puede negociar un plan de pagos para levantar el embargo.",
  },
];

export default function TramitesAdministrativosTributariosJujuyPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-6 py-20">
      <JsonLd data={createArticleSchema(article)} />
      <JsonLd
        data={createBreadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Artículos", path: "/articulos" },
          {
            name: "Reclamos ante el Estado en Jujuy",
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
          Una intimación de Rentas, una multa de ARCA, una habilitación
          municipal rechazada o un sumario en la administración pública tienen
          algo en común: los plazos para defenderse son cortos y, si se pierden,
          la decisión queda firme. Esta guía explica cómo reclamar ante el
          Estado en Jujuy.
        </p>

        <div className={articleBodyClass}>
          <h2>Con quién te podés encontrar</h2>
          <ul>
            <li>
              <strong>Dirección Provincial de Rentas de Jujuy:</strong> Ingresos
              Brutos, Impuesto Inmobiliario, Sellos y planes de pago.
            </li>
            <li>
              <strong>ARCA (ex AFIP):</strong> impuestos nacionales, monotributo,
              aportes y comercio exterior.
            </li>
            <li>
              <strong>Municipios:</strong> tasas, habilitaciones comerciales,
              multas de tránsito y obras.
            </li>
            <li>
              <strong>Organismos provinciales:</strong> ministerios, empresas y
              entes del Estado, y la propia administración como empleadora.
            </li>
          </ul>

          <h2>Los plazos: lo más importante</h2>
          <p>
            En la administración pública de Jujuy rige la{" "}
            <strong>Ley 1.886 de procedimiento administrativo</strong>. Sus
            plazos para recurrir son perentorios: si vencen, el derecho se
            pierde.
          </p>
          <ul>
            <li>
              <strong>Recurso de revocatoria:</strong> 5 días desde la
              notificación, ante la misma autoridad que dictó el acto.
            </li>
            <li>
              <strong>Recurso jerárquico:</strong> 10 días hábiles desde la
              notificación, ante el superior del funcionario que decidió. Si la
              revocatoria no se resuelve a tiempo, se entiende rechazada y se
              puede pasar al jerárquico.
            </li>
          </ul>
          <p>
            En materia de impuestos provinciales, el{" "}
            <strong>Código Fiscal de Jujuy (Ley 5.791)</strong> prevé 15 días
            para presentar el <strong>recurso de reconsideración</strong> ante
            la Dirección Provincial de Rentas contra determinaciones de deuda,
            multas o rechazos de exenciones.
          </p>
          <p>
            Para impuestos nacionales, contra ARCA se puede ir por
            reconsideración ante el mismo organismo o, en ciertos casos, apelar
            ante el <strong>Tribunal Fiscal de la Nación</strong>, en general
            dentro de los 15 días hábiles.
          </p>

          <h2>Paso a paso para reclamar</h2>
          <ol>
            <li>
              <strong>Anotá la fecha de notificación.</strong> Desde ahí corren
              los plazos.
            </li>
            <li>
              <strong>Pedí ver el expediente</strong> si no sabés de dónde sale
              la deuda o la multa.
            </li>
            <li>
              <strong>Presentá el recurso por escrito</strong>, con todos los
              argumentos y la prueba. En los recursos fiscales, lo que no se
              plantea a tiempo después cuesta mucho incorporarlo.
            </li>
            <li>
              <strong>Guardá la constancia</strong> de presentación con sello o
              comprobante digital.
            </li>
            <li>
              <strong>Si el Estado confirma su decisión</strong>, queda abierta
              la vía judicial: en Jujuy, la demanda contencioso administrativa
              según la Ley 1.888.
            </li>
          </ol>

          <h2>Ejecuciones fiscales y embargos</h2>
          <p>
            Cuando una deuda queda firme, el organismo puede iniciar una{" "}
            <strong>ejecución fiscal</strong> y pedir embargos sobre cuentas o
            bienes. Aun así hay defensas posibles: prescripción, pago previo,
            errores en el cálculo o en la notificación. Muchas veces también se
            puede negociar un plan de pagos para levantar el embargo y seguir
            trabajando.
          </p>

          <h2>Cómo te acompaña el Estudio Jurídico LCB</h2>
          <ul>
            <li>Recursos ante Rentas de Jujuy, ARCA y municipios.</li>
            <li>Defensa en multas, clausuras y sumarios.</li>
            <li>Ejecuciones fiscales, embargos y planes de pago.</li>
            <li>Reclamos de empleados públicos y demandas contra el Estado.</li>
            <li>
              Habilitaciones y trámites para comercios y empresas, incluidos
              los de{" "}
              <Link
                href="/articulos/abogados-comercio-exterior-aduana-jujuy"
                className="font-semibold text-amber-700 underline hover:text-amber-800"
              >
                comercio exterior
              </Link>
              .
            </li>
          </ul>
        </div>

        <ArticleFaqs faqs={faqs} />

        <ArticleCta
          title="¿Recibiste una intimación, multa o resolución?"
          text="Mandanos la notificación con la fecha en que la recibiste. Revisamos si estás a tiempo de recurrir y cuál es la mejor defensa."
        />

        <RelatedArticles
          slugs={[
            "abogados-comercio-exterior-aduana-jujuy",
            "jubilacion-pension-anses-jujuy",
            "como-es-un-juicio-en-jujuy",
          ]}
        />
      </article>
    </main>
  );
}
