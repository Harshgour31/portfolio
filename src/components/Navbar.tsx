"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Code2 } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Skip to Main Content Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-sky-500 focus:text-slate-950 focus:font-semibold focus:rounded-md focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#07080c]/80 backdrop-blur-md border-b border-white/[0.06] shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Main Navigation"
            className="flex items-center justify-between"
          >
            {/* Logo */}
            <Link
              href="#"
              className="flex items-center gap-2.5 group focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg p-1"
              aria-label="Harsh Gour - Back to top"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500/20 via-indigo-500/20 to-purple-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:border-sky-400 transition-colors shadow-sm">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="font-semibold text-base sm:text-lg text-slate-100 tracking-tight group-hover:text-sky-300 transition-colors">
                Harsh<span className="text-sky-400 font-bold">.</span>Gour
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1.5 lg:gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.04] rounded-lg transition-colors focus-visible:text-sky-400"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-700/80 text-slate-300 hover:text-white hover:border-slate-500 transition-colors"
                aria-label="Visit Harsh Gour's GitHub profile"
              >
                GitHub
              </a>
              <a
                href="#contact"
                className="text-xs font-semibold px-3.5 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 transition-all flex items-center gap-1 shadow-sm hover:shadow-sky-500/20"
              >
                Let&apos;s Connect
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg border border-white/[0.08]"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </nav>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden border-b border-white/[0.08] bg-[#090b12]/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-slate-200 hover:text-sky-400 hover:bg-white/[0.03] rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-white/[0.08] flex flex-col gap-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2 text-sm font-semibold rounded-lg border border-slate-700 text-slate-200 hover:text-white"
              >
                GitHub Profile
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-2 text-sm font-semibold rounded-lg bg-sky-500 text-slate-950 hover:bg-sky-400"
              >
                Get In Touch
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

