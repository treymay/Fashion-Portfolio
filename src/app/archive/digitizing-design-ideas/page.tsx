"use client";

import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";

import summaryImage from "../../../../Digitizing Design Ideas/Digi.png";
import assignment4Bottle from "../../../../Digitizing Design Ideas/Assignment 4 Bottle.png";
import assignment4Flashlight from "../../../../Digitizing Design Ideas/Assignment 4 Flashlight.png";
import assignment5WithBg from "../../../../Digitizing Design Ideas/Assignment 5 With BG.png";
import assignment6Bowl from "../../../../Digitizing Design Ideas/Assignment 6 Bowl.png";
import assignment6Pen from "../../../../Digitizing Design Ideas/Assignment 6 Pen.png";
import assignment6Umbrella from "../../../../Digitizing Design Ideas/Assignment 6 Umbrella.png";
import assignment7Headphones from "../../../../Digitizing Design Ideas/Assignment 7 Headphones.png";
import assignment7Tennis from "../../../../Digitizing Design Ideas/Assignment 7 Tennis.png";
import assignment8Duck from "../../../../Digitizing Design Ideas/Assignment 8 Duck Render (1).png";
import assignment8Mice from "../../../../Digitizing Design Ideas/Assignmnet 8 Mice (1).png";
import assignment9Furniture from "../../../../Digitizing Design Ideas/Assignment 9 - Furniture .png";
import assignment10Render from "../../../../Digitizing Design Ideas/Assignment 10 Render (1).jpg";
import assignment11Render from "../../../../Digitizing Design Ideas/Assignment 11 Render Revised (1).png";
import assignment12Render from "../../../../Digitizing Design Ideas/Assignment 12 Render.png";
import assignment13Render from "../../../../Digitizing Design Ideas/Assignment 13 Render.jpg";
import assignment14RenderFront from "../../../../Digitizing Design Ideas/Assignment 14 Render Front.png";
import assignment14RenderBack from "../../../../Digitizing Design Ideas/Assignment 14 Render Back.png";

type ProjectImage = {
  src: StaticImageData;
  alt: string;
  label: string;
};

const projectImages: ProjectImage[] = [
  {
    src: summaryImage,
    alt: "Digitizing Design Ideas class collage summary",
    label: "Course Summary",
  },
  { src: assignment4Bottle, alt: "Assignment 4 bottle 3D model render", label: "Assignment 4 - Bottle" },
  { src: assignment4Flashlight, alt: "Assignment 4 flashlight 3D model render", label: "Assignment 4 - Flashlight" },
  { src: assignment5WithBg, alt: "Assignment 5 3D model render with background", label: "Assignment 5" },
  { src: assignment6Bowl, alt: "Assignment 6 bowl 3D model render", label: "Assignment 6 - Bowl" },
  { src: assignment6Pen, alt: "Assignment 6 pen 3D model render", label: "Assignment 6 - Pen" },
  { src: assignment6Umbrella, alt: "Assignment 6 umbrella 3D model render", label: "Assignment 6 - Umbrella" },
  { src: assignment7Headphones, alt: "Assignment 7 headphones 3D model render", label: "Assignment 7 - Headphones" },
  { src: assignment7Tennis, alt: "Assignment 7 tennis racket 3D model render", label: "Assignment 7 - Tennis Racket" },
  { src: assignment8Duck, alt: "Assignment 8 duck 3D model render", label: "Assignment 8 - Duck" },
  { src: assignment8Mice, alt: "Assignment 8 mice 3D model render", label: "Assignment 8 - Mouse Variations" },
  { src: assignment9Furniture, alt: "Assignment 9 furniture 3D model render", label: "Assignment 9 - Furniture" },
  { src: assignment10Render, alt: "Assignment 10 3D model render", label: "Assignment 10" },
  { src: assignment11Render, alt: "Assignment 11 revised 3D model render", label: "Assignment 11" },
  { src: assignment12Render, alt: "Assignment 12 3D model render", label: "Assignment 12" },
  { src: assignment13Render, alt: "Assignment 13 3D model render", label: "Assignment 13" },
  { src: assignment14RenderFront, alt: "Assignment 14 front 3D model render", label: "Assignment 14 - Front" },
  { src: assignment14RenderBack, alt: "Assignment 14 back 3D model render", label: "Assignment 14 - Back" },
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
          <div className="rounded-sm overflow-hidden border border-ink/10 dark:border-white/10">
            <Image
              src={summaryImage}
              alt="Digitizing Design Ideas class collage summary"
              priority
              sizes="100vw"
              className="w-full h-auto"
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
