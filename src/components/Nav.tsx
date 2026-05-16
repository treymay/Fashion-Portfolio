"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const navLinks = [
  { href: "/styling", label: "Styling" },
  { href: "/design", label: "Design" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 glass-dark">
        <div className="flex items-center justify-between px-5 md:px-8 h-[52px]">

          {/* Left: hamburger + nav links */}
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex flex-col gap-[5px] group"
            >
              <span className={`block h-px w-5 bg-ink transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[6px]" : ""}`} />
              <span className={`block h-px w-5 bg-ink transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block h-px w-5 bg-ink transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[6px]" : ""}`} />
            </button>

            <nav className="hidden md:flex items-center gap-7">
              {navLinks.map(({ href, label }) => {
                const isActive = pathname.startsWith(href);
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`nav-link text-[10px] font-semibold tracking-[0.18em] transition-opacity ${
                      isActive ? "text-ink opacity-100" : "text-ink/60 hover:text-ink hover:opacity-100"
                    }`}
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
            className="absolute left-1/2 -translate-x-1/2 nav-link text-[11px] font-bold tracking-[0.25em] text-ink whitespace-nowrap"
            aria-label="Trey May — Home"
          >
            TREY MAY
          </Link>

          {/* Right: contact */}
          <div className="flex items-center">
            <Link
              href="/contact"
              className={`nav-link text-[10px] font-semibold tracking-[0.18em] transition-opacity ${
                pathname === "/contact" ? "text-ink opacity-100" : "text-ink/60 hover:text-ink hover:opacity-100"
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </header>

      {/* Full-screen menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-paper flex flex-col"
            style={{ paddingTop: "52px" }}
          >
            <div className="flex flex-col justify-center flex-1 px-8 gap-2">
              {[{ href: "/", label: "Home" }, ...navLinks, { href: "/contact", label: "Contact" }].map(
                ({ href, label }, i) => {
                  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
                  return (
                    <motion.div
                      key={href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ delay: i * 0.06, duration: 0.3 }}
                    >
                      <Link
                        href={href}
                        onClick={() => setOpen(false)}
                        className={`block font-display text-5xl md:text-7xl font-bold tracking-tight py-2 transition-opacity ${
                          isActive ? "text-ink" : "text-ink/30 hover:text-ink"
                        }`}
                      >
                        {label}
                      </Link>
                    </motion.div>
                  );
                }
              )}
            </div>

            <div className="px-8 pb-10">
              <p className="nav-link text-[10px] text-ink/30">Trey May — Fashion Styling & Design</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
