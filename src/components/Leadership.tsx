"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Users2,
  Award,
  Globe2,
  GraduationCap,
  Calendar,
  Building2,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { leadership, education } from "@/data/portfolio";

export function Leadership() {
  return (
    <section
      id="leadership"
      className="py-20 relative scroll-mt-20"
      aria-label="Leadership experience and education"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Leadership Section */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
              <Users2 className="w-4 h-4" />
              <span>Campus Impact</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
              Leadership &amp; Initiative
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mb-8">
              Spearheading institution-wide student governance, orchestrating international
              delegations, and directing large multi-tiered student bodies.
            </p>

            {leadership.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="glow-card rounded-2xl p-6 sm:p-8 bg-[#0b0e17]/85"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 uppercase tracking-wider">
                      Executive Governance
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-2">
                      {item.role}
                    </h3>
                    <p className="text-sm font-medium text-sky-400 mt-0.5">
                      {item.organization}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-medium text-sky-300 w-fit">
                    <Globe2 className="w-3.5 h-3.5" />
                    <span>Japan Day Orchestrator</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {item.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                      <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-300 border border-slate-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education & Academic Rigor */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
              <GraduationCap className="w-4 h-4" />
              <span>Academic Pedigree</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
              Education
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mb-8">
              Rigorous analytical problem-solving and mathematical foundations.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="glow-card rounded-2xl p-6 sm:p-8 bg-[#0b0e17]/85 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-5">
                <Building2 className="w-6 h-6" />
              </div>

              <div className="space-y-1 mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {education.period}
                </span>
                <h3 className="text-xl font-bold text-white">
                  {education.institution}
                </h3>
                <p className="text-sm font-medium text-sky-300">
                  {education.degree} in {education.major}
                </p>
                <p className="text-xs text-slate-400">{education.location}</p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Strong foundation in algorithms, engineering math &amp; data modeling</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  <span>Executive member of Students&apos; Placement Office (SPO)</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

