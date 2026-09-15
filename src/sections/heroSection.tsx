"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import {
  IoLaptopOutline,
  IoLocationOutline,
  IoLogoWhatsapp,
  IoStar,
} from "react-icons/io5";

import HeroVideo from "@/components/heroVideo";
import { siteConfig } from "@/lib/site";
import heroPhoto from "../../public/hero-consulta.webp";
import portrait from "../../public/dra-lidia-baiud.webp";

const portraitAlt =
  "Dra. Lidia Cristina Baiud, abogada en San Salvador de Jujuy";

// La foto fija se ve siempre y es lo primero que carga. El video (stock de
// Pexels, licencia libre) se suma encima solo si el aparato lo aguanta.
// La entrada del texto es CSS puro: sin JavaScript el contenido se ve igual.
const HeroSection = () => {
  return (
    <section
      className="relative mx-auto flex min-h-[620px] w-full items-center overflow-hidden rounded-b-3xl bg-slate-950 py-16 text-white shadow-2xl lg:min-h-[calc(100vh-80px)] lg:py-20"
      id="Home"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={heroPhoto}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <HeroVideo />
        <div className="absolute inset-0 bg-slate-950/75 lg:bg-transparent lg:bg-gradient-to-r lg:from-slate-950 lg:via-slate-950/90 lg:to-slate-950/60" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/80 to-transparent" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center lg:mx-0 lg:items-start lg:text-left">
          <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-amber-300/70 shadow-xl lg:hidden">
            <Image
              src={portrait}
              alt={portraitAlt}
              fill
              sizes="112px"
              className="object-cover object-top"
            />
          </div>

          <span className="hero-rise text-xs font-semibold uppercase tracking-[0.2em] text-amber-300/90 md:tracking-[0.3em]">
            Estudio Jurídico LCB · San Salvador de Jujuy
          </span>

          <h1
            className="hero-rise text-4xl font-black leading-[1.1] md:text-6xl"
            style={{ animationDelay: "0.1s" }}
          >
            Tu abogada en Jujuy, de la primera consulta a la solución
          </h1>

          <p
            className="hero-rise max-w-xl text-lg font-light leading-relaxed text-slate-200 md:text-xl"
            style={{ animationDelay: "0.2s" }}
          >
            La Dra. Lidia Cristina Baiud te escucha, te explica tus opciones en
            lenguaje claro y lleva tu caso con seguimiento real, de forma
            presencial u online.
          </p>

          <div
            className="hero-rise flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
            style={{ animationDelay: "0.3s" }}
          >
            <Button
              className="h-14 w-full max-w-xs rounded-full bg-amber-400 px-8 text-base font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-amber-300 sm:w-auto"
              startContent={<IoLogoWhatsapp size={22} />}
              as="a"
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              Escribinos por WhatsApp
            </Button>
            <Link
              href="/#Services"
              className="flex h-14 w-full max-w-xs items-center justify-center rounded-full border border-white/30 px-8 text-base font-medium text-white transition hover:border-white/60 hover:bg-white/10 sm:w-auto"
            >
              Ver en qué te ayudamos
            </Link>
          </div>

          <ul
            className="hero-rise flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-300 lg:justify-start"
            style={{ animationDelay: "0.4s" }}
          >
            <li className="flex items-center gap-1.5">
              <IoStar className="text-amber-400" aria-hidden="true" />
              5,0 en Google · 12 reseñas
            </li>
            <li className="flex items-center gap-1.5">
              <IoLocationOutline aria-hidden="true" />
              <a
                href={siteConfig.social.maps}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                {siteConfig.address.streetAddress}
              </a>
            </li>
            <li className="flex items-center gap-1.5">
              <IoLaptopOutline aria-hidden="true" />
              Presencial y online
            </li>
          </ul>
        </div>

        {/* Sin animación de entrada: la foto es lo más grande de la primera
            vista y no conviene que arranque invisible. */}
        <figure className="relative mx-auto hidden w-full max-w-md lg:block">
          <div
            className="absolute -inset-3 rounded-[2.25rem] border border-amber-300/25"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-black/50">
            <Image
              src={portrait}
              alt={portraitAlt}
              priority
              sizes="448px"
              className="h-auto w-full"
            />
            <div
              className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-950/90 to-transparent"
              aria-hidden="true"
            />
            <figcaption className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
              <span className="flex flex-col">
                <span className="text-lg font-bold text-white">
                  Dra. Lidia Cristina Baiud
                </span>
                <span className="text-sm text-slate-300">
                  Abogada · San Salvador de Jujuy
                </span>
              </span>
              <span className="flex shrink-0 items-center gap-1 rounded-full bg-white/95 px-3 py-1.5 text-sm font-semibold text-slate-900 shadow">
                <IoStar className="text-amber-500" aria-hidden="true" />
                5,0
              </span>
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
};

export default HeroSection;
