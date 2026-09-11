"use client";

import { motion } from "framer-motion";
import { OrbitalLoop } from "./Orbital";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div
        className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,230,91,0.10) 0%, rgba(0,230,91,0) 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-40 h-[520px] w-[520px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,102,255,0.10) 0%, rgba(0,102,255,0) 70%)",
        }}
      />

      <div className="container-page relative grid md:grid-cols-12 gap-10 items-center pt-28 pb-20">
        <div className="md:col-span-7">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 text-xs md:text-sm font-medium tracking-wide text-green border border-green/30 rounded-full px-3 py-1"
          >
            {{BUSINESS_TYPE}}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight"
          >
            {{TAGLINE}}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-lg md:text-xl text-white/70 max-w-xl"
          >
            {{HERO_SUBTITLE}}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="https://wa.me/{{WHATSAPP}}"
              className="px-6 py-3 rounded-full bg-green text-navy font-semibold hover:bg-green/90 transition-colors"
            >
              Falar com a {{PRIMARY_BRAND}}
            </a>
            <a
              href="#capacidades"
              className="px-6 py-3 rounded-full border border-white/20 text-white hover:border-white/50 transition-colors"
            >
              Conhecer mais
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-5 relative hidden md:block"
        >
          <OrbitalLoop className="w-full max-w-sm mx-auto" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-xs"
      >
        <span>rolar</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="block h-6 w-px bg-white/30"
        />
      </motion.div>
    </section>
  );
}
