"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Cpu, Wrench } from "lucide-react";
import { skillsCategories } from "@/data/portfolio";

export function Skills() {
  const getCategoryIcon = (category: string) => {
    if (category.includes("Languages")) return <Code className="w-4 h-4 text-sky-400" />;
    if (category.includes("Data")) return <Cpu className="w-4 h-4 text-indigo-400" />;
    return <Wrench className="w-4 h-4 text-emerald-400" />;
  };

  return (
    <section className="py-16 relative" aria-label="Technical skills overview">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Technical Stack &amp; Tooling
          </h2>
          <p className="mt-1 text-slate-400 text-sm">
            Technologies and toolchains leveraged across industry internships and academic research.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillsCategories.map((cat, index) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.1 }}
              className="glow-card rounded-2xl p-6 bg-[#0b0e17]/80 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-4">
                  {getCategoryIcon(cat.category)}
                  <h3 className="text-base font-semibold text-white">
                    {cat.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1.5 rounded-lg bg-slate-900/90 text-slate-200 border border-slate-800/80 hover:border-sky-500/30 hover:text-sky-300 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

