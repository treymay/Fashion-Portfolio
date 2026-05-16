"use client";

import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";

const projects = [
  {
    href: "/styling/flo-state",
    thumbnail: "/media/flo-state/styling-00a.png",
    title: "Flo State",
    meta: "2024 · Campaign",
  },
  {
    href: "/styling/flo-state",
    thumbnail: "/media/flo-state/styling-01.png",
    title: "Editorial I",
    meta: "2024 · Look",
  },
  {
    href: "/styling/flo-state",
    thumbnail: "/media/flo-state/styling-05.jpg",
    title: "Editorial II",
    meta: "2024 · Look",
  },
  {
    href: "/styling/flo-state",
    thumbnail: "/media/flo-state/styling-06.jpg",
    title: "Campaign",
    meta: "2024 · Styling",
  },
  {
    href: "/styling/flo-state",
    thumbnail: "/media/flo-state/styling-13.jpg",
    title: "Detail Study",
    meta: "2024 · Close-up",
  },
  {
    href: "/styling/flo-state",
    thumbnail: "/media/flo-state/styling-14.jpg",
    title: "Full Look",
    meta: "2024 · Styling",
  },
];

export default function ArchivePage() {
  return (
    <div className="min-h-screen bg-paper pt-[52px]">
      {/* Hero header */}
      <div className="px-6 md:px-10 pt-14 pb-10 border-b border-ink/10">
        <ScrollReveal>
          <p className="nav-link text-[9px] text-ink/40 mb-3">Portfolio</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-ink">
            Styling
          </h1>
        </ScrollReveal>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {projects.map((project, i) => (
          <ScrollReveal key={`${project.href}-${i}`} delay={i * 0.06}>
            <Link href={project.href} className="group block">
              <article className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />

                {/* Hover label */}
                <div className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-paper/90 backdrop-blur-sm px-3 py-2 w-full">
                    <p className="nav-link text-[9px] text-ink/50">{project.meta}</p>
                    <p className="font-display text-sm font-semibold text-ink">{project.title}</p>
                  </div>
                </div>
              </article>

              <div className="px-4 py-3 border-b border-ink/10 flex justify-between items-center">
                <div>
                  <p className="font-display text-xs font-semibold text-ink">{project.title}</p>
                  <p className="nav-link text-[9px] text-ink/40 mt-0.5">{project.meta}</p>
                </div>
                <span className="text-ink/30 group-hover:text-ink transition-colors text-sm">→</span>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>

      {/* Footer */}
      <footer className="border-t border-ink/10 px-6 md:px-10 py-10 flex justify-between items-center">
        <p className="nav-link text-[9px] text-ink/30">Trey May</p>
        <p className="nav-link text-[9px] text-ink/20">© {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
