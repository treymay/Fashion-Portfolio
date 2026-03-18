"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function ArchivePage() {
  return (
    <div className="min-h-screen bg-paper dark:bg-ink pt-24 md:pt-28 pb-20">
      <div className="px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="nav-link text-xs text-ink/60 dark:text-white/60">
            Styling
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-ink dark:text-white mt-3">
            Styling
          </h1>
          <p className="font-sans text-ink/70 dark:text-white/70 mt-4 text-lg max-w-3xl">
            A collection of all of my styling work.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-8">
          <ScrollReveal>
            <Link href="/styling/flo-state" className="block group">
              <motion.article
                whileHover={{ y: -3 }}
                className="border border-ink/15 dark:border-white/15 rounded-sm overflow-hidden bg-ink/5 dark:bg-white/5"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  <div className="relative aspect-[16/10] lg:aspect-auto lg:h-full lg:col-span-7">
                    <Image
                      src="/media/flo-state/thumbnail.jpg"
                      alt="Flo State film thumbnail"
                      fill
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 border border-white/30 bg-black/30 text-white nav-link text-[10px]">
                      Archived
                    </div>
                  </div>
                  <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <p className="nav-link text-xs text-ink/55 dark:text-white/55">
                        Film / Costume Design
                      </p>
                      <h2 className="font-display text-2xl md:text-3xl mt-2 text-ink dark:text-white">
                        Flo State (Film)
                      </h2>
                      <p className="font-sans text-ink/75 dark:text-white/75 mt-4 leading-relaxed">
                        Costume designer and stylist for a neo-dystopian short film directed by Tanner Phillips and produced by Jennifer Zicha.
                      </p>
                    </div>
                    <div className="mt-6">
                      <p className="font-sans text-sm text-ink/65 dark:text-white/65">
                        November 2025 - March 2026
                      </p>
                      <p className="nav-link text-xs mt-4 text-ink dark:text-white group-hover:opacity-70 transition-opacity">
                        View project →
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            </Link>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.18} className="mt-12 border-t border-ink/10 dark:border-white/10 pt-8">
          <p className="font-sans text-sm text-ink/55 dark:text-white/55">
            More styling work is coming soon.
          </p>
        </ScrollReveal>
      </div>
    </div>
  );
}
