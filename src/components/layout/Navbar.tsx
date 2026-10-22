"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { navItems } from "@/data/nav";
import Container from "@/components/Container";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const shouldReduceMotion = useReducedMotion();
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Scroll detection (bottom border fades in after 10px) and active section tracking via IntersectionObserver
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -65% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.href.substring(1));
      if (element) observer.observe(element);
    });

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  // Lock body scroll when mobile menu is open, and handle Escape key + outside clicks
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setIsOpen(false);
          buttonRef.current?.focus();
        }
      };

      const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
        if (
          menuRef.current &&
          !menuRef.current.contains(e.target as Node) &&
          buttonRef.current &&
          !buttonRef.current.contains(e.target as Node)
        ) {
          setIsOpen(false);
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("touchstart", handleOutsideClick);

      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
        document.removeEventListener("mousedown", handleOutsideClick);
        document.removeEventListener("touchstart", handleOutsideClick);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#020617]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-[#020617]/50 backdrop-blur-sm border-b border-transparent"
      )}
    >
      <Container>
        <nav
          aria-label="Main"
          className="h-20 flex md:grid md:grid-cols-[1fr_auto_1fr] items-center justify-between"
        >
        {/* Left: Logo */}
        <div className="justify-self-start flex items-center">
          <Link
            href="#home"
            className="text-2xl font-bold tracking-tighter hover:text-accent-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded-md"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
          >
            SATWIK<span className="text-accent-primary">.</span>
          </Link>
        </div>

        {/* Center (Desktop only): 8 Links centered on the page */}
        <div className="hidden md:flex justify-self-center items-center gap-5 lg:gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={cn(
                  "relative py-1 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded-sm",
                  isActive ? "text-white" : "text-slate-400 hover:text-white"
                )}
              >
                <span>{item.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="navbar-active-underline"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent-primary shadow-[0_0_8px_rgba(34,211,238,0.6)]"
                    transition={{
                      type: shouldReduceMotion ? "tween" : "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right (Desktop): Resume Button */}
        <div className="hidden md:flex justify-self-end items-center">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2 text-sm font-medium text-slate-200 border border-white/15 rounded-full hover:border-accent-primary hover:text-accent-primary hover:shadow-[0_0_15px_rgba(34,211,238,0.35)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
          >
            <span>Resume</span>
            <ArrowUpRight size={14} className="text-current" />
          </a>
        </div>

        {/* Mobile controls (below md): [Resume pill] + [hamburger button] */}
        <div className="flex md:hidden items-center gap-2.5">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-200 border border-white/15 rounded-full hover:border-accent-primary hover:text-accent-primary transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
          >
            <span>Resume</span>
            <ArrowUpRight size={14} className="text-current" />
          </a>

          <button
            ref={buttonRef}
            type="button"
            className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav-panel"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
    </Container>

      {/* Mobile Dropdown Panel: Slide-down + Fade below navbar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            id="mobile-nav-panel"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, height: "auto" }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-[#020617]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl md:hidden"
          >
            <Container className="py-4">
              <div className="flex flex-col divide-y divide-white/5">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                      className={cn(
                        "min-h-[48px] flex items-center justify-between text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded-md px-1",
                        isActive
                          ? "text-accent-primary font-semibold"
                          : "text-slate-300 hover:text-white"
                      )}
                    >
                      <span>{item.name}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-primary shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
                      )}
                    </Link>
                  );
                })}
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
