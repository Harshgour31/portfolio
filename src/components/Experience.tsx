"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, TrendingUp } from "lucide-react";
import { experiences } from "@/data/portfolio";

export function Experience() {
  return (
    <section
      id="experience"
      className="py-20 relative scroll-mt-20"
      aria-label="Work experience timeline"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
            <Briefcase className="w-4 h-4" />
            <span>Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="mt-2 text-slate-400 max-w-xl text-sm sm:text-base">
            Hands-on software engineering roles focusing on scalable backend architectures,
            CI/CD reliability, and LLM-powered services.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l border-slate-800/80 space-y-12">
          {experiences.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Glowing Timeline Marker */}
              <div
                aria-hidden="true"
                className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-sky-400 group-hover:border-sky-300 group-hover:scale-125 transition-all shadow-[0_0_12px_rgba(56,189,248,0.5)]"
              />

              {/* Experience Card */}
              <div className="glow-card rounded-2xl p-6 sm:p-8 bg-[#0b0e17]/80">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                  <div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-sky-500/10 text-sky-400 border border-sky-500/20 uppercase tracking-wider mr-2">
                      {item.type}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-2 group-hover:text-sky-300 transition-colors">
                      {item.role}{" "}
                      <span className="text-sky-400 font-medium">@ {item.company}</span>
                    </h3>
                  </div>

                  <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 sm:gap-1 text-xs text-slate-400">
                    <span className="inline-flex items-center gap-1.5 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800">
                      <Calendar className="w-3.5 h-3.5 text-sky-400" />
                      {item.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Key Metric Highlight */}
                {item.metrics && (
                  <div className="mb-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Impact Highlight: {item.metrics}</span>
                  </div>
                )}

                {/* Bullets List */}
                <ul className="space-y-3 mb-6">
                  {item.description.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-300 border border-slate-800 group-hover:border-slate-700 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

