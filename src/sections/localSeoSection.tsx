import Link from "next/link";

import { practiceAreas, serviceAreas } from "@/lib/site";

const LocalSeoSection = () => {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-20 xl:max-w-[1380px]">
      <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-2xl lg:p-12">
        <span className="text-xs font-semibold uppercase tracking-[0.45em] text-amber-300">
          SEO local
        </span>
        <h2 className="mt-4 max-w-4xl text-3xl font-black leading-tight sm:text-4xl">
          Abogada en Jujuy para familia, sucesiones, despidos y conflictos
          civiles
        </h2>
        <p className="mt-4 max-w-4xl text-base font-light leading-relaxed text-slate-200 md:text-lg">
          Si buscás abogados en Jujuy, necesitás una respuesta clara desde el
          primer contacto. El Estudio Jurídico Baiud acompaña consultas
          presenciales en San Salvador de Jujuy y también casos de otras
          localidades de la provincia, con foco en estrategia, documentación y
          seguimiento real del expediente.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-white">
              Áreas legales con mayor demanda
            </h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {practiceAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-sm text-amber-100"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-white">
              Zonas de atención
            </h3>
            <ul className="mt-4 space-y-2 text-sm font-light text-slate-200">
              {serviceAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/abogados-en-jujuy"
            className="rounded-full border border-amber-400/60 bg-amber-400/90 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-amber-300"
          >
            Ver página de abogados en Jujuy
          </Link>
          <Link
            href="/articulos"
            className="rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/15"
          >
            Leer artículos legales
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LocalSeoSection;
