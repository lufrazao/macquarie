"use client";

import { Section, SectionTitle, SectionLead } from "./Section";
import { useLanguage } from "../context/LanguageContext";

export function UseCases() {
  const { t } = useLanguage();

  const workforceImpact = [
    t.impact.list.safety,
    t.impact.list.mobility,
    t.impact.list.support,
  ];

  const operatorImpact = [
    t.impact.list.resilience,
    t.impact.list.retention,
    t.impact.list.efficiency,
  ];

  return (
    <Section id="impact">
      <SectionTitle>{t.impact.title}</SectionTitle>
      <SectionLead>
        <span dangerouslySetInnerHTML={{ __html: t.impact.lead }} />
      </SectionLead>
      
      <div className="mt-16 grid gap-16 md:grid-cols-2">
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-8">{t.impact.workforce}</h3>
          <ul className="grid gap-6" role="list">
            {workforceImpact.map((uc) => (
              <li
                key={uc.title}
                className="group relative flex flex-col justify-between rounded-xl border border-border bg-surface p-6 transition-all hover:border-accent/20"
              >
                <div>
                  <h3 className="font-semibold text-accent">{uc.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{uc.outcome}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-8">{t.impact.operator}</h3>
          <ul className="grid gap-6" role="list">
            {operatorImpact.map((uc) => (
              <li
                key={uc.title}
                className="group relative flex flex-col justify-between rounded-xl border border-border bg-surface p-6 transition-all hover:border-accent/20"
              >
                <div>
                  <h3 className="font-semibold text-accent">{uc.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{uc.outcome}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
