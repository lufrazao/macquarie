"use client";

import { Section, SectionTitle, SectionLead } from "./Section";
import { SystemDiagram } from "./illustrations/SystemDiagram";
import { useLanguage } from "../context/LanguageContext";

export function HowItWorks() {
  const { t } = useLanguage();

  return (
    <Section id="how-it-works" className="relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 dot-pattern opacity-20" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="text-center mb-16">
        <SectionTitle>{t.howItWorks.title}</SectionTitle>
        <SectionLead className="mx-auto">
          {t.howItWorks.lead}
        </SectionLead>
      </div>

      {/* Central system diagram */}
      <div className="mt-12 mb-16 max-w-2xl mx-auto flex justify-center">
        <SystemDiagram className="w-full h-auto drop-shadow-2xl" />
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {t.howItWorks.steps.map((step, i) => (
          <div
            key={step.label}
            className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-8 transition-all hover:border-accent/30 hover:shadow-lg flex flex-col"
          >
            <div className="flex items-start gap-4 mb-4">
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-lg font-semibold text-accent border border-accent/20"
              >
                {i + 1}
              </span>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground">{step.label}</h3>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4 flex-grow">
              {step.desc}
            </p>
            <div className="rounded-lg bg-background/50 border border-border/50 p-3 mt-auto">
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="text-accent font-medium">Details: </span>
                {step.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
