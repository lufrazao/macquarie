import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
  title: "Behavior, translated into signals | Behavioral Inference Layer",
  description:
    "Infrastructure that translates human behavior into structured signals software can reason about. Intent, decision style, cognitive load—exposed via API so your product adapts to humans.",
  keywords: [
    "behavioral inference",
    "decision intelligence",
    "personalization",
    "intent signals",
    "ML infrastructure",
    "behavioral API",
  ],
  authors: [{ name: "Behavioral Inference" }],
  openGraph: {
    title: "Behavior, translated into signals",
    description:
      "Infrastructure that translates human behavior into structured signals software can reason about.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Behavior, translated into signals",
    description: "Human behavior → structured signals your software can reason about.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
