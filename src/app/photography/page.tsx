"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function PhotographyPage() {
  return (
    <div className="min-h-screen bg-paper dark:bg-ink pt-24 md:pt-28 pb-20">
      <div className="px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
        <ScrollReveal>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-ink dark:text-white">
            Photography
          </h1>
          <p className="font-sans text-ink/70 dark:text-white/70 mt-4 text-lg max-w-xl">
            Immortalizing my visions that have come to life.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="mt-16 md:mt-24">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
              hidden: {},
            }}
          >
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, filter: "blur(12px)" },
                  visible: { opacity: 1, filter: "blur(0px)" },
                }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="aspect-[3/4] rounded-sm overflow-hidden bg-ink/5 dark:bg-white/5 border border-ink/10 dark:border-white/10 flex items-center justify-center"
              >
                <span className="nav-link text-xs text-ink/40 dark:text-white/40 text-center">
                  <span className="block">Collection {i}</span>
                  <span className="block mt-1 opacity-80">Coming Soon</span>
                </span>
              </motion.div>
            ))}
          </motion.div>
        </ScrollReveal>

        <ScrollReveal delay={0.3} className="mt-16 text-center">
          <p className="font-sans text-sm text-ink/50 dark:text-white/50">
            New editorial & personal series coming soon.
          </p>
        </ScrollReveal>
      </div>
    </div>
  );
}
