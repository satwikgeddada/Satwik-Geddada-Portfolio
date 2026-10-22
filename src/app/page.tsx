import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import Container from "@/components/Container";


// Section divider component
const SectionDivider = () => (
  <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
);

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <SectionDivider />
      <div className="bg-white/[0.015]">
        <About />
      </div>
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <div className="bg-white/[0.015]">
        <Projects />
      </div>
      <SectionDivider />
      <Education />
      <SectionDivider />
      <div className="bg-white/[0.015]">
        <Experience />
      </div>
      <SectionDivider />
      <Achievements />
      <SectionDivider />
      <div className="bg-white/[0.015]">
        <Contact />
      </div>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 text-center">
        <Container>
          <p className="text-sm text-slate-400 font-mono tracking-widest uppercase">
            Designed & Built by <span className="text-accent-primary font-semibold">Satwik</span> • © 2026
          </p>
        </Container>
      </footer>
    </div>
  );
}
