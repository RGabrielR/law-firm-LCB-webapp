"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TbTargetArrow } from "react-icons/tb";
import { useInView } from "react-intersection-observer";

import AboutMosaic from "../../public/aboutmosaic.webp";
import { fadeIn } from "../../animation/variants";

const AboutSection = () => {
  const [ref, inView] = useInView({ triggerOnce: false });

  return (
    <section
      className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center py-20 xl:max-w-[1380px]"
      id="About"
      ref={ref}
    >
      <motion.div
        variants={fadeIn("up", 0)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        exit="hidden"
        className="neo-panel flex w-full flex-col overflow-hidden lg:flex-row"
      >
        <div className="flex w-full min-w-[50%] flex-col gap-8 p-8 lg:p-12">
          <div className="text-center lg:text-left">
            <span className="text-xs font-semibold uppercase tracking-[0.45em] text-zinc-400">
              About The Office
            </span>
            <h2 className="mt-3 text-3xl font-black text-zinc-100 sm:text-4xl">
              Legal advisory in San Miguel de Tucuman
            </h2>
          </div>
          <p className="text-center text-base font-light leading-relaxed text-zinc-300 md:text-lg lg:text-left">
            We support individuals, families and businesses in critical legal
            decisions with transparent communication, case-tailored strategy, and
            committed legal defense.
          </p>

          <div className="neo-inset p-6 text-left text-zinc-100">
            <span className="flex items-center gap-4 text-xl font-semibold uppercase tracking-wide text-zinc-200 sm:text-2xl">
              <TbTargetArrow size={42} /> Our Mission
            </span>
            <p className="mt-4 text-sm font-light leading-relaxed text-zinc-300 md:text-base">
              Deliver clear, effective and human-centered legal solutions. Every
              case deserves precision, integrity and long-term strategic thinking.
            </p>
          </div>
        </div>

        <div className="grid w-full place-items-center bg-gradient-to-br from-black via-zinc-950 to-zinc-900 p-8 lg:w-1/2">
          <Image
            src={AboutMosaic}
            alt="Dr Miguel Alabi law office"
            sizes="100vw"
            width={0}
            height={0}
            className="h-auto w-full max-w-xl rounded-3xl object-cover shadow-[12px_12px_26px_rgba(0,0,0,0.7)]"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
