"use client";

import React, { useState, useCallback, useEffect, useRef, useId } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Trophy,
  Star,
  Code2,
  Users,
  Medal,
  Cpu,
  X,
  ZoomIn,
  BrainCircuit,
  Award,
  Search,
  ExternalLink,
  Filter,
  CheckCircle2,
  Sparkles,
  ImageIcon,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { certs, CertItem, CertCategory } from "@/data/certs";
import { achievements } from "@/data/achievements";
import Container from "@/components/Container";

type TabType = "achievements" | "certifications";
type FilterCategory = "All" | CertCategory;

const filterCategories: FilterCategory[] = [
  "All",
  "AI & Machine Learning",
  "Cloud & DevOps",
  "Data & Databases",
  "Security & Emerging Tech",
];

const Achievements = () => {
  const [activeTab, setActiveTab] = useState<TabType>("achievements");
  const [selectedFilter, setSelectedFilter] = useState<FilterCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);
  const tabListRef = useRef<HTMLDivElement>(null);
  const achievementsTabRef = useRef<HTMLButtonElement>(null);
  const certificationsTabRef = useRef<HTMLButtonElement>(null);
  const searchInputId = useId();

  const lightboxRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null);

  const openLightbox = useCallback((src: string, alt: string) => {
    previouslyFocusedElementRef.current = document.activeElement as HTMLElement | null;
    setLightboxImage({ src, alt });
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxImage(null);
    if (previouslyFocusedElementRef.current) {
      previouslyFocusedElementRef.current.focus();
    }
  }, []);

  // Close lightbox on Escape key and trap focus while open
  useEffect(() => {
    if (!lightboxImage) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeLightbox();
        return;
      }

      if (e.key === "Tab" && lightboxRef.current) {
        const focusableElements = lightboxRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    // Focus the modal/close button initially
    const timer = setTimeout(() => {
      const closeBtn = lightboxRef.current?.querySelector<HTMLButtonElement>("button");
      closeBtn?.focus();
    }, 50);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(timer);
    };
  }, [lightboxImage, closeLightbox]);

  // Keyboard navigation for accessible tabs (ArrowLeft / ArrowRight / Home / End)
  const handleKeyDownTab = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault();
      if (activeTab === "achievements") {
        setActiveTab("certifications");
        certificationsTabRef.current?.focus();
      } else {
        setActiveTab("achievements");
        achievementsTabRef.current?.focus();
      }
    } else if (e.key === "Home") {
      e.preventDefault();
      setActiveTab("achievements");
      achievementsTabRef.current?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      setActiveTab("certifications");
      certificationsTabRef.current?.focus();
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  // Filter and search logic for Certifications (sorted by order ascending)
  const filteredCertifications = certs
    .filter((cert) => {
      const matchesFilter = selectedFilter === "All" || cert.category === selectedFilter;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesFilter;

      const matchesSearch =
        cert.title.toLowerCase().includes(q) ||
        cert.issuer.toLowerCase().includes(q) ||
        cert.tags.some((tag) => tag.toLowerCase().includes(q));

      return matchesFilter && matchesSearch;
    })
    .sort((a, b) => a.order - b.order);

  // Calculate counts for each filter chip
  const filterCounts = filterCategories.reduce((acc, cat) => {
    if (cat === "All") {
      acc[cat] = certs.length;
    } else {
      acc[cat] = certs.filter((c) => c.category === cat).length;
    }
    return acc;
  }, {} as Record<FilterCategory, number>);

  return (
    <section
      id="achievements"
      className="scroll-mt-24 py-20 md:py-24 bg-slate-950/30 relative"
    >
      <Container>
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent-primary font-mono text-sm tracking-[0.3em] uppercase block mb-4"
          >
            06. Recognition
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            Milestones & <span className="text-glow">Honors</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base"
          >
            Track record of hackathon victories, community leadership, and verified credentials.
          </motion.p>
        </div>

        {/* Tab Bar - Centered ~32px gap, Bold, Cyan 2px Underline, Muted Grey Inactive, Horizontally Scrollable on Mobile */}
        <div className="mb-12 flex justify-center">
          <div className="max-w-full overflow-x-auto pb-2 scrollbar-none px-4">
            <div
              ref={tabListRef}
              role="tablist"
              aria-label="Achievements and Certifications switch"
              className="flex items-center justify-center gap-8 min-w-max border-b border-white/10"
            >
              <button
                ref={achievementsTabRef}
                role="tab"
                id="tab-achievements"
                aria-controls="panel-achievements"
                aria-selected={activeTab === "achievements"}
                tabIndex={activeTab === "achievements" ? 0 : -1}
                onClick={() => setActiveTab("achievements")}
                onKeyDown={handleKeyDownTab}
                className={cn(
                  "relative pb-3 text-base md:text-lg font-bold tracking-wide transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded-t",
                  activeTab === "achievements"
                    ? "text-accent-primary"
                    : "text-foreground/40 hover:text-white"
                )}
              >
                <span>Achievements</span>
                {activeTab === "achievements" && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-primary"
                  />
                )}
              </button>

              <button
                ref={certificationsTabRef}
                role="tab"
                id="tab-certifications"
                aria-controls="panel-certifications"
                aria-selected={activeTab === "certifications"}
                tabIndex={activeTab === "certifications" ? 0 : -1}
                onClick={() => setActiveTab("certifications")}
                onKeyDown={handleKeyDownTab}
                className={cn(
                  "relative pb-3 text-base md:text-lg font-bold tracking-wide transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded-t",
                  activeTab === "certifications"
                    ? "text-accent-primary"
                    : "text-foreground/40 hover:text-white"
                )}
              >
                <span>Certifications</span>
                {activeTab === "certifications" && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-primary"
                  />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Tab Panel 1: Achievements / Awards */}
        <div
          id="panel-achievements"
          role="tabpanel"
          aria-labelledby="tab-achievements"
          hidden={activeTab !== "achievements"}
        >
          {activeTab === "achievements" && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap justify-center -m-3 items-stretch"
            >
              {achievements.map((ach) => {
                const isContain = ach.fit === "contain";
                const focusPos = ach.focus ?? "center 25%";

                return (
                  <div
                    key={ach.order}
                    className="w-full md:w-1/2 lg:w-1/3 p-3 flex"
                  >
                    <motion.div
                      variants={itemVariants}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className={cn(
                        "group relative overflow-hidden rounded-[2rem] glass-card border border-white/5 hover:border-[rgba(34,211,238,0.5)] hover:shadow-[0_0_25px_-5px_rgba(34,211,238,0.25)] transition-all duration-300 flex flex-col w-full h-full",
                        ach.className
                      )}
                    >
                      {/* Image at the Top - 16:10 Box with Next.js fill, sizes, lazy loading & zero muddy dimming */}
                      {ach.image && (
                        <div
                          className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 cursor-pointer select-none"
                          onClick={() => openLightbox(ach.image!, ach.title)}
                        >
                          {isContain ? (
                            <>
                              {/* Blurred, darkened background copy for zero bars & high aesthetic */}
                              <Image
                                src={ach.image}
                                alt=""
                                aria-hidden="true"
                                fill
                                loading="lazy"
                                className="object-cover scale-125 blur-lg opacity-40 brightness-75 pointer-events-none"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              />
                              {/* Contained sharp image with entire content, headline, and caption visible */}
                              <Image
                                src={ach.image}
                                alt={ach.title}
                                fill
                                loading="lazy"
                                className="object-contain p-2 relative z-10 transition-transform duration-500 group-hover:scale-[1.02]"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              />
                            </>
                          ) : (
                            /* Real photo with cover fit and calibrated focus point so heads aren't chopped off */
                            <Image
                              src={ach.image}
                              alt={ach.title}
                              fill
                              loading="lazy"
                              style={{ objectPosition: focusPos }}
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          )}

                          {/* Zoom icon on hover without muddying the image */}
                          <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                            <div className="p-2.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 shadow-lg">
                              <ZoomIn size={18} className="text-white" />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Card Content - Equal Height flex-1 layout */}
                      <div className="p-7 flex flex-col flex-1">
                        {/* Icon & Category Pill Vertically Centered */}
                        <div className="flex items-center justify-between gap-3 mb-5">
                          <div className="p-3 rounded-2xl bg-white/5 text-accent-primary group-hover:scale-110 transition-transform duration-300 border border-white/5 shrink-0 flex items-center justify-center">
                            <ach.icon size={22} />
                          </div>
                          <span className="text-xs font-semibold uppercase tracking-wider text-slate-200 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 flex items-center">
                            {ach.category}
                          </span>
                        </div>

                        {/* Unclipped Title */}
                        <h3 className="text-xl font-bold tracking-tight mb-3 group-hover:text-accent-primary transition-colors leading-snug">
                          {ach.title}
                        </h3>

                        {/* Description */}
                        <p className="text-slate-300 leading-relaxed text-sm flex-1">
                          {ach.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          )}
        </div>

        {/* Tab Panel 2: Certifications */}
        <div
          id="panel-certifications"
          role="tabpanel"
          aria-labelledby="tab-certifications"
          hidden={activeTab !== "certifications"}
        >
          {activeTab === "certifications" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Controls: Search & Category Filter Chips */}
              <div className="glass-card rounded-3xl p-6 border-white/5 space-y-6">
                <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
                  {/* Search Bar */}
                  <div className="relative flex-1 max-w-md">
                    <Search
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40"
                    />
                    <label htmlFor={searchInputId} className="sr-only">
                      Search credentials by title, issuer, or tech
                    </label>
                    <input
                      id={searchInputId}
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search credentials, issuers, or tech (e.g. AWS, AI)..."
                      className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-900/80 border border-white/10 text-sm placeholder:text-foreground/30 focus:outline-none focus:border-accent-primary/50 focus:ring-1 focus:ring-accent-primary/50 transition-all text-foreground"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery("")}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-foreground text-xs p-1"
                        aria-label="Clear search"
                      >
                        <X size={14} />
                      </button>
                    )}
                  </div>

                  {/* Result Count indicator */}
                  <div className="text-xs font-mono text-foreground/40 flex items-center gap-2 self-end md:self-auto">
                    <Sparkles size={14} className="text-accent-primary" />
                    <span>
                      Showing {filteredCertifications.length} of {certs.length} credentials
                    </span>
                  </div>
                </div>

                {/* Filter Chips - Horizontally scrollable on mobile */}
                <div className="overflow-x-auto pb-1 scrollbar-none">
                  <div className="flex items-center gap-2.5 min-w-max">
                    <span className="text-xs font-bold uppercase tracking-widest text-foreground/40 flex items-center gap-1.5 mr-1">
                      <Filter size={13} /> Filter:
                    </span>
                    {filterCategories.map((cat) => {
                      const isSelected = selectedFilter === cat;
                      const count = filterCounts[cat] ?? 0;
                      return (
                        <button
                          key={cat}
                          onClick={() => setSelectedFilter(cat)}
                          className={cn(
                            "px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 flex items-center gap-2 border",
                            isSelected
                              ? "bg-accent-primary text-slate-950 font-bold border-accent-primary shadow-sm"
                              : "bg-white/5 border-white/10 text-foreground/60 hover:text-foreground hover:bg-white/10"
                          )}
                        >
                          <span>{cat}</span>
                          <span
                            className={cn(
                              "text-[10px] font-mono px-1.5 py-0.2 rounded-md",
                              isSelected ? "bg-black/20 text-slate-950" : "bg-white/10 text-foreground/60"
                            )}
                          >
                            {count}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Responsive Certifications Grid: max 3 per row */}
              {filteredCertifications.length > 0 ? (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {filteredCertifications.map((cert) => (
                    <motion.div
                      key={cert.id}
                      variants={itemVariants}
                      whileHover={{ y: -5 }}
                      className="group relative rounded-[2rem] glass-card border border-white/5 hover:border-accent-primary/30 transition-all duration-300 flex flex-col overflow-hidden p-6"
                    >
                      {/* Certificate image on top: fixed 4:3 aspect ratio, object-fit contain, lazy loaded */}
                      {cert.image && cert.image.trim() !== "" ? (
                        <div
                          className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-900/90 border border-white/5 mb-5 cursor-pointer group/img"
                          onClick={() => {
                            const imgSrc = cert.image!.startsWith("/") || cert.image!.startsWith("http")
                              ? cert.image!
                              : `/${cert.image!}`;
                            openLightbox(imgSrc, cert.title);
                          }}
                        >
                          <Image
                            src={
                              cert.image.startsWith("/") || cert.image.startsWith("http")
                                ? cert.image
                                : `/${cert.image}`
                            }
                            alt={cert.title}
                            fill
                            loading="lazy"
                            className="object-contain p-2 opacity-90 group-hover/img:opacity-100 group-hover/img:scale-105 transition-all duration-500"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity" />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
                            <div className="p-2.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 shadow-lg">
                              <ZoomIn size={18} className="text-white" />
                            </div>
                          </div>
                        </div>
                      ) : (
                        /* Placeholder when image is empty */
                        <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900/80 to-slate-950/90 border border-dashed border-white/10 mb-5 flex flex-col items-center justify-center p-5 text-center group-hover:border-accent-primary/30 transition-colors">
                          <div className="p-3 rounded-2xl bg-white/5 text-accent-primary/70 mb-3 border border-white/5 group-hover:scale-110 group-hover:text-accent-primary transition-all">
                            <ImageIcon size={28} />
                          </div>
                          <p className="text-xs font-medium text-foreground/50">
                            Certificate image coming soon
                          </p>
                          <span className="text-[10px] font-mono text-accent-primary/60 mt-1 uppercase tracking-wider">
                            Verified Credential
                          </span>
                        </div>
                      )}

                      {/* Issuer & Date */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-semibold text-accent-primary truncate">
                          {cert.issuer}
                        </span>
                        <span className="text-xs font-mono text-foreground/40 shrink-0">
                          {cert.date}
                        </span>
                      </div>

                      {/* Title */}
                      <h4 className="text-lg font-bold tracking-tight mb-4 group-hover:text-accent-primary transition-colors leading-snug">
                        {cert.title}
                      </h4>

                      {/* Tag Chips */}
                      {cert.tags && cert.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {cert.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/[0.08] border border-white/10 text-slate-200"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Verify Credential Link (hidden if no link) */}
                      {cert.link && cert.link.trim() !== "" && (
                        <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent-primary hover:text-accent-primary/80 transition-colors group/link"
                          >
                            <span>Verify credential</span>
                            <ExternalLink
                              size={13}
                              className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                            />
                          </a>
                          <span className="text-[10px] font-mono text-foreground/30">
                            {cert.category}
                          </span>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <div className="glass-card rounded-3xl p-12 text-center border-white/5">
                  <p className="text-foreground/50 text-sm mb-3">No certifications match your search query or filter.</p>
                  <button
                    onClick={() => {
                      setSelectedFilter("All");
                      setSearchQuery("");
                    }}
                    className="px-4 py-2 rounded-xl bg-accent-primary/10 border border-accent-primary/30 text-accent-primary text-xs font-bold uppercase tracking-wider hover:bg-accent-primary hover:text-slate-950 transition-all"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </Container>

      {/* Lightbox Modal with focus trap, escape key, and click-outside close */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            ref={lightboxRef}
            role="dialog"
            aria-modal="true"
            aria-label={lightboxImage.alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md cursor-pointer p-4"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
              aria-label="Close lightbox"
            >
              <X size={24} className="text-white" />
            </button>

            {/* Image title */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 max-w-[90vw] text-center">
              <span className="text-white/80 text-xs sm:text-sm font-medium bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 truncate block">
                {lightboxImage.alt}
              </span>
            </div>

            {/* Full image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-[92vw] h-[82vh] max-w-6xl cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                fill
                className="object-contain"
                sizes="92vw"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Achievements;
