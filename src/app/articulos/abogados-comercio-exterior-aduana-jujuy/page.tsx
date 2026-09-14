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

const article = articleMap["abogados-comercio-exterior-aduana-jujuy"];

export const metadata: Metadata = createArticleMetadata(article);

const faqs: FaqItem[] = [
  {
    question: "¿Necesito un abogado si ya trabajo con un despachante de aduana?",
    answer:
      "El despachante se ocupa de la operación aduanera. El abogado interviene cuando hay un conflicto o un riesgo legal: un sumario, una multa, un cargo por tributos, un secuestro de mercadería, un contrato con un proveedor del exterior o la planificación de un régimen especial. Lo ideal es que trabajen coordinados.",
  },
  {
    question: "¿Qué hago si me secuestraron mercadería en un control en Jujuy?",
    answer:
      "Pedí copia del acta, no firmes nada que no entiendas, juntá facturas, documentación de origen y comprobantes de pago, y consultá cuanto antes. Los plazos para presentar descargos y recursos en materia aduanera son cortos, y la estrategia cambia mucho si el caso se trata como infracción o como delito.",
  },
  {
    question: "¿Un monotributista puede importar desde Jujuy?",
    answer:
      "Para operar en el régimen general, ARCA exige en principio estar inscripto como responsable inscripto en IVA y Ganancias. Existen regímenes simplificados, como los envíos por courier, con límites de valor y cantidad. Conviene analizar cada caso antes de comprar la mercadería.",
  },
  {
    question: "¿Qué ventaja tiene operar desde la Zona Franca Perico?",
    answer:
      "Mientras la mercadería permanece dentro de una zona franca no paga los tributos de importación; se pagan recién cuando ingresa al resto del país. Además, Perico está cerca de los proyectos mineros y de las rutas hacia Chile y Bolivia. Hay que cumplir el reglamento de la zona y los requisitos para ser usuario.",
  },
];

export default function ComercioExteriorAduanaJujuyPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-6 py-20">
      <JsonLd data={createArticleSchema(article)} />
      <JsonLd
        data={createBreadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Artículos", path: "/articulos" },
          {
            name: "Guía del comercio exterior jujeño",
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
          Jujuy es frontera con Bolivia y Chile, puerta de salida del litio y
          de la producción agroindustrial del norte. Por eso muchas empresas,
          comerciantes y proveedores de la provincia importan o exportan todos
          los días. En esta guía te explicamos cómo funciona el sistema
          aduanero, qué problemas legales aparecen con más frecuencia y cómo
          defenderte si la Aduana te aplica una multa o te retiene mercadería.
        </p>

        <div className={articleBodyClass}>
          <h2>Por qué el comercio exterior pesa tanto en Jujuy</h2>
          <p>
            Pocas provincias concentran tantas vías de entrada y salida de
            mercadería. Jujuy tiene el paso internacional{" "}
            <strong>La Quiaca–Villazón</strong> hacia Bolivia y el{" "}
            <strong>Paso de Jama</strong> hacia Chile, parte del corredor que
            conecta el norte argentino con los puertos del Pacífico. A eso se
            suman:
          </p>
          <ul>
            <li>
              <strong>La minería del litio</strong>, que importa maquinaria,
              insumos y repuestos y exporta carbonato de litio.
            </li>
            <li>
              <strong>La agroindustria</strong>: tabaco, azúcar, frutas y
              hortalizas que salen al exterior.
            </li>
            <li>
              <strong>La Zona Franca Perico</strong>, ubicada junto al parque
              industrial de Perico, que ya funciona con empresas usuarias y
              apunta a convertirse en centro logístico de los proveedores
              mineros del NOA.
            </li>
            <li>
              <strong>El comercio fronterizo</strong> de pequeños y medianos
              comerciantes, donde se concentran muchos de los conflictos con la
              Aduana.
            </li>
          </ul>

          <h2>Marco legal: Código Aduanero y ARCA</h2>
          <p>
            La norma central es el <strong>Código Aduanero (Ley 22.415)</strong>
            , que regula las destinaciones de importación y exportación, los
            tributos, los regímenes especiales, las infracciones y los delitos
            aduaneros. La Dirección General de Aduanas depende de{" "}
            <strong>ARCA</strong> (Agencia de Recaudación y Control Aduanero,
            ex AFIP), que dicta buena parte de las reglas operativas.
          </p>
          <p>
            Esas reglas cambian seguido. Por ejemplo, el Sistema Estadístico de
            Importaciones (SEDI), que era obligatorio para importar, fue
            eliminado en 2025. Por eso, antes de cada operación importante
            conviene verificar la normativa vigente y no guiarse por cómo se
            hacía el año anterior.
          </p>

          <h2>Cómo empezar a importar o exportar desde Jujuy</h2>
          <ol>
            <li>
              <strong>Situación fiscal en regla</strong>: CUIT, clave fiscal y,
              para el régimen general, inscripción como responsable inscripto
              en IVA y Ganancias.
            </li>
            <li>
              <strong>Alta en el perfil de importador/exportador</strong> ante
              ARCA. Desde la Resolución General 5472/2023 el trámite se
              simplificó y ya no exige acreditar solvencia ni constituir una
              garantía.
            </li>
            <li>
              <strong>Domicilio electrónico aduanero</strong>: las
              notificaciones llegan por vía electrónica y ARCA exige a
              distintos operadores registrarse en el sistema SICNEA. Una
              notificación que nadie lee puede hacer vencer un plazo.
            </li>
            <li>
              <strong>Despachante de aduana</strong> que documente las
              operaciones.
            </li>
            <li>
              <strong>Clasificación arancelaria y valor</strong> correctos de
              la mercadería: son la fuente más común de multas.
            </li>
            <li>
              <strong>Intervenciones de otros organismos</strong> según el
              producto (por ejemplo SENASA para alimentos y productos de origen
              vegetal o animal, o ANMAT para productos médicos y cosméticos).
            </li>
          </ol>

          <h2>Regímenes especiales que conviene conocer</h2>
          <h3>Importación temporaria</h3>
          <p>
            Permite ingresar mercadería sin pagar los tributos de importación,
            con la obligación de reexportarla o destinarla en un plazo
            determinado. Es muy usada para maquinaria y equipos de obras y
            proyectos mineros. Vencer el plazo o darle otro destino genera
            cargos tributarios y multas.
          </p>
          <h3>Zona franca</h3>
          <p>
            La mercadería que ingresa a la Zona Franca Perico puede almacenarse,
            fraccionarse o transformarse sin pagar tributos de importación
            mientras permanezca allí. Los tributos se pagan cuando ingresa al
            resto del territorio. Ser usuario implica cumplir el reglamento de
            la zona y los controles aduaneros propios de este régimen.
          </p>
          <h3>RIGI para grandes inversiones</h3>
          <p>
            El Régimen de Incentivo para Grandes Inversiones (Ley 27.742)
            otorga, entre otros beneficios, ventajas aduaneras para importar
            bienes de capital. Ya hay proyectos de litio en Jujuy adheridos. Sus
            proveedores y contratistas también necesitan entender qué alcanza
            el beneficio y qué no.
          </p>
          <h3>Tráfico vecinal fronterizo y equipaje</h3>
          <p>
            Quienes viven cerca de la frontera o viajan tienen franquicias
            limitadas. Superar esos límites o ingresar mercadería con fines
            comerciales bajo estos regímenes puede configurar una infracción o
            un delito.
          </p>

          <h2>Problemas legales más frecuentes con la Aduana</h2>
          <h3>Secuestro o interdicción de mercadería</h3>
          <p>
            Es habitual en los controles sobre las rutas nacionales 9 y 34 y en
            los pasos fronterizos. La mercadería queda retenida hasta que se
            acredita su origen legal. Lo que se declare y firme en el acta
            inicial condiciona toda la defensa posterior.
          </p>
          <h3>Declaración inexacta</h3>
          <p>
            El Código Aduanero sanciona las diferencias entre lo declarado y lo
            que surge de la verificación en cantidad, calidad, especie, valor o
            clasificación arancelaria (artículo 954 y siguientes). Las multas
            se calculan sobre el perjuicio fiscal y pueden ser muy altas en
            relación al valor de la operación.
          </p>
          <h3>Contrabando</h3>
          <p>
            El contrabando es un delito (artículos 863 y siguientes) que tramita
            ante la justicia federal. Cuando el valor de la mercadería no supera
            ciertos montos, puede tratarse como contrabando menor, que se
            sanciona como infracción. Encuadrar bien el caso desde el principio
            cambia completamente las consecuencias.
          </p>
          <h3>Cargos tributarios y reclamos de devolución</h3>
          <p>
            La Aduana puede formular cargos por tributos que considera mal
            liquidados, y el importador o exportador puede reclamar la
            devolución de lo que pagó de más.
          </p>
          <h3>Conflictos con proveedores o clientes del exterior</h3>
          <p>
            Mercadería que no llega o llega distinta, pagos anticipados sin
            respaldo, Incoterms mal elegidos o contratos que remiten a
            tribunales de otro país. Un contrato bien redactado antes de operar
            evita la mayoría de estos problemas.
          </p>

          <h2>Ojo con los plazos</h2>
          <p>
            En materia aduanera los plazos son breves. En muchos casos hay{" "}
            <strong>15 días hábiles</strong> desde la notificación para
            recurrir una resolución ante el Tribunal Fiscal de la Nación o la
            justicia. Si recibís una vista, un cargo o una resolución
            condenatoria, consultá de inmediato: un plazo vencido suele dejar
            firme la multa.
          </p>

          <h2>Cómo te acompaña el Estudio Jurídico LCB</h2>
          <ul>
            <li>
              <strong>Prevención</strong>: revisión de contratos
              internacionales, términos de pago y regímenes aduaneros antes de
              operar.
            </li>
            <li>
              <strong>Defensa en sumarios aduaneros</strong>, descargos,
              ofrecimiento de prueba y recursos.
            </li>
            <li>
              <strong>Secuestro de mercadería</strong>: pedidos de devolución y
              acreditación del origen legal.
            </li>
            <li>
              <strong>Empresas y proveedores</strong> que operan desde la Zona
              Franca Perico o trabajan con proyectos mineros.
            </li>
            <li>
              Coordinación con despachantes de aduana y contadores para que la
              estrategia legal y la operativa vayan en la misma dirección.
            </li>
          </ul>
        </div>

        <ArticleFaqs faqs={faqs} />

        <ArticleCta
          title="¿Tenés un problema con la Aduana o vas a empezar a importar?"
          text="Escribí al estudio con la documentación que tengas (actas, facturas, notificaciones de ARCA). Analizamos el caso y te decimos cuál es el próximo paso y qué plazos corren."
        />

        <RelatedArticles
          slugs={[
            "abogados-mineria-litio-jujuy",
            "abogados-productores-tabacaleros-jujuy",
            "migracion-extranjeros-jujuy",
          ]}
        />
      </article>
    </main>
  );
}
