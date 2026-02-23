"use client";

import { Section, SectionTitle, SectionLead } from "./Section";
import { useLanguage } from "../context/LanguageContext";

export function WhyNow() {
  const { t } = useLanguage();

  return (
    <Section id="why-brazil">
      <SectionTitle>{t.whyNow.title}</SectionTitle>
      <SectionLead>
        <span dangerouslySetInnerHTML={{ __html: t.whyNow.lead }} />
      </SectionLead>
      
      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="text-lg font-semibold text-foreground">{t.whyNow.skill_gap}</h3>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {t.whyNow.skill_desc}
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-foreground">{t.whyNow.climate}</h3>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {t.whyNow.climate_desc}
          </p>
        </div>
      </div>
    </Section>
  );
}
