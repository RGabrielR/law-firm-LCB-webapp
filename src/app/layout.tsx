import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";

import Footer from "@/components/footer";
import Header from "@/components/header";
import JsonLd from "@/components/seo/jsonLd";
import { absoluteUrl, createBaseSchema, siteConfig } from "@/lib/site";
import UIProvider from "@/providers/UIProvider";

import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Abogada en Jujuy | Estudio Jurídico Baiud",
    template: "%s | Estudio Jurídico Baiud",
  },
  description:
    "Abogada en San Salvador de Jujuy para divorcios, sucesiones, despidos, reclamos laborales y asesoramiento civil personalizado.",
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
    title: "Abogada en Jujuy | Estudio Jurídico Baiud",
    description:
      "Estudio jurídico en San Salvador de Jujuy para derecho de familia, sucesiones, reclamos laborales y conflictos civiles.",
    siteName: siteConfig.name,
    locale: "es_AR",
    url: absoluteUrl("/"),
    images: [
      {
        url: absoluteUrl("/herobanner.webp"),
        alt: "Estudio Jurídico Baiud en San Salvador de Jujuy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abogada en Jujuy | Estudio Jurídico Baiud",
    description:
      "Consultas legales con la Dra. Lidia Cristina Baiud para familia, sucesiones, despidos y derecho civil en Jujuy.",
    images: [absoluteUrl("/herobanner.webp")],
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
    <html lang="es-AR">
      <body
        className={`${montserrat.className} min-h-screen bg-slate-50 text-slate-900 antialiased`}
      >
        <UIProvider>
          <JsonLd data={createBaseSchema()} />
          <Header />
          {children}
          <Footer />
        </UIProvider>
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
