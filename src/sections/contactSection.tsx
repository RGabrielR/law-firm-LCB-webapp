"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";
import { IoLogoWhatsapp } from "react-icons/io5";

import Reveal from "@/components/reveal";
import { siteConfig } from "@/lib/site";

const ContactMap = dynamic(() => import("@/components/contact/ContactMap"), {
  ssr: false,
  loading: () => (
    <div className="h-full min-h-[320px] w-full animate-pulse bg-slate-200" />
  ),
});

const ContactSection = () => {
  useEffect(() => {
    const registerVisit = async () => {
      try {
        const response = await fetch("/api/visits", { method: "POST" });
        await response.json();
      } catch (error) {
        console.error("No se pudo actualizar el contador de visitas", error);
      }
    };

    void registerVisit();
  }, []);

  return (
    <section id="Contact" className="w-full bg-slate-50 py-20 lg:py-28">
      <Reveal className="mx-auto grid w-full max-w-6xl overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-slate-200 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-8 bg-amber-400 p-8 text-slate-950 sm:p-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-900">
              Contacto
            </span>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              Empecemos a conversar
            </h2>
            <span
              className="mt-6 block h-1 w-14 rounded-full bg-slate-950"
              aria-hidden="true"
            />
            <p className="mt-6 max-w-md text-base leading-relaxed text-amber-950/90 md:text-lg">
              Consultá con la Dra. Lidia Cristina Baiud: contanos tu situación
              por WhatsApp y coordinamos una consulta presencial en San
              Salvador de Jujuy o a distancia.
            </p>
          </div>

          <a
            href={siteConfig.social.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-14 w-full items-center justify-center gap-3 rounded-full bg-slate-950 px-8 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 sm:w-fit"
          >
            <IoLogoWhatsapp size={22} aria-hidden="true" />
            Escribinos por WhatsApp
          </a>

          <ul className="flex flex-col gap-4 text-base text-amber-950">
            <li className="flex items-start gap-3">
              <HiLocationMarker size={22} className="mt-0.5 shrink-0" aria-hidden="true" />
              <a
                href={siteConfig.social.maps}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                {siteConfig.address.streetAddress}, San Salvador de Jujuy
              </a>
            </li>
            <li className="flex items-center gap-3">
              <HiPhone size={22} className="shrink-0" aria-hidden="true" />
              <a href={`tel:${siteConfig.phoneRaw}`} className="hover:underline">
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <HiMail size={22} className="shrink-0" aria-hidden="true" />
              <a
                href={`mailto:${siteConfig.email}`}
                className="break-all hover:underline"
              >
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>

        {/* isolate: las capas de Leaflet usan z-index 400+ y sin esto el mapa
            se dibuja encima del menú fijo al hacer scroll. */}
        <div className="relative isolate z-0 min-h-[320px] lg:min-h-full">
          <ContactMap />
        </div>
      </Reveal>
    </section>
  );
};

export default ContactSection;
