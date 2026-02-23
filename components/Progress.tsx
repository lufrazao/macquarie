"use client";

import { Section, SectionTitle, SectionLead } from "./Section";
import { useLanguage } from "../context/LanguageContext";

export function Progress() {
  const { t } = useLanguage();

  return (
    <Section id="pilot">
      <SectionTitle>{t.progress.title}</SectionTitle>
      <SectionLead>
        {t.progress.lead}
      </SectionLead>

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-surface p-8">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
            {t.progress.deployment}
          </p>
          <h3 className="text-xl font-semibold text-foreground mb-4">{t.progress.pilot_title}</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {t.progress.pilot_desc}
          </p>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {t.progress.partners.concessionaires}
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {t.progress.partners.schools}
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {t.progress.partners.funds}
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-8">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
            {t.progress.business}
          </p>
          <h3 className="text-xl font-semibold text-foreground mb-4">{t.progress.saas}</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {t.progress.saas_desc}
          </p>
          <div className="space-y-4">
            <div>
              <span className="block text-sm font-medium text-foreground">Value Driver: OpEx</span>
              <span className="text-sm text-muted-foreground">{t.progress.value_opex}</span>
            </div>
            <div>
              <span className="block text-sm font-medium text-foreground">Value Driver: CapEx</span>
              <span className="text-sm text-muted-foreground">{t.progress.value_capex}</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
