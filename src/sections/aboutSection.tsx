import Image from "next/image";
import Link from "next/link";
import { IoCheckmarkCircle } from "react-icons/io5";
import { TbTargetArrow } from "react-icons/tb";

import Reveal from "@/components/reveal";
import SectionHeading from "@/components/sectionHeading";
import libraryPhoto from "../../public/valuesbg.webp";

const identity = [
  "Atención personalizada, presencial o a distancia",
  "Explicaciones en lenguaje claro",
  "Seguimiento real de cada expediente",
  "Presupuesto claro y por escrito",
];

const AboutSection = () => {
  return (
    <section id="About" className="w-full bg-white py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <Reveal from="left" className="relative mx-auto w-full max-w-md pb-16 lg:max-w-none">
          <div
            className="absolute -right-3 top-6 h-[calc(100%-4rem)] w-full rounded-[2rem] bg-amber-400 sm:-right-6"
            aria-hidden="true"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-xl">
            <Image
              src={libraryPhoto}
              alt="Biblioteca jurídica del Estudio Jurídico LCB en San Salvador de Jujuy"
              fill
              sizes="(min-width: 1024px) 540px, 90vw"
              className="object-cover"
            />
          </div>

          <Reveal
            delay={250}
            className="absolute bottom-0 left-4 right-4 rounded-2xl bg-slate-950 p-6 text-white shadow-2xl sm:left-10 sm:right-auto sm:max-w-sm"
          >
            <span className="flex items-center gap-3 font-serif text-xl font-semibold text-amber-300">
              <TbTargetArrow size={28} aria-hidden="true" /> Nuestra misión
            </span>
            <p className="mt-3 text-sm font-light leading-relaxed text-slate-200">
              Soluciones legales claras, efectivas y humanas para cada cliente
              en Jujuy: que entiendas el escenario, conozcas los riesgos y
              decidas con respaldo jurídico desde el primer paso.
            </p>
          </Reveal>
        </Reveal>

        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="Sobre el estudio"
            title="Abogada en San Salvador de Jujuy con estrategia y trato cercano"
            description="Si buscás abogados en Jujuy para resolver una situación familiar, laboral o patrimonial, el estudio acompaña a personas, familias y empresas con estrategias personalizadas, comunicación transparente y foco real en proteger tus intereses."
          />

          <ul className="grid gap-3 sm:grid-cols-2">
            {identity.map((item, index) => (
              <Reveal
                as="li"
                key={item}
                delay={index * 90}
                className="flex items-start gap-3 text-base text-slate-700"
              >
                <IoCheckmarkCircle
                  className="mt-0.5 shrink-0 text-amber-500"
                  size={22}
                  aria-hidden="true"
                />
                {item}
              </Reveal>
            ))}
          </ul>

          <Reveal delay={200}>
            <Link
              href="/#Services"
              className="inline-flex items-center gap-2 border-b-2 border-amber-400 pb-1 font-semibold text-slate-950 transition hover:gap-3 hover:text-amber-700"
            >
              Conocé en qué te podemos ayudar →
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
