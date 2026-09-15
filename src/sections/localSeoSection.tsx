import Link from "next/link";
import {
  IoCallOutline,
  IoChevronForward,
  IoLogoWhatsapp,
  IoVideocamOutline,
} from "react-icons/io5";

import { practiceAreas, serviceAreas, siteConfig } from "@/lib/site";

// Cada área enlaza a su guía; las que no tienen guía quedan como etiqueta.
const areaGuides: Record<string, string> = {
  "Derecho de familia": "/articulos/divorcio-en-jujuy",
  "Sucesiones y herencias": "/articulos/sucesion-herencia-jujuy",
  "Derecho laboral": "/articulos/despido-injustificado-jujuy",
  "Derecho civil": "/articulos/como-es-un-juicio-en-jujuy",
  "Mediación y arbitraje": "/articulos/mediacion-jujuy",
  "Derecho previsional": "/articulos/jubilacion-pension-anses-jujuy",
  "Trámites administrativos y tributarios":
    "/articulos/tramites-administrativos-tributarios-jujuy",
  "Comercio exterior y aduana":
    "/articulos/abogados-comercio-exterior-aduana-jujuy",
  "Derecho minero": "/articulos/abogados-mineria-litio-jujuy",
  "Derecho agrario y tabacalero":
    "/articulos/abogados-productores-tabacaleros-jujuy",
};

const remoteChannels = [
  { label: "Teléfono", icon: IoCallOutline },
  { label: "Videollamada", icon: IoVideocamOutline },
  { label: "WhatsApp", icon: IoLogoWhatsapp },
];

const LocalSeoSection = () => {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-20 xl:max-w-[1380px]">
      <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-2xl lg:p-12">
        <span className="text-xs font-semibold uppercase tracking-[0.45em] text-amber-300">
          Atención en Jujuy
        </span>
        <h2 className="mt-4 max-w-4xl text-3xl font-black leading-tight sm:text-4xl">
          Abogada en Jujuy para familia, sucesiones, despidos, comercio
          exterior, minería y tabaco
        </h2>
        <p className="mt-4 max-w-4xl text-base font-light leading-relaxed text-slate-200 md:text-lg">
          Si buscás abogados en Jujuy, necesitás una respuesta clara desde el
          primer contacto. El Estudio Jurídico LCB atiende en su oficina de San
          Salvador de Jujuy y acompaña casos de toda la provincia, con foco en
          estrategia, documentación y seguimiento real del expediente.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="flex flex-col rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-white">
              Áreas en las que nos especializamos
            </h3>
            <p className="mt-2 text-sm font-light leading-relaxed text-slate-300">
              Tocá un área para leer la guía y conocer cómo trabajamos cada
              tema.
            </p>
            <ul className="mt-5 grid flex-1 content-start gap-3 sm:grid-cols-2">
              {practiceAreas.map((area) => {
                const href = areaGuides[area];
                const chipClass =
                  "flex h-full items-center justify-between gap-3 rounded-2xl border border-amber-300/30 bg-amber-300/10 px-4 py-3 text-sm font-medium text-amber-100 md:text-base";

                return (
                  <li key={area}>
                    {href ? (
                      <Link
                        href={href}
                        className={`${chipClass} transition hover:border-amber-300/70 hover:bg-amber-300/20 hover:text-white`}
                      >
                        {area}
                        <IoChevronForward
                          className="shrink-0 text-amber-300"
                          aria-hidden="true"
                        />
                      </Link>
                    ) : (
                      <span className={chipClass}>{area}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-6">
            <div>
              <h3 className="text-xl font-semibold text-white">
                Oficina en San Salvador de Jujuy
              </h3>
              <p className="mt-2 text-sm font-light leading-relaxed text-slate-300">
                Atendemos en {siteConfig.address.streetAddress} y consultas de
                toda la provincia, con traslados cuando el caso lo requiere.
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm font-light text-slate-200">
                {serviceAreas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-amber-300/20 bg-amber-300/5 p-5">
              <h4 className="text-base font-semibold text-white">
                ¿Estás fuera de San Salvador de Jujuy?
              </h4>
              <p className="mt-2 text-sm font-light leading-relaxed text-slate-300">
                No hace falta viajar para la primera consulta: la hacemos por
                teléfono, videollamada, WhatsApp o el medio que te quede más
                cómodo.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {remoteChannels.map(({ label, icon: Icon }) => (
                  <span
                    key={label}
                    className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm text-slate-100"
                  >
                    <Icon className="text-amber-300" aria-hidden="true" />
                    {label}
                  </span>
                ))}
              </div>
            </div>
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
