"use client";

import Link from "next/link";
import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { projects } from "@/lib/projects";

const allCategories = ["All", "Ring", "Necklace", "Bangle", "Earrings", "Brooch", "Pendant"];

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
      {/* ── PAGE HEADER ────────────────────────────────────────────────── */}
      <header
        style={{
          padding: "4rem 2.5rem 3rem",
          borderBottom: "1px solid var(--color-border)",
        }}
        className="md:px-14"
      >
        <ScrollReveal>
          <p className="label mb-3">Portfolio</p>
          <h1
            className="font-serif font-medium"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--color-ink)", letterSpacing: "-0.01em" }}
          >
            Works
          </h1>
          <p
            className="font-sans font-light mt-3"
            style={{ fontSize: "0.875rem", color: "var(--color-ink-muted)", maxWidth: "44ch", lineHeight: 1.7 }}
          >
            A collection of concept-driven jewelry spanning metalwork, stone setting, enamel, and textile integration.
          </p>
        </ScrollReveal>
      </header>

      {/* ── FILTERS + SEARCH ───────────────────────────────────────────── */}
      <div
        className="px-6 md:px-14 py-6 flex flex-col md:flex-row gap-4 md:items-center md:justify-between"
        style={{ borderBottom: "1px solid var(--color-border)" }}
      >
        {/* Category filter pills */}
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

        {/* Search */}
        <div style={{ position: "relative" }}>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search pieces..."
            className="form-field"
            aria-label="Search projects"
            style={{ width: "220px", paddingLeft: "0.25rem" }}
          />
        </div>
      </div>

      {/* ── PROJECT GRID ───────────────────────────────────────────────── */}
      <div
        className="px-6 md:px-14 py-10"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {filtered.length === 0 && (
          <div className="col-span-full py-20 text-center">
            <p className="label" style={{ fontSize: "0.7rem" }}>No pieces match your search.</p>
          </div>
        )}

        {filtered.map((project, i) => (
          <ScrollReveal key={project.slug} delay={i * 0.06}>
            <Link href={`/works/${project.slug}`} className="block group">
              <article
                className="project-card overflow-hidden"
                tabIndex={0}
                role="article"
                aria-label={`${project.title} — ${project.category}, ${project.year}`}
              >
                {/* Image area */}
                <div
                  style={{
                    background: project.bg,
                    aspectRatio: "4/5",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Decorative circles */}
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
                        width: "55%",
                        height: "55%",
                        borderRadius: "50%",
                        border: `1px solid ${project.accentColor}28`,
                      }}
                    />
                  </div>
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
                        width: "28%",
                        height: "28%",
                        borderRadius: "50%",
                        background: `${project.accentColor}14`,
                        border: `1px solid ${project.accentColor}44`,
                      }}
                    />
                  </div>

                  {/* Category badge */}
                  <span
                    className="absolute top-4 left-4 label"
                    style={{ fontSize: "0.55rem", color: project.accentColor, background: "rgba(12,11,9,0.75)", padding: "0.2rem 0.6rem" }}
                  >
                    {project.category}
                  </span>

                  {/* Year badge */}
                  <span
                    className="absolute top-4 right-4 label"
                    style={{ fontSize: "0.55rem", color: "var(--color-ink-muted)" }}
                  >
                    {project.year}
                  </span>

                  {/* Hover overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(12,11,9,0.55)",
                      opacity: 0,
                      transition: "opacity 0.35s ease",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    className="group-hover:opacity-100"
                  >
                    <span className="label" style={{ fontSize: "0.6rem", color: "var(--color-gold)", border: "1px solid var(--color-gold)", padding: "0.4rem 1rem" }}>
                      View Project
                    </span>
                  </div>
                </div>

                {/* Card footer */}
                <div className="px-5 py-4" style={{ borderTop: "1px solid var(--color-border)" }}>
                  <p
                    className="font-serif font-medium mb-1"
                    style={{ fontSize: "1rem", color: "var(--color-ink)" }}
                  >
                    {project.title}
                  </p>
                  <p className="label" style={{ fontSize: "0.55rem", color: "var(--color-gold)", marginBottom: "0.35rem" }}>
                    {project.materials.split(",")[0]}
                  </p>
                  <p className="font-sans" style={{ fontSize: "0.75rem", color: "var(--color-ink-muted)", lineHeight: 1.5 }}>
                    {project.tagline}
                  </p>
                </div>
              </article>
            </Link>
          </ScrollReveal>
        ))}
      </div>

      {/* ── FOOTER ─────────────────────────────────────────────────────── */}
      <footer
        style={{
          background: "var(--color-surface)",
          borderTop: "1px solid var(--color-border)",
          padding: "2.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p className="label" style={{ fontSize: "0.55rem", color: "var(--color-ink-muted)" }}>
          {filtered.length} piece{filtered.length !== 1 ? "s" : ""} shown
        </p>
        <Link href="/" className="label transition-colors duration-200" style={{ fontSize: "0.55rem", color: "var(--color-ink-muted)" }}>
          ← Home
        </Link>
      </footer>
    </div>
  );
}
