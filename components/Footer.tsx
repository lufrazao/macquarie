"use client";

import { useState, useTransition } from "react";
import { Logo } from "./Logo";

export function Footer() {
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [interest, setInterest] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link with form data
    const subject = encodeURIComponent(`Fluence Inquiry: ${interest || 'General'}`);
    const body = encodeURIComponent(
      `Email: ${email}\n` +
      `Organization: ${organization || 'Not provided'}\n` +
      `Interest: ${interest || 'Not specified'}\n\n` +
      `Please reach out to discuss Fluence.`
    );

    // Open mailto link
    window.location.href = `mailto:l@lfrazao.com?subject=${subject}&body=${body}`;

    // Show success message
    startTransition(() => {
      setSubmitted(true);
      setTimeout(() => {
        setEmail("");
        setOrganization("");
        setInterest("");
      }, 100);
    });
  };

  return (
    <footer className="border-t border-border bg-surface/50">
      <section
        id="contact"
        className="mx-auto max-w-5xl px-6 py-20 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 id="contact-heading" className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Want to see Fluence in action?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              We'll show you how Fluence captures your experts' knowledge and helps your crews handle complex repairs—even in emergencies.
            </p>

            {/* What you'll get */}
            <div className="mt-8 space-y-3">
              <div className="flex items-start gap-3">
                <svg className="h-5 w-5 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-muted-foreground">See how Fluence works with your specific equipment and procedures</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="h-5 w-5 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-muted-foreground">Understand what it takes to get started with your team</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="h-5 w-5 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-muted-foreground">Get answers to your specific questions about safety, data, and implementation</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            {submitted ? (
              <div className="rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 to-transparent p-8 text-center">
                <div className="inline-flex rounded-full bg-accent/20 p-3 mb-4">
                  <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Thanks for reaching out!</h3>
                <p className="text-sm text-muted-foreground">
                  We'll be in touch within 24 hours to schedule a demo and answer your questions.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-surface p-6 space-y-4">
                <div>
                  <label htmlFor="footer-email" className="block text-sm font-medium text-foreground mb-1.5">
                    Email Address *
                  </label>
                  <input
                    id="footer-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder-muted-foreground/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                    placeholder="you@company.com"
                    autoComplete="email"
                    disabled={isPending}
                  />
                </div>
                <div>
                  <label htmlFor="footer-organization" className="block text-sm font-medium text-foreground mb-1.5">
                    Organization
                  </label>
                  <input
                    id="footer-organization"
                    type="text"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder-muted-foreground/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                    placeholder="Your company or institution"
                    disabled={isPending}
                  />
                </div>
                <div>
                  <label htmlFor="footer-interest" className="block text-sm font-medium text-foreground mb-1.5">
                    I'm interested in...
                  </label>
                  <select
                    id="footer-interest"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                    disabled={isPending}
                  >
                    <option value="">Select an option</option>
                    <option value="demo">Schedule a demo</option>
                    <option value="pilot">Start a pilot with my team</option>
                    <option value="questions">Ask technical questions</option>
                    <option value="other">Something else</option>
                  </select>
                </div>
                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full inline-flex items-center justify-center rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-all hover:bg-accent-hover hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background disabled:opacity-60"
                >
                  {isPending ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Get in touch"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <div className="border-t border-border bg-background">
        <div className="mx-auto max-w-5xl px-6 py-8 lg:px-8">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-3">
              <Logo className="h-8 w-8" />
              <div>
                <p className="text-sm font-semibold text-foreground">Fluence</p>
                <p className="text-xs text-muted-foreground">Helping infrastructure crews solve complex problems faster</p>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-border/50">
            <p className="text-xs text-muted-foreground text-center">
              © 2026 Fluence.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
