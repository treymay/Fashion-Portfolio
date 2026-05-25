import Link from "next/link";
import Image from "next/image";
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

      {/* ── BREADCRUMB ────────────────────────────────────────────────────── */}
      <div style={{ padding: "0.875rem clamp(1.5rem,5vw,3.5rem)", borderBottom: "1.5px solid var(--color-border)", background: "var(--color-surface)", display: "flex", alignItems: "center", gap: "0.6rem" }}>
        <Link href="/works" className="label" style={{ fontSize: "0.55rem", color: "var(--color-ink-muted)" }}>Works</Link>
        <span style={{ color: "var(--color-border-strong)", fontSize: "0.7rem" }}>›</span>
        <span className="label" style={{ fontSize: "0.55rem", color: "var(--color-orange)" }}>{project.title}</span>
      </div>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: project.coverBg,
          minHeight: "65vh",
          display: "flex",
          alignItems: "flex-end",
          padding: "4rem clamp(1.5rem,5vw,3.5rem)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Hero BG image (last project image as backdrop) */}
        {project.images && project.images.length > 0 && (
          <Image
            src={project.images[project.images.length - 1].src}
            alt={project.title}
            fill
            sizes="100vw"
            className="object-cover object-top"
            style={{ opacity: 0.25 }}
            priority
          />
        )}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(28,23,20,0.6) 0%, transparent 60%)" }} />

        <div style={{ position: "relative", zIndex: 2, maxWidth: "56ch" }}>
          <span className={project.pillClass} style={{ display: "inline-block", marginBottom: "1rem" }}>
            {project.category} · {project.year}
          </span>
          <h1
            className="font-serif"
            style={{ fontSize: "clamp(2.8rem,6vw,5rem)", color: "#FDFCF9", letterSpacing: "-0.015em", lineHeight: 1.04, fontWeight: 500, marginBottom: "0.875rem" }}
          >
            {project.title}
          </h1>
          <p className="font-sans" style={{ fontSize: "1rem", color: "rgba(253,252,249,0.75)", fontStyle: "italic", fontWeight: 300 }}>
            {project.tagline}
          </p>
        </div>
      </section>

      {/* ── META BAR ──────────────────────────────────────────────────────── */}
      <div
        style={{
          background: "var(--color-surface)",
          borderBottom: "1.5px solid var(--color-border)",
          padding: "1.5rem clamp(1.5rem,5vw,3.5rem)",
          display: "flex", flexWrap: "wrap", gap: "2.5rem",
        }}
      >
        {[
          { label: "Materials", value: project.materials },
          { label: "Technique", value: project.technique },
          { label: "Year", value: project.year },
        ].map(({ label, value }) => (
          <div key={label}>
            <p className="label" style={{ fontSize: "0.55rem", marginBottom: "0.35rem" }}>{label}</p>
            <p className="font-sans" style={{ fontSize: "0.8rem", color: "var(--color-ink)", lineHeight: 1.4 }}>{value}</p>
          </div>
        ))}
        <div>
          <p className="label" style={{ fontSize: "0.55rem", marginBottom: "0.35rem" }}>Tags</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
            {project.tags.map((tag) => (
              <span key={tag} className="label" style={{ fontSize: "0.5rem", color: "var(--color-ink)", border: "1px solid var(--color-border-strong)", padding: "0.15rem 0.5rem" }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── OVERVIEW ──────────────────────────────────────────────────────── */}
      <section style={{ maxWidth: "820px", margin: "0 auto", padding: "4rem clamp(1.5rem,5vw,2rem)" }}>
        <div style={{ marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div style={{ width: 20, height: 2, background: "var(--color-orange)" }} />
          <p className="label" style={{ fontSize: "0.6rem", color: "var(--color-orange)" }}>Overview</p>
        </div>
        <p className="font-serif" style={{ fontSize: "clamp(1.1rem,2vw,1.3rem)", color: "var(--color-ink)", lineHeight: 1.6, fontWeight: 400 }}>
          {project.description}
        </p>
      </section>

      {/* ── STORY PAGES (images in order) ─────────────────────────────────── */}
      {project.images && project.images.length > 0 && (
        <section style={{ background: "var(--color-surface)", borderTop: "1.5px solid var(--color-border)", padding: "4rem 0" }}>
          <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 clamp(1.5rem,5vw,2rem)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2.5rem" }}>
              <div style={{ width: 20, height: 2, background: "var(--color-pink)" }} />
              <p className="label" style={{ fontSize: "0.6rem", color: "var(--color-pink)" }}>Full Story</p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {project.images.map((img, i) => (
                <div key={i}>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: "16/9",
                      border: "1.5px solid var(--color-border)",
                      overflow: "hidden",
                      background: "#f5f0e7",
                    }}
                  >
                    <Image
                      src={img.src}
                      alt={img.caption}
                      fill
                      sizes="(max-width: 768px) 100vw, 860px"
                      className="object-contain"
                      loading={i === 0 ? "eager" : "lazy"}
                    />
                  </div>
                  <p
                    className="label"
                    style={{ fontSize: "0.55rem", color: "var(--color-ink-muted)", marginTop: "0.6rem", paddingLeft: "0.25rem" }}
                  >
                    {String(i + 1).padStart(2, "0")} — {img.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CONCEPT / PROCESS / FINAL TEXT ────────────────────────────────── */}
      <div style={{ maxWidth: "820px", margin: "0 auto", padding: "4rem clamp(1.5rem,5vw,2rem)" }}>
        {project.concept && (
          <section style={{ marginBottom: "4rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
              <span className="label" style={{ fontSize: "0.55rem", color: "var(--color-orange)" }}>01</span>
              <div style={{ width: 28, height: 1.5, background: "var(--color-orange)" }} />
              <h2 className="font-serif font-medium" style={{ fontSize: "1.4rem", color: "var(--color-ink)" }}>Concept</h2>
            </div>
            <p className="font-sans font-light leading-relaxed" style={{ fontSize: "0.9rem", color: "var(--color-ink-muted)" }}>{project.concept}</p>
          </section>
        )}

        {project.process && (
          <section style={{ marginBottom: "4rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
              <span className="label" style={{ fontSize: "0.55rem", color: "var(--color-pink)" }}>02</span>
              <div style={{ width: 28, height: 1.5, background: "var(--color-pink)" }} />
              <h2 className="font-serif font-medium" style={{ fontSize: "1.4rem", color: "var(--color-ink)" }}>Process</h2>
            </div>
            <p className="font-sans font-light leading-relaxed" style={{ fontSize: "0.9rem", color: "var(--color-ink-muted)" }}>{project.process}</p>
          </section>
        )}

        {project.final && (
          <section>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
              <span className="label" style={{ fontSize: "0.55rem", color: "var(--color-green)" }}>03</span>
              <div style={{ width: 28, height: 1.5, background: "var(--color-green)" }} />
              <h2 className="font-serif font-medium" style={{ fontSize: "1.4rem", color: "var(--color-ink)" }}>Final</h2>
            </div>
            <p className="font-sans font-light leading-relaxed" style={{ fontSize: "0.9rem", color: "var(--color-ink-muted)" }}>{project.final}</p>
          </section>
        )}
      </div>

      {/* ── NEXT / PREV ───────────────────────────────────────────────────── */}
      <nav
        style={{ borderTop: "1.5px solid var(--color-border)", display: "grid", gridTemplateColumns: "1fr 1fr", background: "var(--color-surface)" }}
        aria-label="Project navigation"
      >
        {prev ? (
          <Link href={`/works/${prev.slug}`} style={{ padding: "2rem clamp(1.5rem,5vw,3.5rem)", borderRight: "1.5px solid var(--color-border)", display: "block", transition: "background 0.2s ease" }} className="hover:bg-[var(--color-surface-2)]">
            <p className="label" style={{ fontSize: "0.55rem", marginBottom: "0.5rem" }}>← Previous</p>
            <p className="font-serif" style={{ fontSize: "1.1rem", color: "var(--color-ink)" }}>{prev.title}</p>
          </Link>
        ) : <div />}
        {next ? (
          <Link href={`/works/${next.slug}`} style={{ padding: "2rem clamp(1.5rem,5vw,3.5rem)", display: "block", textAlign: "right", transition: "background 0.2s ease" }} className="hover:bg-[var(--color-surface-2)]">
            <p className="label" style={{ fontSize: "0.55rem", marginBottom: "0.5rem" }}>Next →</p>
            <p className="font-serif" style={{ fontSize: "1.1rem", color: "var(--color-ink)" }}>{next.title}</p>
          </Link>
        ) : <div />}
      </nav>

      <div style={{ padding: "2rem", textAlign: "center", background: "var(--color-surface)", borderTop: "1.5px solid var(--color-border)" }}>
        <Link href="/works" className="btn-outline">← Back to All Works</Link>
      </div>
    </div>
  );
}
