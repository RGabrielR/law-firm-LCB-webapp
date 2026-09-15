import { IoStar } from "react-icons/io5";

import Reveal from "@/components/reveal";
import SectionHeading from "@/components/sectionHeading";

// Reseñas públicas de la ficha de Google del estudio. Se muestran con nombre
// e inicial del apellido. Actualizar a mano cuando haya reseñas nuevas.
const GOOGLE_RATING = "5,0";
const GOOGLE_REVIEWS = 12;
// cid = id de la ficha en Maps (0x250a976ca40a0ee4 en decimal).
const GOOGLE_REVIEWS_URL = "https://www.google.com/maps?cid=2669112222034824932";

// Textos tal cual están en Google. No usar reseñas de familiares de la Dra.
const reviews: { name: string; text: string }[] = [
  {
    name: "Magui F.",
    text: "Dra. Lidia es excelente! Una profesional muy comprometida en cada caso, con predisposición y asesoramiento muy personalizado, en lo personal la recomiendo a todos y la felicito, gracias!",
  },
  {
    name: "Daniel J.",
    text: "Super clara y eficiente. Resolvió todas mis consultas de manera pronta y precisa. Recomiendo 100%",
  },
];

const ReviewsSection = () => {
  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-14">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Reseñas"
            title="Lo que dicen quienes ya nos consultaron"
          />
          <Reveal delay={150} className="flex items-center gap-5">
            <span className="font-serif text-6xl font-semibold text-slate-950">
              {GOOGLE_RATING}
            </span>
            <span className="flex flex-col gap-1">
              <span className="flex text-amber-400" aria-label="5 estrellas">
                {Array.from({ length: 5 }).map((_, index) => (
                  <IoStar key={index} size={20} aria-hidden="true" />
                ))}
              </span>
              <span className="whitespace-nowrap text-sm text-slate-600">
                {GOOGLE_REVIEWS} reseñas en Google
              </span>
            </span>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {reviews.map((review, index) => (
            <Reveal
              as="figure"
              key={review.name}
              delay={index * 120}
              className="flex h-full flex-col gap-6 rounded-2xl border border-slate-200 bg-slate-50 p-8"
            >
              <span
                className="font-serif text-6xl leading-none text-amber-400"
                aria-hidden="true"
              >
                “
              </span>
              <blockquote className="-mt-6 flex-1 text-base leading-relaxed text-slate-700">
                {review.text}
              </blockquote>
              <figcaption className="flex items-center justify-between border-t border-slate-200 pt-5">
                <span className="font-semibold text-slate-950">
                  {review.name}
                </span>
                <span className="flex text-amber-400" aria-label="5 estrellas">
                  {Array.from({ length: 5 }).map((_, star) => (
                    <IoStar key={star} size={14} aria-hidden="true" />
                  ))}
                </span>
              </figcaption>
            </Reveal>
          ))}
        </div>

        <Reveal className="flex justify-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-slate-300 px-7 py-3 text-sm font-semibold text-slate-950 transition hover:border-amber-400 hover:bg-amber-50"
          >
            Ver todas las reseñas en Google
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default ReviewsSection;
