"use client";

import { Section, SectionTitle, SectionLead } from "./Section";
import { SystemDiagram } from "./illustrations/SystemDiagram";

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
    <Section id="how-it-works" className="relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 dot-pattern opacity-20" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="text-center mb-16">
        <SectionTitle>The Fluence System</SectionTitle>
        <SectionLead className="mx-auto">
          A closed-loop system that captures expertise, delivers guidance, and continuously improves both crew capability and organizational knowledge.
        </SectionLead>
      </div>

      {/* Central system diagram */}
      <div className="mt-12 mb-16 max-w-2xl mx-auto">
        <SystemDiagram className="w-full h-auto" />
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
    </Section>
  );
}
