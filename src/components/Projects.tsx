"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FolderGit2,
  ExternalLink,
  Github,
  Award,
  Sparkles,
  ArrowRight,
  Database,
  Layers,
  MapPin,
} from "lucide-react";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <section
      id="projects"
      className="py-20 relative scroll-mt-20"
      aria-label="Featured projects portfolio"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
              <FolderGit2 className="w-4 h-4" />
              <span>Technical Innovations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="mt-2 text-slate-400 max-w-xl text-sm sm:text-base">
              Deep dives into AI generative modeling, geospatial intelligence dashboards,
              and high-volume data analytics pipelines.
            </p>
          </div>

          <a
            href="https://github.com/harshgour"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-sky-400 hover:text-sky-300 transition-colors group"
            aria-label="Explore all repositories on GitHub"
          >
            <span>Explore all repositories</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: index * 0.12 }}
              className="glow-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group bg-[#0c0f18]/90"
            >
              <div>
                {/* Project Header / Category */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    <Sparkles className="w-3 h-3 text-sky-400" />
                    {project.context}
                  </span>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                      aria-label={`View source code for ${project.title} on GitHub`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-sky-400 hover:bg-slate-800 transition-colors"
                      aria-label={`Open live demonstration or project page for ${project.title}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors mb-2">
                  {project.title}
                </h3>

                <p className="text-xs font-medium text-slate-400 mb-4">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Detailed Contribution Highlights */}
                <div className="space-y-2.5 mb-6 text-xs text-slate-300">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Key Architectural Contributions:
                  </div>
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0" />
                      <span className="leading-snug text-slate-300">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Pills */}
              <div className="pt-4 border-t border-white/[0.06] mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900/90 text-slate-300 border border-slate-800"
                    >
                      {tech}
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

