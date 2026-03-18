import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { Nav } from "@/components/Nav";
import { CursorFollower } from "@/components/CursorFollower";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-syne",
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
    <html lang="en" className={`${syne.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(!t&&d))document.documentElement.classList.add('dark');else document.documentElement.classList.remove('dark');})();`,
          }}
        />
      </head>
      <body className="font-sans min-h-screen bg-paper text-ink dark:bg-ink dark:text-paper">
        <ThemeProvider>
          <CursorFollower />
          <Nav />
          <main className="min-h-screen">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
