"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";

const links = [
  { href: "/", label: "Home" },
  { href: "/collections", label: "Collections" },
  { href: "/accessories", label: "Accessories" },
  { href: "/archive", label: "Archive" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <>
      {/* ZENITH-style: nav left | logo center | right: dark mode + contact */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors ${
          isDark
            ? "bg-ink border-white/10"
            : "bg-paper border-ink/10"
        }`}
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
                    className={`nav-link text-xs font-medium tracking-widest transition-opacity ${
                      isActive
                        ? "opacity-100"
                        : "opacity-70 hover:opacity-100"
                    } ${isDark ? "text-white" : "text-ink"}`}
                  >
                    {label}
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
              src={isDark ? "/dark-mode-logo.png" : "/light-mode-logo.png"}
              alt="Trey May"
              width={56}
              height={56}
              className="w-full h-full object-contain"
              priority
            />
          </Link>

          {/* Right: dark mode toggle + contact (desktop) */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <button
              type="button"
              onClick={toggleTheme}
              className="nav-link text-xs font-medium tracking-widest flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              <span>{isDark ? "Dark" : "Light"} mode</span>
              <span
                className={`w-10 h-5 rounded-full border flex items-center transition-colors ${
                  isDark
                    ? "bg-white/20 border-white/30"
                    : "bg-ink/10 border-ink/20"
                }`}
              >
                <span
                  className={`block w-4 h-4 rounded-full bg-current transition-transform ${
                    isDark
                      ? "translate-x-5 bg-white"
                      : "translate-x-0.5 bg-ink"
                  }`}
                />
              </span>
            </button>
            <Link
              href="/contact"
              className={`nav-link text-xs font-medium tracking-widest px-4 py-2 border transition-colors ${
                isDark
                  ? "border-white/30 text-white hover:bg-white/10"
                  : "border-ink text-ink hover:bg-ink/5"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className={`md:hidden nav-link text-xs ${isDark ? "text-white" : "text-ink"}`}
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
            className="fixed inset-0 z-40 md:hidden bg-paper dark:bg-ink flex flex-col justify-center items-center gap-8"
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
                        ? "text-ink dark:text-white font-medium"
                        : "text-ink/70 dark:text-white/70 hover:text-ink dark:hover:text-white"
                    }`}
                  >
                    {label}
                  </Link>
                </motion.div>
              );
            })}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.05 }}
              className="flex flex-col items-center gap-4 mt-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => {
                  toggleTheme();
                  setOpen(false);
                }}
                className="nav-link text-sm text-ink/70 dark:text-white/70 hover:text-ink dark:hover:text-white"
              >
                {isDark ? "Dark" : "Light"} mode
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
