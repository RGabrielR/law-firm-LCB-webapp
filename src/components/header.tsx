"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { IoClose, IoMenu } from "react-icons/io5";

import { siteConfig } from "@/lib/site";
import Laurel from "../../public/laurel.png";

const menuItems: { title: string; href: string }[] = [
  { title: "Sobre", href: "/#About" },
  { title: "Servicios", href: "/#Services" },
  { title: "Abogados en Jujuy", href: "/abogados-en-jujuy" },
  { title: "Artículos", href: "/articulos" },
  { title: "Contacto", href: "/#Contact" },
];

// Barra oscura, del mismo tono que el hero, con texto real en vez del logo
// en imagen (tenía letras blancas que no se leían sobre el fondo claro).
const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMenuOpen]);

  const isActive = (href: string) =>
    !href.includes("#") && pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled || isMenuOpen
          ? "border-white/10 shadow-lg shadow-slate-950/25"
          : "border-transparent"
      } bg-slate-950`}
    >
      <nav
        className="mx-auto flex h-[72px] w-full max-w-[1580px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-10"
        aria-label="Principal"
      >
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-3"
          aria-label="Estudio Jurídico LCB, ir al inicio"
        >
          <Image
            src={Laurel}
            alt=""
            className="h-9 w-auto shrink-0 invert transition group-hover:opacity-80"
            priority
          />
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="truncate text-base font-bold tracking-tight text-white sm:text-lg">
              {siteConfig.name}
            </span>
            <span className="truncate text-[11px] font-medium uppercase tracking-[0.12em] text-amber-300/90 sm:text-xs sm:tracking-[0.18em]">
              <span className="sm:hidden">Dra. Lidia C. Baiud</span>
              <span className="hidden sm:inline">Dra. Lidia Cristina Baiud</span>
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 xl:flex">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`relative whitespace-nowrap rounded-full px-4 py-2 text-[15px] font-medium transition-colors after:absolute after:inset-x-4 after:bottom-1 after:h-0.5 after:origin-left after:rounded-full after:bg-amber-400 after:transition-transform after:duration-300 hover:text-white hover:after:scale-x-100 ${
                  isActive(item.href)
                    ? "text-white after:scale-x-100"
                    : "text-slate-300 after:scale-x-0"
                }`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={siteConfig.social.facebook}
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook del Estudio Jurídico LCB"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/15 text-slate-200 transition hover:border-white/40 hover:text-white sm:flex"
          >
            <FaFacebookF size={16} />
          </a>
          <a
            href={siteConfig.social.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="flex h-10 items-center gap-2 rounded-full bg-amber-400 px-4 text-sm font-semibold text-slate-950 shadow-md shadow-amber-500/20 transition hover:-translate-y-0.5 hover:bg-amber-300"
          >
            <FaWhatsapp size={18} aria-hidden="true" />
            <span className="hidden xs:inline">Consultar</span>
          </a>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="menu-movil"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-white/40 xl:hidden"
          >
            {isMenuOpen ? <IoClose size={22} /> : <IoMenu size={22} />}
          </button>
        </div>
      </nav>

      <div
        id="menu-movil"
        hidden={!isMenuOpen}
        className="border-t border-white/10 bg-slate-950 xl:hidden"
      >
        <ul className="mx-auto flex max-w-xl flex-col gap-1 px-4 py-4 sm:px-6">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-2xl px-4 py-3 text-lg font-medium text-slate-100 transition hover:bg-white/10 hover:text-white"
              >
                {item.title}
              </Link>
            </li>
          ))}
          <li className="mt-2 flex gap-2">
            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-amber-400 font-semibold text-slate-950"
            >
              <FaWhatsapp size={20} aria-hidden="true" />
              Escribinos por WhatsApp
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook del Estudio Jurídico LCB"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white"
            >
              <FaFacebookF size={18} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
