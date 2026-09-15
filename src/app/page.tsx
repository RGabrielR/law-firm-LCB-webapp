import JsonLd from "@/components/seo/jsonLd";
import AboutSection from "@/sections/aboutSection";
import ContactSection from "@/sections/contactSection";
import FaqSection from "@/sections/faqSection";
import HeroSection from "@/sections/heroSection";
import LocalSeoSection from "@/sections/localSeoSection";
import ReviewsSection from "@/sections/reviewsSection";
import ServicesSection from "@/sections/servicesSection";
import ValuesSection from "@/sections/valuesSection";
import { absoluteUrl, createFaqSchema, homeFaqs } from "@/lib/site";

export default function Home() {
  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Inicio | Estudio Jurídico LCB",
    url: absoluteUrl("/"),
    description:
      "Página principal del Estudio Jurídico LCB con servicios legales en Jujuy, contacto, contenido local y preguntas frecuentes.",
    isPartOf: {
      "@id": absoluteUrl("/#website"),
    },
    about: {
      "@id": absoluteUrl("/#legalservice"),
    },
    inLanguage: "es-AR",
  };

  // Las secciones alternan fondos a todo el ancho, así que acá no hay espacio
  // entre ellas (el <main> general tiene gap-24).
  return (
    <main className="gap-0 pb-0">
      <JsonLd data={homePageSchema} />
      <JsonLd data={createFaqSchema(homeFaqs)} />
      <HeroSection />
      <AboutSection />
      <ValuesSection />
      <ServicesSection />
      <ReviewsSection />
      <LocalSeoSection />
      <FaqSection />
      <ContactSection />
    </main>
  );
}
