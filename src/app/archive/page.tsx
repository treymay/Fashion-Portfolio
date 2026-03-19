"use client";

import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function ArchivePage() {
  const projects = [
    {
      href: "/styling/flo-state",
      thumbnail: "/media/flo-state/styling-01.png",
    },
  ];

  return (
    <div className="min-h-screen bg-paper pt-24 md:pt-28 pb-20">
      <div className="px-6 md:px-12 lg:px-20">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-ink mt-2">
          Styling
        </h1>

        <div className="mt-8">
          <ScrollReveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {projects.map((project) => (
                <Link
                  key={`${project.href}-${project.thumbnail}`}
                  href={project.href}
                  className="group block"
                >
                  <article className="relative aspect-[3/4] overflow-hidden border border-ink/15 bg-ink/5">
                    <Image
                      src={project.thumbnail}
                      alt="Styling project thumbnail"
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </article>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
