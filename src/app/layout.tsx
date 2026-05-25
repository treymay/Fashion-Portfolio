import type { Metadata } from "next";
import { Manrope, Bodoni_Moda, Outfit } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { CursorFollower } from "@/components/CursorFollower";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bodoni",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elara Fine Jewelry — Graduate Portfolio",
  description:
    "Contemporary fine jewelry portfolio. Graduate-level metalwork, stone setting, and concept-driven design.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Elara Fine Jewelry — Graduate Portfolio",
    description: "Contemporary fine jewelry portfolio.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${bodoni.variable} ${outfit.variable}`}
    >
      <body className="font-sans" style={{ backgroundColor: "var(--color-bg)", color: "var(--color-ink)" }}>
        <CursorFollower />
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
