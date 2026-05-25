"use client";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { projects } from "@/lib/projects";

export default function HomePage() {
  const recent = projects.slice(0, 3);

  return (
    <>
      {/* ── SINGLE HERO ──────────────────────────────────────────────────── */}
      <section
        style={{
          position: "sticky",
          top: 0,
          height: "100svh",
          width: "100%",
          zIndex: 2,
          background: "var(--color-bg)",
          overflow: "hidden",
        }}
        aria-label="Hero"
      >
        {/* Fun color-block accent — top right */}
        <div style={{ position: "absolute", top: 0, right: 0, width: "clamp(200px,35vw,480px)", height: "clamp(200px,35vw,480px)", background: "var(--color-surface)", zIndex: 0 }} />
        {/* Orange accent line */}
        <div style={{ position: "absolute", top: 0, right: "clamp(190px,34.5vw,478px)", width: 3, height: "clamp(200px,35vw,480px)", background: "var(--color-orange)", zIndex: 1 }} />

        {/* Circle photo — top right block */}
        <div
          style={{
            position: "absolute",
            top: "calc(var(--nav-h) + 2rem)",
            right: "clamp(1.5rem, 5vw, 3.5rem)",
            width: "clamp(160px, 24vw, 340px)",
            height: "clamp(160px, 24vw, 340px)",
            borderRadius: "50%",
            overflow: "hidden",
            border: "3px solid var(--color-bg)",
            zIndex: 3,
          }}
        >
          <Image
            src="/circle-pic.png"
            alt="Trey May"
            fill
            sizes="(max-width: 768px) 160px, 340px"
            className="object-cover object-top"
            priority
          />
        </div>

        {/* Content — bottom left */}
        <div
          style={{
            position: "absolute",
            bottom: "3.5rem",
            left: "clamp(1.5rem, 5vw, 3.5rem)",
            maxWidth: "580px",
            zIndex: 4,
          }}
        >
          {/* Color dot row */}
          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem" }}>
            {["var(--color-orange)", "var(--color-pink)", "var(--color-green)", "var(--color-yellow)"].map((c, i) => (
              <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
            ))}
          </div>

          <h1
            className="font-serif"
            style={{
              fontSize: "clamp(3rem, 7vw, 6.5rem)",
              color: "var(--color-ink)",
              letterSpacing: "-0.02em",
              lineHeight: 0.97,
              fontWeight: 500,
              marginBottom: "1.25rem",
            }}
          >
            Joy is the whole point.
          </h1>
          <p
            className="font-sans"
            style={{
              fontSize: "clamp(0.85rem, 1.4vw, 1rem)",
              color: "var(--color-ink-muted)",
              maxWidth: "40ch",
              lineHeight: 1.7,
              fontWeight: 300,
              marginBottom: "2rem",
            }}
          >
            Jewelry that brings color, light, and narrative to the people who wear it.
            Trey May — Jewelry Design, SCAD Savannah, BFA 2029.
          </p>
          <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap" }}>
            <Link href="/works" className="btn-dark">See My Work <span aria-hidden>→</span></Link>
            <Link href="/about" className="btn-outline">About Me</Link>
          </div>
        </div>

        {/* Bottom-right: scrolling hint */}
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            right: "clamp(1.5rem, 5vw, 3.5rem)",
            zIndex: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <div style={{ width: 1, height: 50, background: "var(--color-border-strong)" }} />
          <p className="label" style={{ fontSize: "0.5rem", writingMode: "vertical-rl", letterSpacing: "0.2em" }}>SCROLL</p>
        </div>
      </section>

      {/* ── MARQUEE STRIP ────────────────────────────────────────────────── */}
      <div
        style={{
          overflow: "hidden",
          borderTop: "1.5px solid var(--color-border)",
          borderBottom: "1.5px solid var(--color-border)",
          background: "var(--color-ink)",
          padding: "0.85rem 0",
          position: "relative",
          zIndex: 10,
        }}
        aria-hidden="true"
      >
        <div className="marquee-track" style={{ display: "flex", width: "max-content", gap: "3rem", alignItems: "center" }}>
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="label" style={{ fontSize: "0.55rem", whiteSpace: "nowrap", flexShrink: 0, color: "rgba(253,252,249,0.5)" }}>
              TREY MAY &nbsp;·&nbsp; JEWELRY DESIGN &nbsp;·&nbsp; SCAD SAVANNAH &nbsp;·&nbsp; BFA 2029 &nbsp;·&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ── RECENT WORK ──────────────────────────────────────────────────── */}
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
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.75rem" }}>
              <div style={{ width: 28, height: 2, background: "var(--color-orange)" }} />
              <p className="label" style={{ fontSize: "0.6rem", color: "var(--color-orange)" }}>Latest Work</p>
            </div>
            <h2
              className="font-serif"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--color-ink)", letterSpacing: "-0.01em", fontWeight: 500 }}
            >
              Recent Collections
            </h2>
          </ScrollReveal>
        </div>

        <div
          style={{
            padding: "0 clamp(1.5rem, 5vw, 3.5rem)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {recent.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 0.1}>
              <Link href={`/works/${project.slug}`} style={{ display: "block" }} className="group">
                <article className="project-card">
                  {/* Cover image area */}
                  <div
                    style={{
                      background: project.coverBg,
                      aspectRatio: "4/5",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {/* Show first story image if available */}
                    {project.images?.[project.images.length - 1] && (
                      <Image
                        src={project.images[project.images.length - 1].src}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-top"
                        style={{ opacity: 0.88 }}
                      />
                    )}
                    <span
                      className={project.pillClass}
                      style={{ position: "absolute", top: "1rem", left: "1rem", zIndex: 2 }}
                    >
                      {project.category}
                    </span>
                    <span
                      className="label"
                      style={{ position: "absolute", top: "1rem", right: "1rem", fontSize: "0.55rem", color: "rgba(28,23,20,0.5)", zIndex: 2 }}
                    >
                      {project.year}
                    </span>
                    {/* Hover */}
                    <div
                      style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(28,23,20,0.45)", opacity: 0, transition: "opacity 0.3s ease", zIndex: 3 }}
                      className="group-hover:opacity-100"
                    >
                      <span className="label" style={{ fontSize: "0.6rem", color: "#fff", border: "1.5px solid #fff", padding: "0.4rem 1rem" }}>View Project</span>
                    </div>
                  </div>
                  {/* Footer */}
                  <div style={{ padding: "1rem 1.25rem 1.25rem", borderTop: "1px solid var(--color-border)" }}>
                    <p className="font-serif" style={{ fontSize: "1.05rem", color: "var(--color-ink)", fontWeight: 500, marginBottom: "0.3rem" }}>{project.title}</p>
                    <p className="label" style={{ fontSize: "0.55rem", color: "var(--color-ink-muted)" }}>{project.materials.split(",")[0]}</p>
                  </div>
                </article>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <div style={{ padding: "2.5rem clamp(1.5rem, 5vw, 3.5rem) 0" }}>
          <ScrollReveal>
            <Link href="/works" className="btn-outline">All Works <span aria-hidden>→</span></Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── ABOUT BLURB ──────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--color-surface)",
          borderTop: "1.5px solid var(--color-border)",
          borderBottom: "1.5px solid var(--color-border)",
          display: "grid",
          gridTemplateColumns: "1fr",
          position: "relative",
          zIndex: 10,
        }}
        className="md:grid-cols-2"
      >
        {/* Left: photo */}
        <div
          style={{
            minHeight: "55vh",
            position: "relative",
            overflow: "hidden",
            borderRight: "1.5px solid var(--color-border)",
          }}
        >
          <Image
            src="/about/profile.png"
            alt="Trey May"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top"
          />
          {/* Orange accent line */}
          <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: 4, background: "var(--color-orange)" }} />
        </div>

        {/* Right: bio */}
        <div style={{ padding: "4rem clamp(2rem, 5vw, 3.5rem)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <ScrollReveal>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
              <div style={{ width: 20, height: 2, background: "var(--color-pink)" }} />
              <p className="label" style={{ fontSize: "0.6rem", color: "var(--color-pink)" }}>About Me</p>
            </div>
            <h2
              className="font-serif"
              style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)", color: "var(--color-ink)", fontWeight: 500, marginBottom: "1.25rem", letterSpacing: "-0.01em" }}
            >
              Hi, I'm Trey May.
            </h2>
            <p
              className="font-sans"
              style={{ fontSize: "0.9rem", color: "var(--color-ink-muted)", maxWidth: "46ch", lineHeight: 1.72, fontWeight: 300, marginBottom: "2rem" }}
            >
              BFA student at SCAD Savannah, pursuing Jewelry Design with an expected graduation of Spring 2029.
              My goal is simple: bring color, light, and joy to a world that seems to be losing those things —
              through pieces that are ambitious, narrative-driven, and impossible to forget.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/about" className="btn-dark">Read More</Link>
              <Link href="/contact" className="btn-outline">Let's Talk</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section
        style={{
          padding: "6rem 2rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          zIndex: 10,
          background: "var(--color-bg)",
        }}
      >
        {/* Fun color blocks */}
        <div style={{ position: "absolute", top: 0, left: 0, width: "clamp(40px,8vw,100px)", height: "100%", background: "var(--color-orange)", opacity: 0.08 }} />
        <div style={{ position: "absolute", top: 0, right: 0, width: "clamp(40px,8vw,100px)", height: "100%", background: "var(--color-pink)", opacity: 0.08 }} />
        <ScrollReveal>
          <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginBottom: "1.5rem" }}>
            {["var(--color-orange)", "var(--color-pink)", "var(--color-green)", "var(--color-yellow)"].map((c, i) => (
              <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: c }} />
            ))}
          </div>
          <h2
            className="font-serif"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.8rem)", color: "var(--color-ink)", letterSpacing: "-0.01em", fontWeight: 500, marginBottom: "1.25rem" }}
          >
            Want something made?
          </h2>
          <p
            className="font-sans"
            style={{ fontSize: "0.95rem", color: "var(--color-ink-muted)", maxWidth: "42ch", margin: "0 auto 2rem", lineHeight: 1.72, fontWeight: 300 }}
          >
            I'm available for commissions, collaborations, and projects that matter.
            If you've got a story to tell, I can help you wear it.
          </p>
          <Link href="/contact" className="btn-orange">Get in Touch <span aria-hidden>→</span></Link>
        </ScrollReveal>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer
        style={{
          background: "var(--color-ink)",
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
        <p className="label" style={{ fontSize: "0.55rem", color: "rgba(253,252,249,0.45)" }}>
          TREY MAY — Jewelry Design · SCAD · BFA 2029
        </p>
        <nav style={{ display: "flex", gap: "1.75rem" }}>
          {[["Works", "/works"], ["About", "/about"], ["Contact", "/contact"]].map(([label, href]) => (
            <Link key={href} href={href} className="label" style={{ fontSize: "0.55rem", color: "rgba(253,252,249,0.45)" }}>{label}</Link>
          ))}
        </nav>
        <p className="label" style={{ fontSize: "0.55rem", color: "rgba(253,252,249,0.25)" }}>© {new Date().getFullYear()}</p>
      </footer>
    </>
  );
}
