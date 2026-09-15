import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import Reveal from "@/components/reveal";
import SectionHeading from "@/components/sectionHeading";
import signingPhoto from "../../public/hero-consulta.webp";
import justicePhoto from "../../public/herobg.webp";
import libraryPhoto from "../../public/valuesbg.webp";

const services: { title: string; text: string; href: string }[] = [
  {
    title: "Consultas legales presenciales y online",
    text: "Diagnóstico integral y orientación clara para resolver dudas legales urgentes o planificar estrategias a largo plazo desde cualquier lugar.",
    href: "/articulos/primera-consulta-abogada-jujuy",
  },
  {
    title: "Representación en litigios",
    text: "Defensa estratégica en juicios nuevos o en curso, con enfoque en resultados y comunicación permanente sobre cada avance.",
    href: "/articulos/como-es-un-juicio-en-jujuy",
  },
  {
    title: "Trámites administrativos y tributarios",
    text: "Gestión completa frente a organismos públicos y entidades fiscales, optimizando tiempos y reduciendo contingencias.",
    href: "/articulos/tramites-administrativos-tributarios-jujuy",
  },
  {
    title: "Derecho previsional",
    text: "Acompañamiento en trámites jubilatorios y pensiones para garantizar el acceso efectivo a los beneficios adquiridos.",
    href: "/articulos/jubilacion-pension-anses-jujuy",
  },
  {
    title: "Sucesiones y derecho de familia",
    text: "Asesoramiento integral para sucesiones, particiones y acuerdos familiares con una mirada empática y ordenada.",
    href: "/articulos/sucesion-herencia-jujuy",
  },
  {
    title: "Mediación y arbitraje",
    text: "Resolución alternativa de conflictos para alcanzar acuerdos eficientes y evitar procesos judiciales prolongados.",
    href: "/articulos/mediacion-jujuy",
  },
  {
    title: "Comercio exterior y aduana",
    text: "Asesoramiento a importadores y exportadores de Jujuy: secuestro de mercadería, multas y sumarios aduaneros, contratos internacionales y Zona Franca Perico.",
    href: "/articulos/abogados-comercio-exterior-aduana-jujuy",
  },
  {
    title: "Derecho minero y litio",
    text: "Trámites ante el Juzgado Administrativo de Minas, servidumbres e indemnizaciones para superficiarios y contratos de proveedores de la minería.",
    href: "/articulos/abogados-mineria-litio-jujuy",
  },
  {
    title: "Productores tabacaleros",
    text: "Reclamos por el Fondo Especial del Tabaco, liquidaciones de acopio, arriendos de fincas, trabajadores rurales y sucesiones del campo.",
    href: "/articulos/abogados-productores-tabacaleros-jujuy",
  },
];

const featured: {
  eyebrow: string;
  title: string;
  text: string;
  href: string;
  image: StaticImageData;
}[] = [
  {
    eyebrow: "Familia",
    title: "Divorcios, acuerdos y sucesiones",
    text: "Momentos difíciles que necesitan orden y cercanía: convenios de divorcio, cuota alimentaria, declaratoria de herederos y partición de bienes.",
    href: "/articulos/sucesion-herencia-jujuy",
    image: libraryPhoto,
  },
  {
    eyebrow: "Trabajo",
    title: "Despidos y reclamos laborales",
    text: "Revisamos tu liquidación, el telegrama y los plazos para reclamar la indemnización que corresponde, con las reglas vigentes.",
    href: "/articulos/despido-injustificado-jujuy",
    image: signingPhoto,
  },
  {
    eyebrow: "Economía de Jujuy",
    title: "Comercio exterior, minería y tabaco",
    text: "Acompañamos a importadores, exportadores, superficiarios, proveedores de la minería y productores tabacaleros de la provincia.",
    href: "/articulos/abogados-comercio-exterior-aduana-jujuy",
    image: justicePhoto,
  },
];

const ServicesSection = () => {
  return (
    <section id="Services" className="w-full bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-14">
        <SectionHeading
          eyebrow="Servicios"
          title="Servicios legales en Jujuy para problemas urgentes y decisiones clave"
          description="El estudio trabaja casos de derecho civil, laboral, previsional y familiar, y acompaña a los sectores que mueven la economía de la provincia: comercio exterior, minería y tabaco. Procesos claros, tiempos de respuesta razonables y una estrategia adaptada a cada caso."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={(index % 3) * 110} className="h-full">
              <Link
                href={service.href}
                className="group relative flex h-full flex-col gap-3 overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1.5 hover:border-amber-300 hover:shadow-xl hover:shadow-slate-200"
              >
                <span
                  className="absolute left-0 top-0 h-1 w-12 bg-amber-400 transition-all duration-500 group-hover:w-full"
                  aria-hidden="true"
                />
                <h3 className="font-serif text-xl font-semibold text-slate-950">
                  {service.title}
                </h3>
                <p className="text-sm font-light leading-relaxed text-slate-600">
                  {service.text}
                </p>
                <span className="mt-auto pt-2 text-sm font-semibold text-amber-700 transition group-hover:translate-x-1">
                  Leer la guía →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="flex flex-col gap-6">
          {featured.map((item, index) => (
            <Reveal
              key={item.title}
              from={index % 2 === 0 ? "left" : "right"}
              className="group relative overflow-hidden rounded-3xl bg-slate-950"
            >
              <Image
                src={item.image}
                alt=""
                fill
                sizes="(min-width: 1152px) 1152px, 100vw"
                className="scale-110 object-cover opacity-50 blur-[2px] transition duration-700 group-hover:scale-105"
                aria-hidden="true"
              />
              <div
                className={`absolute inset-0 ${
                  index % 2 === 0
                    ? "bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/20"
                    : "bg-gradient-to-l from-slate-950 via-slate-950/80 to-slate-950/20"
                }`}
                aria-hidden="true"
              />
              <div
                className={`relative flex max-w-xl flex-col gap-4 p-8 text-white sm:p-12 ${
                  index % 2 === 0 ? "" : "md:ml-auto"
                }`}
              >
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">
                  {item.eyebrow}
                </span>
                <h3 className="font-serif text-3xl font-semibold leading-tight sm:text-4xl">
                  {item.title}
                </h3>
                <span
                  className="block h-1 w-12 rounded-full bg-amber-400"
                  aria-hidden="true"
                />
                <p className="text-base font-light leading-relaxed text-slate-200">
                  {item.text}
                </p>
                <Link
                  href={item.href}
                  className="mt-2 inline-flex w-fit items-center rounded-full border border-amber-400 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-amber-300 transition hover:bg-amber-400 hover:text-slate-950"
                >
                  Leer la guía
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
