"use client";

import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { IoCalendarOutline } from "react-icons/io5";
import { useInView } from "react-intersection-observer";

import { fadeIn } from "../../animation/variants";

const services: { title: string; text: string }[] = [
  {
    title: "In-person and remote legal consultations",
    text: "Comprehensive legal diagnosis and practical guidance for urgent decisions and long-term strategy.",
  },
  {
    title: "Litigation and legal representation",
    text: "Strategic defense in ongoing and new cases with active follow-up and clear reporting.",
  },
  {
    title: "Administrative and tax procedures",
    text: "End-to-end management before public entities and tax agencies, reducing delays and legal exposure.",
  },
  {
    title: "Social security law",
    text: "Support for pension and retirement filings to secure effective access to acquired rights.",
  },
  {
    title: "Family and succession law",
    text: "Guidance for inheritance, estate partition and family agreements with legal precision and empathy.",
  },
  {
    title: "Mediation and arbitration",
    text: "Alternative dispute resolution to reach efficient agreements and avoid prolonged litigation.",
  },
];

const ServicesSection = () => {
  const [ref, inView] = useInView({ triggerOnce: false });

  return (
    <section
      className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center py-20 xl:max-w-[1380px]"
      id="Services"
      ref={ref}
    >
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        exit="hidden"
        className="neo-panel flex w-full flex-col gap-8 p-8 lg:p-12"
      >
        <div className="flex flex-col gap-4 text-center lg:text-left">
          <span className="text-xs font-semibold uppercase tracking-[0.45em] text-zinc-400">
            Services
          </span>
          <h2 className="text-3xl font-black text-zinc-100 sm:text-4xl">
            Practical legal solutions for complex decisions
          </h2>
          <p className="text-base font-light leading-relaxed text-zinc-300 md:text-lg">
            Integrated legal support across civil, labor, family and criminal areas,
            with clear execution and measurable progress.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              className="neo-inset flex h-full flex-col gap-3 p-6 text-left transition hover:border-zinc-700"
              key={service.title}
            >
              <h3 className="text-lg font-semibold text-zinc-100">{service.title}</h3>
              <p className="text-sm font-light leading-relaxed text-zinc-300">{service.text}</p>
            </article>
          ))}
        </div>

        <Button
          className="neo-button h-14 w-full max-w-sm self-center text-base"
          endContent={<IoCalendarOutline size={24} className="ml-2 text-zinc-100" />}
          onClick={() => {
            window.open(
              "https://api.whatsapp.com/send/?phone=%2B543814099177&text&type=phone_number&app_absent=0",
              "_blank",
            );
          }}
        >
          Book a Consultation
        </Button>
      </motion.div>
    </section>
  );
};

export default ServicesSection;
