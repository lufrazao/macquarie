import { Section, SectionTitle, SectionLead } from "./Section";

export function Progress() {
  return (
    <Section id="pilot">
      <SectionTitle>Deployment & Business Model</SectionTitle>
      <SectionLead>
        Currently deploying with regional sanitation operators in Brazil, with partnerships spanning technical education, infrastructure finance, and operational resilience.
      </SectionLead>

      {/* Deployment timeline */}
      <div className="mt-12 rounded-2xl border border-accent/30 bg-gradient-to-r from-accent/5 to-transparent p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm font-medium text-accent uppercase tracking-wide">Active Deployment</span>
        </div>
        <div className="grid gap-6 sm:grid-cols-3 text-sm">
          <div>
            <div className="font-semibold text-foreground mb-1">Phase 1: Q1 2026</div>
            <div className="text-muted-foreground">Knowledge capture with 3 senior technicians across pump stations and treatment facilities</div>
          </div>
          <div>
            <div className="font-semibold text-foreground mb-1">Phase 2: Q2 2026</div>
            <div className="text-muted-foreground">Field pilot with 15-person crew responding to storm-related outages</div>
          </div>
          <div>
            <div className="font-semibold text-foreground mb-1">Phase 3: Q3 2026</div>
            <div className="text-muted-foreground">Scale to 100+ technicians across multiple regional concessions</div>
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-surface p-8">
          <div className="mb-6">
            <span className="inline-block rounded-lg bg-accent/10 px-3 py-1 text-xs font-medium text-accent uppercase tracking-wide mb-4">
              Pilot Partners
            </span>
            <h3 className="text-xl font-semibold text-foreground">Strategic Ecosystem</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We're building Fluence in partnership with the full infrastructure value chain—from operators to educators to impact investors.
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-background/50 p-4">
              <div className="flex items-start gap-3">
                <svg className="h-5 w-5 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <div>
                  <div className="font-medium text-foreground text-sm">Regional Concessionaires</div>
                  <div className="text-xs text-muted-foreground mt-1">Operational deployment and knowledge capture</div>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-background/50 p-4">
              <div className="flex items-start gap-3">
                <svg className="h-5 w-5 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <div>
                  <div className="font-medium text-foreground text-sm">Technical Schools</div>
                  <div className="text-xs text-muted-foreground mt-1">Competency framework development and certification</div>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-background/50 p-4">
              <div className="flex items-start gap-3">
                <svg className="h-5 w-5 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <div>
                  <div className="font-medium text-foreground text-sm">Climate & Infrastructure Funds</div>
                  <div className="text-xs text-muted-foreground mt-1">Impact measurement and resilience finance alignment</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-8">
          <div className="mb-6">
            <span className="inline-block rounded-lg bg-accent/10 px-3 py-1 text-xs font-medium text-accent uppercase tracking-wide mb-4">
              Revenue Model
            </span>
            <h3 className="text-xl font-semibold text-foreground">Industrial SaaS</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Annual subscription contracts with utility operators, priced by number of technicians and asset criticality. Self-funding through measurable OpEx reduction and CapEx protection.
          </p>

          <div className="space-y-5">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-foreground">Pricing Structure</span>
              </div>
              <div className="rounded-lg bg-background/50 border border-border p-3 text-xs text-muted-foreground">
                $200–400/technician/year, scaled by asset complexity and crew size
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold text-foreground mb-3">Value Capture</div>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <svg className="h-4 w-4 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <span className="font-medium text-foreground">OpEx Reduction:</span>
                    <span className="text-muted-foreground ml-1">Lower overtime, rework, and training costs</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="h-4 w-4 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <span className="font-medium text-foreground">CapEx Protection:</span>
                    <span className="text-muted-foreground ml-1">Extends infrastructure lifespan through correct maintenance</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="h-4 w-4 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div>
                    <span className="font-medium text-foreground">Risk Reduction:</span>
                    <span className="text-muted-foreground ml-1">Fewer safety incidents and regulatory penalties</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <div className="text-xs text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Typical ROI:</strong> 3–5x return within first year from downtime reduction and training cost savings
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expansion roadmap */}
      <div className="mt-16 rounded-2xl border border-border bg-gradient-to-br from-surface to-transparent p-8 sm:p-10">
        <h3 className="text-xl font-semibold text-foreground mb-6">Expansion Path</h3>
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="text-accent font-semibold mb-2">2026–2027</div>
            <div className="text-sm text-muted-foreground leading-relaxed">
              Prove ROI in Brazil water/sanitation. Build core knowledge base covering 80% of common failure modes.
            </div>
          </div>
          <div>
            <div className="text-accent font-semibold mb-2">2028–2029</div>
            <div className="text-sm text-muted-foreground leading-relaxed">
              Expand to other LatAm markets (Mexico, Colombia). Add power distribution and telecom verticals.
            </div>
          </div>
          <div>
            <div className="text-accent font-semibold mb-2">2030+</div>
            <div className="text-sm text-muted-foreground leading-relaxed">
              Platform for operational intelligence across all critical infrastructure in climate-vulnerable regions.
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
