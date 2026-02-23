import { Section, SectionTitle, SectionLead } from "./Section";
import { FlowDiagram } from "./illustrations/FlowDiagram";
import { MobileSimulation } from "./illustrations/MobileSimulation";

const definition =
  "Fluence is an AI copilot that captures expert knowledge and delivers real-time, contextual guidance to field crews—transforming decades of experience into actionable steps for any technician, regardless of skill level.";

export function Solution() {
  return (
    <Section id="solution">
      <SectionTitle>Your Expert's Brain, In Every Technician's Pocket</SectionTitle>
      <SectionLead>
        Fluence captures expert knowledge and delivers it as real-time guidance—so every technician can solve complex problems like a veteran.
      </SectionLead>

      {/* Visual flow diagram */}
      <div className="mt-12 mb-16">
        <FlowDiagram className="w-full h-auto max-w-3xl mx-auto" />
      </div>

      {/* Scenario with visual mockup */}
      <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
        {/* Phone mockup */}
        <div className="order-2 lg:order-1 flex justify-center">
          <MobileSimulation className="w-full max-w-xs" />
        </div>

        {/* Text content */}
        <div className="order-1 lg:order-2 space-y-6">
          <div className="inline-block rounded-lg bg-accent/10 px-3 py-1">
            <span className="text-xs font-medium text-accent">Real Scenario</span>
          </div>
          <h3 className="text-2xl font-semibold text-foreground">Flooded Pump Station at 3 AM</h3>
          <p className="text-muted-foreground leading-relaxed">
            A junior technician arrives during heavy rain. Multiple error codes, senior engineer 2 hours away.
          </p>

          <div className="space-y-4">
            <div className="flex gap-3 items-start">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-foreground text-sm">Context-aware guidance</p>
                <p className="text-sm text-muted-foreground">Fluence analyzes the error code, conditions, and equipment to deliver the exact protocol needed</p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-foreground text-sm">Safety first</p>
                <p className="text-sm text-muted-foreground">Every step includes safety checks and warnings validated by senior engineers</p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-foreground text-sm">45-minute fix, not 8+ hour outage</p>
                <p className="text-sm text-muted-foreground">Junior tech solves it independently and gains confidence for next time</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What Makes Fluence Different */}
      <div className="mt-20 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-xs font-medium uppercase tracking-wider text-accent">What Makes Fluence Different</span>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-border bg-surface p-6 text-center space-y-3 hover:border-accent/30 transition-all">
            <div className="inline-flex rounded-lg bg-accent/10 p-3">
              <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h4 className="font-semibold text-foreground">Not a static manual</h4>
            <p className="text-sm text-muted-foreground">Adapts to each situation and technician's skill level</p>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-6 text-center space-y-3 hover:border-accent/30 transition-all">
            <div className="inline-flex rounded-lg bg-accent/10 p-3">
              <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 className="font-semibold text-foreground">Not a chatbot</h4>
            <p className="text-sm text-muted-foreground">Structured, verified protocols from your experts</p>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-6 text-center space-y-3 hover:border-accent/30 transition-all">
            <div className="inline-flex rounded-lg bg-accent/10 p-3">
              <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="font-semibold text-foreground">Not a training course</h4>
            <p className="text-sm text-muted-foreground">Embedded in daily work, learning by doing</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
