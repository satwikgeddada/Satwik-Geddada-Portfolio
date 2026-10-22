"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ExternalLink, ArrowUpRight, Mail } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Custom Brand Icons (Re-defined for safety)
const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  category: string;
  status: "Completed" | "Ongoing" | "Featured";
  className?: string;
  imageColor: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "GitHub Portfolio Analyzer",
    description: "AI-Powered GitHub Portfolio Analyzer — Built an AI-driven platform using FastAPI, Gemini AI, and MCP to analyze GitHub profiles, evaluate technical skills, generate coding personality insights, and create downloadable developer portfolio cards with an interactive glassmorphism dashboard.",
    tech: ["Python", "FastAPI", "Gemini AI", "MCP", "GitHub REST API", "JavaScript"],
    github: "https://github.com/satwikgeddada/AI-Powered-GitHub-Portfolio-Analyzer",
    demo: "https://ai-powered-github-portfolio-analyze.vercel.app/",
    category: "AI & ML",
    status: "Featured",
    className: "md:col-span-2 lg:col-span-1 lg:row-span-1",
    imageColor: "from-blue-600/40 to-cyan-400/40",
    image: "/ai.png",
  },
  {
    title: "Research AI",
    description: "ResearchAI is an AI-powered research assistant that summarizes PDFs, answers questions with page-level citations, compares research papers, and identifies potential research gaps using RAG.",
    tech: ["React", "TypeScript", "Python", "FastAPI", "PostgreSQL", "Supabase", "RAG", "Groq", "OpenRouter"],
    github: "https://github.com/ASHOK-12700/research-ai",
    demo: "https://researchai-app.vercel.app/",
    category: "AI & ML",
    status: "Featured",
    className: "md:col-span-1 lg:col-span-1",
    imageColor: "from-purple-600/40 to-indigo-400/40",
    image: "/home page.png",
  },
  {
    title: "WiFi Smart Shield",
    description:
      "An ESP8266-powered IoT security system designed to improve safety on public, passwordless Wi-Fi networks by detecting suspicious activity and monitoring deauthentication attempts, rogue access points, and beacon floods. Features real-time threat alerts and defensive monitoring to help protect network integrity.",
    tech: ["ESP8266", "Network Security", "IoT", "Wi-Fi Defense"],
    github: "#",
    demo: "#",
    category: "Cybersecurity & IoT",
    status: "Completed",
    className: "md:col-span-1 lg:col-span-1",
    imageColor: "from-purple-600/40 to-indigo-400/40",
    image: "/WiFi Smart Shield.png",
  },
  {
    title: "Stadium-Mind-AI",
    description: "StadiumMind AI is a GenAI-powered smart stadium operations platform featuring real-time crowd monitoring, AI-driven emergency response, volunteer allocation, indoor navigation, and a multilingual fan assistant for FIFA World Cup 2026.",
    tech: ["React", "JavaScript", "Vite", "Tailwind CSS", "Python", "FastAPI", "Google Gemini API", "Chart.js."],
    github: "https://github.com/satwikgeddada/Stadium-Mind-AI",
    demo: "https://stadium-mind-ai-two.vercel.app/",
    category: "AI & ML",
    status: "Completed",
    className: "md:col-span-1 lg:col-span-1",
    imageColor: "from-emerald-600/40 to-teal-400/40",
    image: "/stadium mind ai.png",
  },
  {
    title: "AI-Resume-Analyzer",
    description: "AI Resume Analyzer is an AI-powered career assistant that evaluates resumes against job descriptions using Google Gemini, providing ATS compatibility scores, skill gap analysis, actionable optimization insights, and interactive visualizations with PDF report export.",
    tech: ["Python", "FastAPI", "Google Gemini", "JavaScript", "Chart.js", "HTML5/CSS3"],
    github: "https://github.com/satwikgeddada/AI-Resume-analyzer",
    demo: "https://ai-resume-analyzer-frontend-kappa.vercel.app/",
    category: "AI & ML",
    status: "Completed",
    className: "md:col-span-1 lg:col-span-1",
    imageColor: "from-emerald-600/40 to-teal-400/40",
    image: "/AI_Resume_Analayzer.png",
  },
  {
    title: "EventHub",
    description: "EventHub is a full-stack college event management platform featuring role-based access control, real-time event registration, secure Razorpay payments, automated certificate generation, and dedicated dashboards for students, organizers, and administrators.",
    tech: ["React", "JavaScript", "Vite", "Tailwind CSS", "Firebase", "Razorpay API"],
    github: "https://github.com/satwikgeddada/event-hub",
    demo: "https://event-hub-beta-two.vercel.app/",
    category: "Full Stack",
    status: "Completed",
    className: "md:col-span-1 lg:col-span-1",
    imageColor: "from-emerald-600/40 to-teal-400/40",
    image: "/event_hub.png",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Projects = () => {

  return (
    <section id="projects" className="py-20 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-14">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-accent-primary font-mono text-sm tracking-[0.3em] uppercase block mb-4"
          >
            03. Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            Featured <span className="text-glow">Shipments</span>
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className={cn(
                "group relative flex flex-col rounded-[2.5rem] glass-card overflow-hidden border-white/5 hover:border-accent-primary/40 transition-all duration-500",
                project.className
              )}
            >
              {/* Visual Header / Image */}
              <div className={cn(
                "relative w-full aspect-video overflow-hidden transition-all duration-500",
                project.image ? "bg-slate-900" : cn("bg-gradient-to-br", project.imageColor)
              )}>
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-12 glass-card rounded-2xl border-white/10 scale-90 group-hover:scale-100 transition-transform duration-500">
                      <ArrowUpRight size={40} className="text-white/20 group-hover:text-accent-primary transition-colors" />
                    </div>
                  </div>
                )}

                {/* Overlay Badges */}
                <div className="absolute top-6 left-6 flex gap-2 z-10">
                  <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-[11px] font-bold uppercase tracking-widest text-white/90 border border-white/10">
                    {project.category}
                  </span>
                  <span className={cn(
                    "px-3 py-1 rounded-full backdrop-blur-md text-[11px] font-bold uppercase tracking-widest border border-white/10",
                    project.status === "Featured" ? "bg-accent-primary/20 text-accent-primary font-bold" : "bg-white/10 text-white/80"
                  )}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight group-hover:text-accent-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-300 leading-relaxed mb-8 flex-grow text-sm sm:text-base">
                  {project.description}
                </p>

                {/* Tech Stack Chips with WCAG AA compliance (at least 12px, high contrast) */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-white/[0.06] border border-white/10 text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Footer Buttons */}
                {(() => {
                  const hasGithub = Boolean(project.github && project.github !== "#");
                  const hasDemo = Boolean(project.demo && project.demo !== "#");

                  if (!hasGithub && !hasDemo) return null;

                  return (
                    <div className="pt-6 border-t border-white/10">
                      {hasGithub && hasDemo ? (
                        <div className="grid grid-cols-2 gap-4">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-slate-200 hover:text-white hover:bg-white/10 hover:border-accent-primary/50 transition-all group"
                          >
                            <GithubIcon size={16} /> Source
                          </a>
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 py-3 rounded-xl bg-accent-primary/10 border border-accent-primary/30 text-xs font-bold uppercase tracking-widest text-accent-primary hover:bg-accent-primary hover:text-slate-950 transition-all shadow-sm shadow-accent-primary/10"
                          >
                            Live Demo <ExternalLink size={16} />
                          </a>
                        </div>
                      ) : hasGithub ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-slate-200 hover:text-white hover:bg-white/10 hover:border-accent-primary/50 transition-all group"
                        >
                          <GithubIcon size={16} /> View Source Code
                        </a>
                      ) : (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-accent-primary/10 border border-accent-primary/30 text-xs font-bold uppercase tracking-widest text-accent-primary hover:bg-accent-primary hover:text-slate-950 transition-all shadow-sm shadow-accent-primary/10"
                        >
                          Live Demo <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  );
                })()}
              </div>

              {/* Decorative Corner Glow */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-accent-primary/10 blur-[80px] group-hover:bg-accent-primary/30 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
