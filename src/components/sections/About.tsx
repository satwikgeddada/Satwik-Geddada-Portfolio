"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, Variants, useInView } from "framer-motion";
import {
  GraduationCap,
  Code2,
  Rocket,
  Brain,
  Search,
  Layers,
  ArrowRight,
} from "lucide-react";

const focusItems = [
  { icon: Brain, label: "Generative AI & LLM apps" },
  { icon: Search, label: "RAG pipelines" },
  { icon: Layers, label: "Full-Stack with Next.js & FastAPI" },
  { icon: Rocket, label: "Shipping real-world projects" },
];

const stats = [
  { label: "Years of Coding", target: 3, suffix: "+", icon: Code2 },
  { label: "Projects Built", target: 5, suffix: "+", icon: Rocket },
  { label: "Hackathons", target: 3, suffix: "+", icon: GraduationCap },
];

const chips = ["#GenAI", "#RAG", "#FastAPI", "#Full-Stack", "#Problem Solving"];

// Count-up Stat Card component
const StatCard = ({
  stat,
  variants,
}: {
  stat: (typeof stats)[0];
  variants: Variants;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = stat.target;
    const duration = 1200; // ms
    const incrementTime = 40;
    const step = end / (duration / incrementTime);

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, stat.target]);

  const Icon = stat.icon;

  return (
    <motion.div
      ref={ref}
      variants={variants}
      whileHover={{ y: -5 }}
      className="glass-card p-6 rounded-2xl text-center group transition-all hover:border-accent-primary/50"
    >
      <Icon
        size={24}
        className="mx-auto mb-3 text-accent-primary group-hover:scale-110 transition-transform"
      />
      <h3 className="text-3xl font-bold mb-1 tabular-nums">
        {count}
        {stat.suffix}
      </h3>
      <p className="text-xs text-foreground/50 uppercase tracking-widest font-bold">
        {stat.label}
      </p>
    </motion.div>
  );
};

const About = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const listContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const listItemVariants: Variants = {
    hidden: { opacity: 0, x: -15 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="relative py-20 md:py-24 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
        >
          {/* Left: Current Focus Panel (stacks on top on mobile, lg:col-span-5) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 relative order-first"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden glass-card p-2 group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative w-full h-full rounded-2xl bg-slate-900/90 p-6 sm:p-7 flex flex-col justify-between border border-white/5 backdrop-blur-xl">
                {/* Top Label */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono text-accent-primary font-bold tracking-[0.25em] uppercase">
                      Current Focus
                    </span>
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-primary" />
                    </span>
                  </div>

                  {/* List of 4 Focus Items */}
                  <motion.ul
                    variants={listContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-3.5"
                  >
                    {focusItems.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <motion.li
                          key={idx}
                          variants={listItemVariants}
                          className="flex items-center space-x-3 text-sm text-slate-200 group/item"
                        >
                          <div className="p-2 rounded-lg bg-accent-primary/10 text-accent-primary border border-accent-primary/20 shrink-0 group-hover/item:border-accent-primary/50 transition-colors">
                            <Icon size={16} />
                          </div>
                          <span className="font-medium tracking-wide">
                            {item.label}
                          </span>
                        </motion.li>
                      );
                    })}
                  </motion.ul>
                </div>

                {/* Bottom Status Box */}
                <div className="mt-4 p-4 glass-card rounded-xl border border-accent-primary/20 bg-slate-950/40">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-[11px] font-mono text-accent-primary font-bold uppercase tracking-widest">
                      Status:
                    </span>
                    <span className="text-xs font-semibold text-emerald-400">
                      Open to work
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-slate-200">
                    AI Engineer &amp; Full-Stack roles
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Accents */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent-primary/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-secondary/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
          </motion.div>

          {/* Right: Content Section */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 space-y-8"
          >
            <div>
              <motion.span
                variants={itemVariants}
                className="text-accent-primary font-mono text-sm tracking-[0.3em] uppercase block mb-4"
              >
                01. About Me
              </motion.span>
              <motion.h2
                variants={itemVariants}
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight"
              >
                I turn AI ideas into products people can actually use.
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg text-slate-300 leading-relaxed mb-4"
              >
                I&apos;m a final-year Computer Science Engineering student passionate
                about building technology that makes a difference. My interests
                lie at the intersection of Artificial Intelligence, Generative AI,
                and Full-Stack Development, where I transform ideas into
                intelligent, scalable, and user-friendly applications.
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg text-slate-300 leading-relaxed"
              >
                I believe in learning by building, experimenting with emerging
                technologies, and solving real-world problems through code. From
                AI-powered applications to modern web platforms, I enjoy creating
                meaningful digital experiences and continuously pushing my
                technical boundaries to engineer solutions that make an impact.
              </motion.p>
            </div>

            {/* Stats Grid with Count-up animation */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <StatCard key={i} stat={stat} variants={itemVariants} />
              ))}
            </div>

            {/* Interest Badges & Link to Projects */}
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {chips.map((chip, i) => (
                  <motion.span
                    key={i}
                    variants={itemVariants}
                    className="px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs font-mono font-medium text-slate-200 hover:text-accent-primary hover:border-accent-primary/40 transition-colors"
                  >
                    {chip}
                  </motion.span>
                ))}
              </div>

              <motion.div variants={itemVariants} className="pt-2">
                <a
                  href="#projects"
                  className="inline-flex items-center text-sm font-medium text-accent-primary hover:text-accent-primary/80 transition-all group"
                >
                  <span>See my projects</span>
                  <ArrowRight
                    size={16}
                    className="ml-1.5 transition-transform group-hover:translate-x-1"
                  />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
