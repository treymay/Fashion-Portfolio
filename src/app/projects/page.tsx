"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";

const teaserItems = [
  { id: 1, title: "Collection 1", tag: "Coming Soon" },
  { id: 2, title: "Collection 2", tag: "Coming Soon" },
  { id: 3, title: "Collection 3", tag: "Coming Soon" },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-paper dark:bg-ink pt-24 md:pt-28 pb-20">
      <div className="px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
        <ScrollReveal>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-ink dark:text-white">
            Projects
          </h1>
          <p className="font-sans text-ink/70 dark:text-white/70 mt-4 text-lg max-w-xl">
            My favorite works.
          </p>
        </ScrollReveal>

        {/* Horizontal image grid — 2x2 or list of wide cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-16 md:mt-24">
          {teaserItems.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -4 }}
                className="group aspect-[21/9] md:aspect-[16/9] bg-ink/5 dark:bg-white/5 border border-ink/10 dark:border-white/10 rounded-sm overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent dark:from-black/80" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="nav-link text-xs text-white/70">{item.tag}</span>
                  <h2 className="font-display text-xl md:text-2xl mt-1 text-white">
                    {item.title}
                  </h2>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-ink/10 dark:bg-white/10">
                  <span className="nav-link text-xs text-ink dark:text-white">
                    Coming Soon
                  </span>
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3} className="mt-20 text-center">
          <p className="font-sans text-sm text-ink/50 dark:text-white/50">
            New collections in the works. Stay tuned.
          </p>
        </ScrollReveal>
      </div>
    </div>
  );
}
