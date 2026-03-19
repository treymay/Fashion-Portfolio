"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/styling", label: "Styling" },
  { href: "/design", label: "Design" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isContactActive = pathname === "/contact";

  return (
    <>
      {/* ZENITH-style: nav left | logo center | right: contact */}
      <header
        className="fixed top-0 left-0 right-0 z-50 border-b transition-colors bg-paper border-ink/10"
      >
        <div className="flex items-center justify-between px-4 md:px-8 lg:px-12 h-16 md:h-20">
          {/* Left: nav links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {links
              .filter((l) => l.href !== "/contact")
              .map(({ href, label }) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`group relative nav-link text-xs font-bold tracking-widest transition-opacity ${
                      isActive ? "opacity-100" : "opacity-70 hover:opacity-100"
                    } text-ink`}
                  >
                    {label}
                    <span
                      className={`absolute left-0 -bottom-1 h-px bg-ink transition-transform duration-300 origin-left ${
                        isActive
                          ? "w-full scale-x-100"
                          : "w-full scale-x-0 group-hover:scale-x-100"
                      }`}
                      aria-hidden="true"
                    />
                  </Link>
                );
              })}
          </nav>

          {/* Center: logo */}
          <Link
            href="/"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 md:w-14 md:h-14"
            aria-label="Trey May — Home"
          >
            <Image
              src="/light-mode-logo.png"
              alt="Trey May"
              width={56}
              height={56}
              className="w-full h-full object-contain"
              priority
            />
          </Link>

          {/* Right: contact (desktop) */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <Link
              href="/contact"
              className={`group relative nav-link text-xs font-bold tracking-widest transition-opacity ${
                isContactActive ? "opacity-100" : "opacity-70 hover:opacity-100"
              } text-ink`}
            >
              Contact
              <span
                className={`absolute left-0 -bottom-1 h-px bg-ink transition-transform duration-300 origin-left ${
                  isContactActive
                    ? "w-full scale-x-100"
                    : "w-full scale-x-0 group-hover:scale-x-100"
                }`}
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="md:hidden nav-link text-xs text-ink"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      {/* Mobile flyout */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden bg-paper flex flex-col justify-center items-center gap-8"
            onClick={() => setOpen(false)}
          >
            {links.map(({ href, label }, i) => {
              const isActive = pathname === href;
              return (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`font-display text-xl tracking-wide ${
                      isActive
                        ? "text-ink font-bold"
                        : "text-ink/70 hover:text-ink"
                    }`}
                  >
                    {label}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
