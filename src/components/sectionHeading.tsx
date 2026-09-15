import type { ReactNode } from "react";

import Reveal from "@/components/reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

// Encabezado común de las secciones: antetítulo, título con serifa y la
// barrita ámbar debajo.
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";
  const dark = tone === "dark";

  return (
    <Reveal
      className={`flex flex-col ${
        centered ? "items-center text-center" : "items-start text-left"
      } ${className}`}
    >
      <span
        className={`text-xs font-semibold uppercase tracking-[0.35em] ${
          dark ? "text-amber-300" : "text-amber-600"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`mt-4 max-w-4xl font-serif text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl ${
          dark ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
      <span
        className="mt-6 block h-1 w-14 rounded-full bg-amber-400"
        aria-hidden="true"
      />
      {description && (
        <p
          className={`mt-6 max-w-3xl text-base font-light leading-relaxed md:text-lg ${
            dark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
