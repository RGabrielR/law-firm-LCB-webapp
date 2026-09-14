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

const article = articleMap["abogados-mineria-litio-jujuy"];

export const metadata: Metadata = createArticleMetadata(article);

const faqs: FaqItem[] = [
  {
    question: "Si hay minerales debajo de mi campo, ¿soy dueño de la mina?",
    answer:
      "En general no. Los minerales de primera y segunda categoría pertenecen al Estado provincial, que otorga concesiones a quien los descubre y cumple el procedimiento. La excepción son las canteras (áridos, piedras y materiales de construcción), que pertenecen al dueño del terreno. Como superficiario sí tenés derecho a ser indemnizado por el uso del suelo y los daños.",
  },
  {
    question: "¿Una empresa minera puede usar mi terreno sin mi permiso?",
    answer:
      "La autoridad minera puede constituir servidumbres sobre el terreno para caminos, instalaciones o uso de agua, pero siempre con indemnización previa. Antes de firmar un acuerdo o aceptar un monto conviene hacer valuar el daño y revisar el plazo, la superficie afectada y quién responde por la restauración.",
  },
  {
    question: "¿Se puede perder una concesión minera en Jujuy?",
    answer:
      "Sí. La concesión se mantiene pagando el canon minero y cumpliendo las obligaciones de inversión y actividad. La falta de pago o el abandono pueden llevar a la caducidad o la vacancia de la mina. Suele haber instancias para regularizar, pero con plazos que hay que controlar.",
  },
  {
    question: "¿Qué necesita un proveedor local para trabajar con empresas de litio?",
    answer:
      "Situación fiscal y previsional en regla, habilitaciones y seguros según la actividad, inscripción en los registros de proveedores de cada empresa y contratos claros sobre precio, plazos de pago, penalidades y responsabilidad por accidentes. Revisar el contrato antes de firmarlo evita la mayoría de los conflictos de cobro.",
  },
];

export default function MineriaLitioJujuyPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-6 py-20">
      <JsonLd data={createArticleSchema(article)} />
      <JsonLd
        data={createBreadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Artículos", path: "/articulos" },
          {
            name: "Guía de la minería jujeña",
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
          La minería del litio transformó la Puna jujeña y generó una red de
          empresas, proveedores, trabajadores, propietarios de campos y
          comunidades con derechos e intereses que necesitan respaldo legal.
          Esta guía explica cómo funciona el derecho minero en Jujuy, qué
          derechos tiene cada parte y cuándo conviene consultar a un abogado.
        </p>

        <div className={articleBodyClass}>
          <h2>La minería en Jujuy hoy</h2>
          <p>
            Los salares de <strong>Olaroz y Cauchari</strong> ubican a Jujuy
            entre los principales productores de litio del país, y en 2026 se
            aprobó la adhesión al RIGI de la ampliación de Cauchari-Olaroz, que
            busca más que duplicar su producción. Alrededor de esos proyectos
            trabajan transportistas, empresas de construcción, alquiler de
            equipos, catering, seguridad y servicios profesionales, muchos de
            ellos jujeños.
          </p>
          <p>
            La provincia declaró al litio{" "}
            <strong>recurso natural estratégico</strong> y participa en los
            proyectos a través de su empresa estatal JEMSE (Jujuy Energía y
            Minería Sociedad del Estado).
          </p>

          <h2>¿De quién son los minerales?</h2>
          <p>
            La Constitución Nacional reconoce a las provincias el dominio
            originario de los recursos naturales de su territorio (artículo
            124). El <strong>Código de Minería</strong> establece que la mina
            es un bien distinto del terreno donde se encuentra: el Estado
            otorga su explotación mediante concesiones, sin importar quién sea
            el dueño del campo.
          </p>
          <p>
            La gran excepción son las <strong>canteras</strong> (minerales de
            tercera categoría: áridos, arena, piedras y materiales de
            construcción), que pertenecen al propietario del suelo. Es un tema
            frecuente en los valles de la provincia, donde hay muchas
            extracciones de áridos.
          </p>

          <h2>La autoridad minera en Jujuy</h2>
          <p>
            Los pedimentos, permisos de exploración y concesiones tramitan ante
            el <strong>Juzgado Administrativo de Minas</strong> de la
            provincia, bajo el <strong>Código de Procedimientos Mineros</strong>{" "}
            de Jujuy (Ley 5186). Allí se verifica que el área esté libre, se
            publican las solicitudes en el Boletín Oficial, se resuelven las
            oposiciones y se otorgan o deniegan los derechos. También existe un
            Registro de Productores Mineros en el que deben inscribirse quienes
            explotan minas o canteras.
          </p>

          <h2>Etapas para obtener y conservar un derecho minero</h2>
          <ol>
            <li>
              <strong>Permiso de exploración o cateo</strong>: autoriza a
              buscar minerales en un área determinada por un plazo limitado.
            </li>
            <li>
              <strong>Manifestación de descubrimiento</strong>: se presenta
              cuando se encuentra un yacimiento.
            </li>
            <li>
              <strong>Labor legal y mensura</strong>: se demuestra el
              yacimiento y se delimita la pertenencia.
            </li>
            <li>
              <strong>Concesión</strong>: otorga el derecho a explotar la mina
              de forma exclusiva y por tiempo indeterminado, mientras se cumplan
              las obligaciones legales.
            </li>
          </ol>
          <p>
            Para conservar la concesión hay que pagar el{" "}
            <strong>canon minero</strong>, presentar y cumplir el plan de
            inversión y mantener actividad. Incumplir estas obligaciones puede
            provocar la caducidad y que la mina quede vacante para otro
            interesado. Las oposiciones y superposiciones de áreas entre
            distintos titulares también son una fuente habitual de litigios.
          </p>

          <h2>Ambiente y participación</h2>
          <p>
            Ninguna etapa minera puede comenzar sin la aprobación del{" "}
            <strong>Informe de Impacto Ambiental</strong> que exige el Código de
            Minería, que además debe actualizarse periódicamente. Se aplica
            también la <strong>Ley General del Ambiente (25.675)</strong>, que
            reconoce el derecho de las personas a ser informadas y a participar
            antes de decisiones que puedan afectar el ambiente. En la Puna, el
            uso del agua es uno de los puntos más sensibles de cada proyecto.
          </p>

          <h2>Derechos de los superficiarios</h2>
          <p>
            Si sos dueño o poseedor de un campo donde se desarrolla un proyecto
            minero, la ley permite constituir <strong>servidumbres</strong>{" "}
            para caminos, instalaciones, campamentos o uso de agua, pero con{" "}
            <strong>indemnización previa</strong> por el valor de lo afectado y
            los perjuicios. En la práctica, muchas veces se firman acuerdos
            directos con la empresa. Antes de firmar conviene revisar:
          </p>
          <ul>
            <li>Superficie afectada, plazo y posibilidad de renovación.</li>
            <li>Monto, forma de actualización y garantías de pago.</li>
            <li>Responsabilidad por daños, cercos, animales y aguadas.</li>
            <li>Obligación de restaurar el terreno al terminar.</li>
            <li>
              Qué pasa si el campo no tiene título perfecto o está en
              sucesión: sin resolverlo, cobrar o negociar se complica.
            </li>
          </ul>

          <h2>Comunidades indígenas</h2>
          <p>
            Buena parte de la Puna jujeña es territorio de comunidades
            originarias. La Constitución Nacional (artículo 75, inciso 17) y el{" "}
            <strong>Convenio 169 de la OIT</strong> (Ley 24.071) reconocen su
            derecho a la <strong>consulta libre, previa e informada</strong>{" "}
            sobre las medidas que las afecten y a participar en la gestión de
            sus recursos. Tanto para las comunidades como para las empresas,
            contar con acuerdos claros, documentados y cumplibles es la mejor
            protección frente a conflictos futuros.
          </p>

          <h2>Régimen de inversiones: Ley 24.196 y RIGI</h2>
          <p>
            La <strong>Ley 24.196 de Inversiones Mineras</strong> ofrece
            estabilidad fiscal por 30 años y fija que las regalías provinciales
            no pueden superar el 3% del valor en boca de mina. Para proyectos de
            gran escala, el{" "}
            <strong>
              Régimen de Incentivo para Grandes Inversiones (RIGI, Ley 27.742)
            </strong>{" "}
            suma beneficios fiscales, aduaneros y cambiarios. Entender qué
            alcanza cada régimen es clave para los inversores y también para
            sus contratistas.
          </p>

          <h2>Proveedores, contratistas y trabajadores mineros</h2>
          <p>
            La mayoría de las consultas no llegan de las grandes operadoras
            sino de quienes trabajan a su alrededor:
          </p>
          <ul>
            <li>
              <strong>Proveedores y contratistas</strong>: contratos de
              servicios, facturas impagas, penalidades, rescisiones anticipadas
              y seguros exigidos.
            </li>
            <li>
              <strong>Trabajadores</strong>: jornadas y turnos en altura,
              viáticos, accidentes y enfermedades laborales, despidos y
              diferencias salariales.
            </li>
            <li>
              <strong>Importación de equipos</strong>: regímenes temporarios y
              operaciones desde la Zona Franca Perico, que se consolida como
              centro de servicios para la minería del NOA.
            </li>
          </ul>

          <h2>Cómo te acompaña el Estudio Jurídico LCB</h2>
          <ul>
            <li>
              Trámites y oposiciones ante el Juzgado Administrativo de Minas.
            </li>
            <li>
              Negociación y revisión de acuerdos de servidumbre e
              indemnizaciones para superficiarios.
            </li>
            <li>
              Contratos de proveedores y contratistas, y reclamos de cobro.
            </li>
            <li>
              Regularización de títulos y sucesiones de campos involucrados en
              proyectos mineros.
            </li>
            <li>Reclamos laborales de trabajadores del sector.</li>
          </ul>
        </div>

        <ArticleFaqs faqs={faqs} />

        <ArticleCta
          title="¿Tenés un campo, una empresa o un reclamo vinculado a la minería?"
          text="Contanos tu situación y traé la documentación que tengas: títulos, acuerdos, notificaciones del Juzgado de Minas o contratos. Te orientamos sobre tus derechos y el camino a seguir."
        />

        <RelatedArticles
          slugs={[
            "abogados-comercio-exterior-aduana-jujuy",
            "sucesion-herencia-jujuy",
            "despido-injustificado-jujuy",
          ]}
        />
      </article>
    </main>
  );
}
