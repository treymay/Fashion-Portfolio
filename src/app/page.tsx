"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const play = () => video.play().catch(() => {});
    play();
    video.addEventListener("loadeddata", play);
    return () => video.removeEventListener("loadeddata", play);
  }, []);

  return (
    <>
      {/* Hero: full-bleed video */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-ink">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          aria-label="Hero video"
        >
          <source src="/herovideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-ink/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center px-8 flex flex-col items-center gap-6"
          >
            <p className="font-display text-white text-lg md:text-xl tracking-wide pointer-events-none">
              Welcome to my Universe
              <br />
              <span className="text-white/80 text-base mt-2 block">
                I hope you enjoy.
              </span>
            </p>
            <Link
              href="/projects"
              className="nav-link text-xs font-medium tracking-widest px-6 py-3 border border-white/50 text-white hover:bg-white hover:text-ink transition-colors"
            >
              EXPLORE
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-0 right-0 text-center pointer-events-none"
        >
          <span className="inline-block w-8 h-px bg-white/40" />
        </motion.div>
      </section>

      {/* Asymmetric intro: portrait left, quote + bio right */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-paper dark:bg-ink border-t border-ink/10 dark:border-white/10">
        <ScrollReveal className="md:col-span-5 md:row-span-2">
          <div className="aspect-[3/4] max-w-md w-full mx-auto md:mx-0 relative rounded-sm overflow-hidden border border-ink/10 dark:border-white/10">
            <Image
              src="/profile.jpg"
              alt="Trey May"
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-cover object-top"
              priority
            />
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.15} className="md:col-span-6 md:col-start-7 flex flex-col justify-end pb-2">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-medium text-ink dark:text-white leading-snug tracking-tight">
            There was a time where he believed the clothes should be your armor, but then he realized they&apos;re meant to leave you exposed.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.25} className="md:col-span-7 md:col-start-7">
          <p className="font-sans text-ink/85 dark:text-white/85 text-base md:text-lg leading-relaxed max-w-2xl">
            Trey is currently pursuing a fashion design BFA at the Savannah College of Art and Design with a tentative graduation date of Spring 2028. His minor in fashion photography is proof that his skill set isn&apos;t limited to design. When he does design, he puts an emphasis on craftsmanship and detail. His passion for world-building is the engine for his creativity while his avant-garde perspective takes the wheel. Although he likes to push the envelope, his ultimate goal is to make wearable clothing that is innovative and next-level. His technical abilities such as CLO3D and the Adobe Creative Suite give him an advantage while traditional techniques are still applied and designed to keep him grounded. Although Trey is currently strictly focused on his studies, he is open to collaboration and will pursue professional opportunities in the future.
          </p>
          <p className="font-sans text-ink/60 dark:text-white/60 mt-6 text-sm nav-link">
            Trey May
          </p>
        </ScrollReveal>
      </section>

      {/* Teaser strip */}
      <section className="bg-paper-off dark:bg-ink border-y border-ink/10 dark:border-white/10 py-12 px-6">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <p className="font-display text-2xl md:text-3xl text-ink dark:text-white">
              New work arriving soon.
            </p>
            <Link
              href="/projects"
              className="nav-link text-xs font-medium text-ink dark:text-white hover:opacity-70 transition-opacity"
            >
              Explore sections →
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* Philosophy */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-paper dark:bg-ink">
        <ScrollReveal>
          <p className="font-display text-4xl md:text-5xl lg:text-6xl text-ink dark:text-white leading-[1.15] max-w-3xl">
            Intentional and premeditated worlds from an architect.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2} className="mt-16 flex flex-wrap gap-8">
          <Link href="/photography" className="nav-link text-xs text-ink/70 dark:text-white/70 hover:text-ink dark:hover:text-white transition-colors">
            Photography
          </Link>
          <Link href="/lookbooks" className="nav-link text-xs text-ink/70 dark:text-white/70 hover:text-ink dark:hover:text-white transition-colors">
            Lookbooks
          </Link>
          <Link href="/clo3d" className="nav-link text-xs text-ink/70 dark:text-white/70 hover:text-ink dark:hover:text-white transition-colors">
            CLO3D
          </Link>
          <Link href="/contact" className="nav-link text-xs text-ink/70 dark:text-white/70 hover:text-ink dark:hover:text-white transition-colors">
            Contact
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
