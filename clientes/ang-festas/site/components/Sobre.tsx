"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const features = [
  {
    icon: "🎪",
    title: "Espaço coberto",
    text: "Espaço amplo e climatizado para eventos de todos os tamanhos.",
  },
  {
    icon: "🧸",
    title: "Espaço Kids",
    text: "Área dedicada para as crianças brincarem com segurança.",
  },
  {
    icon: "🅿️",
    title: "Estacionamento",
    text: "Vagas gratuitas para todos os convidados.",
  },
  {
    icon: "🍽️",
    title: "Cozinha equipada",
    text: "Cozinha completa para preparar e servir seu evento.",
  },
];

export function Sobre() {
  return (
    <section id="sobre" className="py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-sm font-semibold tracking-wide text-[#9b72cf] bg-[#e8dff5]/60 rounded-full px-4 py-1.5 mb-4">
              Quem somos
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#3d3d3d]">
              O espaço perfeito pro seu{" "}
              <span className="text-[#9b72cf]">evento</span>
            </h2>
            <p className="mt-4 text-[#6d6d6d] text-lg leading-relaxed">
              A ANG Festas nasceu do sonho de criar espaços onde cada comemoração
              se torna uma memória inesquecível. Com atenção a cada detalhe,
              oferecemos um ambiente acolhedor e personalizado para sua festa.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-[#faf8ff] rounded-2xl p-6 text-center border border-[#f0eaf8]"
              >
                <span className="text-4xl block mb-3">{f.icon}</span>
                <h3 className="font-bold text-[#3d3d3d] mb-2">{f.title}</h3>
                <p className="text-sm text-[#888] leading-relaxed">{f.text}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
