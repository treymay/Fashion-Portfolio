"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";

const heroLooks = [
  {
    src: "/hero/styling/look-07.png",
    alt: "Styling look 07",
    desktopPosition: "left-[17%] top-[6%] w-[16%]",
  },
  {
    src: "/hero/styling/look-05.jpg",
    alt: "Styling look 05",
    desktopPosition: "left-[40%] bottom-[3%] w-[29%]",
  },
  {
    src: "/hero/styling/look-03.png",
    alt: "Styling look 03",
    desktopPosition: "left-[0%] bottom-[8%] w-[20%]",
  },
  {
    src: "/hero/styling/look-01.png",
    alt: "Styling look 01",
    desktopPosition: "left-[75%] top-[10%] w-[22%]",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero: editorial styling collage */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-paper dark:bg-ink">
        <div className="absolute inset-0 bg-paper dark:bg-ink" />
        <div className="absolute inset-0 px-4 md:px-8 lg:px-12 py-24 md:py-28">
          <div className="w-full h-full max-w-[1280px] mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
              className="relative hidden md:block w-full h-full"
            >
              {heroLooks.map((look, index) => (
                <Link
                  key={look.src}
                  href="/styling/flo-state"
                  className={`absolute ${look.desktopPosition} aspect-[3/4] rounded-[2px] overflow-hidden block`}
                  aria-label={`Open Flo State project from ${look.alt}`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.12 + index * 0.1, duration: 0.85, ease: "easeOut" }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={look.src}
                      alt={look.alt}
                      fill
                      priority
                      unoptimized
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </motion.div>
                </Link>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="md:hidden h-full grid grid-cols-2 gap-3"
            >
              {heroLooks.map((look) => (
                <Link
                  key={`mobile-${look.src}`}
                  href="/styling/flo-state"
                  className="relative rounded-[2px] overflow-hidden block"
                  aria-label={`Open Flo State project from ${look.alt}`}
                >
                  <Image
                    src={look.src}
                    alt={look.alt}
                    fill
                    priority
                    unoptimized
                    sizes="50vw"
                    className="object-cover"
                  />
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="absolute bottom-8 left-0 right-0 text-center pointer-events-none"
        >
          <span className="inline-block w-8 h-px bg-ink/40 dark:bg-white/40" />
        </motion.div>
      </section>

      {/* Asymmetric intro: portrait left, quote + bio right */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-paper dark:bg-ink border-t border-ink/10 dark:border-white/10">
        <ScrollReveal className="md:col-span-5 md:row-span-2">
          <div className="aspect-[3/4] max-w-md w-full mx-auto md:mx-0 relative rounded-sm overflow-hidden border border-ink/10 dark:border-white/10">
            <Image
              src="/profile-new.png"
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
            Fashion is the key to the transformation of someone&apos;s appearance from unimaginative to mystical and inspired.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.25} className="md:col-span-7 md:col-start-7">
          <p className="font-sans text-ink/85 dark:text-white/85 text-base md:text-lg leading-relaxed max-w-2xl">
            Trey is currently pursuing a BFA in Fashion at the Savannah College of Art and Design with a tentative graduation date of Spring 2029. His love for exploration of different disciplines is proof that his skill set isn&apos;t limited to designing garments. Trey&apos;s styling ability almost feels as if it is an &quot;innate talent,&quot; but he is always improving when it comes to storytelling and conceptual activities. His passion for world-building is the engine for his creativity while his avant-garde perspective takes the wheel. His ultimate goal is to curate eye-catchign looks and make wearable clothing that is both innovative and next-level. Trey is currently open to taking advantage of opportunities with a willing and open heart.
          </p>
          <p className="font-sans text-ink/60 dark:text-white/60 mt-6 text-sm nav-link">
            Trey May
          </p>
        </ScrollReveal>
      </section>

      {/* Teaser strip */}
      <section className="bg-paper-off dark:bg-ink border-y border-ink/10 dark:border-white/10 py-12 px-6">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href="/styling"
              className="font-display text-3xl md:text-5xl text-ink dark:text-white hover:opacity-70 transition-opacity"
            >
              Explore Sections →
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* Philosophy */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-paper dark:bg-ink">
        <ScrollReveal>
          <p className="font-display text-4xl md:text-5xl lg:text-6xl text-ink dark:text-white leading-[1.15] max-w-3xl">
            Intentional styling and design from a style alchemist.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2} className="mt-16 flex flex-wrap gap-8">
          <Link href="/styling" className="nav-link text-xs text-ink/70 dark:text-white/70 hover:text-ink dark:hover:text-white transition-colors">
            Styling
          </Link>
          <Link href="/design" className="nav-link text-xs text-ink/70 dark:text-white/70 hover:text-ink dark:hover:text-white transition-colors">
            Design
          </Link>
          <Link href="/contact" className="nav-link text-xs text-ink/70 dark:text-white/70 hover:text-ink dark:hover:text-white transition-colors">
            Contact
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
