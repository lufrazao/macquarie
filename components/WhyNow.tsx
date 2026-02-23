import { Section, SectionTitle, SectionLead } from "./Section";

export function WhyNow() {
  return (
    <Section id="why-brazil">
      <SectionTitle>Why Brazil, Why Now</SectionTitle>
      <SectionLead>
        Brazil's 2033 Universal Sanitation Mandate requires 700,000 new workers and billions in infrastructure upgrades—but extreme weather is accelerating failures faster than traditional training can keep pace.
      </SectionLead>

      {/* Urgency callout */}
      <div className="mt-12 rounded-2xl border-l-4 border-orange-500 bg-gradient-to-r from-orange-950/20 to-transparent p-6 sm:p-8">
        <h3 className="text-lg font-semibold text-foreground mb-3">The Perfect Storm</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Brazil is facing a workforce crisis at the exact moment climate events are making infrastructure maintenance more complex and urgent. Without intervention, service disruptions will escalate, affecting millions of people in vulnerable communities.
        </p>
        <div className="flex flex-wrap gap-6 mt-6">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-orange-400" />
            <span className="text-sm text-muted-foreground">2033 Universal Sanitation Deadline</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-red-400" />
            <span className="text-sm text-muted-foreground">Escalating Climate Events</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-yellow-400" />
            <span className="text-sm text-muted-foreground">Mass Retirement Wave</span>
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-3">
        <div className="rounded-2xl border border-border bg-surface p-8">
          <div className="mb-4">
            <div className="inline-flex rounded-lg bg-accent/10 p-2 mb-4">
              <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-foreground">Immediate Need</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Traditional training takes 3-5 years. Fluence enables junior technicians to perform complex repairs within weeks by providing real-time expert guidance.
          </p>
          <div className="text-sm text-accent font-medium">
            → 10x faster workforce scaling
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-8">
          <div className="mb-4">
            <div className="inline-flex rounded-lg bg-accent/10 p-2 mb-4">
              <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-foreground">Climate Resilience</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Every hour without water increases public health risks. Fluence reduces restoration times by 40%, protecting vulnerable communities during extreme weather.
          </p>
          <div className="text-sm text-accent font-medium">
            → Faster response = fewer health impacts
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-8">
          <div className="mb-4">
            <div className="inline-flex rounded-lg bg-accent/10 p-2 mb-4">
              <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-foreground">Economic Impact</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Reducing downtime and repair errors directly impacts operator profitability and CapEx efficiency—making infrastructure investments last longer.
          </p>
          <div className="text-sm text-accent font-medium">
            → Better ROI on infrastructure spend
          </div>
        </div>
      </div>

      {/* Market timing */}
      <div className="mt-16 rounded-2xl border border-border bg-surface p-8 sm:p-10">
        <h3 className="text-xl font-semibold text-foreground mb-6">Market Opportunity</h3>
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h4 className="font-medium text-foreground mb-3">Brazil as Proving Ground</h4>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Brazil's combination of ambitious infrastructure mandates, extreme climate stress, and workforce shortages makes it the ideal market to validate Fluence—but the same dynamics exist globally.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="text-accent">•</span>
                Similar challenges in Mexico, India, Southeast Asia
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">•</span>
                Aging water infrastructure in US and Europe
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">•</span>
                Proven model expands to power, telecom, roads
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-foreground mb-3">Timing Advantage</h4>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              We're at the intersection of three tailwinds: regulatory mandates creating urgency, AI enabling practical solutions, and climate events forcing action now.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <svg className="h-5 w-5 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-muted-foreground">Regulatory pressure ensures budget availability</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="h-5 w-5 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-muted-foreground">Operators understand traditional training won't scale</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="h-5 w-5 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-muted-foreground">First-mover in vertical AI for infrastructure ops</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
