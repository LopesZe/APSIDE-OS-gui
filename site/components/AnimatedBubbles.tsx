"use client";

import { useEffect, useRef } from "react";

interface Bubble {
  x: number;
  y: number;
  r: number;
  color: string;
  vx: number;
  vy: number;
  phase: number;
  speed: number;
}

const COLORS = [
  "#e8dff5", "#fce1e4", "#d4f4dd", "#fff3cd",
  "#d0e8ff", "#f5e6ff", "#ffe0ec", "#c8f7dc",
];

export function AnimatedBubbles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bubblesRef = useRef<Bubble[]>([]);
  const posRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;

    const createBubbles = () => {
      const count = Math.max(20, Math.floor((w * h) / 12000));
      bubblesRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 6 + Math.random() * 14,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        vx: 0,
        vy: 0,
        phase: Math.random() * Math.PI * 2,
        speed: 0.002 + Math.random() * 0.003,
      }));
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (bubblesRef.current.length === 0) createBubbles();
    };

    const onMove = (e: MouseEvent | Touch) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    const onTouch = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        posRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const onLeave = () => {
      posRef.current = { x: -9999, y: -9999 };
    };

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      const mx = posRef.current.x;
      const my = posRef.current.y;

      for (const b of bubblesRef.current) {
        b.phase += b.speed;
        const floatX = Math.sin(b.phase) * 0.15;
        const floatY = Math.cos(b.phase * 0.7) * 0.15;

        const dx = b.x - mx;
        const dy = b.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const radius = Math.max(b.r * 2, 50);

        if (dist < radius && dist > 0) {
          const force = ((radius - dist) / radius) * 1.5;
          b.vx += (dx / dist) * force;
          b.vy += (dy / dist) * force;
        }

        b.vx *= 0.96;
        b.vy *= 0.96;
        b.x += b.vx + floatX;
        b.y += b.vy + floatY;

        if (b.x < -b.r) b.x = w + b.r;
        if (b.x > w + b.r) b.x = -b.r;
        if (b.y < -b.r) b.y = h + b.r;
        if (b.y > h + b.r) b.y = -b.r;

        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = b.color;
        ctx.globalAlpha = 0.35;
        ctx.fill();
        ctx.globalAlpha = 0.15;
        ctx.strokeStyle = b.color;
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.globalAlpha = 1;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("touchstart", onTouch, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("touchend", onLeave);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("touchstart", onTouch);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("touchend", onLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}
