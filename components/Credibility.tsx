"use client";

import { Section } from "./Section";
import { useLanguage } from "../context/LanguageContext";

export function Credibility() {
  const { t } = useLanguage();

  return (
    <Section id="team">
      <div className="rounded-2xl border border-border bg-surface p-10 max-w-2xl mx-auto text-center">
        <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-6">
          {t.founder.title}
        </p>
        <p className="text-xl text-foreground leading-relaxed font-serif italic mb-8">
          {t.founder.quote}
        </p>
        <div className="flex flex-col items-center">
          <div className="h-16 w-16 rounded-full bg-zinc-800 mb-4 border border-border" />
          <h3 className="text-lg font-semibold text-foreground">Luciana Frazao</h3>
          <p className="text-muted-foreground mt-2 max-w-lg">
            {t.founder.role}
          </p>
        </div>
      </div>
    </Section>
  );
}
