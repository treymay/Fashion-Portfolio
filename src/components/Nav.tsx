"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const navLinks = [
  { href: "/works", label: "Works" },
  { href: "/about", label: "About" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 glass-nav" style={{ height: "var(--nav-h)" }}>
        <div className="flex items-center justify-between px-6 md:px-10 h-full">

          {/* Left: hamburger + links */}
          <div className="flex items-center gap-8">
            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex flex-col gap-[5px] group md:hidden"
            >
              <span className={`block h-px w-5 transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[6px]" : ""}`} style={{ background: "var(--color-gold)" }} />
              <span className={`block h-px w-5 transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} style={{ background: "var(--color-ink)" }} />
              <span className={`block h-px w-5 transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[6px]" : ""}`} style={{ background: "var(--color-gold)" }} />
            </button>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map(({ href, label }) => {
                const isActive = pathname.startsWith(href);
                return (
                  <Link
                    key={href}
                    href={href}
                    className="label transition-colors duration-200"
                    style={{ color: isActive ? "var(--color-gold)" : "var(--color-ink-muted)" }}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Center: wordmark */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 font-serif tracking-[0.22em] text-xs font-medium whitespace-nowrap"
            style={{ color: "var(--color-ink)" }}
            aria-label="Elara — Home"
          >
            ELARA
          </Link>

          {/* Right: contact */}
          <Link
            href="/contact"
            className="label transition-colors duration-200"
            style={{ color: pathname === "/contact" ? "var(--color-gold)" : "var(--color-ink-muted)" }}
          >
            Contact
          </Link>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col"
            style={{ background: "var(--color-bg)", paddingTop: "var(--nav-h)" }}
          >
            <div className="flex flex-col justify-center flex-1 px-8 gap-1">
              {[{ href: "/", label: "Home" }, ...navLinks, { href: "/contact", label: "Contact" }].map(
                ({ href, label }, i) => {
                  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
                  return (
                    <motion.div
                      key={href}
                      initial={{ opacity: 0, x: -24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -12 }}
                      transition={{ delay: i * 0.07, duration: 0.35 }}
                    >
                      <Link
                        href={href}
                        onClick={() => setOpen(false)}
                        className="block font-serif text-5xl md:text-7xl font-medium tracking-tight py-3 transition-colors duration-200"
                        style={{ color: isActive ? "var(--color-gold)" : "var(--color-ink-muted)" }}
                      >
                        {label}
                      </Link>
                    </motion.div>
                  );
                }
              )}
            </div>
            <div className="px-8 pb-10 flex items-center gap-3">
              <span className="gold-line" />
              <p className="label" style={{ color: "var(--color-ink-muted)" }}>Fine Jewelry Portfolio</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
