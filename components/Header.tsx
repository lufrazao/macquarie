"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "./Logo";

const navigation = [
  { name: "Who It's For", href: "#who" },
  { name: "Solution", href: "#solution" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Benefits", href: "#impact" },
  { name: "FAQ", href: "#faq" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <Logo className="h-8 w-8" />
              <span className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                Fluence
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
              </Link>
            ))}
            <Link
              href="#contact"
              className="ml-4 inline-flex items-center justify-center rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-all hover:bg-accent-hover hover:shadow-[0_0_20px_-10px_var(--color-accent)]"
            >
              Get in touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-muted-foreground hover:text-foreground hover:bg-surface transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen
              ? "max-h-96 opacity-100 pb-6"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="space-y-1 pt-4 border-t border-border">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-surface rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="block mt-4 px-4 py-3 text-center text-base font-semibold text-accent-foreground bg-accent rounded-lg hover:bg-accent-hover transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get in touch
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
