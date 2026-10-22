
"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import {
  Briefcase,
  GitBranch,
  Trophy,
  Calendar,
  ExternalLink,
  Video,
  BrainCircuit,
  Code2,
} from "lucide-react";
import Container from "@/components/Container";

interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
  achievements: string[];
  tech: string[];
  icon: React.ElementType;
  link?: string;
}

const experiences: Experience[] = [
  /* {
     role: "Artificial Intelligence Intern",
     company: "iNeuBytes",
     duration: "30 Days",
     description:
       "Participated in a virtual AI internship focused on practical learning, applied AI tasks, and project-based development.",
     achievements: [
       "Worked on assigned artificial intelligence tasks and practical exercises.",
       "Applied AI concepts to project-based problem-solving.",
       "Strengthened technical skills through hands-on learning and project development."
     ],
     tech: ["Python", "Artificial Intelligence", "Machine Learning"],
     icon: BrainCircuit,
   },*/
  /* {
     role: "Full Stack Development Intern",
     company: "EdVyro",
     duration: "30 Days",
     description:
       "Participating in a project-based virtual internship focused on full-stack web development, API design, database integration, and application deployment.",
     achievements: [
       "Developed responsive web interfaces using HTML, CSS, and JavaScript.",
       "Practiced REST API development and persistent database integration.",
       "Worked on application validation, testing, and deployment."
     ],
     tech: [
       "HTML",
       "CSS",
       "JavaScript",
       "Node.js",
       "Express",
       "SQL"
     ],
     icon: Code2,
   },*/
  {
    role: "Frontend Developer Intern",
    company: "ShadowFox",
    duration: "August 2026 (1 Month)",
    description:
      "Developed responsive and visually engaging web interfaces, focusing on modern frontend design, user experience, and interactive web applications.",
    achievements: [
      "Developed a personal portfolio website showcasing projects, skills, and achievements.",
      "Built a brand-focused e-commerce storefront with responsive layouts and interactive UI components.",
      "Designed a frontend case study for Neltrix AI, emphasizing modern UI/UX principles and visual consistency.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    icon: Briefcase,
  },
  {
    role: "Content Creator",
    company: " YouTube",
    duration: "May 2026 — Present",
    description:
      "Create and publish engaging video content through research, scripting, content planning, and digital storytelling to educate and engage audiences.",
    achievements: [
      "Develop content ideas and scripts tailored to the target audience.",
      "Manage video content creation, editing, and publishing workflows.",
      "Strengthen communication, creativity, and digital storytelling skills.",
    ],
    tech: [
      "YouTube",
      "Video Editing",
      "Content Strategy",
      "Digital Storytelling",
    ],
    icon: Video,
    link: "https://www.youtube.com/@VetGuruTelugu",
  },
];

const Experience = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="experience" className="py-20 md:py-24 relative">
      <Container>
        <div className="mb-14">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-accent-primary font-mono text-sm tracking-[0.3em] uppercase block mb-4"
          >
            05. Experience
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            Professional <span className="text-glow">Timeline</span>
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-10"
        >
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;

            return (
              <motion.div
                key={`${exp.role}-${idx}`}
                variants={itemVariants}
                className="group relative flex flex-col md:flex-row gap-8 glass-card p-6 sm:p-8 md:p-10 rounded-[2.5rem] border-white/5 hover:border-accent-primary/20 transition-all duration-500"
              >
                {/* Left Side: Icon & Duration */}
                <div className="md:w-1/4">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-accent-primary group-hover:scale-110 transition-all duration-500">
                    <Icon
                      size={28}
                      className="text-accent-primary"
                    />
                  </div>

                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-[11px] font-bold uppercase tracking-widest text-accent-primary">
                    <Calendar size={12} className="mr-1.5" />
                    {exp.duration}
                  </div>
                </div>

                {/* Right Side: Content */}
                <div className="md:w-3/4">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-accent-primary transition-colors">
                    {exp.role}
                  </h3>

                  <p className="text-lg font-medium text-slate-200 mb-5 italic">
                    {exp.company}
                  </p>

                  <p className="text-slate-300 leading-relaxed mb-6 text-sm sm:text-base">
                    {exp.description}
                  </p>

                  {/* Optional external link */}
                  {exp.link && (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${exp.company} YouTube channel`}
                      className="inline-flex items-center gap-2 mb-8 rounded-xl border border-accent-primary/30 bg-accent-primary/10 px-4 py-2.5 text-sm font-semibold text-accent-primary hover:bg-accent-primary hover:text-slate-950 transition-all"
                    >
                      <Video size={18} />
                      Visit My YouTube Channel
                      <ExternalLink size={14} />
                    </a>
                  )}

                  <ul className="space-y-3 mb-8">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start text-sm text-slate-200"
                      >
                        <div className="mt-1.5 mr-3 shrink-0 w-1.5 h-1.5 rounded-full bg-accent-primary" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((technology) => (
                      <span
                        key={technology}
                        className="px-3 py-1 rounded-lg bg-white/[0.06] border border-white/10 text-xs font-mono text-slate-200 font-medium"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Decorative Arrow */}
                <div className="absolute top-8 right-8 text-foreground/10 group-hover:text-accent-primary/40 transition-colors hidden md:block">
                  <ExternalLink size={32} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};

export default Experience;
