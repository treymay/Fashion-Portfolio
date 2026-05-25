"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { projects } from "@/lib/projects";

const allCategories = ["All", "Brooch", "Bracelet", "Earrings", "Ring", "Necklace", "Pendant", "Collection"];

export default function WorksPage() {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = projects.filter((p) => {
    const matchesCategory = active === "All" || p.category === active;
    const matchesSearch =
      search === "" ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.materials.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ paddingTop: "var(--nav-h)", minHeight: "100vh", background: "var(--color-bg)" }}>

      {/* ── PAGE HEADER ───────────────────────────────────────────────────── */}
      <header
        style={{
          padding: "4rem clamp(1.5rem, 5vw, 3.5rem) 3rem",
          borderBottom: "1.5px solid var(--color-border)",
          background: "var(--color-surface)",
        }}
      >
        <ScrollReveal>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <div style={{ width: 20, height: 2, background: "var(--color-orange)" }} />
            <p className="label" style={{ fontSize: "0.6rem", color: "var(--color-orange)" }}>Portfolio</p>
          </div>
          <h1
            className="font-serif font-medium"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--color-ink)", letterSpacing: "-0.01em", marginBottom: "0.75rem" }}
          >
            Works
          </h1>
          <p
            className="font-sans font-light"
            style={{ fontSize: "0.875rem", color: "var(--color-ink-muted)", maxWidth: "46ch", lineHeight: 1.7 }}
          >
            A growing collection of narrative-driven jewelry — every piece is a story worth wearing.
          </p>
        </ScrollReveal>
      </header>

      {/* ── FILTERS ───────────────────────────────────────────────────────── */}
      <div
        style={{ padding: "1.25rem clamp(1.5rem, 5vw, 3.5rem)", borderBottom: "1.5px solid var(--color-border)", display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "space-between", alignItems: "center" }}
      >
        <fieldset className="flex flex-wrap gap-2 border-none p-0 m-0">
          <legend className="sr-only">Filter by category</legend>
          {allCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`filter-btn ${active === cat ? "active" : ""}`}
              aria-pressed={active === cat}
            >
              {cat}
            </button>
          ))}
        </fieldset>
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className="form-field"
          aria-label="Search projects"
          style={{ width: "180px" }}
        />
      </div>

      {/* ── GRID ──────────────────────────────────────────────────────────── */}
      <div
        style={{ padding: "2.5rem clamp(1.5rem, 5vw, 3.5rem) 5rem", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.25rem" }}
      >
        {filtered.length === 0 && (
          <div className="col-span-full py-20 text-center">
            <p className="label" style={{ fontSize: "0.7rem" }}>Nothing found. Try a different search.</p>
          </div>
        )}
        {filtered.map((project, i) => (
          <ScrollReveal key={project.slug} delay={i * 0.08}>
            <Link href={`/works/${project.slug}`} className="block group">
              <article className="project-card" tabIndex={0} role="article" aria-label={`${project.title} — ${project.category}, ${project.year}`}>
                {/* Cover */}
                <div style={{ background: project.coverBg, aspectRatio: "4/5", position: "relative", overflow: "hidden" }}>
                  {(project.thumbnail ?? project.images?.[0]?.src) && (
                    <Image
                      src={project.thumbnail ?? project.images![0].src}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center"
                      style={{ opacity: 0.92 }}
                    />
                  )}
                  <span className={project.pillClass} style={{ position: "absolute", top: "1rem", left: "1rem", zIndex: 2 }}>{project.category}</span>
                  <span className="label" style={{ position: "absolute", top: "1rem", right: "1rem", fontSize: "0.55rem", color: "rgba(28,23,20,0.6)", zIndex: 2 }}>{project.year}</span>
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(28,23,20,0.45)", opacity: 0, transition: "opacity 0.3s ease", zIndex: 3 }} className="group-hover:opacity-100">
                    <span className="label" style={{ fontSize: "0.6rem", color: "#fff", border: "1.5px solid #fff", padding: "0.4rem 1rem" }}>View Project</span>
                  </div>
                </div>
                {/* Footer */}
                <div style={{ padding: "1rem 1.25rem 1.25rem", borderTop: "1px solid var(--color-border)" }}>
                  <p className="font-serif" style={{ fontSize: "1rem", color: "var(--color-ink)", fontWeight: 500, marginBottom: "0.3rem" }}>{project.title}</p>
                  <p className="label" style={{ fontSize: "0.55rem", color: "var(--color-ink-muted)", marginBottom: "0.35rem" }}>{project.materials.split(",")[0]}</p>
                  <p className="font-sans" style={{ fontSize: "0.78rem", color: "var(--color-ink-muted)", lineHeight: 1.5 }}>{project.tagline}</p>
                </div>
              </article>
            </Link>
          </ScrollReveal>
        ))}
      </div>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <footer style={{ background: "var(--color-ink)", padding: "2rem clamp(1.5rem, 5vw, 2.5rem)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <p className="label" style={{ fontSize: "0.55rem", color: "rgba(253,252,249,0.45)" }}>{filtered.length} piece{filtered.length !== 1 ? "s" : ""}</p>
        <Link href="/" className="label" style={{ fontSize: "0.55rem", color: "rgba(253,252,249,0.45)" }}>← Home</Link>
      </footer>
    </div>
  );
}
