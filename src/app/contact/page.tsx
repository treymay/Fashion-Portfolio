"use client";

import { useState } from "react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

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
          <p className="label mb-3">Get in Touch</p>
          <h1
            className="font-serif font-medium"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--color-ink)", letterSpacing: "-0.01em" }}
          >
            Contact
          </h1>
          <p
            className="font-sans font-light mt-3"
            style={{ fontSize: "0.875rem", color: "var(--color-ink-muted)", maxWidth: "46ch", lineHeight: 1.7 }}
          >
            Available for bespoke commissions, gallery collaborations, editorial projects, and wholesale inquiries.
          </p>
        </ScrollReveal>
      </header>

      {/* ── MAIN GRID ────────────────────────────────────────────────── */}
      <div
        style={{ borderBottom: "1px solid var(--color-border)" }}
        className="grid grid-cols-1 md:grid-cols-2"
      >
        {/* ── LEFT: FORM ─────────────────────────────────────────────── */}
        <div
          style={{ padding: "4rem 2.5rem", borderRight: "1px solid var(--color-border)" }}
          className="md:px-14"
        >
          {sent ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                minHeight: "40vh",
                gap: "1.5rem",
              }}
            >
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  border: "1px solid var(--color-gold)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ color: "var(--color-gold)", fontSize: "1.2rem" }}>✓</span>
              </div>
              <h2 className="font-serif font-medium" style={{ fontSize: "1.8rem", color: "var(--color-ink)" }}>
                Message Sent
              </h2>
              <p className="font-sans font-light" style={{ fontSize: "0.9rem", color: "var(--color-ink-muted)", maxWidth: "36ch", lineHeight: 1.7 }}>
                Thank you for reaching out. I respond to all inquiries within 2–3 business days.
              </p>
              <button
                type="button"
                onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                className="btn-outline"
                style={{ width: "fit-content" }}
              >
                Send Another
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
            >
              <div>
                <label htmlFor="name" className="label" style={{ fontSize: "0.55rem", display: "block", marginBottom: "0.5rem" }}>
                  Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="form-field"
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="email" className="label" style={{ fontSize: "0.55rem", display: "block", marginBottom: "0.5rem" }}>
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="form-field"
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="subject" className="label" style={{ fontSize: "0.55rem", display: "block", marginBottom: "0.5rem" }}>
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="form-field"
                  style={{ cursor: "pointer" }}
                >
                  <option value="" style={{ background: "var(--color-surface)" }}>Select a subject</option>
                  <option value="commission" style={{ background: "var(--color-surface)" }}>Bespoke Commission</option>
                  <option value="gallery" style={{ background: "var(--color-surface)" }}>Gallery / Exhibition</option>
                  <option value="editorial" style={{ background: "var(--color-surface)" }}>Editorial / Press</option>
                  <option value="wholesale" style={{ background: "var(--color-surface)" }}>Wholesale Inquiry</option>
                  <option value="other" style={{ background: "var(--color-surface)" }}>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="label" style={{ fontSize: "0.55rem", display: "block", marginBottom: "0.5rem" }}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or inquiry..."
                  className="form-field"
                  aria-required="true"
                />
              </div>

              <button type="submit" className="btn-gold" style={{ width: "fit-content" }}>
                Send Message <span aria-hidden>→</span>
              </button>
            </form>
          )}
        </div>

        {/* ── RIGHT: INFO ─────────────────────────────────────────────── */}
        <div
          style={{ padding: "4rem 2.5rem" }}
          className="md:px-14"
        >
          <ScrollReveal>
            <div style={{ marginBottom: "3rem" }}>
              <p className="label mb-4" style={{ color: "var(--color-gold)" }}>Direct Contact</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div>
                  <p className="label mb-1" style={{ fontSize: "0.55rem" }}>Email</p>
                  <a
                    href="mailto:studio@elara-jewelry.com"
                    className="font-sans transition-colors"
                    style={{ fontSize: "0.875rem", color: "var(--color-ink)" }}
                  >
                    studio@elara-jewelry.com
                  </a>
                </div>
                <div>
                  <p className="label mb-1" style={{ fontSize: "0.55rem" }}>Studio</p>
                  <p className="font-sans" style={{ fontSize: "0.875rem", color: "var(--color-ink-muted)", lineHeight: 1.5 }}>
                    Atlanta, Georgia<br />
                    Available for in-person consultation by appointment
                  </p>
                </div>
                <div>
                  <p className="label mb-1" style={{ fontSize: "0.55rem" }}>Response Time</p>
                  <p className="font-sans" style={{ fontSize: "0.875rem", color: "var(--color-ink-muted)" }}>
                    2–3 business days
                  </p>
                </div>
              </div>
            </div>

            <div
              style={{ height: 1, background: "var(--color-border)", marginBottom: "3rem" }}
            />

            <div style={{ marginBottom: "3rem" }}>
              <p className="label mb-4" style={{ color: "var(--color-gold)" }}>Social</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { label: "Instagram", handle: "@elara.jewelry" },
                  { label: "LinkedIn", handle: "Elara Fine Jewelry" },
                ].map(({ label, handle }) => (
                  <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <p className="label" style={{ fontSize: "0.55rem" }}>{label}</p>
                    <p className="font-sans" style={{ fontSize: "0.8rem", color: "var(--color-gold)" }}>{handle}</p>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{ height: 1, background: "var(--color-border)", marginBottom: "3rem" }}
            />

            {/* Commission note */}
            <div
              style={{
                padding: "1.5rem",
                border: "1px solid var(--color-border)",
                background: "var(--color-surface)",
              }}
            >
              <p className="label mb-2" style={{ color: "var(--color-gold)", fontSize: "0.55rem" }}>
                Commission Lead Time
              </p>
              <p className="font-sans font-light" style={{ fontSize: "0.8rem", color: "var(--color-ink-muted)", lineHeight: 1.6 }}>
                Bespoke commissions require a minimum 6-week lead time. Rush orders are not available. A 50% deposit is required to begin work.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* ── FOOTER ───────────────────────────────────────────────────── */}
      <footer
        style={{
          background: "var(--color-surface)",
          padding: "2.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
        className="md:px-14"
      >
        <p className="label" style={{ fontSize: "0.55rem", color: "var(--color-ink-muted)" }}>
          Elara — Fine Jewelry Portfolio
        </p>
        <nav className="flex gap-6">
          <Link href="/" className="label transition-colors" style={{ fontSize: "0.55rem", color: "var(--color-ink-muted)" }}>Home</Link>
          <Link href="/works" className="label transition-colors" style={{ fontSize: "0.55rem", color: "var(--color-ink-muted)" }}>Works</Link>
          <Link href="/about" className="label transition-colors" style={{ fontSize: "0.55rem", color: "var(--color-ink-muted)" }}>About</Link>
        </nav>
        <p className="label" style={{ fontSize: "0.55rem", color: "var(--color-ink-faint)" }}>
          © {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
