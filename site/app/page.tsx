import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Sobre } from "@/components/Sobre";
import { Eventos } from "@/components/Eventos";
import { GaleriaMidia } from "@/components/GaleriaMidia";
import { Galeria } from "@/components/Galeria";
import { Depoimentos } from "@/components/Depoimentos";
import { CtaFooter } from "@/components/CtaFooter";
import { AnimatedBubbles } from "@/components/AnimatedBubbles";

export default function Page() {
  return (
    <main className="relative">
      {/* Fundo fixo com gradiente + bolinhas */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#f5f0ff] via-[#fff8f8] to-[#f0fff4]" />
      <AnimatedBubbles />

      <div className="relative z-10">
        <Nav />
        <Hero />
        <Sobre />
        <Eventos />
        <GaleriaMidia />
        <Galeria />
        <Depoimentos />
        <CtaFooter />
      </div>
    </main>
  );
}
