"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";

const projects = [
  {
    title: "Flo State (Film)",
    status: "Featured",
    type: "Film / Costume Design",
    href: "/projects/flo-state-film",
    image: "/media/flo-state/thumbnail.jpg",
    description:
      "Neo-dystopian costume design and styling for a senior capstone short film.",
    isLive: true,
  },
  {
    title: "DIVINITIII",
    status: "Ongoing",
    type: "Brand / Collection Development",
    href: "/projects/divinitiii",
    image: "/projects/divinitiii/thumbnail.png",
    description:
      "A post-human narrative project exploring dual identity through fashion, accessories, and synthetic character design.",
    isLive: true,
  },
  {
    title: "Project 03",
    status: "Coming Soon",
    type: "Look Development",
    href: "#",
    description: "Character-led looks and silhouette studies in progress.",
    isLive: false,
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-paper dark:bg-ink pt-24 md:pt-28 pb-20">
      <div className="px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="nav-link text-xs text-ink/60 dark:text-white/60">
            Projects
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-ink dark:text-white mt-3">
            Selected Work
          </h1>
          <p className="font-sans text-ink/70 dark:text-white/70 mt-4 text-lg max-w-3xl">
            Explore featured and in-progress projects. Flo State is currently the lead case study.
          </p>
        </ScrollReveal>

        <ScrollReveal className="mt-12">
          <Link href="/projects/flo-state-film" className="block group">
            <motion.article
              whileHover={{ y: -3 }}
              className="border border-ink/15 dark:border-white/15 rounded-sm overflow-hidden bg-ink/5 dark:bg-white/5"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="relative aspect-[16/10] lg:aspect-auto lg:h-full lg:col-span-7">
                  <Image
                    src="/media/flo-state/thumbnail.jpg"
                    alt="Flo State film thumbnail"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 border border-white/30 bg-black/30 text-white nav-link text-[10px]">
                    Featured
                  </div>
                </div>
                <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <p className="nav-link text-xs text-ink/55 dark:text-white/55">
                      Film / Costume Design
                    </p>
                    <h2 className="font-display text-2xl md:text-3xl mt-2 text-ink dark:text-white">
                      Flo State (Film)
                    </h2>
                    <p className="font-sans text-ink/75 dark:text-white/75 mt-4 leading-relaxed">
                      Costume designer / stylist for a neo-dystopian short film directed by Tanner Phillips and produced by Jennifer Zicha.
                    </p>
                  </div>
                  <div className="mt-6">
                    <p className="font-sans text-sm text-ink/65 dark:text-white/65">
                      November 2025 - March 2026
                    </p>
                    <p className="nav-link text-xs mt-4 text-ink dark:text-white group-hover:opacity-70 transition-opacity">
                      View project →
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          </Link>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects
            .filter((project) => project.status !== "Featured")
            .map((project, i) => (
              <ScrollReveal key={project.title} delay={0.08 * i}>
                {project.isLive ? (
                  <Link href={project.href} className="block group h-full">
                    <article className="border border-ink/10 dark:border-white/10 rounded-sm overflow-hidden bg-paper-off/30 dark:bg-white/[0.03] h-full">
                      {project.image && (
                        <div className="relative aspect-[16/10] w-full">
                          <Image
                            src={project.image}
                            alt={`${project.title} thumbnail`}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div className="p-6 md:p-7">
                        <p className="nav-link text-xs text-ink/55 dark:text-white/55">
                          {project.type}
                        </p>
                        <h3 className="font-display text-2xl mt-3 text-ink dark:text-white">
                          {project.title}
                        </h3>
                        <p className="font-sans text-ink/70 dark:text-white/70 mt-3 leading-relaxed">
                          {project.description}
                        </p>
                        <p className="nav-link text-xs mt-5 text-ink dark:text-white group-hover:opacity-70 transition-opacity">
                          View project →
                        </p>
                      </div>
                    </article>
                  </Link>
                ) : (
                  <article className="border border-ink/10 dark:border-white/10 rounded-sm p-6 md:p-7 bg-paper-off/30 dark:bg-white/[0.03] h-full">
                    <p className="nav-link text-xs text-ink/55 dark:text-white/55">
                      {project.type}
                    </p>
                    <h3 className="font-display text-2xl mt-3 text-ink dark:text-white">
                      {project.title}
                    </h3>
                    <p className="font-sans text-ink/70 dark:text-white/70 mt-3 leading-relaxed">
                      {project.description}
                    </p>
                    <p className="nav-link text-xs mt-5 text-ink/45 dark:text-white/45">
                      {project.status}
                    </p>
                  </article>
                )}
              </ScrollReveal>
            ))}
        </div>

        <ScrollReveal delay={0.3} className="mt-14">
          <section className="border-t border-ink/10 dark:border-white/10 pt-10">
            <h3 className="font-display text-2xl md:text-3xl text-ink dark:text-white">
              More Work In Progress
            </h3>
            <p className="font-sans text-ink/80 dark:text-white/80 text-base md:text-lg leading-relaxed max-w-3xl mt-4">
              Additional projects are being built out and will appear here as full case studies soon.
            </p>
            <Link
              href="/projects/flo-state-film"
              className="nav-link text-xs mt-6 inline-block text-ink dark:text-white hover:opacity-70 transition-opacity"
            >
              View featured case study →
            </Link>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={0.35} className="mt-10">
          <p className="font-sans text-sm text-ink/55 dark:text-white/55">
            <a
              href="/media/flo-state/thumbnail.jpg"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              Open social preview image
            </a>
          </p>
        </ScrollReveal>
      </div>
    </div>
  );
}
