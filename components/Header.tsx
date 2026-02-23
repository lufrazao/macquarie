"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { Logo } from "./Logo";

export function Header() {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <span className="sr-only">Fluence</span>
            <Logo className="h-8 w-8 text-accent" />
            <span className="font-semibold text-foreground">Fluence</span>
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-muted-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex lg:gap-x-12">
          <Link href="#problem" className="text-sm font-semibold leading-6 text-foreground hover:text-accent transition-colors">
            {t.nav.mission}
          </Link>
          <Link href="#solution" className="text-sm font-semibold leading-6 text-foreground hover:text-accent transition-colors">
            {t.nav.platform}
          </Link>
          <Link href="#impact" className="text-sm font-semibold leading-6 text-foreground hover:text-accent transition-colors">
            {t.nav.impact}
          </Link>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4 items-center">
          <Link href="#contact" className="text-sm font-semibold leading-6 text-foreground hover:text-accent transition-colors">
            {t.nav.contact} <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                 <Logo className="h-8 w-8 text-accent" />
                 <span className="font-semibold text-foreground">Fluence</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-muted-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white/10">
                <div className="space-y-2 py-6">
                  <Link
                    href="#problem"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-accent/10"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t.nav.mission}
                  </Link>
                  <Link
                    href="#solution"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-accent/10"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t.nav.platform}
                  </Link>
                  <Link
                    href="#impact"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-accent/10"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t.nav.impact}
                  </Link>
                </div>
                <div className="py-6">
                  <Link
                    href="#contact"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-foreground hover:bg-accent/10"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t.nav.contact}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
