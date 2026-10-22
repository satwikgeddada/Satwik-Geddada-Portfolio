"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Download, ChevronDown } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Container from "@/components/Container";

const techBadges = [
  { name: "Next.js", color: "bg-white/10" },
  { name: "TypeScript", color: "bg-blue-500/20" },
  { name: "React", color: "bg-cyan-500/20" },
  { name: "Python", color: "bg-yellow-500/20" },
  { name: "FastAPI", color: "bg-emerald-500/20" },
  { name: "RAG / GenAI", color: "bg-purple-500/20" },
];

const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Ambient Glows */}
      <div className="glow-bg top-1/4 left-1/4 w-[400px] h-[400px] bg-accent-primary" />
      <div className="glow-bg bottom-1/4 right-1/4 w-[300px] h-[300px] bg-accent-secondary" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >

            <motion.h1 variants={itemVariants} className="font-bold tracking-tight mb-6">
              <span className="text-5xl md:text-7xl block">
                Hi, I&apos;m <span className="text-glow text-accent-primary">Satwik</span>
              </span>
              <span className="text-1xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-foreground/80 block mt-2">
                AI &amp; Full-Stack Developer
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-foreground/70 mb-4 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Building at the intersection of AI and code, turning bold ideas into intelligent products that make a real-world impact.
            </motion.p>

            <motion.p variants={itemVariants} className="text-xs sm:text-sm text-foreground/45 font-mono mb-8 max-w-xl mx-auto lg:mx-0 tracking-wide">
              5+ projects shipped &nbsp;·&nbsp; 3 hackathon winner &nbsp;·&nbsp; Microsoft Student Ambassador
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="/resume.pdf"
                download="Satwik_Resume.pdf"
                className="group relative px-8 py-4 bg-accent-primary text-slate-950 font-bold rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95 flex items-center shadow-lg shadow-accent-primary/20"
              >
                <span className="relative z-10 flex items-center">
                  Download CV <Download size={18} className="ml-2 group-hover:translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
              </a>

              <a
                href="#projects"
                className="px-8 py-4 glass-card rounded-xl font-bold border border-white/10 hover:border-accent-primary/50 hover:text-accent-primary transition-all hover:scale-105 active:scale-95 flex items-center"
              >
                View Projects
              </a>
            </motion.div>

            {/* Tech Badges (Floating) */}
            <motion.div variants={itemVariants} className="mt-12 flex flex-wrap justify-center lg:justify-start gap-3">
              {techBadges.map((tech, i) => (
                <motion.span
                  key={tech.name}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                  className={cn("px-4 py-2 rounded-lg text-sm font-medium border border-white/5", tech.color)}
                >
                  {tech.name}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual (Image of Satwik) - Visible on all screen sizes with responsive dimensions */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex justify-center relative order-first lg:order-last mt-6 lg:mt-0"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
              {/* Geometric background elements */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-primary/20 to-accent-secondary/20 rounded-3xl rotate-6 blur-2xl" />

              {/* Image Container */}
              <div className="absolute inset-0 glass-card rounded-3xl -rotate-3 overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/profile.jpeg"
                  alt="Satwik"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, (max-width: 1024px) 384px, 450px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
              </div>

              {/* Floating element */}
              <motion.div
                animate={{ y: [-15, 15, -15], rotate: [0, 5, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 lg:-top-10 lg:-right-10 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 glass-card rounded-2xl flex items-center justify-center p-3 sm:p-4 border border-accent-primary/30 z-20"
              >
                <div className="w-full h-full rounded-lg bg-accent-primary/10 flex items-center justify-center">
                  <span className="text-2xl sm:text-3xl lg:text-4xl">🚀</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-foreground/40"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">Explore</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
};

export default Hero;
