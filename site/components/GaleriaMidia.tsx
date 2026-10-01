"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";

const videos = [
  { src: "/media/video festa 1.mp4", alt: "Festa infantil" },
  { src: "/media/video festa 2.mp4", alt: "Decoracao" },
  { src: "/media/nosso espaço.mp4", alt: "Nosso espaco" },
  { src: "/media/video festa 3.mp4", alt: "Festa tematica" },
];

export function GaleriaMidia() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-20">
      <Reveal>
        <div className="text-center mb-10">
          <span className="inline-block text-sm font-semibold tracking-wide text-[#9b72cf] bg-[#e8dff5]/60 rounded-full px-4 py-1.5 mb-4">
            Em ação
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#3d3d3d]">
            Veja nossos{" "}
            <span className="text-[#9b72cf]">eventos</span>
          </h2>
        </div>
      </Reveal>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {videos.map((v, i) => (
            <VideoCard key={i} src={v.src} alt={v.alt} onClick={() => setLightbox(i)} />
          ))}
        </div>
      </div>

      {/* Lightbox Videos */}
      <AnimatePresence>
        {lightbox !== null && (
          <VideoLightbox
            videos={videos}
            index={lightbox}
            onClose={() => setLightbox(null)}
            onPrev={() => setLightbox((lightbox - 1 + videos.length) % videos.length)}
            onNext={() => setLightbox((lightbox + 1) % videos.length)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function VideoCard({ src, alt, onClick }: { src: string; alt: string; onClick: () => void }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="group relative rounded-2xl overflow-hidden aspect-[9/18] bg-[#e8dff5]/30 cursor-pointer shadow-lg"
      onClick={onClick}
      onMouseEnter={() => {
        ref.current?.play().catch(() => {});
        setPlaying(true);
      }}
      onMouseLeave={() => {
        ref.current?.pause();
        setPlaying(false);
      }}
    >
      <video
        ref={ref}
        src={src}
        className="w-full h-full object-cover"
        muted
        loop
        playsInline
      />
      {/* Overlay escuro */}
      <div className={`absolute inset-0 transition-opacity duration-300 ${playing ? 'bg-black/0' : 'bg-black/20'}`} />
      {/* Botão play */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center gap-1.5 transition-opacity duration-300 ${playing ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-xl backdrop-blur-sm">
          <svg className="w-5 h-5 text-[#9b72cf] ml-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <span className="text-white text-xs font-semibold drop-shadow-lg">Clique aqui para ver o vídeo</span>
      </div>
    </motion.div>
  );
}

function VideoLightbox({
  videos,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  videos: { src: string; alt: string }[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 bg-white/95 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
    >
      <button onClick={onClose} className="absolute top-6 right-6 text-[#3d3d3d] text-3xl z-50 hover:text-[#9b72cf] transition-colors">
        ✕
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 md:left-8 z-50 w-12 h-12 bg-[#3d3d3d]/10 backdrop-blur-sm rounded-full flex items-center justify-center text-[#3d3d3d] hover:bg-[#9b72cf]/20 transition-colors"
      >
        ‹
      </button>

      <motion.div
        key={index}
        className="w-full max-w-md aspect-[9/16] mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <video
          src={videos[index].src}
          className="w-full h-full object-cover rounded-2xl"
          controls
          autoPlay
          muted
          playsInline
        />
      </motion.div>

      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 md:right-8 z-50 w-12 h-12 bg-[#3d3d3d]/10 backdrop-blur-sm rounded-full flex items-center justify-center text-[#3d3d3d] hover:bg-[#9b72cf]/20 transition-colors"
      >
        ›
      </button>
    </div>
  );
}
