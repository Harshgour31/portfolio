"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  FileText,
  Github,
  Mail,
  GraduationCap,
  Sparkles,
  Layers,
  Terminal,
  Activity,
  Users,
} from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="about"
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden"
      aria-label="Introduction and summary"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start max-w-3xl">
          {/* Status Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-sky-500/25 bg-sky-500/10 text-sky-300 text-xs sm:text-sm font-medium mb-6 shadow-sm shadow-sky-500/5 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>IIT Kanpur Undergraduate &bull; Full-Stack &amp; Systems</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.12]"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-accent-text">{personalInfo.name}</span>
            <br />
            <span className="text-slate-200 text-3xl sm:text-4xl lg:text-5xl font-semibold">
              Full-Stack &amp; Frontend Engineer.
            </span>
          </motion.h1>

          {/* Subheading / Hook */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-slate-300 mb-6 leading-relaxed max-w-2xl font-normal"
          >
            Currently pursuing my B.Tech at{" "}
            <span className="text-white font-medium">
              Indian Institute of Technology Kanpur
            </span>
            . I specialize in architecting performant web interfaces, robust backend
            microservices, and end-to-end data pipelines with a strong emphasis on reliability,
            observability, and modern developer tooling.
          </motion.p>

          {/* Status & Focus Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.25 }}
            className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-400 mb-8"
          >
            <div className="flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-sky-400" />
              <span>IIT Kanpur (Civil Engineering)</span>
            </div>
            <span className="text-slate-600 hidden sm:inline">&bull;</span>
            <div className="flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-indigo-400" />
              <span>Next.js, TypeScript &amp; FastAPI</span>
            </div>
            <span className="text-slate-600 hidden sm:inline">&bull;</span>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Ex-Intern @ Blitz &amp; NextRoundAi</span>
            </div>
          </motion.div>

          {/* Primary Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm transition-all shadow-md shadow-sky-500/20 hover:shadow-sky-500/35 hover:-translate-y-0.5"
              aria-label="View Harsh Gour's GitHub profile"
            >
              <Github className="w-4 h-4" />
              <span>View GitHub</span>
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/10 hover:border-sky-500/40 bg-white/[0.04] hover:bg-white/[0.08] text-white font-medium text-sm transition-all hover:-translate-y-0.5"
              aria-label="Contact Harsh Gour"
            >
              <Mail className="w-4 h-4 text-sky-400" />
              <span>Get in Touch</span>
            </a>

            <a
              href="mailto:harshgour23@iitk.ac.in?subject=Resume%20Request%20-%20Harsh%20Gour"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-sm font-medium transition-colors"
              aria-label="Request or download Harsh Gour's resume"
            >
              <FileText className="w-4 h-4 text-slate-400" />
              <span>Resume</span>
            </a>
          </motion.div>

          {/* Quick Metrics Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-14 w-full grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
          >
            <div className="glow-card p-4 rounded-xl border border-white/[0.07] bg-white/[0.02]">
              <div className="flex items-center gap-2 text-sky-400 mb-1">
                <Terminal className="w-4 h-4" />
                <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">2,785+</span>
              </div>
              <p className="text-xs text-slate-400 leading-snug">CI/CD Unit Tests Orchestrated</p>
            </div>

            <div className="glow-card p-4 rounded-xl border border-white/[0.07] bg-white/[0.02]">
              <div className="flex items-center gap-2 text-emerald-400 mb-1">
                <Activity className="w-4 h-4" />
                <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">68.4k+</span>
              </div>
              <p className="text-xs text-slate-400 leading-snug">Data Records Processed</p>
            </div>

            <div className="glow-card p-4 rounded-xl border border-white/[0.07] bg-white/[0.02]">
              <div className="flex items-center gap-2 text-indigo-400 mb-1">
                <Users className="w-4 h-4" />
                <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">200+</span>
              </div>
              <p className="text-xs text-slate-400 leading-snug">Team Members Led @ SPO</p>
            </div>

            <div className="glow-card p-4 rounded-xl border border-white/[0.07] bg-white/[0.02]">
              <div className="flex items-center gap-2 text-violet-400 mb-1">
                <Sparkles className="w-4 h-4" />
                <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">IIT Kanpur</span>
              </div>
              <p className="text-xs text-slate-400 leading-snug">Premier Engineering Pedigree</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

