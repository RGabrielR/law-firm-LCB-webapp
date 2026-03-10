"use client";

import Image from "next/image";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { IoCalendarOutline } from "react-icons/io5";
import { useInView } from "react-intersection-observer";

import heroBanner from "../../public/herobanner.webp";
import { fadeIn } from "../../animation/variants";

const HeroSection = () => {
  const [ref, inView] = useInView({ triggerOnce: false });

  return (
    <section
      ref={ref}
      className="relative mx-auto flex w-full items-center justify-center overflow-hidden rounded-b-3xl py-16 text-zinc-100 shadow-[0_26px_60px_rgba(0,0,0,0.6)] 3xl:max-w-[1580px]"
      id="Home"
    >
      <motion.div
        variants={fadeIn("up", 0)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        exit="hidden"
        className="w-full"
      >
        <div className="relative flex w-full flex-col items-center justify-center gap-12 px-6 lg:flex-row lg:px-12">
          <div className="absolute inset-0 opacity-30">
            <Image
              src={heroBanner}
              alt="Dr Miguel Alabi law office"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-zinc-900/90 to-black mix-blend-multiply" />
          </div>

          <div className="neo-panel relative flex w-full flex-col items-center justify-center gap-8 p-10 text-center lg:w-7/12 lg:text-left">
            <span className="text-xs font-semibold uppercase tracking-[0.45em] text-zinc-400">
              Comprehensive Legal Defense
            </span>
            <h1 className="text-4xl font-black leading-tight text-zinc-100 md:text-6xl">
              Dr. Miguel Alabi Law Office
            </h1>
            <h2 className="text-2xl font-semibold leading-tight text-zinc-300 md:text-3xl">
              Civil, Family and Labor Law for Individuals and Businesses
            </h2>
            <h3 className="text-lg font-light text-zinc-300 md:text-xl">
              In-person and remote legal consultations in San Miguel de Tucuman
            </h3>
            <p className="text-base font-light text-zinc-300 md:text-lg">
              Strategic legal guidance with close client support, clear communication,
              and practical solutions for every stage of your case.
            </p>
            <Button
              className="neo-button h-14 w-full max-w-sm text-base lg:justify-start"
              endContent={<IoCalendarOutline size={24} className="ml-2 text-zinc-100" />}
              onClick={() => {
                window.open(
                  "https://api.whatsapp.com/send/?phone=%2B543884881609&text&type=phone_number&app_absent=0",
                  "_blank",
                );
              }}
            >
              Schedule Consultation
            </Button>
          </div>

          <div className="neo-panel relative hidden w-full max-w-xl overflow-hidden p-2 lg:flex lg:w-5/12">
            <div className="relative h-[420px] w-full overflow-hidden rounded-3xl">
              <Image
                src={heroBanner}
                alt="Dr Miguel Alabi legal services"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
