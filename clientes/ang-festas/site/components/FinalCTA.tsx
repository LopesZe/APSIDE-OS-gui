"use client";

import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section
      id="contato"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[480px] w-[480px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,230,91,0.12) 0%, rgba(0,230,91,0) 70%)",
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="container-page text-center relative"
      >
        <p className="text-sm font-medium tracking-widest text-green uppercase">
          Vamos começar
        </p>
        <h2 className="mt-8 text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.08] tracking-tight max-w-4xl mx-auto">
          {{CTA_HEADLINE}}
        </h2>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://wa.me/{{WHATSAPP}}"
            className="px-7 py-3.5 rounded-full bg-green text-navy font-semibold hover:bg-green/90 transition-colors"
          >
            Agendar conversa
          </a>
          <a
            href="mailto:{{EMAIL}}"
            className="px-7 py-3.5 rounded-full border border-white/20 text-white hover:border-white/50 transition-colors"
          >
            Falar com a {{PRIMARY_BRAND}}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
