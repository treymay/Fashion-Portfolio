"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function CLO3DPage() {
  return (
    <div className="min-h-screen bg-paper dark:bg-ink pt-24 md:pt-28 pb-20">
      <div className="px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
        <ScrollReveal>
          <span className="nav-link text-xs text-ink/50 dark:text-white/50">
            Digital tailoring
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-ink dark:text-white mt-2">
            CLO3D
          </h1>
          <p className="font-sans text-ink/70 dark:text-white/70 mt-4 text-lg max-w-xl">
            Pattern, simulation, and visualization. Nothing is real so everything is possible.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="mt-16 md:mt-24">
          <div className="aspect-video md:aspect-[21/9] rounded-sm overflow-hidden border border-ink/10 dark:border-white/10 bg-ink/5 dark:bg-white/5 flex items-center justify-center">
            <div className="text-center">
              <div className="inline-block w-24 h-24 md:w-32 md:h-32 border border-dashed border-ink/30 dark:border-white/30 rounded-full" />
              <p className="nav-link text-xs text-ink/50 dark:text-white/50 mt-6">
                3D assets & renders — coming soon
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.25} className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 font-sans text-sm text-ink/70 dark:text-white/70">
          <div>
            <h3 className="text-ink dark:text-white font-medium nav-link mb-2">Analysis</h3>
            <p>Core garment requirements — breathability, storage, utility in 3D.</p>
          </div>
          <div>
            <h3 className="text-ink dark:text-white font-medium nav-link mb-2">Simulation</h3>
            <p>CLO3D patterns, body heat maps, movement studies.</p>
          </div>
          <div>
            <h3 className="text-ink dark:text-white font-medium nav-link mb-2">Visualization</h3>
            <p>Material libraries, color, atmosphere & emotion.</p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
