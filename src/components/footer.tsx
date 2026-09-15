import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";

import { siteConfig } from "@/lib/site";
import Laurel from "../../public/laurel.webp";

const serviceLinks = [
  { title: "Sucesiones y herencias", href: "/articulos/sucesion-herencia-jujuy" },
  { title: "Divorcio", href: "/articulos/divorcio-en-jujuy" },
  { title: "Despidos", href: "/articulos/despido-injustificado-jujuy" },
  { title: "Jubilaciones y ANSES", href: "/articulos/jubilacion-pension-anses-jujuy" },
  { title: "Mediación", href: "/articulos/mediacion-jujuy" },
  {
    title: "Comercio exterior y aduana",
    href: "/articulos/abogados-comercio-exterior-aduana-jujuy",
  },
];

const siteLinks = [
  { title: "Sobre el estudio", href: "/#About" },
  { title: "Servicios", href: "/#Services" },
  { title: "Abogados en Jujuy", href: "/abogados-en-jujuy" },
  { title: "Artículos y guías", href: "/articulos" },
  { title: "Tu primera consulta", href: "/articulos/primera-consulta-abogada-jujuy" },
  { title: "Contacto", href: "/#Contact" },
];

const linkClass = "text-slate-300 transition hover:text-amber-300";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-950 text-sm text-slate-300">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] lg:px-10">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-3">
            <Image src={Laurel} alt="" className="h-9 w-auto invert" />
            <span className="flex flex-col leading-tight">
              <span className="text-lg font-bold text-white">
                {siteConfig.name}
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-amber-300/90">
                Dra. Lidia Cristina Baiud
              </span>
            </span>
          </Link>
          <p className="max-w-xs font-light leading-relaxed text-slate-400">
            Abogada en San Salvador de Jujuy. Consultas presenciales y a
            distancia para toda la provincia.
          </p>
          <div className="flex gap-3">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook del Estudio Jurídico LCB"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-amber-300 hover:text-amber-300"
            >
              <FaFacebookF size={15} />
            </a>
            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp del Estudio Jurídico LCB"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-amber-300 hover:text-amber-300"
            >
              <FaWhatsapp size={17} />
            </a>
          </div>
        </div>

        <nav aria-label="Servicios">
          <h2 className="font-serif text-base font-semibold text-white">
            Servicios
          </h2>
          <span className="mt-3 block h-0.5 w-8 bg-amber-400" aria-hidden="true" />
          <ul className="mt-5 flex flex-col gap-3">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClass}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Sitio">
          <h2 className="font-serif text-base font-semibold text-white">
            El estudio
          </h2>
          <span className="mt-3 block h-0.5 w-8 bg-amber-400" aria-hidden="true" />
          <ul className="mt-5 flex flex-col gap-3">
            {siteLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClass}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-serif text-base font-semibold text-white">
            Contacto
          </h2>
          <span className="mt-3 block h-0.5 w-8 bg-amber-400" aria-hidden="true" />
          <ul className="mt-5 flex flex-col gap-3">
            <li>
              <a
                href={siteConfig.social.maps}
                target="_blank"
                rel="noreferrer"
                className={linkClass}
              >
                {siteConfig.address.streetAddress}, San Salvador de Jujuy
              </a>
            </li>
            <li>
              <a href={`tel:${siteConfig.phoneRaw}`} className={linkClass}>
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className={`${linkClass} break-all`}
              >
                {siteConfig.email}
              </a>
            </li>
            <li className="text-slate-400">Lunes a viernes de 8 a 20 h</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto w-full max-w-6xl px-6 py-6 text-xs text-slate-500 lg:px-10">
          &copy; {currentYear} Estudio Jurídico Lidia Cristina Baiud. Todos los
          derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
