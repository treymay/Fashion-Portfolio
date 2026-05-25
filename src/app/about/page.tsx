import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

const skills = [
  { label: "Lost-Wax Casting", detail: "Investment & centrifugal" },
  { label: "Granulation", detail: "Etruscan technique" },
  { label: "Stone Setting", detail: "Pavé, bezel, prong" },
  { label: "Enamel Work", detail: "Champlevé & cloisonné" },
  { label: "CAD / Rhino 3D", detail: "Parametric modeling" },
  { label: "Electroforming", detail: "Precious metal deposition" },
  { label: "Anodization", detail: "Titanium & niobium" },
  { label: "Gemology", detail: "GIA certified" },
];

const timeline = [
  { year: "2025", event: "MFA Metalwork & Jewelry Design — SCAD Atlanta" },
  { year: "2024", event: "Best in Category — Atlanta Jewelry Show" },
  { year: "2024", event: "Thesis Exhibition — SCAD Fashion Show" },
  { year: "2023", event: "Dean's Award for Technical Excellence" },
  { year: "2022", event: "BFA Jewelry Design — SCAD Atlanta" },
  { year: "2022", event: "Apprenticeship — Goldsmith Studio, Savannah GA" },
];

export default function AboutPage() {
  return (
    <div style={{ paddingTop: "var(--nav-h)", background: "var(--color-bg)", minHeight: "100vh" }}>

      {/* ── PAGE HEADER ────────────────────────────────────────────────── */}
      <header
        style={{
          padding: "4rem 2.5rem 3rem",
          borderBottom: "1px solid var(--color-border)",
          background: "var(--color-surface)",
        }}
        className="md:px-14"
      >
        <ScrollReveal>
          <p className="label mb-3">The Designer</p>
          <h1
            className="font-serif font-medium"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--color-ink)", letterSpacing: "-0.01em" }}
          >
            About
          </h1>
        </ScrollReveal>
      </header>

      {/* ── PORTRAIT + BIO ───────────────────────────────────────────── */}
      <section
        style={{ borderBottom: "1px solid var(--color-border)" }}
        className="grid grid-cols-1 md:grid-cols-2"
      >
        {/* Portrait placeholder */}
        <div
          style={{
            background: "linear-gradient(160deg, #141210 0%, #1E3D2F22 100%)",
            minHeight: "55vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRight: "1px solid var(--color-border)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: 160,
              height: 160,
              borderRadius: "50%",
              border: "1px solid var(--color-gold)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 110,
                height: 110,
                borderRadius: "50%",
                background: "rgba(201,169,110,0.07)",
                border: "1px solid var(--color-border-hover)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p
                className="font-serif"
                style={{ fontSize: "1.4rem", color: "var(--color-gold)", fontWeight: 400, letterSpacing: "0.04em" }}
              >
                E
              </p>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "1.5rem",
              left: "50%",
              transform: "translateX(-50%)",
              textAlign: "center",
            }}
          >
            <p className="label" style={{ fontSize: "0.55rem" }}>Portrait placeholder</p>
          </div>
        </div>

        {/* Bio */}
        <div style={{ padding: "4rem 3rem" }} className="md:p-14 flex flex-col justify-center">
          <ScrollReveal>
            <span className="gold-line mb-5" />
            <blockquote
              className="font-serif font-medium leading-snug mb-7"
              style={{ fontSize: "clamp(1.15rem, 2.2vw, 1.6rem)", color: "var(--color-ink)" }}
            >
              "My practice begins in concept and ends in craft — the object is the argument."
            </blockquote>
            <p
              className="font-sans font-light leading-relaxed mb-5"
              style={{ fontSize: "0.9rem", color: "var(--color-ink-muted)", maxWidth: "48ch" }}
            >
              I am a graduate jewelry designer with an MFA in Metalwork & Jewelry Design from the Savannah College of Art and Design (SCAD Atlanta, 2025). My work fuses contemporary conceptual frameworks with traditional goldsmithing and silversmithing techniques that span centuries.
            </p>
            <p
              className="font-sans font-light leading-relaxed mb-8"
              style={{ fontSize: "0.9rem", color: "var(--color-ink-muted)", maxWidth: "48ch" }}
            >
              I approach each piece as a small architecture — a structure that must bear the simultaneous weight of aesthetic beauty, material integrity, and conceptual meaning. My collections explore themes of geological time, ritual, memory, and the psychology of ornament.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/contact" className="btn-gold">
                Collaborate <span aria-hidden>→</span>
              </Link>
              <a
                href="/cv.pdf"
                download
                className="btn-outline"
                aria-label="Download CV as PDF"
              >
                Download CV
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SKILLS / TECHNIQUES ──────────────────────────────────────── */}
      <section
        style={{ padding: "5rem 2.5rem", borderBottom: "1px solid var(--color-border)" }}
        className="md:px-14"
      >
        <ScrollReveal>
          <p className="label mb-8" style={{ color: "var(--color-gold)" }}>Skills & Techniques</p>
        </ScrollReveal>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "1rem",
          }}
        >
          {skills.map((skill, i) => (
            <ScrollReveal key={skill.label} delay={i * 0.07}>
              <div
                style={{
                  padding: "1.5rem",
                  border: "1px solid var(--color-border)",
                  background: "var(--color-surface)",
                  transition: "border-color 0.3s ease",
                }}
                className="hover:border-[var(--color-gold)]"
              >
                <p
                  className="font-sans font-medium mb-1"
                  style={{ fontSize: "0.85rem", color: "var(--color-ink)" }}
                >
                  {skill.label}
                </p>
                <p className="label" style={{ fontSize: "0.55rem" }}>{skill.detail}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── EDUCATION & EXHIBITIONS TIMELINE ─────────────────────────── */}
      <section
        style={{ padding: "5rem 2.5rem", borderBottom: "1px solid var(--color-border)" }}
        className="md:px-14"
      >
        <ScrollReveal>
          <p className="label mb-8" style={{ color: "var(--color-gold)" }}>Education & Awards</p>
        </ScrollReveal>
        <div style={{ maxWidth: "600px" }}>
          {timeline.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr",
                  gap: "1.5rem",
                  paddingBottom: "2rem",
                  marginBottom: "2rem",
                  borderBottom: i < timeline.length - 1 ? "1px solid var(--color-border)" : "none",
                  alignItems: "start",
                }}
              >
                <span
                  className="font-serif"
                  style={{ fontSize: "1.1rem", color: "var(--color-gold)", fontWeight: 400 }}
                >
                  {item.year}
                </span>
                <p
                  className="font-sans"
                  style={{ fontSize: "0.875rem", color: "var(--color-ink)", lineHeight: 1.5 }}
                >
                  {item.event}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── STATEMENT ────────────────────────────────────────────────── */}
      <section
        style={{
          padding: "5rem 2.5rem",
          background: "var(--color-surface)",
          textAlign: "center",
          borderBottom: "1px solid var(--color-border)",
        }}
        className="md:px-14"
      >
        <ScrollReveal>
          <p className="label mb-6">Artist Statement</p>
          <blockquote
            className="font-serif font-medium mx-auto"
            style={{
              fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
              color: "var(--color-ink)",
              lineHeight: 1.55,
              maxWidth: "62ch",
            }}
          >
            "I make objects for the body because the body is the most intimate
            space. To wear a thing is to carry its meaning — its material history,
            its maker's intention, its own weight. My work asks: what is worth
            carrying?"
          </blockquote>
          <span className="gold-line mt-8 mx-auto" />
        </ScrollReveal>
      </section>

      {/* ── CTA FOOTER ───────────────────────────────────────────────── */}
      <footer
        style={{
          padding: "3rem 2.5rem",
          display: "flex",
          flexWrap: "wrap",
          gap: "1.5rem",
          justifyContent: "space-between",
          alignItems: "center",
          background: "var(--color-bg)",
        }}
        className="md:px-14"
      >
        <div>
          <p className="label mb-1" style={{ fontSize: "0.55rem" }}>Ready to collaborate?</p>
          <Link href="/contact" className="font-serif" style={{ fontSize: "1.1rem", color: "var(--color-gold)" }}>
            Get in touch →
          </Link>
        </div>
        <Link href="/works" className="btn-outline">
          View All Works
        </Link>
      </footer>
    </div>
  );
}
