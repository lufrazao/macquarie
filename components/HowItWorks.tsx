import { Section, SectionTitle, SectionLead } from "./Section";
import { HowItWorksDiagram } from "./HowItWorksDiagram";

const steps = [
  {
    label: "Knowledge Capture",
    desc: "We work with your senior technicians to document their diagnostic process—capturing not just the steps, but the reasoning behind each decision.",
    detail: "Sources: Field reports, photos, video walkthroughs, repair logs, and direct shadowing"
  },
  {
    label: "Contextual Matching",
    desc: "When a crew encounters a problem, Fluence analyzes the situation (error codes, symptoms, equipment type, weather) and matches it to relevant expert protocols.",
    detail: "Inputs: Error codes, photos, location data, equipment history, environmental conditions"
  },
  {
    label: "Guided Execution",
    desc: "Delivers step-by-step instructions adapted to the technician's skill level, with safety checks, visual aids, and escalation triggers.",
    detail: "Features: Real-time adaptation, photo verification, decision trees, emergency escalation"
  },
  {
    label: "Competency Tracking",
    desc: "Records what each crew member has successfully completed, identifies skill gaps, and recommends targeted training.",
    detail: "Outcomes: Individual skill profiles, team readiness metrics, personalized learning paths"
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works">
      <SectionTitle>The Fluence System</SectionTitle>
      <SectionLead>
        A closed-loop system that captures expertise, delivers guidance, and continuously improves both crew capability and organizational knowledge.
      </SectionLead>

      <div className="mt-12">
        <HowItWorksDiagram steps={steps.map(s => ({ label: s.label, desc: s.desc }))} />
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        {steps.map((step, i) => (
          <div
            key={step.label}
            className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-8 transition-all hover:border-accent/30 hover:shadow-lg"
          >
            <div className="flex items-start gap-4 mb-4">
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-lg font-semibold text-accent border border-accent/20"
              >
                {i + 1}
              </span>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground">{step.label}</h3>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {step.desc}
            </p>
            <div className="rounded-lg bg-background/50 border border-border/50 p-3">
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="text-accent font-medium">Details: </span>
                {step.detail}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Technical differentiators */}
      <div className="mt-16 rounded-2xl border border-border bg-gradient-to-br from-surface to-transparent p-8 sm:p-10">
        <h3 className="text-xl font-semibold text-foreground mb-6">Technical Approach</h3>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium text-foreground">Domain-Specific AI</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Trained specifically on water/sanitation infrastructure—not generic repair manuals
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium text-foreground">Verified Protocols</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              All guidance reviewed by senior engineers—no hallucinations or improvised advice
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium text-foreground">Offline-First</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Works in remote locations without internet connectivity—syncs when connection returns
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium text-foreground">Continuous Improvement</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Every repair adds to the knowledge base—system gets smarter with each use
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
