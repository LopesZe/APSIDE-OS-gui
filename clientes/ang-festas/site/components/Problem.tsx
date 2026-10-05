"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const tools = [
  {
    label: "WhatsApp",
    x: "6%",
    y: "72%",
    d: 0,
    summary:
      "Canal principal de venda, mas vira caixa de entrada sem triagem. Leads somem no meio e ninguém responde no tempo certo.",
  },
  {
    label: "Planilhas",
    x: "22%",
    y: "48%",
    d: 0.8,
    summary:
      "Controle manual que ninguém atualiza direito. Dados espalhados, sem confiança e sempre dessincronizados.",
  },
  {
    label: "CRM",
    x: "38%",
    y: "62%",
    d: 1.6,
    summary:
      "Cadastro de clientes, mas separado de quem atende no WhatsApp. Histórico e operação não se encontram.",
  },
  {
    label: "ERP",
    x: "54%",
    y: "38%",
    d: 0.4,
    summary:
      "Gestão de estoque e financeiro, cega para o que acontece no atendimento. Decisão sem contexto.",
  },
  {
    label: "E-mails",
    x: "70%",
    y: "54%",
    d: 1.2,
    summary:
      "Comunicação em outro lugar, fora do fluxo de quem vende. Troca de informação vira labirinto.",
  },
  {
    label: "Dashboards",
    x: "88%",
    y: "30%",
    d: 2.0,
    summary:
      "Gráficos bonitos, mas ninguém olha — e não conversam com as outras ferramentas. Dados que não viram ação.",
  },
];

export function Problem() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="container-page">
        <Reveal>
          <p className="text-sm font-medium tracking-widest text-green uppercase">
            O problema
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mt-6 text-4xl md:text-6xl font-semibold leading-[1.1] tracking-tight max-w-4xl">
            Sua empresa já tem tecnologia de sobra.
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-6 text-lg text-white/70 max-w-2xl">
            WhatsApp, CRM, ERP, planilhas, dashboards. Cada um resolve uma
            parte. Nenhum conversa com o outro. O resultado é trabalho manual
            repetido e decisões sem base.
          </p>
        </Reveal>

        <div className="relative mt-2 h-[260px] md:h-[300px] w-full">
          <svg
            viewBox="0 0 1000 400"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M60,288 C 180,200 300,250 380,248 S 620,150 700,216 S 840,140 880,120"
              stroke="url(#problemGrad)"
              strokeWidth={2}
              strokeOpacity={0.5}
              strokeLinecap="round"
              strokeDasharray="2 8"
            />
            <defs>
              <linearGradient
                id="problemGrad"
                x1="60"
                y1="288"
                x2="880"
                y2="120"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00E65B" />
                <stop offset="1" stopColor="#0066FF" />
              </linearGradient>
            </defs>
          </svg>

          {tools.map((t, i) => {
            const open = hovered === i || selected === i;
            const align =
              i === 0
                ? "left-0"
                : i === tools.length - 1
                ? "right-0"
                : "left-1/2 -translate-x-1/2";
            return (
              <div
                key={t.label}
                className="absolute"
                style={{
                  left: t.x,
                  top: t.y,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: t.d,
                  }}
                >
                  <button
                    type="button"
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => setSelected(selected === i ? null : i)}
                    className="relative focus:outline-none"
                  >
                    <span
                      className={`inline-block px-4 py-2 rounded-full border text-sm whitespace-nowrap transition-colors ${
                        open
                          ? "border-green bg-green/20 text-white"
                          : "border-white/15 bg-navy-soft/80 text-white/85 backdrop-blur-sm"
                      }`}
                    >
                      {t.label}
                    </span>

                    {open && (
                      <motion.span
                        initial={{ opacity: 0, y: 8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                          duration: 0.25,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className={`absolute top-full mt-3 w-56 block rounded-xl border border-white/15 bg-navy-soft/95 backdrop-blur-md p-4 text-left z-50 ${align}`}
                      >
                        <span className="block text-green text-sm font-medium">
                          {t.label}
                        </span>
                        <span className="block text-white/75 text-sm mt-1">
                          {t.summary}
                        </span>
                      </motion.span>
                    )}
                  </button>
                </motion.div>
              </div>
            );
          })}
        </div>

        <Reveal delay={0.15}>
          <p className="mt-10 text-3xl md:text-6xl font-semibold tracking-tight text-center md:text-left">
            Menos complexidade.
            <br />
            <span className="text-green">Mais inteligência.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
