import React from "react";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Leadership } from "@/components/Leadership";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12 sm:gap-16">
      <Hero />
      <Experience />
      <Projects />
      <Leadership />
      <Skills />
      <Contact />
    </div>
  );
}
