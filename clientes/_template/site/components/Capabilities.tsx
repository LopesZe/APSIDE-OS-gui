"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

const items = [
  {
    n: "01",
    name: "Inteligência Artificial",
    desc: "Identificamos um processo que consumia 120 horas por mês. Automatizamos essa etapa. O tempo caiu para 30 horas.",
    tone: "green",
  },
  {
    n: "02",
    name: "Automação",
    desc: "Um relatório que levava 2 dias virou um clique. O time parou de copiar dados e começou a decidir.",
    tone: "blue",
  },
  {
    n: "03",
    name: "Integração",
    desc: "CRM, ERP e WhatsApp passaram a falar a mesma língua. O cliente virou uma só conversa.",
    tone: "green",
  },
  {
    n: "04",
    name: "Dados",
    desc: "Juntamos fontes espalhadas em um painel. A diretoria passou a ver a empresa de um lugar só.",
    tone: "blue",
  },
  {
    n: "05",
    name: "Software",
    desc: "Criamos a ferramenta que faltava — sob medida, sem licença cara nem curva de aprendizado.",
    tone: "green",
  },
];

function HCard({
  item,
  index,
  center,
}: {
  item: (typeof items)[number];
  index: number;
  center: MotionValue<number>;
}) {
  const x = useTransform(center, (c) => (index - c) * 340);
  const scale = useTransform(center, (c) => 1.08 - Math.min(Math.abs(index - c), 1) * 0.22);
  const opacity = useTransform(center, (c) => {
    const o = Math.abs(index - c);
    if (o < 0.5) return 1;
    return Math.max(0.25, 1 - 0.4 * o);
  });
  const blur = useTransform(center, (c) => {
    const o = Math.abs(index - c);
    return o < 0.5 ? "blur(0px)" : "blur(4px)";
  });
  const rotateY = useTransform(center, (c) => (index - c) * -10);
  const zIndex = useTransform(center, (c) =>
    Math.round(100 - Math.abs(index - c) * 10)
  );

  const accent = item.tone === "green" ? "#00E65B" : "#0066FF";

  return (
    <div
      className="absolute left-1/2 top-1/2"
      style={{ transform: "translate(-50%, -50%)" }}
    >
      <motion.div
        className="w-[300px] md:w-[420px] h-[440px] md:h-[500px] rounded-3xl border border-white/10 bg-navy-soft/70 backdrop-blur-md p-8 md:p-12 flex flex-col justify-between"
        style={{
          x,
          scale,
          opacity,
          filter: blur,
          rotateY,
          transformPerspective: 1000,
          zIndex,
        }}
      >
        <div
          className="text-[110px] md:text-[150px] font-semibold leading-none select-none"
          style={{ color: accent }}
        >
          {item.n}
        </div>
        <div>
          <h3 className="mt-2 text-2xl md:text-4xl font-semibold tracking-tight">
            {item.name}
          </h3>
          <p className="mt-4 text-base md:text-lg text-white/75 max-w-xl">
            {item.desc}
          </p>
        </div>
        <div
          className="mt-6 text-xs tracking-widest uppercase"
          style={{ color: accent }}
        >
          [ IMAGEM · {item.name.toUpperCase()} ]
        </div>
      </motion.div>
    </div>
  );
}

export function Capabilities() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const rawCenter = useTransform(
    scrollYProgress,
    [0, 1],
    [0, items.length - 1]
  );
  const center = useSpring(rawCenter, {
    stiffness: 120,
    damping: 28,
    mass: 0.5,
  });

  return (
    <section
      ref={ref}
      id="capacidades"
      className="relative"
      style={{ height: `${items.length * 60}vh` }}
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="text-center mb-8 px-6">
          <p className="text-sm font-medium tracking-widest text-white/50 uppercase">
            O que fazemos
          </p>
        </div>

        <div className="relative w-full h-[460px] md:h-[520px]">
          {items.map((it, i) => (
            <HCard key={it.n} item={it} index={i} center={center} />
          ))}
        </div>
      </div>
    </section>
  );
}
