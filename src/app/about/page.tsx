"use client";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

const skills = [
  "Cold Connections & Wire-Wrapping",
  "Metalworking & Precision Piercing",
  "Soldering & Mechanism Fabrication",
  "Chemical & Heat Patination",
  "UV Resin & Surface Treatment",
  "Wire Working & Wireworking",
  "Sand Casting",
  "CAD / Rhino 3D",
];

const colorDots = [
  "var(--color-orange)",
  "var(--color-pink)",
  "var(--color-green)",
  "var(--color-yellow)",
];

export default function AboutPage() {
  return (
    <div style={{ paddingTop: "var(--nav-h)", background: "var(--color-bg)", minHeight: "100vh" }}>

      {/* ── HEADER ────────────────────────────────────────────────────────── */}
      <header style={{ padding: "4rem clamp(1.5rem,5vw,3.5rem) 3rem", borderBottom: "1.5px solid var(--color-border)", background: "var(--color-surface)" }}>
        <ScrollReveal>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <div style={{ width: 20, height: 2, background: "var(--color-pink)" }} />
            <p className="label" style={{ fontSize: "0.6rem", color: "var(--color-pink)" }}>About</p>
          </div>
          <h1 className="font-serif font-medium" style={{ fontSize: "clamp(2.5rem,5vw,4rem)", color: "var(--color-ink)", letterSpacing: "-0.01em" }}>
            Trey May
          </h1>
          <p className="font-sans font-light" style={{ fontSize: "0.875rem", color: "var(--color-ink-muted)", marginTop: "0.5rem" }}>
            Jewelry Design · SCAD Savannah · BFA 2029
          </p>
        </ScrollReveal>
      </header>

      {/* ── PORTRAIT + BIO ────────────────────────────────────────────────── */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          borderBottom: "1.5px solid var(--color-border)",
        }}
        className="md:grid-cols-[420px_1fr]"
      >
        {/* Portrait */}
        <div style={{ position: "relative", minHeight: "520px", overflow: "hidden", borderRight: "1.5px solid var(--color-border)" }}>
          <Image
            src="/about/profile.png"
            alt="Portrait of Trey May"
            fill
            sizes="(max-width: 768px) 100vw, 420px"
            className="object-cover object-top"
            priority
          />
          {/* Color accent strip at bottom */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 5, display: "flex" }}>
            {colorDots.map((c, i) => (
              <div key={i} style={{ flex: 1, background: c }} />
            ))}
          </div>
        </div>

        {/* Bio */}
        <div style={{ padding: "4rem clamp(2rem,5vw,3.5rem)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <ScrollReveal>
            {/* Quote */}
            <blockquote
              className="font-serif"
              style={{
                fontSize: "clamp(1.25rem,2.2vw,1.6rem)",
                color: "var(--color-ink)",
                borderLeft: "3px solid var(--color-orange)",
                paddingLeft: "1.25rem",
                marginBottom: "2rem",
                fontWeight: 400,
                fontStyle: "italic",
                lineHeight: 1.5,
              }}
            >
              "My goal is to bring color, light, and a sense of joy to a world that seems to be losing these qualities."
            </blockquote>

            <p
              className="font-sans font-light"
              style={{ fontSize: "0.9rem", color: "var(--color-ink-muted)", lineHeight: 1.78, marginBottom: "2rem", maxWidth: "52ch" }}
            >
              Hi, I'm Trey May. I am a BFA student at the Savannah College of Art and Design (SCAD), pursuing a degree in jewelry with an expected graduation date of Spring 2029. My work lives at the intersection of technical expertise, concept development, and world-building. Driven by an avant-garde perspective, my goal is to bring color, light, and a sense of joy to a world that seems to be losing these qualities. I strive to create ambitious, narrative-driven pieces that leave a lasting, positive impact on those who wear and experience them.
            </p>

            {/* Color dots */}
            <div style={{ display: "flex", gap: "0.5rem", marginBottom: "2rem" }}>
              {colorDots.map((c, i) => (
                <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
              ))}
            </div>

            <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-dark">Get in Touch <span aria-hidden>→</span></Link>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="btn-outline"
                aria-label="Download CV (coming soon)"
                title="Coming soon"
              >
                Download CV
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── ARTIST STATEMENT ──────────────────────────────────────────────── */}
      <section style={{ background: "var(--color-surface)", borderBottom: "1.5px solid var(--color-border)", padding: "5rem clamp(1.5rem,5vw,3.5rem)" }}>
        <div style={{ maxWidth: "740px", margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <div style={{ width: 20, height: 2, background: "var(--color-green)" }} />
              <p className="label" style={{ fontSize: "0.6rem", color: "var(--color-green)" }}>Artist Statement</p>
            </div>
            <h2 className="font-serif font-medium" style={{ fontSize: "clamp(1.6rem,2.8vw,2.2rem)", color: "var(--color-ink)", letterSpacing: "-0.01em", marginBottom: "1.5rem" }}>
              I make jewelry because the world deserves more beauty in it.
            </h2>
            <div className="font-sans font-light" style={{ fontSize: "0.9rem", color: "var(--color-ink-muted)", lineHeight: 1.82, display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <p>
                Every piece I make starts with a feeling — something I couldn't say out loud, couldn't explain in conversation, but needed to put somewhere real. Jewelry, to me, is the most intimate form of sculpture: it lives on the body, it moves with the person, it becomes part of how they move through the world. That proximity is what makes it powerful.
              </p>
              <p>
                I'm drawn to work that has weight — emotional weight, conceptual weight — even when the physical object is delicate. Blood & Tears didn't start as a jewelry project; it started as grief. The medieval imagery in For An Endless Spring didn't start as an earring; it started as a question: what does armor look like when it's made for living rather than surviving? I build narratives first, then I figure out how to wear them.
              </p>
              <p>
                Technically, I push myself to never take the easy path. Cold connections, hand-fabricated mechanisms, chemical patination, CAD modeling, sand casting — I want to know how to do it all so that no idea is out of reach. The concept always leads, and I build the skills to follow it.
              </p>
              <p>
                Ultimately, I want my work to make people feel something. I want someone to put on a piece of mine and feel more like themselves — bolder, brighter, more present. That's the whole point. Joy is not a side effect of good jewelry; it's the entire goal.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SKILLS ────────────────────────────────────────────────────────── */}
      <section style={{ padding: "5rem clamp(1.5rem,5vw,3.5rem)", borderBottom: "1.5px solid var(--color-border)" }}>
        <ScrollReveal>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
            <div style={{ width: 20, height: 2, background: "var(--color-yellow)" }} />
            <p className="label" style={{ fontSize: "0.6rem", color: "var(--color-ink-muted)" }}>Technical Expertise</p>
          </div>
          <h2 className="font-serif font-medium" style={{ fontSize: "clamp(1.4rem,2.5vw,1.8rem)", color: "var(--color-ink)", letterSpacing: "-0.01em", marginBottom: "1.75rem" }}>
            Craft & Process
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.7rem" }}>
            {skills.map((skill, i) => {
              const accents = ["var(--color-orange)", "var(--color-pink)", "var(--color-green)", "var(--color-yellow)"];
              const accent = accents[i % accents.length];
              return (
                <div
                  key={skill}
                  className="skill-tag"
                  style={{
                    borderLeft: `3px solid ${accent}`,
                    paddingLeft: "0.85rem",
                  }}
                >
                  {skill}
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </section>

      {/* ── CALL TO ACTION ────────────────────────────────────────────────── */}
      <section style={{ padding: "5rem clamp(1.5rem,5vw,3.5rem)", textAlign: "center", background: "var(--color-surface)" }}>
        <ScrollReveal>
          <h2 className="font-serif font-medium" style={{ fontSize: "clamp(1.8rem,3vw,2.5rem)", color: "var(--color-ink)", marginBottom: "1rem" }}>
            Let's make something unforgettable.
          </h2>
          <p className="font-sans font-light" style={{ fontSize: "0.9rem", color: "var(--color-ink-muted)", maxWidth: "38ch", margin: "0 auto 2rem", lineHeight: 1.7 }}>
            If you've got a story that needs wearing, I want to help you tell it.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "0.875rem", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-orange">Contact Me <span aria-hidden>→</span></Link>
            <Link href="/works" className="btn-outline">View Works</Link>
          </div>
        </ScrollReveal>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <footer style={{ background: "var(--color-ink)", padding: "2rem clamp(1.5rem,5vw,2.5rem)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <p className="label" style={{ fontSize: "0.55rem", color: "rgba(253,252,249,0.4)" }}>TREY MAY — SCAD Jewelry Design</p>
        <Link href="/" className="label" style={{ fontSize: "0.55rem", color: "rgba(253,252,249,0.4)" }}>← Home</Link>
      </footer>
    </div>
  );
}
