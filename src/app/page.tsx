"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-paper dark:bg-ink">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Light mode — desktop */}
          <Image
            src="/hero/Hero Image.png"
            alt="Trey May hero"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="hidden md:block dark:hidden object-contain"
          />
          {/* Light mode — mobile */}
          <Image
            src="/hero/Hero Image MObile.png"
            alt="Trey May hero"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="block md:hidden dark:hidden object-contain"
          />
          {/* Dark mode — desktop */}
          <Image
            src="/hero/Hero Image Black.png"
            alt="Trey May hero"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="hidden md:dark:block object-contain"
          />
          {/* Dark mode — mobile */}
          <Image
            src="/hero/Hero Image Mobile Black.png"
            alt="Trey May hero"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="hidden dark:block md:dark:hidden object-contain"
          />
        </motion.div>
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
