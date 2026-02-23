import { Section, SectionTitle, SectionLead } from "./Section";

const definition =
  "Fluence is an AI copilot that captures expert knowledge and delivers real-time, contextual guidance to field crews—transforming decades of experience into actionable steps for any technician, regardless of skill level.";

export function Solution() {
  return (
    <Section id="solution">
      <SectionTitle>Your Expert's Brain, In Every Technician's Pocket</SectionTitle>
      <SectionLead>
        Fluence is an AI copilot that learns from your best technicians and guides every crew member through complex repairs—delivering expert-level decision-making when and where it's needed most.
      </SectionLead>

      {/* Real scenario example */}
      <div className="mt-12 rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/5 to-transparent p-8 sm:p-10">
        <div className="flex items-start gap-4 mb-6">
          <div className="rounded-lg bg-accent/20 p-2">
            <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground mb-2">Example: Flooded Pump Station</h3>
            <p className="text-muted-foreground leading-relaxed">
              A junior technician arrives at a flooded pump station at 3 AM during heavy rain. The control panel shows multiple error codes, but the senior engineer is 2 hours away.
            </p>
          </div>
        </div>

        <div className="space-y-4 ml-0 sm:ml-14">
          <div className="flex gap-3 items-start">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-semibold text-background">1</span>
            <p className="text-sm text-foreground pt-0.5">
              <strong>Fluence identifies the context:</strong> Flooded control box + power fluctuations + error code E7-312
            </p>
          </div>
          <div className="flex gap-3 items-start">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-semibold text-background">2</span>
            <p className="text-sm text-foreground pt-0.5">
              <strong>Delivers expert protocol:</strong> "Don't restart yet. First, isolate power to Zone B. Check sensor S4 for water ingress—it's behind the access panel on the left."
            </p>
          </div>
          <div className="flex gap-3 items-start">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-semibold text-background">3</span>
            <p className="text-sm text-foreground pt-0.5">
              <strong>Guides the repair:</strong> Step-by-step instructions with safety warnings, photos, and verification checkpoints
            </p>
          </div>
          <div className="flex gap-3 items-start">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-semibold text-background">4</span>
            <p className="text-sm text-foreground pt-0.5">
              <strong>Tracks competency:</strong> Logs completion, validates quality, and identifies if additional training is needed
            </p>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-accent/20">
          <p className="text-sm text-accent font-medium">
            Result: 45-minute repair instead of 8+ hour outage. Zero safety incidents. Junior tech gains confidence for next time.
          </p>
        </div>
      </div>

      <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-foreground">How Fluence Works</h3>
          <ul className="space-y-5">
            {[
              {
                label: "Captures Expert Knowledge",
                desc: "Records how your best technicians diagnose and solve problems—including the unwritten rules and intuition they've developed over decades"
              },
              {
                label: "Understands Context",
                desc: "Analyzes field signals (error codes, symptoms, photos, location) to match the situation with relevant expert protocols"
              },
              {
                label: "Delivers Adaptive Guidance",
                desc: "Provides step-by-step instructions that adjust based on real-time feedback and changing conditions"
              },
              {
                label: "Builds Competency",
                desc: "Tracks what each crew member knows, identifies skill gaps, and creates personalized learning pathways"
              },
            ].map((feature) => (
              <li key={feature.label} className="flex gap-4">
                <div className="mt-1.5 h-2 w-2 rounded-full bg-accent shrink-0" />
                <div>
                  <div className="font-semibold text-foreground mb-1">{feature.label}</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative rounded-2xl border border-border bg-surface p-8 lg:sticky lg:top-8">
          <div className="mb-6">
            <span className="text-xs font-medium uppercase tracking-wider text-accent">What Makes Fluence Different</span>
          </div>
          <p className="text-lg text-foreground leading-relaxed mb-8">
            "{definition}"
          </p>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <svg className="h-5 w-5 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-muted-foreground">Not a static manual—adapts to each situation</span>
            </div>
            <div className="flex items-start gap-2">
              <svg className="h-5 w-5 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-muted-foreground">Not a chatbot—structured, verified protocols</span>
            </div>
            <div className="flex items-start gap-2">
              <svg className="h-5 w-5 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-muted-foreground">Not a training course—embedded in daily work</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
