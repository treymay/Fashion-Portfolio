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
    <div className="min-h-screen bg-paper pt-24 md:pt-28 pb-20">
      <div className="px-6 md:px-12 lg:px-20">
        <ScrollReveal>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-ink mt-2">
            Contact
          </h1>
          <p className="font-sans text-ink/70 mt-4 text-lg max-w-xl">
            Interested in collaboration, professional opportunities, or even buying a product? Let me know.
          </p>
          <p className="font-sans text-ink/70 mt-4">
            <a
              href="mailto:treymayofficial@gmail.com"
              className="underline hover:no-underline transition-all"
            >
              treymayofficial@gmail.com
            </a>
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="mt-16 max-w-3xl">
          {sent ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-light rounded-sm p-8 md:p-10 text-center"
            >
              <p className="font-display text-2xl text-ink">Thank you.</p>
              <p className="font-sans text-ink/70 mt-2">
                I&apos;ll get back to you soon.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                if (!FORMSPREE_FORM_ID) {
                  setError("Form is not configured. Add NEXT_PUBLIC_FORMSPREE_FORM_ID to .env.local (get it from formspree.io).");
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
                    body: JSON.stringify({
                      name,
                      email,
                      message,
                      _replyto: email,
                    }),
                  });
                  if (!res.ok) throw new Error("Failed to send");
                  setSent(true);
                } catch {
                  setError("Something went wrong. Please try again or email treymayofficial@gmail.com directly.");
                } finally {
                  setSending(false);
                }
              }}
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block nav-link text-xs text-ink/70 mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-paper border border-ink/10 rounded-sm font-sans text-ink placeholder:text-ink/40 focus:outline-none focus:border-ink transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block nav-link text-xs text-ink/70 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-paper border border-ink/10 rounded-sm font-sans text-ink placeholder:text-ink/40 focus:outline-none focus:border-ink transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block nav-link text-xs text-ink/70 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-paper border border-ink/10 rounded-sm font-sans text-ink placeholder:text-ink/40 focus:outline-none focus:border-ink transition-colors resize-none"
                  placeholder="Tell me what you have in mind."
                />
              </div>
              {error && (
                <p className="font-sans text-sm text-red-600">{error}</p>
              )}
              <motion.button
                type="submit"
                disabled={sending}
                whileHover={!sending ? { scale: 1.02 } : undefined}
                whileTap={!sending ? { scale: 0.98 } : undefined}
                className="w-full md:w-auto px-8 py-4 bg-ink text-paper font-sans text-xs nav-link border border-ink hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {sending ? "Sending…" : "Send"}
              </motion.button>
            </form>
          )}
        </ScrollReveal>

      </div>
    </div>
  );
}
