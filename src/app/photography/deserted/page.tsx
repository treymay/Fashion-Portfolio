"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";

const desertedImages = [
  "/photography/deserted/IMG_5232.jpg",
  "/photography/deserted/IMG_5249.jpg",
  "/photography/deserted/IMG_5263.jpg",
  "/photography/deserted/IMG_5265.jpg",
  "/photography/deserted/IMG_5269.jpg",
  "/photography/deserted/IMG_5282.jpg",
  "/photography/deserted/IMG_5285.jpg",
  "/photography/deserted/IMG_5310.jpg",
  "/photography/deserted/IMG_5317.jpg",
  "/photography/deserted/IMG_5318.jpg",
  "/photography/deserted/IMG_5319.jpg",
];

export default function DesertedCollectionPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (selectedIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedIndex(null);
      if (event.key === "ArrowRight") {
        setSelectedIndex((current) => {
          if (current === null) return current;
          return (current + 1) % desertedImages.length;
        });
      }
      if (event.key === "ArrowLeft") {
        setSelectedIndex((current) => {
          if (current === null) return current;
          return (current - 1 + desertedImages.length) % desertedImages.length;
        });
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedIndex]);

  return (
    <div className="min-h-screen bg-paper dark:bg-ink pt-24 md:pt-28 pb-20">
      <div className="px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="nav-link text-xs text-ink/60 dark:text-white/60">
            Photography / Collection 1
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-ink dark:text-white mt-3">
            Deserted
          </h1>
          <p className="font-sans text-ink/70 dark:text-white/70 mt-4 text-lg max-w-2xl">
            02/15/2026
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="mt-12">
          <div className="border border-ink/10 dark:border-white/10 rounded-sm p-5 md:p-6 bg-paper-off/35 dark:bg-white/[0.03]">
            <p className="font-sans text-ink/80 dark:text-white/80 leading-relaxed max-w-3xl">
              A monochrome photo walk focused on quiet architecture, empty spaces,
              and textured portraits.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="mt-10">
          <div className="flex items-end justify-between gap-4 mb-6">
            <h2 className="font-display text-2xl md:text-3xl text-ink dark:text-white">
              Full Collection
            </h2>
            <p className="nav-link text-xs text-ink/55 dark:text-white/55">
              Click to expand
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {desertedImages.map((src, index) => (
            <ScrollReveal key={src} delay={0.03 * (index % 6)}>
              <motion.button
                type="button"
                onClick={() => setSelectedIndex(index)}
                whileHover={{ y: -2 }}
                className="relative w-full aspect-[4/5] overflow-hidden rounded-sm border border-ink/10 dark:border-white/10 bg-ink/5 dark:bg-white/5 group"
                aria-label={`Open Deserted image ${index + 1}`}
              >
                <Image
                  src={src}
                  alt={`Deserted photo ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-contain bg-ink/5 dark:bg-white/[0.03] p-1 transition-transform duration-300 group-hover:scale-[1.01]"
                />
              </motion.button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[90] bg-black/75 backdrop-blur-[2px] overflow-y-auto"
          onClick={() => setSelectedIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Expanded photography image"
        >
          <div className="min-h-full px-4 py-8 md:px-8 md:py-10 flex items-start justify-center">
            <div
              className="w-full max-w-6xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-3 gap-3">
                <p className="nav-link text-xs text-white/80">
                  Deserted — {selectedIndex + 1} / {desertedImages.length}
                </p>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedIndex(
                        (selectedIndex - 1 + desertedImages.length) %
                          desertedImages.length,
                      )
                    }
                    className="nav-link text-xs border border-white/30 text-white px-3 py-2 hover:bg-white/10 transition-colors"
                  >
                    Prev
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedIndex((selectedIndex + 1) % desertedImages.length)
                    }
                    className="nav-link text-xs border border-white/30 text-white px-3 py-2 hover:bg-white/10 transition-colors"
                  >
                    Next
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedIndex(null)}
                    className="nav-link text-xs border border-white/30 text-white px-4 py-2 hover:bg-white/10 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
              <div className="rounded-sm overflow-hidden shadow-2xl shadow-black/80 bg-black/40 border border-white/15">
                <Image
                  src={desertedImages[selectedIndex]}
                  alt={`Deserted photo ${selectedIndex + 1}`}
                  width={2200}
                  height={1600}
                  sizes="100vw"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
