"use client";

import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";

const heroSections = [
  {
    src: "/media/flo-state/styling-00a.png",
    label: "Flo State",
    category: "Styling · 2024",
    href: "/styling/flo-state",
    cta: "View Project",
    position: "object-center",
  },
  {
    src: "/media/flo-state/styling-06.jpg",
    label: "Editorial",
    category: "Styling · Campaign",
    href: "/styling",
    cta: "View Work",
    position: "object-center",
  },
  {
    src: "/media/flo-state/styling-02.png",
    label: "Archive",
    category: "Styling · Collection",
    href: "/styling",
    cta: "Explore",
    position: "object-top",
  },
];

const projectCategories = [
  {
    label: "Styling",
    href: "/styling",
    src: "/media/flo-state/styling-01.png",
    description: "Editorial looks & campaign work",
  },
  {
    label: "Design",
    href: "/design",
    src: "/media/flo-state/styling-07.png",
    description: "Garment & concept design",
  },
  {
    label: "Archive",
    href: "/styling/flo-state",
    src: "/media/flo-state/styling-05.jpg",
    description: "Flo State — full lookbook",
  },
  {
    label: "Contact",
    href: "/contact",
    src: "/media/flo-state/styling-13.jpg",
    description: "Collaborate · Commission",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO SECTIONS (full-bleed stacked) ─────────────────────── */}
      {heroSections.map((section, i) => (
        <section
          key={section.src}
          className="relative w-full overflow-hidden"
          style={{ height: "100svh" }}
        >
          <Image
            src={section.src}
            alt={section.label}
            fill
            priority={i === 0}
            unoptimized
            sizes="100vw"
            className={`object-cover ${section.position}`}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/20" />

          {/* Top-right: section index */}
          <span className="absolute top-20 right-6 md:right-10 nav-link text-[9px] text-ink/40 tabular-nums">
            {String(i + 1).padStart(2, "0")} / {String(heroSections.length).padStart(2, "0")}
          </span>

          {/* Bottom-left: text overlay */}
          <div className="absolute bottom-10 left-6 md:left-10">
            <p className="nav-link text-[9px] text-ink/50 mb-2 hero-text-shadow">
              {section.category}
            </p>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-ink leading-none tracking-tight hero-text-shadow mb-4">
              {section.label}
            </h2>
            <Link
              href={section.href}
              className="inline-flex items-center gap-2 nav-link text-[10px] text-ink/80 hover:text-ink border-b border-ink/30 hover:border-ink pb-0.5 transition-all duration-200"
            >
              {section.cta}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </section>
      ))}

      {/* ── PROJECT CATEGORIES GRID ─────────────────────────────────── */}
      <section className="bg-paper">
        <div className="px-5 md:px-8 pt-16 pb-4">
          <ScrollReveal>
            <p className="nav-link text-[9px] text-ink/40">Portfolio</p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4">
          {projectCategories.map((cat, i) => (
            <ScrollReveal key={cat.href} delay={i * 0.08}>
              <Link href={cat.href} className="group relative block overflow-hidden">
                <article className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                  <Image
                    src={cat.src}
                    alt={cat.label}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                </article>
                <div className="px-4 py-4 border-t border-ink/10">
                  <p className="nav-link text-[10px] text-ink font-semibold">{cat.label}</p>
                  <p className="text-ink/40 text-xs mt-0.5 font-light">{cat.description}</p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── MARQUEE STRIP ───────────────────────────────────────────── */}
      <section className="border-y border-ink/10 overflow-hidden py-5 bg-paper-off">
        <div className="marquee-track flex w-max gap-16 items-center">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="nav-link text-[10px] text-ink/30 whitespace-nowrap shrink-0">
              Trey May &nbsp;·&nbsp; Fashion Styling &nbsp;·&nbsp; Savannah College of Art and Design &nbsp;·&nbsp; SCAD Atlanta &nbsp;·&nbsp;
            </span>
          ))}
        </div>
      </section>

      {/* ── ABOUT / BIO ─────────────────────────────────────────────── */}
      <section className="grid grid-cols-1 md:grid-cols-12 min-h-[85vh] bg-paper">
        {/* Left: portrait */}
        <div className="md:col-span-5 relative min-h-[50vh] md:min-h-0">
          <Image
            src="/profile-new.png"
            alt="Trey May"
            fill
            unoptimized
            sizes="(max-width: 768px) 100vw, 42vw"
            className="object-cover object-top"
          />
        </div>

        {/* Right: bio */}
        <div className="md:col-span-7 flex flex-col justify-center px-8 md:px-14 py-16 md:py-20 border-l border-ink/10">
          <ScrollReveal>
            <p className="nav-link text-[9px] text-ink/40 mb-6">About</p>
            <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl text-ink leading-snug font-medium mb-8">
              "Fashion is the key to the transformation of someone's appearance from unimaginative to mystical and inspired."
            </blockquote>
            <p className="font-sans text-ink/60 text-sm md:text-base leading-relaxed max-w-prose mb-10">
              Trey May is a BFA student at the Savannah College of Art and Design (SCAD Atlanta), pursuing Fashion Design with an expected graduation of Spring 2029. His work lives at the intersection of styling, concept development, and world-building — with an avant-garde perspective that drives every project forward.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 nav-link text-[10px] text-ink border border-ink/20 hover:border-ink px-6 py-3 w-fit transition-colors duration-200"
            >
              Get in Touch <span aria-hidden>→</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────── */}
      <footer className="bg-paper-off border-t border-ink/10 px-6 md:px-10 py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <p className="nav-link text-[9px] text-ink/30">Trey May — Fashion Styling & Design</p>
        <div className="flex gap-6">
          <Link href="/styling" className="nav-link text-[9px] text-ink/30 hover:text-ink transition-colors">Styling</Link>
          <Link href="/design" className="nav-link text-[9px] text-ink/30 hover:text-ink transition-colors">Design</Link>
          <Link href="/contact" className="nav-link text-[9px] text-ink/30 hover:text-ink transition-colors">Contact</Link>
        </div>
        <p className="nav-link text-[9px] text-ink/20">© {new Date().getFullYear()}</p>
      </footer>
    </>
  );
}
