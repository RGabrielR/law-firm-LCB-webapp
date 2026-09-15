import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import Script from "next/script";

import ContactTracking from "@/components/analytics/contactTracking";
import Footer from "@/components/footer";
import Header from "@/components/header";
import JsonLd from "@/components/seo/jsonLd";
import { absoluteUrl, createBaseSchema, siteConfig } from "@/lib/site";
import UIProvider from "@/providers/UIProvider";

import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], display: "swap" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-serif",
  display: "swap",
});

// Marca <html class="js-reveal"> antes de pintar, solo si el navegador puede
// animar la aparición. Si el JavaScript de la página no llega a cargar en 4 s,
// se saca la marca para que nada quede oculto.
const revealScript = `(function(){try{var d=document.documentElement;if('IntersectionObserver' in window&&!(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)){d.classList.add('js-reveal');setTimeout(function(){if(!window.__revealReady){d.classList.remove('js-reveal')}},4000)}}catch(e){}})();`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Abogada en Jujuy | Estudio Jurídico LCB",
    template: "%s | Estudio Jurídico LCB",
  },
  description:
    "Abogada en San Salvador de Jujuy para divorcios, sucesiones, despidos, comercio exterior y aduana, minería y litio, y productores tabacaleros.",
  keywords: [
    "abogada en Jujuy",
    "abogados en Jujuy",
    "estudio jurídico en Jujuy",
    "derecho de familia",
    "derecho laboral",
    "divorcios",
    "sucesiones",
    "despidos",
    "San Salvador de Jujuy",
    "abogados san salvador de jujuy",
    "derecho civil jujuy",
    "asesoría legal jujuy",
    "mediación y arbitraje",
    "derecho previsional",
    "abogado comercio exterior jujuy",
    "abogado aduanero jujuy",
    "abogado importación exportación jujuy",
    "abogado minero jujuy",
    "abogado litio jujuy",
    "abogado tabaco jujuy",
    "abogado agrario jujuy",
    "abogado perico jujuy",
  ],
  category: "Legal",
  authors: [{ name: siteConfig.legalName }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    type: "website",
    title: "Abogada en Jujuy | Estudio Jurídico LCB",
    description:
      "Estudio jurídico en San Salvador de Jujuy para derecho de familia, sucesiones, reclamos laborales y conflictos civiles.",
    siteName: siteConfig.name,
    locale: "es_AR",
    url: absoluteUrl("/"),
    images: [
      {
        url: absoluteUrl("/og-estudio-lcb.jpg"),
        alt: "Estudio Jurídico LCB en San Salvador de Jujuy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abogada en Jujuy | Estudio Jurídico LCB",
    description:
      "Consultas legales con la Dra. Lidia Cristina Baiud para familia, sucesiones, despidos y derecho civil en Jujuy.",
    images: [absoluteUrl("/og-estudio-lcb.jpg")],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR" className={playfair.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: revealScript }} />
      </head>
      <body
        className={`${montserrat.className} min-h-screen bg-slate-50 text-slate-900 antialiased`}
      >
        <UIProvider>
          <JsonLd data={createBaseSchema()} />
          <Header />
          {children}
          <Footer />
        </UIProvider>
        <ContactTracking />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1CK50HM2ZS"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-1CK50HM2ZS');
        `}</Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17663647340"
          strategy="afterInteractive"
        />
        <Script id="gads-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17663647340');
        `}</Script>
      </body>
    </html>
  );
}
