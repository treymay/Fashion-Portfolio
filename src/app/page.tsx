"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { projects } from "@/lib/projects";

const heroSlides = [
  {
    label: "Contemporary Heirlooms",
    sub: "Fine jewelry at the intersection of art and engineering",
    bg: "#141210",
    radial: "radial-gradient(ellipse 60% 60% at 70% 50%, #1E3D2F44 0%, transparent 70%)",
    accent: "#C9A96E",
    index: "01",
  },
  {
    label: "Concept-Driven",
    sub: "Each piece begins with a question and ends with an answer in metal",
    bg: "#0f1814",
    radial: "radial-gradient(ellipse 60% 60% at 70% 50%, #C9A96E18 0%, transparent 70%)",
    accent: "#7BA891",
    index: "02",
  },
  {
    label: "Graduate Collection",
    sub: "MFA Metalwork — SCAD Atlanta, 2025",
    bg: "#14100e",
    radial: "radial-gradient(ellipse 60% 60% at 70% 50%, #C4846E22 0%, transparent 70%)",
    accent: "#C4846E",
    index: "03",
  },
];

const featuredSlugs = ["lunar-arc", "terra-colla", "echo-bangle", "veil-earrings"];

export default function HomePage() {
  const featured = projects.filter((p) => featuredSlugs.includes(p.slug));

  return (
    <>
      {/* ── STACKED STICKY HERO ─────────────────────────────────────────
          Each section is position:sticky, top:0, height:100svh.
          Subsequent sections have higher z-index so they slide over.
          The outer wrapper has no overflow clipping so sticky works. */}
      <div aria-label="Hero">
        {heroSlides.map((slide, i) => (
          <section
            key={slide.index}
            style={{
              position: "sticky",
              top: 0,
              height: "100svh",
              width: "100%",
              zIndex: i + 2,
              backgroundColor: slide.bg,
            }}
            aria-label={slide.label}
          >
            {/* Inner clip wrapper — keeps decor inside */}
            <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
              {/* Radial glow */}
              <div style={{ position: "absolute", inset: 0, background: slide.radial }} />

              {/* Concentric rings */}
              <div
                style={{
                  position: "absolute",
                  right: "8%",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "clamp(200px, 30vw, 480px)",
                  height: "clamp(200px, 30vw, 480px)",
                  borderRadius: "50%",
                  border: `1px solid ${slide.accent}1A`,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  right: "8%",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "clamp(130px, 20vw, 310px)",
                  height: "clamp(130px, 20vw, 310px)",
                  borderRadius: "50%",
                  border: `1px solid ${slide.accent}33`,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  right: "8%",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "clamp(60px, 10vw, 140px)",
                  height: "clamp(60px, 10vw, 140px)",
                  borderRadius: "50%",
                  background: `${slide.accent}0D`,
                  border: `1px solid ${slide.accent}55`,
                }}
              />
            </div>

            {/* Index counter */}
            <span
              className="label"
              style={{
                position: "absolute",
                top: "calc(var(--nav-h) + 1.25rem)",
                right: "2rem",
                fontSize: "0.55rem",
                color: `${slide.accent}66`,
              }}
            >
              {slide.index} / 03
            </span>

            {/* Bottom-left content */}
            <div
              style={{
                position: "absolute",
                bottom: "3.5rem",
                left: "clamp(1.5rem, 5vw, 3.5rem)",
                maxWidth: "520px",
                zIndex: 2,
              }}
            >
              <span
                className="gold-line"
                style={{ background: slide.accent, marginBottom: "1.5rem" }}
              />
              <h1
                className="font-serif hero-shadow"
                style={{
                  fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
                  color: "var(--color-ink)",
                  letterSpacing: "-0.015em",
                  lineHeight: 1.03,
                  fontWeight: 500,
                  marginBottom: "1.1rem",
                }}
              >
                {slide.label}
              </h1>
              <p
                className="font-sans hero-shadow"
                style={{
                  fontSize: "clamp(0.82rem, 1.4vw, 0.97rem)",
                  color: "var(--color-ink-muted)",
                  maxWidth: "38ch",
                  lineHeight: 1.65,
                  fontWeight: 300,
                  marginBottom: "2rem",
                }}
              >
                {slide.sub}
              </p>
              {i === 0 && (
                <Link href="/works" className="btn-gold">
                  View Works <span aria-hidden>→</span>
                </Link>
              )}
            </div>
          </section>
        ))}
      </div>

      {/* ── MARQUEE STRIP ───────────────────────────────────────────────── */}
      <div
        style={{
          overflow: "hidden",
          borderTop: "1px solid var(--color-border)",
          borderBottom: "1px solid var(--color-border)",
          background: "var(--color-surface)",
          padding: "1rem 0",
          position: "relative",
          zIndex: 10,
        }}
        aria-hidden="true"
      >
        <div className="marquee-track" style={{ display: "flex", width: "max-content", gap: "3.5rem", alignItems: "center" }}>
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="label" style={{ fontSize: "0.55rem", whiteSpace: "nowrap", flexShrink: 0, color: "var(--color-ink-muted)" }}>
              Elara Fine Jewelry &nbsp;·&nbsp; Metalwork &amp; Stone Setting &nbsp;·&nbsp; SCAD Atlanta &nbsp;·&nbsp; MFA 2025 &nbsp;·&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ── FEATURED WORKS ───────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--color-bg)",
          padding: "5rem 0 6rem",
          position: "relative",
          zIndex: 10,
        }}
      >
        <div style={{ padding: "0 clamp(1.5rem, 5vw, 3.5rem)", marginBottom: "2.5rem" }}>
          <ScrollReveal>
            <p className="label" style={{ marginBottom: "0.75rem" }}>Selected Works</p>
            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "var(--color-ink)",
                letterSpacing: "-0.01em",
                fontWeight: 500,
              }}
            >
              Recent Collections
            </h2>
          </ScrollReveal>
        </div>

        <div
          style={{
            padding: "0 clamp(1.5rem, 5vw, 3.5rem)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {featured.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 0.09}>
              <Link href={`/works/${project.slug}`} style={{ display: "block" }} className="group">
                <article className="project-card">
                  {/* Gradient image area */}
                  <div
                    style={{
                      background: project.bg,
                      aspectRatio: "3/4",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <div style={{ width: "58%", height: "58%", borderRadius: "50%", border: `1px solid ${project.accentColor}28` }} />
                    </div>
                    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <div style={{ width: "30%", height: "30%", borderRadius: "50%", background: `${project.accentColor}14`, border: `1px solid ${project.accentColor}50` }} />
                    </div>
                    <span
                      className="label"
                      style={{
                        position: "absolute", top: "1rem", left: "1rem",
                        fontSize: "0.55rem", color: project.accentColor,
                        background: "rgba(12,11,9,0.72)", padding: "0.2rem 0.6rem",
                      }}
                    >
                      {project.category}
                    </span>
                    {/* Hover overlay */}
                    <div
                      style={{
                        position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
                        background: "rgba(12,11,9,0.5)", opacity: 0, transition: "opacity 0.35s ease",
                      }}
                      className="group-hover:opacity-100"
                    >
                      <span className="label" style={{ fontSize: "0.6rem", color: "var(--color-gold)", border: "1px solid var(--color-gold)", padding: "0.4rem 1rem" }}>View →</span>
                    </div>
                  </div>
                  {/* Card footer */}
                  <div style={{ padding: "1rem 1.25rem 1.25rem", borderTop: "1px solid var(--color-border)" }}>
                    <p className="font-serif" style={{ fontSize: "1rem", color: "var(--color-ink)", fontWeight: 500, marginBottom: "0.3rem" }}>{project.title}</p>
                    <p className="label" style={{ fontSize: "0.55rem", color: "var(--color-gold)" }}>{project.year} · {project.materials.split(",")[0]}</p>
                  </div>
                </article>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <div style={{ padding: "2.5rem clamp(1.5rem, 5vw, 3.5rem) 0" }}>
          <ScrollReveal>
            <Link href="/works" className="btn-outline">All Projects <span aria-hidden>→</span></Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── ABOUT BLURB ──────────────────────────────────────────────────── */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          background: "var(--color-surface)",
          borderTop: "1px solid var(--color-border)",
          borderBottom: "1px solid var(--color-border)",
          position: "relative",
          zIndex: 10,
        }}
        className="md:grid-cols-2"
      >
        {/* Left decorative panel */}
        <div
          style={{
            minHeight: "55vh",
            background: "linear-gradient(135deg, #141210 0%, #1E3D2F1A 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRight: "1px solid var(--color-border)",
            padding: "4rem",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                width: 130, height: 130, borderRadius: "50%",
                border: "1px solid var(--color-gold)",
                margin: "0 auto 1.75rem",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: 86, height: 86, borderRadius: "50%",
                  background: "rgba(201,169,110,0.07)",
                  border: "1px solid var(--color-border-hover)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >
                <p className="font-serif" style={{ fontSize: "1.8rem", color: "var(--color-gold)", fontWeight: 400 }}>E</p>
              </div>
            </div>
            <p className="font-serif" style={{ fontSize: "1.4rem", color: "var(--color-gold)", letterSpacing: "0.04em" }}>Elara</p>
            <p className="label" style={{ marginTop: "0.5rem", fontSize: "0.55rem" }}>Fine Jewelry Designer</p>
          </div>
        </div>

        {/* Right bio */}
        <div style={{ padding: "4rem clamp(2rem, 5vw, 3.5rem)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <ScrollReveal>
            <p className="label" style={{ marginBottom: "1.25rem" }}>About</p>
            <blockquote
              className="font-serif"
              style={{ fontSize: "clamp(1.15rem, 2.1vw, 1.6rem)", color: "var(--color-ink)", lineHeight: 1.45, fontWeight: 400, marginBottom: "1.5rem" }}
            >
              "Jewelry is the smallest architecture — a structure that must bear the weight of meaning, memory, and beauty simultaneously."
            </blockquote>
            <p
              className="font-sans"
              style={{ fontSize: "0.875rem", color: "var(--color-ink-muted)", maxWidth: "46ch", lineHeight: 1.72, fontWeight: 300, marginBottom: "2rem" }}
            >
              I am a graduate jewelry designer with an MFA from SCAD Atlanta (2025). My practice fuses modernist form with traditional metalsmithing — lost-wax casting, granulation, champlevé enamel — creating pieces that interrogate what it means to carry an object close to the body.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/about" className="btn-outline">About Me</Link>
              <Link href="/contact" className="btn-gold">Collaborate</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CONTACT CTA ──────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--color-green)",
          padding: "6rem 2rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          zIndex: 10,
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 50% 50%, rgba(201,169,110,0.07) 0%, transparent 65%)" }} />
        <ScrollReveal>
          <p className="label" style={{ marginBottom: "1rem", color: "rgba(201,169,110,0.72)" }}>Let's Work Together</p>
          <h2
            className="font-serif"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "var(--color-ink)", letterSpacing: "-0.01em", fontWeight: 500, marginBottom: "1.25rem" }}
          >
            Commission a Piece
          </h2>
          <p
            className="font-sans"
            style={{ fontSize: "0.92rem", color: "var(--color-ink-muted)", maxWidth: "42ch", margin: "0 auto 2rem", lineHeight: 1.7, fontWeight: 300 }}
          >
            Available for bespoke commissions, gallery collaborations, and editorial projects. I work with clients to transform concepts into wearable art.
          </p>
          <Link href="/contact" className="btn-gold">Get in Touch <span aria-hidden>→</span></Link>
        </ScrollReveal>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer
        style={{
          background: "var(--color-surface)",
          borderTop: "1px solid var(--color-border)",
          padding: "2.25rem clamp(1.5rem, 5vw, 2.5rem)",
          display: "flex",
          flexWrap: "wrap",
          gap: "1.25rem",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
          zIndex: 10,
        }}
      >
        <p className="label" style={{ fontSize: "0.55rem", color: "var(--color-ink-muted)" }}>Elara — Fine Jewelry &amp; Metalwork</p>
        <nav style={{ display: "flex", gap: "1.75rem" }}>
          {[["Works", "/works"], ["About", "/about"], ["Contact", "/contact"]].map(([label, href]) => (
            <Link key={href} href={href} className="label" style={{ fontSize: "0.55rem", color: "var(--color-ink-muted)" }}>{label}</Link>
          ))}
        </nav>
        <p className="label" style={{ fontSize: "0.55rem", color: "var(--color-ink-faint)" }}>© {new Date().getFullYear()}</p>
      </footer>
    </>
  );
}
