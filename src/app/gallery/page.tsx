"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";

const placeholders = [
  { w: "md:col-span-2" },
  { w: "md:col-span-1" },
  { w: "md:col-span-1" },
  { w: "md:col-span-1" },
  { w: "md:col-span-2" },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white pt-24 md:pt-28 pb-20">
      <div className="px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
        <ScrollReveal>
          <h1 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-nordic-dark font-medium tracking-tight">
            Gallery
          </h1>
          <p className="font-sans text-nordic-text/80 mt-4 text-lg max-w-xl">
            A visual feast — curated collections and moments. Coming soon.
          </p>
        </ScrollReveal>

        {/* Minimalist scroll teaser: asymmetric grid */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {placeholders.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`aspect-[4/5] ${item.w} rounded-sm overflow-hidden bg-nordic-bg border border-nordic-text/5 flex items-center justify-center`}
              >
                <span className="font-sans text-xs text-nordic-text/30">—</span>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3} className="mt-20 text-center">
          <p className="font-sans text-sm text-nordic-text/60">
            Curated work and collaborations. Stay tuned.
          </p>
        </ScrollReveal>
      </div>
    </div>
  );
}
