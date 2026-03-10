import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";

import Footer from "@/components/footer";
import Header from "@/components/header";
import UIProvider from "@/providers/UIProvider";

import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], display: "swap" });

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Dr. Miguel Alabi Law Office",
  description:
    "Legal services in Civil, Family, Labor and Criminal Law with in-person and remote consultations.",
  url: "https://www.estudiolcb.com.ar/",
  image: "https://www.estudiolcb.com.ar/herobanner.webp",
  telephone: "+54 381 4099177",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Avenida Salta 1563",
    addressLocality: "San Miguel de Tucuman",
    addressRegion: "Tucuman",
    postalCode: "4000",
    addressCountry: "AR",
  },
  openingHours: "Mo-Fr 08:00-20:00",
  priceRange: "$$",
  areaServed: "San Miguel de Tucuman, Argentina",
  sameAs: ["https://www.facebook.com/profile.php?id=100089098967597"],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.estudiolcb.com.ar"),
  title: {
    default: "Dr. Miguel Alabi Law Office | Legal Services in Tucuman",
    template: "%s | Dr. Miguel Alabi Law Office",
  },
  description:
    "Civil, Family, Labor and Criminal legal services by Dr. Miguel Alabi in San Miguel de Tucuman.",
  keywords: [
    "Dr Miguel Alabi",
    "law office Tucuman",
    "labor lawyer Tucuman",
    "family law Tucuman",
    "civil law Tucuman",
    "criminal defense Tucuman",
    "legal consultation Argentina",
  ],
  category: "Legal",
  authors: [{ name: "Dr. Miguel Alabi" }],
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
    canonical: "https://www.estudiolcb.com.ar/",
  },
  openGraph: {
    type: "website",
    title: "Dr. Miguel Alabi Law Office | Legal Services in Tucuman",
    description:
      "Legal strategy and representation in Civil, Family, Labor and Criminal Law.",
    siteName: "Dr. Miguel Alabi Law Office",
    locale: "en_US",
    url: "https://www.estudiolcb.com.ar/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Miguel Alabi Law Office",
    description:
      "Legal services in San Miguel de Tucuman. In-person and remote consultations.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} min-h-screen bg-black text-zinc-100 antialiased`}>
        <UIProvider>
          <Header />
          {children}
          <Footer />
        </UIProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
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
    </html>
  );
}
