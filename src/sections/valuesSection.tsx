import Image from "next/image";

import Reveal from "@/components/reveal";
import SectionHeading from "@/components/sectionHeading";
import scalesPhoto from "../../public/plansbg.webp";

const values: { title: string; text: string }[] = [
  {
    title: "Compromiso con la excelencia",
    text: "Buscamos la excelencia en cada etapa de los procesos que gestionamos, desde la primera consulta hasta la resolución final. La calidad, la profundidad del análisis y la preparación meticulosa son nuestra norma.",
  },
  {
    title: "Empatía y cercanía",
    text: "Cada situación es única y merece ser escuchada. Nos involucramos con sensibilidad para comprender el contexto personal o empresarial y ofrecer un acompañamiento humano y respetuoso.",
  },
  {
    title: "Transparencia y comunicación",
    text: "Construimos relaciones de confianza con información clara, reportes periódicos y explicación de escenarios posibles. Queremos que tomes decisiones informadas en todo momento.",
  },
];

const ValuesSection = () => {
  return (
    <section
      id="Values"
      className="relative w-full overflow-hidden bg-slate-950 py-20 text-white lg:py-28"
    >
      <Image
        src={scalesPhoto}
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-10"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-14">
        <SectionHeading
          eyebrow="Cómo trabajamos"
          title="Nuestros valores"
          tone="dark"
        />

        <ol className="grid gap-12 md:grid-cols-3 md:gap-10">
          {values.map((value, index) => (
            <Reveal as="li" key={value.title} delay={index * 140}>
              <span className="font-serif text-6xl font-semibold text-amber-400/90">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span
                className="mt-4 block h-px w-full bg-white/15"
                aria-hidden="true"
              />
              <h3 className="mt-6 font-serif text-2xl font-semibold">
                {value.title}
              </h3>
              <p className="mt-3 text-base font-light leading-relaxed text-slate-300">
                {value.text}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ValuesSection;
