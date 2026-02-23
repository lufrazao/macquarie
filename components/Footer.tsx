"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { Logo } from "./Logo";

export function Footer() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [useCase, setUseCase] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(() => {
      // Dummy handler
      console.log("Request access:", { email, useCase });
      setSubmitted(true);
      setEmail("");
      setUseCase("");
    });
  };

  return (
    <footer className="border-t border-border bg-surface/50">
      <section
        id="contact"
        className="mx-auto max-w-5xl px-6 py-20 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <div className="max-w-xl">
          <h2 id="contact-heading" className="text-3xl font-semibold tracking-tight text-foreground">
            {t.footer.title}
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {t.footer.desc}
          </p>
          
          {submitted ? (
            <p className="mt-8 rounded-lg border border-accent/20 bg-accent/5 p-4 text-sm text-accent">
              {t.footer.thanks}
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div>
                <label htmlFor="footer-email" className="block text-sm font-medium text-muted-foreground">
                  {t.footer.email_label}
                </label>
                <input
                  id="footer-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder-muted-foreground/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                  placeholder="you@company.com"
                  autoComplete="email"
                  disabled={isPending}
                />
              </div>
              <div>
                <label htmlFor="footer-usecase" className="block text-sm font-medium text-muted-foreground">
                  {t.footer.org_label}
                </label>
                <input
                  id="footer-usecase"
                  type="text"
                  value={useCase}
                  onChange={(e) => setUseCase(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder-muted-foreground/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                  placeholder="e.g. Regional Concessionaire, Technical School..."
                  disabled={isPending}
                />
              </div>
              <button
                type="submit"
                disabled={isPending}
                className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-all hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background disabled:opacity-60"
              >
                {isPending ? t.footer.sending : t.footer.cta}
              </button>
            </form>
          )}
        </div>
      </section>
      
      <div className="border-t border-border bg-background">
        <div className="mx-auto max-w-5xl px-6 py-8 lg:px-8 flex flex-col items-center gap-4">
          <div className="flex items-center gap-3">
            <Logo className="h-8 w-8" />
            <div className="text-center sm:text-left">
              <p className="text-sm font-semibold text-foreground">Fluence</p>
              <p className="text-xs text-muted-foreground">{t.footer.brand_desc}</p>
            </div>
          </div>
          
          <p className="text-xs text-muted-foreground text-center mt-4">
            © 2026 Fluence. {t.footer.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
