import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
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
  title: "Fluence | Workforce Resilience for Critical Infrastructure",
  description:
    "AI copilot that trains water and sanitation crews in Brazil to restore infrastructure faster after climate-driven failures.",
  keywords: [
    "workforce resilience",
    "climate adaptation",
    "sanitation infrastructure",
    "brazil water",
    "AI copilot",
    "operational intelligence",
  ],
  authors: [{ name: "Fluence" }],
  openGraph: {
    title: "Fluence | Workforce Resilience",
    description:
      "Operational guidance for crews restoring Brazil’s critical water infrastructure.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fluence | Workforce Resilience",
    description: "Operational guidance for crews restoring Brazil’s critical water infrastructure.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`${inter.variable} font-sans min-h-screen bg-background text-foreground`}>
        <LanguageProvider>
          <LanguageSwitcher />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
