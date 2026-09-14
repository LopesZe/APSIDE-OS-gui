import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Capabilities } from "@/components/Capabilities";
import { Method } from "@/components/Method";
import { HowWeWork } from "@/components/HowWeWork";
import { Results } from "@/components/Results";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Problem />
      <Capabilities />
      <Method />
      <HowWeWork />
      <Results />
      <FinalCTA />
      <Footer />
    </main>
  );
}
