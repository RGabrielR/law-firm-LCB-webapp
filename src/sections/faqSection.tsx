import Link from "next/link";

import { homeFaqs } from "@/lib/site";

const FaqSection = () => {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-20 xl:max-w-[1380px]">
      <div className="flex flex-col gap-4 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.45em] text-amber-500">
          Preguntas frecuentes
        </span>
        <h2 className="text-3xl font-black text-slate-950 sm:text-4xl">
          Respuestas directas para quienes buscan asesoramiento legal en Jujuy
        </h2>
        <p className="mx-auto max-w-3xl text-base font-light leading-relaxed text-slate-600 md:text-lg">
          Esta sección refuerza las consultas más habituales que llegan al
          estudio y ayuda a que Google entienda mejor qué problemas legales
          resuelve el sitio.
        </p>
      </div>

      <div className="grid gap-4">
        {homeFaqs.map((faq) => (
          <details
            key={faq.question}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition open:shadow-lg"
          >
            <summary className="cursor-pointer list-none text-lg font-semibold text-slate-950">
              {faq.question}
            </summary>
            <p className="mt-4 text-sm font-light leading-relaxed text-slate-600 md:text-base">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>

      <div className="rounded-3xl bg-amber-50 p-8 text-center">
        <p className="text-base font-light leading-relaxed text-slate-700">
          Si tu consulta no aparece acá, podés revisar la página específica de{" "}
          <Link
            href="/abogados-en-jujuy"
            className="font-semibold text-amber-700 hover:text-amber-800"
          >
            abogados en Jujuy
          </Link>{" "}
          o escribir por WhatsApp para ordenar el caso antes de la primera
          reunión.
        </p>
      </div>
    </section>
  );
};

export default FaqSection;
