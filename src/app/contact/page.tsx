"use client";
import Link from "next/link";
import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "Commission", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div style={{ paddingTop: "var(--nav-h)", background: "var(--color-bg)", minHeight: "100vh" }}>

      {/* ── HEADER ────────────────────────────────────────────────────────── */}
      <header style={{ padding: "4rem clamp(1.5rem,5vw,3.5rem) 3rem", borderBottom: "1.5px solid var(--color-border)", background: "var(--color-surface)" }}>
        <ScrollReveal>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <div style={{ width: 20, height: 2, background: "var(--color-orange)" }} />
            <p className="label" style={{ fontSize: "0.6rem", color: "var(--color-orange)" }}>Let's Talk</p>
          </div>
          <h1 className="font-serif font-medium" style={{ fontSize: "clamp(2.5rem,5vw,4rem)", color: "var(--color-ink)", letterSpacing: "-0.01em" }}>
            Contact
          </h1>
          <p className="font-sans font-light" style={{ fontSize: "0.875rem", color: "var(--color-ink-muted)", marginTop: "0.5rem", maxWidth: "42ch" }}>
            Whether it's a commission, a collab, or just saying hey — I'm here for it.
          </p>
        </ScrollReveal>
      </header>

      {/* ── MAIN GRID ─────────────────────────────────────────────────────── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          minHeight: "70vh",
        }}
        className="md:grid-cols-[1fr_1.4fr]"
      >
        {/* Left: contact info */}
        <aside
          style={{
            padding: "4rem clamp(1.5rem,5vw,3.5rem)",
            borderRight: "1.5px solid var(--color-border)",
            borderBottom: "1.5px solid var(--color-border)",
            display: "flex",
            flexDirection: "column",
            gap: "3rem",
            background: "var(--color-surface)",
          }}
        >
          <ScrollReveal>
            {/* Direct */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                <div style={{ width: 16, height: 2, background: "var(--color-pink)" }} />
                <p className="label" style={{ fontSize: "0.6rem", color: "var(--color-pink)" }}>Direct</p>
              </div>
              <a
                href="mailto:treymayofficial@gmail.com"
                className="font-sans block"
                style={{ fontSize: "0.9rem", color: "var(--color-ink)", textDecoration: "none", marginBottom: "0.5rem", transition: "color 0.2s" }}
                onMouseOver={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--color-orange)"; }}
                onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--color-ink)"; }}
              >
                treymayofficial@gmail.com
              </a>
            </div>

            {/* Instagram */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                <div style={{ width: 16, height: 2, background: "var(--color-green)" }} />
                <p className="label" style={{ fontSize: "0.6rem", color: "var(--color-green)" }}>Instagram</p>
              </div>
              <a
                href="https://instagram.com/treymayjewelry"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans block"
                style={{ fontSize: "0.9rem", color: "var(--color-ink)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseOver={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--color-pink)"; }}
                onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--color-ink)"; }}
              >
                @treymayjewelry
              </a>
            </div>

            {/* Studio */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                <div style={{ width: 16, height: 2, background: "var(--color-yellow)" }} />
                <p className="label" style={{ fontSize: "0.6rem", color: "var(--color-ink-muted)" }}>Studio Location</p>
              </div>
              <p className="font-sans" style={{ fontSize: "0.9rem", color: "var(--color-ink)" }}>Savannah, GA</p>
              <p className="font-sans font-light" style={{ fontSize: "0.75rem", color: "var(--color-ink-muted)", marginTop: "0.25rem" }}>SCAD Savannah Campus</p>
            </div>

            {/* Response */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                <div style={{ width: 16, height: 2, background: "var(--color-orange)" }} />
                <p className="label" style={{ fontSize: "0.6rem", color: "var(--color-orange)" }}>Response Time</p>
              </div>
              <p className="font-sans font-light" style={{ fontSize: "0.85rem", color: "var(--color-ink-muted)", lineHeight: 1.65 }}>
                Usually back within 24–48 hours.
                Commission inquiries: allow 3–5 days for an initial estimate.
              </p>
            </div>
          </ScrollReveal>
        </aside>

        {/* Right: form */}
        <div style={{ padding: "4rem clamp(1.5rem,5vw,3.5rem)" }}>
          <ScrollReveal>
            {sent ? (
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", gap: "1rem" }}>
                <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.5rem" }}>
                  {["var(--color-orange)", "var(--color-pink)", "var(--color-green)", "var(--color-yellow)"].map((c, i) => (
                    <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: c }} />
                  ))}
                </div>
                <h2 className="font-serif font-medium" style={{ fontSize: "clamp(1.8rem,3vw,2.4rem)", color: "var(--color-ink)", letterSpacing: "-0.01em" }}>
                  Message sent!
                </h2>
                <p className="font-sans font-light" style={{ fontSize: "0.9rem", color: "var(--color-ink-muted)", lineHeight: 1.7 }}>
                  Thanks for reaching out. I'll get back to you soon — usually within a day or two.
                </p>
                <button
                  type="button"
                  onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "Commission", message: "" }); }}
                  className="btn-outline"
                  style={{ alignSelf: "flex-start", marginTop: "0.5rem" }}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "2.25rem" }}>
                <h2 className="font-serif font-medium" style={{ fontSize: "clamp(1.4rem,2.5vw,2rem)", color: "var(--color-ink)", letterSpacing: "-0.01em" }}>
                  Send a Message
                </h2>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }} className="sm:grid-cols-2 grid-cols-1">
                  <label style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                    <span className="label" style={{ fontSize: "0.55rem" }}>Your Name</span>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      className="form-field"
                      placeholder="First Last"
                      autoComplete="name"
                    />
                  </label>
                  <label style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                    <span className="label" style={{ fontSize: "0.55rem" }}>Email</span>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      className="form-field"
                      placeholder="you@example.com"
                      autoComplete="email"
                    />
                  </label>
                </div>

                <label style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                  <span className="label" style={{ fontSize: "0.55rem" }}>Subject</span>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                    className="form-field"
                    style={{ cursor: "pointer" }}
                  >
                    <option>Commission</option>
                    <option>Collaboration</option>
                    <option>Press & Media</option>
                    <option>Just Saying Hey</option>
                    <option>Other</option>
                  </select>
                </label>

                <label style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                  <span className="label" style={{ fontSize: "0.55rem" }}>Message</span>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="form-field"
                    placeholder="Tell me about your idea, your story, what you're looking for..."
                  />
                </label>

                <div style={{ display: "flex", gap: "0.875rem", alignItems: "center", flexWrap: "wrap" }}>
                  <button type="submit" className="btn-orange">Send Message <span aria-hidden>→</span></button>
                  <p className="label" style={{ fontSize: "0.5rem" }}>No spam. Just good conversation.</p>
                </div>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <footer style={{ background: "var(--color-ink)", padding: "2rem clamp(1.5rem,5vw,2.5rem)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <p className="label" style={{ fontSize: "0.55rem", color: "rgba(253,252,249,0.4)" }}>treymayofficial@gmail.com &nbsp;·&nbsp; @treymayjewelry</p>
        <Link href="/" className="label" style={{ fontSize: "0.55rem", color: "rgba(253,252,249,0.4)" }}>← Home</Link>
      </footer>
    </div>
  );
}
