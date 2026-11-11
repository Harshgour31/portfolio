"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Github, Linkedin, Mail, Heart } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.06] bg-[#06070a] py-12" aria-label="Page footer">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Summary */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-semibold text-slate-100 tracking-tight text-lg">
              Harsh<span className="text-sky-400 font-bold">.</span>Gour
            </span>
            <p className="text-xs text-slate-400 mt-1 max-w-sm">
              Full-Stack &amp; Frontend Engineer &bull; IIT Kanpur &bull; Designing robust distributed systems and modern web interfaces.
            </p>
          </div>

          {/* Social Icons & Email */}
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-sky-500/30 transition-colors"
              aria-label="Email Harsh Gour"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/30 transition-colors"
              aria-label="Harsh Gour LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              aria-label="Harsh Gour GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-sky-500/30 transition-colors"
              aria-label="Scroll back to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="mt-8 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            &copy; {new Date().getFullYear()} Harsh Gour. Designed with Next.js, TypeScript &amp; Tailwind CSS.
          </p>
          <div className="flex items-center gap-4">
            <span>IIT Kanpur</span>
            <span>&bull;</span>
            <span>Lighthouse 90+ Optimized</span>
            <span>&bull;</span>
            <span>Accessibility First</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
