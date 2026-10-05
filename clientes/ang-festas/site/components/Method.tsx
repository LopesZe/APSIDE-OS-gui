"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const steps = [
  {
    n: "01",
    name: "Mapear",
    desc: "Mapeamos a operação ponta a ponta e encontramos onde o tempo e o dinheiro escorrem.",
    t: 0.1,
  },
  {
    n: "02",
    name: "Priorizar",
    desc: "Escolhemos o que mover primeiro. Impacto alto, esforço baixo, antes de tudo.",
    t: 0.37,
  },
  {
    n: "03",
    name: "Construir",
    desc: "Construímos a solução sob medida — IA, automação ou software, integrada ao que já existe.",
    t: 0.63,
  },
  {
    n: "04",
    name: "Evoluir",
    desc: "Acompanhamos os números e evoluímos. Tecnologia que melhora com o uso.",
    t: 0.9,
  },
];

const P0 = [40, 150];
const P1 = [300, 40];
const P2 = [700, 200];
const P3 = [960, 110];

function cubic(t: number): [number, number] {
  const mt = 1 - t;
  const x =
    mt * mt * mt * P0[0] +
    3 * mt * mt * t * P1[0] +
    3 * mt * t * t * P2[0] +
    t * t * t * P3[0];
  const y =
    mt * mt * mt * P0[1] +
    3 * mt * mt * t * P1[1] +
    3 * mt * t * t * P2[1] +
    t * t * t * P3[1];
  return [x, y];
}

const HLINE = "M40,150 C 300,40 700,200 960,110";

function Step({
  s,
  state,
}: {
  s: (typeof steps)[number];
  state: "active" | "done" | "future";
}) {
  const isActive = state === "active";
  const isFuture = state === "future";
  return (
    <motion.div
      animate={{
        opacity: isFuture ? 0.3 : 1,
        scale: isActive ? 1.04 : 1,
        y: isActive ? 0 : 6,
      }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="text-center"
    >
      <div
        className="text-sm font-mono"
        style={{ color: isActive ? "#00E65B" : "rgba(255,255,255,0.4)" }}
      >
        {s.n}
      </div>
      <h3
        className="mt-2 text-xl md:text-2xl font-semibold tracking-tight transition-colors"
        style={{ color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.5)" }}
      >
        {s.name}
      </h3>
      <p className="mt-2 hidden md:block text-sm text-white/70 max-w-[220px] mx-auto">
        {s.desc}
      </p>
    </motion.div>
  );
}

export function Method() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const i = Math.min(steps.length - 1, Math.floor(v * steps.length));
    setActive(i);
  });

  return (
    <section ref={ref} id="metodo" className="relative" style={{ height: "260vh" }}>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden py-16">
        <div className="container-page w-full flex flex-col items-center">
          <p className="text-sm font-medium tracking-widest text-green uppercase mb-10">
            O método Apside
          </p>

          <div className="relative w-full max-w-4xl">
            <svg
              viewBox="0 0 1000 200"
              className="w-full"
              fill="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient
                  id="methodGrad"
                  x1="40"
                  y1="150"
                  x2="960"
                  y2="110"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00E65B" />
                  <stop offset="1" stopColor="#0066FF" />
                </linearGradient>
              </defs>

              <path
                d={HLINE}
                stroke="rgba(255,255,255,0.12)"
                strokeWidth={2}
                strokeLinecap="round"
              />
              <motion.path
                d={HLINE}
                stroke="url(#methodGrad)"
                strokeWidth={2.5}
                strokeLinecap="round"
                style={{ pathLength: scrollYProgress }}
              />

              {steps.map((s, i) => {
                const [cx, cy] = cubic(s.t);
                return (
                  <motion.circle
                    key={s.n}
                    cx={cx}
                    cy={cy}
                    r={7}
                    animate={{
                      fill: i <= active ? "#00E65B" : "#3A3D55",
                      scale: i === active ? 1.4 : 1,
                    }}
                    transition={{ duration: 0.4 }}
                    style={{ transformOrigin: `${cx}px ${cy}px` }}
                  />
                );
              })}
            </svg>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
              {steps.map((s, i) => (
                <Step
                  key={s.n}
                  s={s}
                  state={
                    i === active ? "active" : i < active ? "done" : "future"
                  }
                />
              ))}
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: active === steps.length - 1 ? 1 : 0,
              y: active === steps.length - 1 ? 0 : 20,
            }}
            transition={{ duration: 0.5 }}
            className="mt-12 text-center text-3xl md:text-5xl font-semibold tracking-tight text-green"
          >
            Diagnóstico antes da tecnologia.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
