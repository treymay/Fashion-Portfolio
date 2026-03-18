"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";

const projectImages = [
  { src: "/media/flo-state/styling-00a.png", alt: "Flo State styling portrait 1" },
  { src: "/media/flo-state/styling-00b.png", alt: "Flo State styling portrait 2" },
  { src: "/media/flo-state/styling-01.png", alt: "Flo State styling still 1" },
  { src: "/media/flo-state/styling-02.png", alt: "Flo State styling still 2" },
  { src: "/media/flo-state/styling-03.png", alt: "Flo State styling still 3" },
  { src: "/media/flo-state/styling-04.jpg", alt: "Flo State styling still 4" },
  { src: "/media/flo-state/styling-05.jpg", alt: "Flo State styling still 5" },
  { src: "/media/flo-state/styling-06.jpg", alt: "Flo State styling still 6" },
  { src: "/media/flo-state/styling-07.png", alt: "Flo State styling still 7" },
  { src: "/media/flo-state/styling-08.png", alt: "Flo State styling still 8" },
  { src: "/media/flo-state/styling-09.png", alt: "Flo State styling still 9" },
  { src: "/media/flo-state/styling-10.png", alt: "Flo State styling still 10" },
  { src: "/media/flo-state/styling-11.png", alt: "Flo State styling still 11" },
  { src: "/media/flo-state/styling-12.png", alt: "Flo State styling still 12" },
];

export default function FloStateFilmPage() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  useEffect(() => {
    if (!selectedImage) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedImage(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedImage]);

  return (
    <div className="min-h-screen bg-paper dark:bg-ink pt-24 md:pt-28 pb-20">
      <div className="px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="nav-link text-xs text-ink/60 dark:text-white/60">
            Projects / Film
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-ink dark:text-white mt-3">
            Flo State (Film)
          </h1>
          <p className="font-sans text-ink/70 dark:text-white/70 mt-4 text-lg max-w-2xl">
            Costume Design & Styling for a neo-dystopian senior capstone short film.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <ScrollReveal className="lg:col-span-7">
            <motion.article
              whileHover={{ y: -4 }}
              className="group border border-ink/10 dark:border-white/10 rounded-sm overflow-hidden relative bg-ink/5 dark:bg-white/5"
            >
              <div className="relative aspect-[5/4]">
                <Image
                  src="/media/flo-state/thumbnail.jpg"
                  alt="Flo State film thumbnail"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent dark:from-black/55" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                  <p className="nav-link text-xs text-white/80">Feature Project</p>
                  <h2 className="font-display text-2xl md:text-3xl mt-2">Flo State (Film)</h2>
                </div>
              </div>
            </motion.article>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="lg:col-span-5">
            <div className="space-y-7 border border-ink/10 dark:border-white/10 p-6 md:p-8 rounded-sm bg-paper-off/40 dark:bg-white/[0.03]">
              <div>
                <p className="nav-link text-xs text-ink/55 dark:text-white/55">Dates</p>
                <p className="font-sans text-ink dark:text-white mt-2">November 2025 - March 2026</p>
              </div>
              <div>
                <p className="nav-link text-xs text-ink/55 dark:text-white/55">Role</p>
                <p className="font-sans text-ink dark:text-white mt-2">Costume Designer / Stylist</p>
              </div>
              <div>
                <p className="nav-link text-xs text-ink/55 dark:text-white/55">Share Link Photo</p>
                <a
                  href="/media/flo-state/thumbnail.jpg"
                  target="_blank"
                  rel="noreferrer"
                  className="font-sans text-sm text-ink/80 dark:text-white/80 mt-2 inline-block underline underline-offset-4 hover:opacity-70 transition-opacity"
                >
                  /media/flo-state/thumbnail.jpg
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2} className="mt-16 md:mt-20">
          <div className="border-y border-ink/10 dark:border-white/10 py-10">
            <h3 className="font-display text-2xl md:text-3xl text-ink dark:text-white">
              Project Overview
            </h3>
            <p className="font-sans text-ink/85 dark:text-white/85 text-base md:text-lg leading-relaxed max-w-4xl mt-5">
              I was a costume designer / stylist for Flo State, a short senior capstone film directed by Tanner Phillips and produced by Jennifer Zicha. The goal was to proficiently style the cast in a hierarchy of outfits in a neo-dystopian theme while also making sure everyone was comfortable in their looks.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          <ScrollReveal delay={0.25}>
            <section className="border border-ink/10 dark:border-white/10 rounded-sm p-6 md:p-7 h-full">
              <h3 className="font-display text-xl md:text-2xl text-ink dark:text-white">
                Skills
              </h3>
              <p className="font-sans text-ink/80 dark:text-white/80 mt-4 leading-relaxed">
                Costume Design · Fashion Styling · Problem Solving
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <section className="border border-ink/10 dark:border-white/10 rounded-sm p-6 md:p-7 h-full">
              <h3 className="font-display text-xl md:text-2xl text-ink dark:text-white">
                Creative Direction
              </h3>
              <p className="font-sans text-ink/80 dark:text-white/80 mt-4 leading-relaxed">
                Neo-dystopian world-building with a clear character hierarchy, balancing cinematic impact with practical wearability for each cast member.
              </p>
            </section>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.35} className="mt-16 md:mt-20">
          <div className="flex items-end justify-between gap-4 mb-6">
            <h3 className="font-display text-2xl md:text-3xl text-ink dark:text-white">
              Styling Gallery
            </h3>
            <p className="nav-link text-xs text-ink/55 dark:text-white/55">
              Behind the scenes and final looks
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {projectImages.map((image, index) => (
            <ScrollReveal key={image.src} delay={0.04 * (index % 6)}>
              <motion.button
                type="button"
                onClick={() => setSelectedImage(image)}
                whileHover={{ y: -3 }}
                className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-ink/10 dark:border-white/10 bg-ink/5 dark:bg-white/5 group"
                aria-label={`Open full image: ${image.alt}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </motion.button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[90] bg-black/75 backdrop-blur-[2px] overflow-y-auto"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Expanded gallery image"
        >
          <div className="min-h-full px-4 py-8 md:px-8 md:py-10 flex items-start justify-center">
            <div
              className="w-full max-w-5xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex justify-end mb-3">
                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  className="nav-link text-xs border border-white/30 text-white px-4 py-2 hover:bg-white/10 transition-colors"
                >
                  Close
                </button>
              </div>
              <div className="rounded-sm overflow-hidden shadow-2xl shadow-black/80 bg-black/40 border border-white/15">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  width={1800}
                  height={2400}
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
