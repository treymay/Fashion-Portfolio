"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";

const FORMSPREE_FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-paper pt-[52px] grid grid-cols-1 md:grid-cols-12">

      {/* Left: large text */}
      <div className="md:col-span-5 flex flex-col justify-between px-6 md:px-10 pt-14 pb-10 border-b md:border-b-0 md:border-r border-ink/10">
        <ScrollReveal>
          <p className="nav-link text-[9px] text-ink/40 mb-4">Contact</p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-ink leading-none mb-8">
            Let's<br />Work.
          </h1>
          <p className="font-sans text-ink/50 text-sm leading-relaxed max-w-xs">
            Open to styling commissions, collaboration, professional opportunities, and creative projects.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-12 md:mt-0">
            <p className="nav-link text-[9px] text-ink/30 mb-2">Email direct</p>
            <a
              href="mailto:treymayofficial@gmail.com"
              className="font-sans text-ink/70 hover:text-ink text-sm transition-colors border-b border-ink/10 hover:border-ink pb-0.5"
            >
              treymayofficial@gmail.com
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Right: form */}
      <div className="md:col-span-7 px-6 md:px-12 lg:px-16 py-14 flex flex-col justify-center">
        <ScrollReveal delay={0.15}>
          {sent ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="border border-ink/10 p-10 text-center"
            >
              <p className="font-display text-3xl text-ink mb-2">Thank you.</p>
              <p className="font-sans text-ink/50 text-sm">I'll be in touch soon.</p>
            </motion.div>
          ) : (
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                if (!FORMSPREE_FORM_ID) {
                  setError("Form is not configured. Add NEXT_PUBLIC_FORMSPREE_FORM_ID to your environment.");
                  return;
                }
                setError(null);
                setSending(true);
                const form = e.currentTarget;
                const name = (form.querySelector('[name="name"]') as HTMLInputElement)?.value || "";
                const email = (form.querySelector('[name="email"]') as HTMLInputElement)?.value || "";
                const message = (form.querySelector('[name="message"]') as HTMLTextAreaElement)?.value || "";
                try {
                  const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name, email, message, _replyto: email }),
                  });
                  if (!res.ok) throw new Error("Failed to send");
                  setSent(true);
                } catch {
                  setError("Something went wrong. Please email treymayofficial@gmail.com directly.");
                } finally {
                  setSending(false);
                }
              }}
              className="space-y-8"
            >
              <div>
                <label htmlFor="name" className="block nav-link text-[9px] text-ink/40 mb-3">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-0 py-3 bg-transparent border-b border-ink/15 font-sans text-ink text-sm placeholder:text-ink/25 focus:outline-none focus:border-ink transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block nav-link text-[9px] text-ink/40 mb-3">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-0 py-3 bg-transparent border-b border-ink/15 font-sans text-ink text-sm placeholder:text-ink/25 focus:outline-none focus:border-ink transition-colors"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block nav-link text-[9px] text-ink/40 mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-0 py-3 bg-transparent border-b border-ink/15 font-sans text-ink text-sm placeholder:text-ink/25 focus:outline-none focus:border-ink transition-colors resize-none"
                  placeholder="Tell me what you have in mind."
                />
              </div>

              {error && (
                <p className="font-sans text-xs text-red-400">{error}</p>
              )}

              <motion.button
                type="submit"
                disabled={sending}
                whileHover={!sending ? { opacity: 0.8 } : undefined}
                whileTap={!sending ? { scale: 0.98 } : undefined}
                className="nav-link text-[10px] text-ink border border-ink/20 hover:border-ink px-8 py-4 transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {sending ? "Sending…" : "Send Message →"}
              </motion.button>
            </form>
          )}
        </ScrollReveal>
      </div>
    </div>
  );
}
