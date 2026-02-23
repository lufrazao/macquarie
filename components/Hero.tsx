"use client";

import Link from "next/link";
import { FlowDiagram } from "./illustrations/FlowDiagram";
import { ParticleBackground } from "./ParticleBackground";
import { useLanguage } from "../context/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <header className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      {/* Particle network background */}
      <ParticleBackground />

      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 -z-10 gradient-mesh opacity-50" />
      <div className="absolute inset-0 -z-10 dot-pattern opacity-30" />

      {/* Floating gradient orbs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float -z-10" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float -z-10" style={{ animationDelay: "2s" }} />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="stagger">
            <div className="mb-8 inline-flex items-center rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 text-xs font-medium text-accent backdrop-blur-sm glow-accent">
              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              {t.hero.badge}
            </div>

            <h1 className="text-5xl font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl text-balance leading-[1.1]">
              {t.hero.headline}
              <br />
              <span className="relative inline-block text-accent">
                {t.hero.headline_span}
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 300 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 4 Q150 8 300 4" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3" />
                </svg>
              </span>
            </h1>

            <p className="mt-8 text-xl text-muted-foreground leading-relaxed max-w-2xl text-balance">
              {t.hero.subhead}
            </p>

            {/* Quick value props */}
            <div className="mt-10 space-y-3 max-w-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-foreground">{t.hero.value_props.train}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-foreground">{t.hero.value_props.emergency}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-foreground">{t.hero.value_props.retention}</span>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#solution"
                className="group inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:bg-accent-hover glow-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
              >
                {t.hero.cta_primary}
                <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-surface/50 px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-all hover:border-accent/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-border focus:ring-offset-2 focus:ring-offset-background"
              >
                {t.hero.cta_secondary}
              </Link>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Main illustration */}
              <div className="animate-scale-in flex justify-center">
                <FlowDiagram className="w-full max-w-2xl h-auto drop-shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
