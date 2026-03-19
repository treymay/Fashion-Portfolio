"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";

type ProjectImage = {
  src: string;
  alt: string;
  label: string;
};

const projectImages: ProjectImage[] = [
  { src: "/media/flo-state/styling-00a.png", alt: "Digital styling render 1", label: "Study 01" },
  { src: "/media/flo-state/styling-00b.png", alt: "Digital styling render 2", label: "Study 02" },
  { src: "/media/flo-state/styling-01.png", alt: "Digital styling render 3", label: "Study 03" },
  { src: "/media/flo-state/styling-02.png", alt: "Digital styling render 4", label: "Study 04" },
  { src: "/media/flo-state/styling-03.png", alt: "Digital styling render 5", label: "Study 05" },
  { src: "/media/flo-state/styling-04.jpg", alt: "Digital styling render 6", label: "Study 06" },
  { src: "/media/flo-state/styling-05.jpg", alt: "Digital styling render 7", label: "Study 07" },
  { src: "/media/flo-state/styling-06.jpg", alt: "Digital styling render 8", label: "Study 08" },
  { src: "/media/flo-state/styling-07.png", alt: "Digital styling render 9", label: "Study 09" },
  { src: "/media/flo-state/styling-08.png", alt: "Digital styling render 10", label: "Study 10" },
  { src: "/media/flo-state/styling-09.png", alt: "Digital styling render 11", label: "Study 11" },
  { src: "/media/flo-state/styling-10.png", alt: "Digital styling render 12", label: "Study 12" },
  { src: "/media/flo-state/styling-11.png", alt: "Digital styling render 13", label: "Study 13" },
  { src: "/media/flo-state/styling-12.png", alt: "Digital styling render 14", label: "Study 14" },
];

export default function DigitizingDesignIdeasPage() {
  const [selectedImage, setSelectedImage] = useState<ProjectImage | null>(null);

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
            Archive / IDUS 231
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-ink dark:text-white mt-3">
            Digitizing Design Ideas
          </h1>
          <p className="font-sans text-ink/70 dark:text-white/70 mt-4 text-lg max-w-3xl">
            3D model studies and renders from IDUS 231: Digitizing Design Ideas at SCAD.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.14} className="mt-12">
          <div className="relative aspect-[16/9] rounded-sm overflow-hidden border border-ink/10 dark:border-white/10">
            <Image
              src={projectImages[0].src}
              alt={projectImages[0].alt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="mt-16 md:mt-20">
          <div className="flex items-end justify-between gap-4 mb-6">
            <h3 className="font-display text-2xl md:text-3xl text-ink dark:text-white">
              Assignment Gallery
            </h3>
            <p className="nav-link text-xs text-ink/55 dark:text-white/55">
              Organized by class progression
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {projectImages.map((image, index) => (
            <ScrollReveal key={image.label + index} delay={0.04 * (index % 6)}>
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
                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-ink/75 to-transparent">
                  <span className="nav-link text-[10px] text-white/90">{image.label}</span>
                </div>
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
              <div className="flex justify-between items-center mb-3">
                <p className="nav-link text-xs text-white/90">{selectedImage.label}</p>
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
                  width={1600}
                  height={2000}
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
