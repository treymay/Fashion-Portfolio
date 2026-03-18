"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { divinitiiiWorks } from "./work-data";

const developmentPillars = [
  "Narrative-led world-building through opposing archetypes",
  "Accessory symbolism with personal emotional meaning",
  "Hybrid digital and physical garment development workflows",
  "Structured archive and documentation for every finished piece",
];

const productionMethods = [
  "Rhino for precision accessory and component modeling",
  "Blender for visual development and form exploration",
  "3D printing for wearable prototypes and hardware systems",
  "Pattern drafting, textile research, and hand construction",
  "Iterative test fitting and silhouette refinement",
];

export default function DivinitiiiProjectPage() {
  return (
    <div className="min-h-screen bg-paper dark:bg-ink pt-24 md:pt-28 pb-20">
      <div className="px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="nav-link text-xs text-ink/60 dark:text-white/60">
            Projects / Brand Development
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-ink dark:text-white mt-3">
            DIVINITIII
          </h1>
          <p className="font-sans text-ink/70 dark:text-white/70 mt-4 text-lg max-w-3xl">
            Ongoing concept brand and collection development.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <ScrollReveal className="lg:col-span-7">
            <motion.article
              whileHover={{ y: -3 }}
              className="border border-ink/10 dark:border-white/10 rounded-sm overflow-hidden relative bg-ink/5 dark:bg-white/5"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src="/projects/divinitiii/thumbnail.png"
                  alt="DIVINITIII project thumbnail"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                />
              </div>
            </motion.article>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="lg:col-span-5">
            <div className="space-y-7 border border-ink/10 dark:border-white/10 p-6 md:p-8 rounded-sm bg-paper-off/40 dark:bg-white/[0.03]">
              <div>
                <p className="nav-link text-xs text-ink/55 dark:text-white/55">Dates</p>
                <p className="font-sans text-ink dark:text-white mt-2">January 2026 - Present</p>
              </div>
              <div>
                <p className="nav-link text-xs text-ink/55 dark:text-white/55">Status</p>
                <p className="font-sans text-ink dark:text-white mt-2">
                  In progress, with a targeted first release in mid-summer.
                </p>
              </div>
              <div>
                <p className="nav-link text-xs text-ink/55 dark:text-white/55">Discipline</p>
                <p className="font-sans text-ink dark:text-white mt-2">
                  Fashion Design · Accessory Design · Creative Direction
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2} className="mt-16">
          <section className="border-y border-ink/10 dark:border-white/10 py-10">
            <h2 className="font-display text-2xl md:text-3xl text-ink dark:text-white">
              Project Overview
            </h2>
            <p className="font-sans text-ink/85 dark:text-white/85 text-base md:text-lg leading-relaxed max-w-5xl mt-5">
              DIVINITIII is an ongoing brand and collection concept built around dual identity. The narrative follows two mirrored versions of the same creator: a light “mad scientist” and a dark “mad scientist,” both engineering synthetic human forms in related garments while confronting one another in a strategic, chess-like conflict. The central idea explores internal opposition, ambition, and the realization that growth and shadow can exist simultaneously.
            </p>
            <p className="font-sans text-ink/85 dark:text-white/85 text-base md:text-lg leading-relaxed max-w-5xl mt-5">
              The clothing establishes the structural foundation of the world, while accessories carry concentrated emotional meaning. Symbol concepts in development include a thorned crown for the light archetype (rebirth, purity, and the pressure of self-belief) and a heartagram for the dark archetype (loss, longing, and unresolved attachment).
            </p>
            <p className="font-sans text-ink/85 dark:text-white/85 text-base md:text-lg leading-relaxed max-w-5xl mt-5">
              The production strategy prioritizes measurable weekly output, strict documentation of every piece, and a phased rollout approach for collection assets, visual content, and release preparation.
            </p>
          </section>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          <ScrollReveal delay={0.25}>
            <section className="border border-ink/10 dark:border-white/10 rounded-sm p-6 md:p-7 h-full">
              <h3 className="font-display text-xl md:text-2xl text-ink dark:text-white">
                Development Goals
              </h3>
              <ul className="mt-4 space-y-3">
                {developmentPillars.map((item) => (
                  <li
                    key={item}
                    className="font-sans text-ink/80 dark:text-white/80 leading-relaxed"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <section className="border border-ink/10 dark:border-white/10 rounded-sm p-6 md:p-7 h-full">
              <h3 className="font-display text-xl md:text-2xl text-ink dark:text-white">
                Tools & Techniques
              </h3>
              <ul className="mt-4 space-y-3">
                {productionMethods.map((item) => (
                  <li
                    key={item}
                    className="font-sans text-ink/80 dark:text-white/80 leading-relaxed"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.35} className="mt-16">
          <section className="border border-ink/10 dark:border-white/10 rounded-sm p-6 md:p-8 bg-paper-off/35 dark:bg-white/[0.03]">
            <p className="nav-link text-xs text-ink/55 dark:text-white/55">
              Manifesto
            </p>
            <h3 className="font-display text-2xl md:text-3xl text-ink dark:text-white mt-3">
              Post-Human Romanticism
            </h3>
            <p className="font-sans text-ink/85 dark:text-white/85 leading-relaxed mt-5 max-w-5xl">
              Technology has been around since the dawn of time. From stone tools to AI, we have found ways to make life easier for ourselves and improve our way of living. We have always been in control of it. We are the creators of it, after all.
            </p>
            <p className="font-sans text-ink/85 dark:text-white/85 leading-relaxed mt-4 max-w-5xl">
              However, technology advances at an exponential rate, and many have speculated a loss of control over it. Transhumanist ideas explore the blurring of lines between human and non-human, program and Homo sapien. For many, the fusion of man and machine feels inevitable.
            </p>
            <p className="font-display text-xl md:text-2xl text-ink dark:text-white mt-6">
              Will this lead us into light or darkness?
            </p>
          </section>
        </ScrollReveal>

        <section className="mt-16">
          <div className="flex items-end justify-between gap-4 mb-6">
            <h3 className="font-display text-2xl md:text-3xl text-ink dark:text-white">
              Individual Works
            </h3>
            <p className="nav-link text-xs text-ink/55 dark:text-white/55">
              Project index 00-06
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {divinitiiiWorks.map((work) => (
              <Link
                key={work.code}
                href={`/projects/divinitiii/${work.slug}`}
                className="block group"
              >
                <article className="border border-ink/10 dark:border-white/10 rounded-sm overflow-hidden bg-paper-off/30 dark:bg-white/[0.03]">
                  <div className="grid grid-cols-1 md:grid-cols-12">
                    <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[180px] md:col-span-4 border-b md:border-b-0 md:border-r border-ink/10 dark:border-white/10">
                      <Image
                        src={work.thumbnail}
                        alt={`${work.title} thumbnail`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 md:col-span-8">
                      <p className="nav-link text-xs text-ink/55 dark:text-white/55">
                        Project {work.code} / {work.type}
                      </p>
                      <h4 className="font-display text-2xl text-ink dark:text-white mt-3">
                        {work.title}
                      </h4>
                      <p className="font-sans text-ink/75 dark:text-white/75 mt-3">
                        {work.summary}
                      </p>
                      <p className="font-sans text-sm text-ink/60 dark:text-white/60 mt-3">
                        {work.media.length} media files · {work.assets.length} assets
                      </p>
                      <p className="nav-link text-xs mt-5 text-ink dark:text-white group-hover:opacity-70 transition-opacity">
                        Open work dossier →
                      </p>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        <ScrollReveal delay={0.45} className="mt-14">
          <div className="border-t border-ink/10 dark:border-white/10 pt-8">
            <p className="font-sans text-sm text-ink/55 dark:text-white/55 leading-relaxed">
              Strategic timelines, budget targets, and sensitive launch operations are intentionally summarized to protect confidential planning details.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
