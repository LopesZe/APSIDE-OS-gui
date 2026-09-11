"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

const PATH = "M70,310 C 190,380 210,40 330,90";
const PATH2 = "M70,310 C 205,350 195,70 330,90";

export function OrbitalLoop({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="heroGrad"
          x1="70"
          y1="310"
          x2="330"
          y2="90"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00E65B" />
          <stop offset="1" stopColor="#0066FF" />
        </linearGradient>
        <filter id="glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <path
        d={PATH}
        stroke="rgba(255,255,255,0.35)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeDasharray="2 12"
      />

      <motion.path
        d={PATH}
        stroke="url(#heroGrad)"
        strokeWidth={3}
        strokeLinecap="round"
        filter="url(#glow)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1], d: [PATH, PATH2, PATH] }}
        transition={{
          pathLength: {
            duration: 2.8,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5,
          },
          d: { duration: 7, ease: "easeInOut", repeat: Infinity },
        }}
      />

      <motion.circle
        cx={70}
        cy={310}
        r={8}
        fill="#00E65B"
        filter="url(#glow)"
        animate={{ scale: [1, 1.25, 1] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "70px 310px" }}
      />
      <motion.circle
        cx={330}
        cy={90}
        r={8}
        fill="#0066FF"
        filter="url(#glow)"
        animate={{ scale: [1, 1.25, 1] }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.1,
        }}
        style={{ transformOrigin: "330px 90px" }}
      />
    </svg>
  );
}

export function OrbitalScroll({
  progress,
  className = "",
}: {
  progress: MotionValue<number>;
  className?: string;
}) {
  const draw = useTransform(progress, [0, 1], [0, 1]);
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="orbitalGrad"
          x1="70"
          y1="310"
          x2="330"
          y2="90"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00E65B" />
          <stop offset="1" stopColor="#0066FF" />
        </linearGradient>
      </defs>
      <path d={PATH} stroke="#272A40" strokeWidth={2} strokeLinecap="round" />
      <motion.path
        d={PATH}
        stroke="url(#orbitalGrad)"
        strokeWidth={2.5}
        strokeLinecap="round"
        style={{ pathLength: draw }}
      />
      <circle cx={70} cy={310} r={6} fill="#00E65B" />
      <circle cx={330} cy={90} r={6} fill="#0066FF" />
    </svg>
  );
}
