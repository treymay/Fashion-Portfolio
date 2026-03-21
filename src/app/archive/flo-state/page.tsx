"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";

/** Primary Flo State styling stills — matches hero marquee */
const castStylingImages = [
  { src: "/media/flo-state/styling-00a.png", alt: "Flo State — styling 00a" },
  { src: "/media/flo-state/styling-00b.png", alt: "Flo State — styling 00b" },
  { src: "/media/flo-state/styling-01.png", alt: "Flo State — styling 01" },
  { src: "/media/flo-state/styling-02.png", alt: "Flo State — styling 02" },
  { src: "/media/flo-state/styling-04.jpg", alt: "Flo State — styling 04" },
  { src: "/media/flo-state/styling-05.jpg", alt: "Flo State — styling 05" },
  { src: "/media/flo-state/styling-06.jpg", alt: "Flo State — styling 06" },
  { src: "/media/flo-state/styling-07.png", alt: "Flo State — styling 07" },
  { src: "/media/flo-state/styling-08.png", alt: "Flo State — styling 08" },
  { src: "/media/flo-state/styling-13.jpg", alt: "Flo State — styling 13" },
  { src: "/media/flo-state/styling-14.jpg", alt: "Flo State — styling 14" },
];

const extraImages = Array.from({ length: 14 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return {
    src: `/media/flo-state/extras/extra-${n}.jpg`,
    alt: `Flo State extra ${n}`,
  };
});

export default function FloStateArchivePage() {
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
    <div className="min-h-screen bg-paper pt-24 md:pt-28 pb-20">
      <div className="px-5 md:px-10 lg:px-14 max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="nav-link text-xs text-ink/60">
            Styling / Film
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-ink mt-3">
            Flo State (Film)
          </h1>
          <p className="font-sans text-ink/70 mt-4 text-lg max-w-2xl">
            Costume Design & Styling for a neo-dystopian senior capstone short film.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <ScrollReveal className="lg:col-span-6">
            <motion.article
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden bg-paper"
            >
              {/* Square intro — full image visible, no crop */}
              <div className="relative aspect-square w-full">
                <Image
                  src="/media/flo-state/thumbnail.jpg"
                  alt="Flo State — project thumbnail"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-contain"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                  <p className="nav-link text-xs text-white/80">Archived Project</p>
                  <h2 className="font-display text-2xl md:text-3xl mt-2">Flo State (Film)</h2>
                </div>
              </div>
            </motion.article>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="lg:col-span-6">
            <div className="space-y-7 p-6 md:p-8 bg-paper-off/40">
              <div>
                <p className="nav-link text-xs text-ink/55">Dates</p>
                <p className="font-sans text-ink mt-2">November 2025 - March 2026</p>
              </div>
              <div>
                <p className="nav-link text-xs text-ink/55">Role</p>
                <p className="font-sans text-ink mt-2">Costume Designer / Stylist</p>
              </div>
              <div>
                <p className="nav-link text-xs text-ink/55">Share Link Photo</p>
                <a
                  href="/media/flo-state/thumbnail.jpg"
                  target="_blank"
                  rel="noreferrer"
                  className="font-sans text-sm text-ink/80 mt-2 inline-block underline underline-offset-4 hover:opacity-70 transition-opacity"
                >
                  /media/flo-state/thumbnail.jpg
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2} className="mt-16 md:mt-20">
          <div className="border-y border-ink/10 py-10">
            <h3 className="font-display text-2xl md:text-3xl text-ink">
              Project Overview
            </h3>
            <p className="font-sans text-ink/85 text-base md:text-lg leading-relaxed max-w-4xl mt-5">
              I was a costume designer / stylist for Flo State, a short senior capstone film directed by Tanner Phillips and produced by Jennifer Zicha. The goal was to proficiently style the cast in a hierarchy of outfits in a neo-dystopian theme while also making sure everyone was comfortable in their looks.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          <ScrollReveal delay={0.25}>
            <section className="border border-ink/10 rounded-sm p-6 md:p-7 h-full">
              <h3 className="font-display text-xl md:text-2xl text-ink">
                Skills
              </h3>
              <p className="font-sans text-ink/80 mt-4 leading-relaxed">
                Costume Design · Fashion Styling · Problem Solving
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <section className="border border-ink/10 rounded-sm p-6 md:p-7 h-full">
              <h3 className="font-display text-xl md:text-2xl text-ink">
                Creative Direction
              </h3>
              <p className="font-sans text-ink/80 mt-4 leading-relaxed">
                Neo-dystopian world-building with a clear character hierarchy, balancing cinematic impact with practical wearability for each cast member.
              </p>
            </section>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.35} className="mt-16 md:mt-20">
          <div className="mb-6">
            <h3 className="font-display text-2xl md:text-3xl text-ink">
              Cast
            </h3>
            <p className="font-sans text-ink/85 mt-3 text-base md:text-lg leading-relaxed max-w-4xl">
              Key styling looks for the film — visual futurist direction, neo-dystopian hierarchy, and on-camera presence.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.38} className="mb-4">
          <div className="flex items-end justify-between gap-4">
            <h4 className="font-display text-xl md:text-2xl text-ink">
              Styling gallery
            </h4>
            <p className="nav-link text-xs text-ink/55">
              Final looks & hero stills
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1.5 md:gap-2">
          {castStylingImages.map((image, index) => (
            <ScrollReveal key={image.src} delay={0.04 * (index % 6)}>
              <motion.button
                type="button"
                onClick={() => setSelectedImage(image)}
                whileHover={{ y: -2 }}
                className="relative aspect-square w-full overflow-hidden bg-paper group"
                aria-label={`Open full image: ${image.alt}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  priority={index < 3}
                  className="object-contain transition-opacity duration-300 group-hover:opacity-95"
                />
              </motion.button>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.42} className="mt-20 md:mt-24">
          <div className="border-t border-ink/10 pt-12 md:pt-14">
            <h3 className="font-display text-2xl md:text-3xl text-ink">
              Extras
            </h3>
            <p className="font-sans text-ink/70 mt-3 text-base max-w-3xl">
              Additional behind-the-scenes and detail shots from the Flo State shoot.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1.5 md:gap-2">
          {extraImages.map((image, index) => (
            <ScrollReveal key={image.src} delay={0.03 * (index % 6)}>
              <motion.button
                type="button"
                onClick={() => setSelectedImage(image)}
                whileHover={{ y: -2 }}
                className="relative aspect-square w-full overflow-hidden bg-paper group"
                aria-label={`Open full image: ${image.alt}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-contain transition-opacity duration-300 group-hover:opacity-95"
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
              <div className="bg-transparent">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  width={1800}
                  height={2400}
                  sizes="100vw"
                  className="w-full h-auto max-w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
