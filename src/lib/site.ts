export type FaqItem = {
  question: string;
  answer: string;
};

export const siteConfig = {
  name: "Estudio Jurídico LCB",
  alternateNames: ["Estudio Jurídico Baiud", "Estudio LCB"],
  legalName: "Estudio Jurídico Lidia Cristina Baiud",
  description:
    "Abogada en San Salvador de Jujuy para divorcios, sucesiones, despidos, reclamos laborales, comercio exterior y aduana, minería y productores tabacaleros.",
  url: "https://www.estudiolcb.com.ar",
  email: "baiudlidiacristina@gmail.com",
  phoneDisplay: "+54 (388) 4881-609",
  phoneRaw: "+543884881609",
  address: {
    streetAddress: "Ramírez de Velazco 672",
    addressLocality: "San Salvador de Jujuy",
    addressRegion: "Jujuy",
    postalCode: "4600",
    addressCountry: "AR",
  },
  geo: {
    latitude: -24.1841566,
    longitude: -65.2963359,
  },
  social: {
    facebook: "https://www.facebook.com/profile.php?id=100089098967597",
    whatsapp:
      "https://api.whatsapp.com/send/?phone=%2B543884881609&text&type=phone_number&app_absent=0",
    maps:
      "https://www.google.com/maps?q=Ram%C3%ADrez%20de%20Velazco%20672,%20San%20Salvador%20de%20Jujuy,%20Jujuy",
  },
};

export const practiceAreas = [
  "Derecho de familia",
  "Sucesiones y herencias",
  "Derecho laboral",
  "Derecho civil",
  "Mediación y arbitraje",
  "Derecho previsional",
  "Trámites administrativos y tributarios",
  "Comercio exterior y aduana",
  "Derecho minero",
  "Derecho agrario y tabacalero",
];

export const serviceAreas = [
  "San Salvador de Jujuy",
  "Palpalá",
  "Perico",
  "El Carmen",
  "Monterrico",
  "Libertador General San Martín",
  "La Quiaca",
  "Susques",
  "Toda la provincia de Jujuy",
];

export const homeFaqs: FaqItem[] = [
  {
    question: "¿Atienden consultas de derecho de familia en Jujuy?",
    answer:
      "Sí. El estudio asesora en divorcios, alimentos, cuidado personal, régimen de comunicación, acuerdos y conflictos familiares en San Salvador de Jujuy y otras localidades de la provincia.",
  },
  {
    question: "¿Puedo consultar por un despido o reclamo laboral en Jujuy?",
    answer:
      "Sí. Se analizan telegramas, liquidaciones finales, trabajo no registrado, diferencias salariales, indemnizaciones y estrategias para reclamos laborales.",
  },
  {
    question: "¿Trabajan sucesiones y herencias en la provincia de Jujuy?",
    answer:
      "Sí. Se acompaña todo el trámite sucesorio, desde la documentación inicial hasta la declaratoria de herederos, inventario, partición e inscripción de bienes.",
  },
  {
    question:
      "¿Atienden casos de comercio exterior, minería o productores de tabaco en Jujuy?",
    answer:
      "Sí. El estudio asesora a importadores y exportadores ante la Aduana, a superficiarios, proveedores y trabajadores vinculados a la minería del litio, y a productores tabacaleros en reclamos por el FET, arriendos, trabajadores rurales y sucesiones de fincas.",
  },
  {
    question: "¿Para qué sirve la mediación?",
    answer:
      "La mediación sirve para resolver un conflicto con la ayuda de un mediador neutral, sin que un juez decida. Es más rápida y económica que un juicio, lo que se dice es confidencial y el acuerdo que se firma se puede hacer cumplir. Se usa mucho en problemas de alquileres, deudas, vecinos, socios y cuestiones económicas familiares.",
  },
  {
    question: "¿En Jujuy es obligatorio pasar por mediación antes de un juicio?",
    answer:
      "La Ley 6.353 de Jujuy establece la mediación prejudicial obligatoria para la mayoría de los conflictos, con excepciones como los divorcios, la filiación o la adopción. Su implementación se está completando por etapas, así que en cada caso revisamos si hoy se exige antes de demandar.",
  },
  {
    question: "¿Necesito ir con abogada a una mediación?",
    answer:
      "Es muy recomendable. El mediador no asesora a ninguna de las partes: tu abogada te explica qué conviene aceptar y se asegura de que el acuerdo quede claro, completo y se pueda ejecutar si la otra parte no cumple.",
  },
  {
    question:
      "Tengo un trámite que no sé cómo resolver, ¿cómo me puede ayudar el estudio de la Dra. Baiud?",
    answer:
      "Contanos por WhatsApp o en una consulta qué trámite es y qué papeles tenés. La Dra. Baiud revisa la situación, te explica qué opciones hay y qué plazos corren, y puede hacer el trámite por vos o acompañarte: presentaciones ante organismos públicos, reclamos, recursos, inscripciones, cartas documento y gestiones ante Rentas, ARCA, ANSES o la municipalidad.",
  },
  {
    question:
      "Me llegó una intimación, multa o resolución de Rentas, ARCA o la municipalidad, ¿qué hago?",
    answer:
      "Anotá la fecha en que te notificaron y consultá cuanto antes: los plazos para recurrir son cortos y, si vencen, la decisión queda firme. Por ejemplo, ante Rentas de Jujuy hay 15 días para el recurso de reconsideración. Revisamos si la deuda o la multa están bien y cuál es la mejor defensa o plan de pago.",
  },
  {
    question: "¿Ayudan con jubilaciones, pensiones y reclamos ante ANSES?",
    answer:
      "Sí. Revisamos la historia laboral, iniciamos jubilaciones y pensiones, reunimos la prueba de convivencia cuando hace falta y hacemos reclamos administrativos y judiciales cuando ANSES rechaza un trámite o liquida mal un haber.",
  },
  {
    question: "¿Las consultas pueden ser presenciales y online?",
    answer:
      "Sí. Atendemos en la oficina de San Salvador de Jujuy y, si estás en otra localidad o no podés viajar, hacemos la consulta por teléfono, videollamada, WhatsApp o el medio que prefieras.",
  },
];

export const lawyersInJujuyFaqs: FaqItem[] = [
  {
    question: "¿Cómo elegir abogados en Jujuy para un caso civil o familiar?",
    answer:
      "Conviene buscar experiencia en la materia, claridad para explicar el proceso, una estrategia concreta para el caso y atención profesional en Jujuy con conocimiento del contexto local.",
  },
  {
    question: "¿Qué temas legales atiende el Estudio Jurídico LCB en Jujuy?",
    answer:
      "El estudio trabaja derecho de familia, sucesiones, despidos, reclamos laborales, mediación, trámites previsionales y asesoramiento civil, además de comercio exterior y aduana, derecho minero y derecho agrario para productores tabacaleros.",
  },
  {
    question: "¿Hay abogados en Jujuy para problemas con la Aduana?",
    answer:
      "Sí. El estudio interviene en secuestros de mercadería, multas por declaración inexacta, sumarios aduaneros, cargos tributarios y contratos de importación y exportación, en coordinación con el despachante de aduana.",
  },
  {
    question: "¿Qué abogado consultar por una servidumbre minera o un campo en zona de litio?",
    answer:
      "Conviene un abogado con conocimiento del Código de Minería y del procedimiento ante el Juzgado Administrativo de Minas de Jujuy, que pueda revisar el acuerdo, la indemnización y la situación del título del campo antes de firmar.",
  },
  {
    question: "¿Atienden clientes fuera de San Salvador de Jujuy?",
    answer:
      "Sí. El estudio atiende consultas de distintas localidades de la provincia y también coordina instancias online cuando el caso lo permite.",
  },
  {
    question: "¿Qué documentación conviene llevar a una primera consulta legal?",
    answer:
      "Es útil llevar DNI, contratos, telegramas, actas, recibos, escrituras, mensajes, constancias administrativas o cualquier documento relacionado con el problema a analizar.",
  },
  {
    question: "¿Se puede agendar una consulta rápida por WhatsApp?",
    answer:
      "Sí. Desde el sitio se puede iniciar contacto por WhatsApp para coordinar una consulta y ordenar la documentación inicial del caso.",
  },
];

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function createBaseSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": absoluteUrl("/#website"),
        url: siteConfig.url,
        name: siteConfig.name,
        alternateName: siteConfig.alternateNames,
        description: siteConfig.description,
        inLanguage: "es-AR",
      },
      {
        "@type": "Organization",
        "@id": absoluteUrl("/#organization"),
        name: siteConfig.legalName,
        alternateName: [siteConfig.name, ...siteConfig.alternateNames],
        url: siteConfig.url,
        email: siteConfig.email,
        telephone: siteConfig.phoneDisplay,
        sameAs: [siteConfig.social.facebook],
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl("/logo.webp"),
        },
        address: {
          "@type": "PostalAddress",
          ...siteConfig.address,
        },
      },
      {
        "@type": "Attorney",
        "@id": absoluteUrl("/#attorney"),
        name: "Dra. Lidia Cristina Baiud",
        worksFor: {
          "@id": absoluteUrl("/#organization"),
        },
        knowsAbout: practiceAreas,
        image: absoluteUrl("/dra-lidia-baiud.webp"),
        url: siteConfig.url,
      },
      {
        "@type": "LegalService",
        "@id": absoluteUrl("/#legalservice"),
        name: siteConfig.legalName,
        alternateName: [siteConfig.name, ...siteConfig.alternateNames],
        url: siteConfig.url,
        image: absoluteUrl("/og-estudio-lcb.jpg"),
        description: siteConfig.description,
        telephone: siteConfig.phoneDisplay,
        email: siteConfig.email,
        priceRange: "$$",
        areaServed: [
          {
            "@type": "AdministrativeArea",
            name: "Jujuy",
          },
          ...serviceAreas
            .filter((area) => area !== "Toda la provincia de Jujuy")
            .map((area) => ({
              "@type": "City",
              name: area,
            })),
        ],
        serviceType: practiceAreas,
        address: {
          "@type": "PostalAddress",
          ...siteConfig.address,
        },
        geo: {
          "@type": "GeoCoordinates",
          ...siteConfig.geo,
        },
        hasMap: siteConfig.social.maps,
        openingHours: "Mo-Fr 08:00-20:00",
        sameAs: [siteConfig.social.facebook],
      },
    ],
  };
}

export function createFaqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function createBreadcrumbSchema(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
