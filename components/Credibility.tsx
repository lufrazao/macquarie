import { Section } from "./Section";

export function Credibility() {
  return (
    <Section id="team">
      <div className="grid gap-12 lg:grid-cols-5 items-start">
        {/* Main quote */}
        <div className="lg:col-span-3">
          <div className="rounded-2xl border border-border bg-surface p-8 sm:p-10">
            <span className="inline-block rounded-lg bg-accent/10 px-3 py-1 text-xs font-medium text-accent uppercase tracking-wide mb-6">
              Mission
            </span>
            <p className="text-2xl text-foreground leading-relaxed font-serif italic mb-8">
              "We are building Fluence to ensure that the knowledge required to sustain civilization's most critical systems is never lost."
            </p>
            <div className="flex items-start gap-4 pt-6 border-t border-border">
              <div className="h-14 w-14 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 flex items-center justify-center shrink-0">
                <span className="text-lg font-semibold text-accent">L</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Luciana [Last Name]</h3>
                <p className="text-sm text-accent mt-1">Founder & CEO</p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  [Background in infrastructure systems, AI/ML, or operational technology. Include relevant experience with utility operators, technical training, or climate adaptation work.]
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why this matters */}
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h4 className="font-semibold text-foreground mb-3">Why This Problem?</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Infrastructure failures don't make headlines until millions are affected. But the knowledge gap that causes them has been growing for decades—and climate change is accelerating the crisis.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-6">
            <h4 className="font-semibold text-foreground mb-3">Why Now?</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI finally makes it possible to capture and operationalize tacit knowledge at scale. We can preserve decades of experience and make it accessible to anyone, anywhere, instantly.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-6">
            <h4 className="font-semibold text-foreground mb-3">Get Involved</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <svg className="h-4 w-4 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-muted-foreground">Utility operators seeking workforce solutions</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="h-4 w-4 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-muted-foreground">Climate/infrastructure investors</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="h-4 w-4 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-muted-foreground">Technical advisors with domain expertise</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
