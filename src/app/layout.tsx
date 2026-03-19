import type { Metadata } from "next";
import { Manrope, Bodoni_Moda, Outfit } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { CursorFollower } from "@/components/CursorFollower";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
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
  title: "Trey May - Fashion Styling & Design",
  description:
    "Fashion design and photography portfolio. Chic, mature, editorial.",
  icons: {
    icon: "/light-mode-logo.png",
  },
  openGraph: {
    title: "Trey May - Fashion Styling & Design",
    description: "Fashion design and photography portfolio.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${bodoni.variable} ${outfit.variable}`}
    >
      <body className="font-sans min-h-screen bg-paper text-ink">
        <CursorFollower />
        <Nav />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
