"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { skillCategories } from "@/data/skills";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-slate-950/40 py-20 md:py-24"
    >
      <div className="container mx-auto px-6">
        <div className="mb-14 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 block font-mono text-sm uppercase tracking-[0.3em] text-accent-primary"
          >
            02. Expertise
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight md:text-5xl"
          >
            My <span className="text-glow">Technical</span> Arsenal
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base"
          >
            Technologies and tools I use to build software,
            develop AI-powered applications, and solve problems.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className={cn(
                  "group relative isolate flex flex-col overflow-hidden rounded-3xl border border-white/5 bg-slate-900/60 p-6 transition-colors duration-300 hover:border-accent-primary/30 md:p-8",
                  category.className
                )}
              >
                <div
                  className={cn(
                    "pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                    category.color
                  )}
                />

                <div className="mb-6 flex items-center gap-4">
                  <div className="rounded-xl bg-white/5 p-3 text-accent-primary transition-transform duration-300 group-hover:scale-110">
                    <Icon size={26} aria-hidden="true" />
                  </div>

                  <h3 className="text-xl font-bold tracking-tight md:text-2xl">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm font-medium text-foreground/75 transition-all duration-200 hover:border-accent-primary/40 hover:bg-accent-primary/10 hover:text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-12 -right-12 -z-10 h-32 w-32 rounded-full bg-accent-primary/10 blur-3xl transition-opacity duration-300 group-hover:bg-accent-primary/20"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
