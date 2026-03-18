"use client";

import { ScrollReveal } from "@/components/ScrollReveal";

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-paper dark:bg-ink pt-24 md:pt-28 pb-20">
      <div className="px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="nav-link text-xs text-ink/60 dark:text-white/60">
            Design
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-ink dark:text-white mt-3">
            Design
          </h1>
          <p className="font-sans text-ink/70 dark:text-white/70 mt-4 text-lg max-w-2xl">
            New design work is currently in development and will be released here.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.18} className="mt-16 md:mt-20">
          <section className="border border-ink/10 dark:border-white/10 rounded-sm p-6 md:p-8 bg-paper-off/30 dark:bg-white/[0.03]">
            <p className="nav-link text-xs text-ink/55 dark:text-white/55">
              Coming Soon
            </p>
            <p className="font-sans text-ink/80 dark:text-white/80 mt-4 leading-relaxed">
              This section has been reset to make space for upcoming work.
            </p>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
