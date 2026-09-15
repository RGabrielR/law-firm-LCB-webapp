import Link from "next/link";
import { IoAdd } from "react-icons/io5";

import Reveal from "@/components/reveal";
import SectionHeading from "@/components/sectionHeading";
import { homeFaqs } from "@/lib/site";

const FaqSection = () => {
  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="flex flex-col gap-8 lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Preguntas frecuentes"
            title="Respuestas directas para quienes buscan asesoramiento legal en Jujuy"
            description="Las consultas más habituales que llegan al estudio, respondidas de forma simple antes de la primera reunión."
          />
          <Reveal delay={150}>
            <p className="text-base font-light leading-relaxed text-slate-600">
              Si tu consulta no aparece acá, revisá la página de{" "}
              <Link
                href="/abogados-en-jujuy"
                className="font-semibold text-amber-700 hover:text-amber-800"
              >
                abogados en Jujuy
              </Link>{" "}
              o escribinos por WhatsApp para ordenar el caso antes de la
              primera reunión.
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col border-t border-slate-200">
          {homeFaqs.map((faq, index) => (
            <Reveal key={faq.question} delay={Math.min(index, 4) * 60}>
              <details className="group border-b border-slate-200">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-lg font-semibold text-slate-950 transition hover:text-amber-700 [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <IoAdd
                    size={24}
                    className="mt-0.5 shrink-0 text-amber-500 transition-transform duration-300 group-open:rotate-45"
                    aria-hidden="true"
                  />
                </summary>
                <p className="pb-6 pr-10 text-base font-light leading-relaxed text-slate-600">
                  {faq.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
