"use client";

import { Section, SectionTitle, SectionLead } from "./Section";
import { useLanguage } from "../context/LanguageContext";

export function Problem() {
  const { t } = useLanguage();

  return (
    <Section id="problem">
      <SectionTitle>{t.problem.title}</SectionTitle>
      <SectionLead>
        <span dangerouslySetInnerHTML={{ __html: t.problem.lead }} />
      </SectionLead>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {/* The Context */}
        <div className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-accent/20">
          <div className="flex items-center gap-3 text-red-400 mb-4">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <h3 className="font-semibold text-foreground">{t.problem.context_title}</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            {t.problem.context_desc}
          </p>
          <div className="mt-6 inline-flex rounded bg-background border border-border px-2 py-1 text-xs font-mono text-muted-foreground">
            {t.problem.context_tag}
          </div>
        </div>

        {/* The Gap */}
        <div className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-accent/20">
          <div className="flex items-center gap-3 text-orange-400 mb-4">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <h3 className="font-semibold text-foreground">{t.problem.gap_title}</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            {t.problem.gap_desc}
          </p>
          <div className="mt-6 inline-flex rounded bg-background border border-border px-2 py-1 text-xs font-mono text-muted-foreground">
            {t.problem.gap_tag}
          </div>
        </div>
      </div>
      
      <p className="mt-12 text-center text-lg text-muted-foreground max-w-2xl mx-auto">
        <span dangerouslySetInnerHTML={{ __html: t.problem.footer }} />
      </p>
    </Section>
  );
}
