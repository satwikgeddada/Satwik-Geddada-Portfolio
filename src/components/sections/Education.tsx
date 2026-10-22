"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { GraduationCap, BookOpen, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import Container from "@/components/Container";

interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  score: string;
  description: string;
  coursework: string[];
}

const educationData: EducationItem[] = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Srinivasa Institute of Engineering and Technology, Amalapuram",
    duration: "2023 — 2027",
    score: "CGPA: 8.5/10.0",
    description: "Pursuing B.Tech in Computer Science and Engineering, focusing on Artificial Intelligence, software development, and problem-solving.",
    coursework: ["Data Structures", "Algorithms", "DBMS", "Operating Systems", "Machine Learning"],
  },
  {
    degree: "Senior Secondary (Class XII)",
    institution: "AFDT Junior College, Malkipuram",
    duration: "2022 — 2023",
    score: "Percentage: 79%",
    description: "Completed Intermediate education with a focus on Mathematics, Physics, and Chemistry, preparing for engineering studies.",
    coursework: ["Mathematics", "Physics", "Chemistry"],
  },
  {
    degree: "Secondary School (Class X)",
    institution: "Bhashyam EM School, Tatipaka",
    duration: "2019 — 2020",
    score: "Percentage: 93%",
    description: "Completed Class X with 93%, demonstrating strong academic performance and a solid foundation in Mathematics and Science",
    coursework: ["Mathematics", "Science"],
  },
];

const Education = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="education" className="py-20 md:py-24 relative overflow-hidden">
      <Container>
        <div className="mb-14">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-accent-primary font-mono text-sm tracking-[0.3em] uppercase block mb-4"
          >
            04. Journey
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            Education & <span className="text-glow">Growth</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-0 top-0 w-px bg-gradient-to-b from-accent-primary via-accent-secondary to-transparent hidden md:block"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-10 md:pl-10"
          >
            {educationData.map((edu, idx) => (
              <motion.div key={idx} variants={cardVariants} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[45px] top-2 w-10 h-10 rounded-full bg-slate-950 border border-white/10 flex items-center justify-center z-10 hidden md:flex group-hover:border-accent-primary transition-colors">
                  <GraduationCap size={18} className="text-accent-primary" />
                </div>

                <div className="glass-card p-6 sm:p-8 rounded-3xl border-white/5 hover:border-accent-primary/20 transition-all duration-500">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-5">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2 group-hover:text-accent-primary transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-slate-200 font-medium flex items-center italic text-sm sm:text-base">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="text-left sm:text-right">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-bold uppercase tracking-widest text-accent-primary mb-2">
                        <Calendar size={12} className="mr-1.5" /> {edu.duration}
                      </span>
                      <p className="text-xs sm:text-sm font-mono text-slate-300 font-semibold">{edu.score}</p>
                    </div>
                  </div>

                  <p className="text-slate-300 leading-relaxed mb-6 text-sm sm:text-base">
                    {edu.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <div className="w-full text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 flex items-center">
                      <BookOpen size={14} className="mr-1.5 text-accent-primary" /> Relevant Coursework
                    </div>
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1 rounded-lg bg-white/[0.06] border border-white/10 text-xs font-medium text-slate-200"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Education;
