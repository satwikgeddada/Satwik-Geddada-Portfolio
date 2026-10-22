
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Download, Copy, Check } from "lucide-react";
import Container from "@/components/Container";

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="18" cy="6" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText("satwik.geddada05@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 md:py-24"
    >
      <Container>
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 block font-mono text-sm uppercase tracking-[0.3em] text-accent-primary"
          >
            07. Contact
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight md:text-5xl"
          >
            Get In <span className="text-glow">Touch</span>
          </motion.h2>
        </div>

        {/* Centered Contact Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto w-full max-w-2xl space-y-10 text-center"
        >
          <div>
            <h3 className="mb-4 text-2xl font-bold md:text-3xl text-foreground">
              Let&apos;s build something great.
            </h3>

            <p className="mx-auto max-w-xl text-base sm:text-lg leading-relaxed text-slate-300">
              I&apos;m currently looking for new opportunities and
              internships. Whether you have a question or just want to
              say hi, I&apos;ll try my best to get back to you!
            </p>
          </div>

          {/* Email Card with Direct Copy Button */}
          <div className="relative mx-auto max-w-xl">
            <a
              href="mailto:satwik.geddada05@gmail.com"
              className="group flex items-center justify-between rounded-2xl border border-white/10 p-5 sm:p-6 text-left glass-card transition-all hover:border-accent-primary/40"
            >
              <div className="flex items-center min-w-0 pr-3">
                <div className="mr-4 sm:mr-5 rounded-xl bg-accent-primary/10 p-3 sm:p-4 text-accent-primary transition-transform group-hover:scale-110 shrink-0">
                  <Mail size={22} />
                </div>

                <div className="min-w-0">
                  <p className="mb-0.5 text-xs font-mono font-bold uppercase tracking-widest text-slate-400">
                    Email Me
                  </p>
                  <p className="break-all text-sm sm:text-base font-medium text-foreground">
                    satwik.geddada05@gmail.com
                  </p>
                </div>
              </div>

              {/* Copy Email Button */}
              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                className="shrink-0 p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-accent-primary hover:bg-accent-primary/10 hover:border-accent-primary/30 transition-all flex items-center gap-1.5 text-xs font-mono font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
              >
                {copied ? (
                  <>
                    <Check size={16} className="text-emerald-400" />
                    <span className="hidden sm:inline text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    <span className="hidden sm:inline">Copy</span>
                  </>
                )}
              </button>
            </a>

            {/* Toast Notification */}
            <AnimatePresence>
              {copied && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 5, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-slate-900 border border-accent-primary/40 text-accent-primary text-xs font-mono py-1.5 px-3.5 rounded-lg shadow-lg flex items-center gap-1.5 z-20 pointer-events-none"
                >
                  <Check size={14} className="text-emerald-400" />
                  <span>Email copied to clipboard!</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-5">
            <a
              href="https://github.com/satwikgeddada"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="group flex items-center justify-center rounded-2xl border border-white/5 p-5 glass-card transition-all hover:border-accent-primary/30"
            >
              <GithubIcon size={28} />
            </a>

            <a
              href="https://www.linkedin.com/in/satwik-geddada-72bb172b9"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="group flex items-center justify-center rounded-2xl border border-white/5 p-5 glass-card transition-all hover:border-accent-primary/30"
            >
              <LinkedinIcon size={28} />
            </a>
            <a
              href="https://www.instagram.com/satwik.geddada/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="group flex items-center justify-center rounded-2xl border border-white/5 p-5 glass-card transition-all hover:border-accent-primary/30"
            >
              <InstagramIcon size={28} />
            </a>
          </div>

          {/* Download Resume */}
          <a
            href="/resume.pdf"
            download="Satwik_Resume.pdf"
            className="group mx-auto flex w-full max-w-xl items-center justify-center rounded-2xl border border-accent-primary/20 py-6 font-bold uppercase tracking-widest text-accent-primary glass-card transition-all hover:bg-accent-primary hover:text-slate-950"
          >
            Download Resume
            <Download
              size={20}
              className="ml-3 transition-transform group-hover:translate-y-1"
            />
          </a>

          {/* Decorative Glow */}
          <div className="pointer-events-none absolute -bottom-16 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-accent-primary/10 blur-[100px]" />
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact;
