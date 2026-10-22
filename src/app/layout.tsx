import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Satwik Geddada | Creative Developer",
  description:
    "Portfolio of Satwik Geddada, a Creative Developer building intelligent AI-powered products and modern full-stack web applications.",
  openGraph: {
    title: "Satwik Geddada | Creative Developer",
    description:
      "Building at the intersection of AI and code, turning bold ideas into intelligent products.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Satwik Geddada | Creative Developer",
    description:
      "Building at the intersection of AI and code, turning bold ideas into intelligent products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-background text-foreground antialiased`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
