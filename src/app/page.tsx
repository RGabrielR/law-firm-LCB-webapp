import JsonLd from "@/components/seo/jsonLd";
import AboutSection from "@/sections/aboutSection";
import ContactSection from "@/sections/contactSection";
import FaqSection from "@/sections/faqSection";
import HeroSection from "@/sections/heroSection";
import LocalSeoSection from "@/sections/localSeoSection";
import ServicesSection from "@/sections/servicesSection";
import ValuesSection from "@/sections/valuesSection";
import { absoluteUrl, createFaqSchema, homeFaqs } from "@/lib/site";

export default function Home() {
  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Inicio | Estudio Jurídico Baiud",
    url: absoluteUrl("/"),
    description:
      "Página principal del Estudio Jurídico Baiud con servicios legales en Jujuy, contacto, contenido local y preguntas frecuentes.",
    isPartOf: {
      "@id": absoluteUrl("/#website"),
    },
    about: {
      "@id": absoluteUrl("/#legalservice"),
    },
    inLanguage: "es-AR",
  };

  return (
    <main>
      <JsonLd data={homePageSchema} />
      <JsonLd data={createFaqSchema(homeFaqs)} />
      <HeroSection />
      <AboutSection />
      <ValuesSection />
      <ServicesSection />
      <LocalSeoSection />
      <FaqSection />
      <ContactSection />
    </main>
  );
}
