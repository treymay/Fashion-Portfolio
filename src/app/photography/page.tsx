"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";

const collections = [
  {
    title: "Deserted",
    date: "02/15/2026",
    href: "/photography/deserted",
    cover: "/photography/deserted/IMG_5317.jpg",
    type: "Featured",
    details: "11-image monochrome photo walk collection.",
  },
  {
    title: "Collection 2",
    date: "Coming Soon",
    href: "#",
    cover: "",
    type: "In Progress",
    details: "Next editorial collection in development.",
  },
  {
    title: "Collection 3",
    date: "Coming Soon",
    href: "#",
    cover: "",
    type: "In Progress",
    details: "Portrait series in development.",
  },
];

export default function PhotographyPage() {
  return (
    <div className="min-h-screen bg-paper dark:bg-ink pt-24 md:pt-28 pb-20">
      <div className="px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="nav-link text-xs text-ink/60 dark:text-white/60">
            Photography
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-ink dark:text-white">
            Photography
          </h1>
          <p className="font-sans text-ink/70 dark:text-white/70 mt-4 text-lg max-w-2xl">
            Immortalizing my visions that have come to life.
          </p>
        </ScrollReveal>

        <ScrollReveal className="mt-12">
          <Link href="/photography/deserted" className="block group">
            <motion.article
              whileHover={{ y: -3 }}
              className="border border-ink/15 dark:border-white/15 rounded-sm overflow-hidden bg-ink/5 dark:bg-white/5"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="relative aspect-[16/10] lg:col-span-7">
                  <Image
                    src="/photography/deserted/IMG_5317.jpg"
                    alt="Deserted collection cover"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 border border-white/30 bg-black/30 text-white nav-link text-[10px]">
                    Featured Collection
                  </div>
                </div>
                <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <p className="nav-link text-xs text-ink/55 dark:text-white/55">
                      Collection 1
                    </p>
                    <h2 className="font-display text-3xl md:text-4xl text-ink dark:text-white mt-2">
                      Deserted
                    </h2>
                    <p className="font-sans text-sm md:text-base text-ink/65 dark:text-white/65 mt-4">
                      02/15/2026
                    </p>
                    <p className="font-sans text-base text-ink/80 dark:text-white/80 mt-6 leading-relaxed">
                      A monochrome photo walk focused on quiet architecture, empty spaces, and textured portraits.
                    </p>
                  </div>
                  <p className="nav-link text-xs mt-6 text-ink dark:text-white group-hover:opacity-70 transition-opacity">
                    Open collection →
                  </p>
                </div>
              </div>
            </motion.article>
          </Link>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {collections
            .filter((collection) => collection.type !== "Featured")
            .map((collection, index) => (
              <ScrollReveal key={collection.title} delay={0.08 * index}>
                <article className="border border-ink/10 dark:border-white/10 rounded-sm p-6 md:p-7 bg-paper-off/30 dark:bg-white/[0.03] h-full">
                  <p className="nav-link text-xs text-ink/55 dark:text-white/55">
                    {collection.type}
                  </p>
                  <h3 className="font-display text-2xl mt-3 text-ink dark:text-white">
                    {collection.title}
                  </h3>
                  <p className="font-sans text-sm text-ink/60 dark:text-white/60 mt-2">
                    {collection.date}
                  </p>
                  <p className="font-sans text-ink/75 dark:text-white/75 mt-4 leading-relaxed">
                    {collection.details}
                  </p>
                </article>
              </ScrollReveal>
            ))}
        </div>

        <ScrollReveal delay={0.28} className="mt-14">
          <div className="border-t border-ink/10 dark:border-white/10 pt-8">
            <p className="font-sans text-sm text-ink/55 dark:text-white/55">
              Click into each collection to view full galleries.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
