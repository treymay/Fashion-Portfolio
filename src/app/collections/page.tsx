"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-paper pt-[52px]">
      {/* Hero header */}
      <div className="px-6 md:px-10 pt-14 pb-10 border-b border-ink/10">
        <ScrollReveal>
          <p className="nav-link text-[9px] text-ink/40 mb-3">Portfolio</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-ink">
            Design
          </h1>
        </ScrollReveal>
      </div>

      {/* Content area */}
      <div className="px-6 md:px-10 py-20">
        <ScrollReveal>
          <div className="max-w-3xl">
            <p className="font-serif text-xl md:text-2xl text-ink/70 leading-relaxed mb-10">
              New design work is currently in development. Garment construction, CLO3D, and concept collections will be released here.
            </p>

            <div className="border border-ink/10 p-8 md:p-12 mb-16">
              <p className="nav-link text-[9px] text-ink/30 mb-4">Coming Soon</p>
              <p className="font-display text-3xl md:text-4xl font-bold text-ink mb-6">
                Design work in progress.
              </p>
              <p className="font-sans text-ink/50 text-sm leading-relaxed">
                Expect garment design, technical flats, CLO3D renders, and full concept collections. Check back soon.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 nav-link text-[10px] text-ink border border-ink/20 hover:border-ink px-6 py-3 transition-colors duration-200"
            >
              Inquire About Design Work <span aria-hidden>→</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>

      {/* Footer */}
      <footer className="border-t border-ink/10 px-6 md:px-10 py-10 flex justify-between items-center">
        <p className="nav-link text-[9px] text-ink/30">Trey May</p>
        <p className="nav-link text-[9px] text-ink/20">© {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
