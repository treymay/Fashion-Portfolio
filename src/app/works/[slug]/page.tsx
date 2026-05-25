import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prev = projects[currentIndex - 1];
  const next = projects[currentIndex + 1];

  return (
    <div style={{ paddingTop: "var(--nav-h)", background: "var(--color-bg)", minHeight: "100vh" }}>

      {/* ── BREADCRUMB ───────────────────────────────────────────────── */}
      <div
        className="px-6 md:px-14 py-4 flex items-center gap-2"
        style={{ borderBottom: "1px solid var(--color-border)" }}
      >
        <Link href="/works" className="label transition-colors" style={{ fontSize: "0.55rem", color: "var(--color-ink-muted)" }}>
          Works
        </Link>
        <span className="label" style={{ fontSize: "0.55rem", color: "var(--color-border-hover)" }}>›</span>
        <span className="label" style={{ fontSize: "0.55rem", color: "var(--color-gold)" }}>{project.title}</span>
      </div>

      {/* ── HERO BANNER ──────────────────────────────────────────────── */}
      <section
        style={{
          background: project.bg,
          minHeight: "70vh",
          display: "flex",
          alignItems: "flex-end",
          padding: "4rem 2.5rem",
          position: "relative",
          overflow: "hidden",
        }}
        className="md:px-14"
      >
        {/* Concentric ring decoration */}
        <div
          style={{
            position: "absolute",
            right: "6%",
            top: "50%",
            transform: "translateY(-50%)",
            width: "clamp(180px, 30vw, 460px)",
            height: "clamp(180px, 30vw, 460px)",
            borderRadius: "50%",
            border: `1px solid ${project.accentColor}22`,
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "6%",
            top: "50%",
            transform: "translateY(-50%)",
            width: "clamp(110px, 19vw, 290px)",
            height: "clamp(110px, 19vw, 290px)",
            borderRadius: "50%",
            border: `1px solid ${project.accentColor}40`,
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "6%",
            top: "50%",
            transform: "translateY(-50%)",
            width: "clamp(50px, 9vw, 130px)",
            height: "clamp(50px, 9vw, 130px)",
            borderRadius: "50%",
            background: `${project.accentColor}10`,
            border: `1px solid ${project.accentColor}60`,
          }}
        />

        {/* Bottom-left text */}
        <div style={{ maxWidth: "56ch", position: "relative", zIndex: 2 }}>
          <span
            className="label mb-4 inline-block"
            style={{ fontSize: "0.6rem", color: project.accentColor, border: `1px solid ${project.accentColor}44`, padding: "0.2rem 0.8rem" }}
          >
            {project.category} &nbsp;·&nbsp; {project.year}
          </span>
          <h1
            className="font-serif font-medium hero-shadow mb-4"
            style={{
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
              color: "var(--color-ink)",
              letterSpacing: "-0.01em",
              lineHeight: 1.05,
            }}
          >
            {project.title}
          </h1>
          <p
            className="font-sans font-light hero-shadow mb-2"
            style={{ fontSize: "1rem", color: "var(--color-ink-muted)", fontStyle: "italic" }}
          >
            {project.tagline}
          </p>
        </div>
      </section>

      {/* ── META BAR ─────────────────────────────────────────────────── */}
      <div
        style={{
          background: "var(--color-surface)",
          borderBottom: "1px solid var(--color-border)",
          padding: "1.5rem 2.5rem",
          display: "flex",
          flexWrap: "wrap",
          gap: "2.5rem",
        }}
        className="md:px-14"
      >
        {[
          { label: "Materials", value: project.materials },
          { label: "Technique", value: project.technique },
          { label: "Year", value: project.year },
        ].map(({ label, value }) => (
          <div key={label}>
            <p className="label mb-1" style={{ fontSize: "0.55rem" }}>{label}</p>
            <p className="font-sans" style={{ fontSize: "0.8rem", color: "var(--color-ink)", lineHeight: 1.4 }}>{value}</p>
          </div>
        ))}
        {/* Tags */}
        <div>
          <p className="label mb-1" style={{ fontSize: "0.55rem" }}>Tags</p>
          <div className="flex flex-wrap gap-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="label"
                style={{ fontSize: "0.5rem", color: "var(--color-gold)", border: "1px solid var(--color-border)", padding: "0.15rem 0.5rem" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── PROJECT STORY: CONCEPT → PROCESS → FINAL ─────────────────── */}
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "5rem 2rem" }} className="md:px-8">

        {/* Overview */}
        <section style={{ marginBottom: "5rem" }}>
          <p className="label mb-3" style={{ color: "var(--color-gold)" }}>Overview</p>
          <p
            className="font-serif"
            style={{ fontSize: "clamp(1.1rem, 2vw, 1.35rem)", color: "var(--color-ink)", lineHeight: 1.6, fontWeight: 400 }}
          >
            {project.description}
          </p>
        </section>

        {/* Divider */}
        <div style={{ width: "100%", height: 1, background: "var(--color-border)", marginBottom: "5rem" }} />

        {/* 01 — Concept */}
        <section style={{ marginBottom: "5rem" }}>
          <div className="flex items-center gap-4 mb-5">
            <span className="label" style={{ fontSize: "0.55rem", color: "var(--color-gold)" }}>01</span>
            <span className="gold-line" />
            <h2 className="font-serif font-medium" style={{ fontSize: "1.5rem", color: "var(--color-ink)" }}>Concept</h2>
          </div>

          {/* Concept image placeholder */}
          <div
            style={{
              background: project.bg,
              aspectRatio: "16/7",
              marginBottom: "2rem",
              border: "1px solid var(--color-border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                textAlign: "center",
                position: "relative",
                zIndex: 2,
                padding: "2rem",
              }}
            >
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  border: `1px solid ${project.accentColor}55`,
                  margin: "0 auto 1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: `${project.accentColor}20`,
                  }}
                />
              </div>
              <p className="label" style={{ fontSize: "0.55rem", color: project.accentColor }}>
                Concept Sketch / Diagram
              </p>
            </div>
          </div>

          <p
            className="font-sans font-light leading-relaxed"
            style={{ fontSize: "0.9rem", color: "var(--color-ink-muted)" }}
          >
            {project.concept}
          </p>
        </section>

        {/* 02 — Process */}
        <section style={{ marginBottom: "5rem" }}>
          <div className="flex items-center gap-4 mb-5">
            <span className="label" style={{ fontSize: "0.55rem", color: "var(--color-gold)" }}>02</span>
            <span className="gold-line" />
            <h2 className="font-serif font-medium" style={{ fontSize: "1.5rem", color: "var(--color-ink)" }}>Process</h2>
          </div>

          {/* Process image grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "0.75rem",
              marginBottom: "2rem",
            }}
          >
            {["Prototype", "Hand Finishing", "Stone Setting"].map((caption, i) => (
              <div
                key={caption}
                style={{
                  background: project.bg,
                  aspectRatio: "1",
                  border: "1px solid var(--color-border)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    border: `1px solid ${project.accentColor}44`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ color: project.accentColor, fontSize: "0.7rem", fontFamily: "serif" }}>{i + 1}</span>
                </div>
                <p className="label text-center" style={{ fontSize: "0.5rem", color: "var(--color-ink-muted)", padding: "0 0.5rem" }}>
                  {caption}
                </p>
              </div>
            ))}
          </div>

          <p
            className="font-sans font-light leading-relaxed"
            style={{ fontSize: "0.9rem", color: "var(--color-ink-muted)" }}
          >
            {project.process}
          </p>
        </section>

        {/* 03 — Final */}
        <section>
          <div className="flex items-center gap-4 mb-5">
            <span className="label" style={{ fontSize: "0.55rem", color: "var(--color-gold)" }}>03</span>
            <span className="gold-line" />
            <h2 className="font-serif font-medium" style={{ fontSize: "1.5rem", color: "var(--color-ink)" }}>Final Piece</h2>
          </div>

          {/* Final large image */}
          <div
            style={{
              background: project.bg,
              aspectRatio: "3/2",
              marginBottom: "2rem",
              border: "1px solid var(--color-border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "42%",
                  height: "70%",
                  border: `1px solid ${project.accentColor}33`,
                  borderRadius: 2,
                }}
              />
            </div>
            <p
              className="label text-center"
              style={{ fontSize: "0.55rem", color: project.accentColor, position: "relative", zIndex: 2 }}
            >
              Final Exhibition Shot
            </p>
          </div>

          <p
            className="font-sans font-light leading-relaxed"
            style={{ fontSize: "0.9rem", color: "var(--color-ink-muted)" }}
          >
            {project.final}
          </p>
        </section>
      </div>

      {/* ── NEXT / PREV NAVIGATION ───────────────────────────────────── */}
      <nav
        style={{
          borderTop: "1px solid var(--color-border)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
        aria-label="Project navigation"
      >
        {prev ? (
          <Link
            href={`/works/${prev.slug}`}
            style={{
              padding: "2rem 2.5rem",
              borderRight: "1px solid var(--color-border)",
              display: "block",
              transition: "background 0.25s ease",
            }}
            className="md:px-14 hover:bg-[var(--color-surface)]"
          >
            <p className="label mb-2" style={{ fontSize: "0.55rem" }}>← Previous</p>
            <p className="font-serif" style={{ fontSize: "1.1rem", color: "var(--color-ink)" }}>{prev.title}</p>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={`/works/${next.slug}`}
            style={{
              padding: "2rem 2.5rem",
              display: "block",
              textAlign: "right",
              transition: "background 0.25s ease",
            }}
            className="md:px-14 hover:bg-[var(--color-surface)]"
          >
            <p className="label mb-2" style={{ fontSize: "0.55rem" }}>Next →</p>
            <p className="font-serif" style={{ fontSize: "1.1rem", color: "var(--color-ink)" }}>{next.title}</p>
          </Link>
        ) : (
          <div />
        )}
      </nav>

      {/* Back to Works */}
      <div
        style={{
          padding: "2rem 2.5rem",
          textAlign: "center",
          borderTop: "1px solid var(--color-border)",
          background: "var(--color-surface)",
        }}
      >
        <Link href="/works" className="btn-outline">
          ← Back to All Works
        </Link>
      </div>
    </div>
  );
}
