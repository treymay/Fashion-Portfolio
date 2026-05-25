import type { Metadata } from "next";
import { Manrope, Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { CursorFollower } from "@/components/CursorFollower";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Trey May — Jewelry Design, SCAD",
  description:
    "Jewelry design portfolio by Trey May — BFA student at SCAD Savannah, class of 2029. Narrative-driven, concept-first, always ambitious.",
  icons: { icon: "/logo.png" },
  openGraph: {
    title: "Trey May — Jewelry Design",
    description: "Narrative-driven fine jewelry. SCAD BFA 2029.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${manrope.variable} ${cormorant.variable} ${outfit.variable}`}
    >
      <body className="font-sans" style={{ backgroundColor: "var(--color-bg)", color: "var(--color-ink)" }}>
        <CursorFollower />
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
