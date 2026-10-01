"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const eventos = [
  {
    icon: "🎂",
    title: "Aniversários",
    desc: "Festas temáticas personalizadas para todas as idades, do infantil ao adulto.",
    color: "#fce1e4",
  },
  {
    icon: "🎉",
    title: "Confraternizações",
    desc: "Espaço ideal para reuniões de empresa, team building e comemorações corporativas.",
    color: "#e8dff5",
  },
  {
    icon: "🎓",
    title: "Formaturas",
    desc: "Celebre essa conquista com estilo. Decoração e espaço sob medida para sua formatura.",
    color: "#d4f4dd",
  },
  {
    icon: "💒",
    title: "Casamentos",
    desc: "Recepções e cerimônias em um ambiente romântico e acolhedor.",
    color: "#fff3cd",
  },
  {
    icon: "👶",
    title: "Chá de Bebê",
    desc: "Recepção de mamãe e presenteação com carinho e decoração especial.",
    color: "#d0e8ff",
  },
  {
    icon: "🎄",
    title: "Festas Temáticas",
    desc: "Decoração completa para qualquer tema: infantil, adulto ou corporativo.",
    color: "#f5e6ff",
  },
];

export function Eventos() {
  return (
    <section id="eventos" className="py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-sm font-semibold tracking-wide text-[#9b72cf] bg-[#e8dff5]/60 rounded-full px-4 py-1.5 mb-4">
              Nossos servicos
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#3d3d3d]">
              Tipos de{" "}
              <span className="text-[#9b72cf]">eventos</span>
            </h2>
            <p className="mt-4 text-[#6d6d6d] text-lg leading-relaxed">
              Qualquer motivo é bom para comemorar. Cuidamos de tudo para você
              só precisar aproveitar.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventos.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="rounded-2xl p-6 border border-[#f0eaf8] bg-white cursor-default"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl mb-4"
                  style={{ backgroundColor: e.color + "80" }}
                >
                  {e.icon}
                </div>
                <h3 className="font-bold text-[#3d3d3d] text-lg mb-2">{e.title}</h3>
                <p className="text-sm text-[#888] leading-relaxed">{e.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
