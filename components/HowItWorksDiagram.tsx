"use client";

type Step = { label: string; desc: string };

export function HowItWorksDiagram({ steps }: { steps: Step[] }) {
  return (
    <div
      className="relative rounded-2xl border border-border bg-surface p-10 overflow-hidden"
      role="img"
      aria-label="Process Flow"
    >
      <div className="absolute top-1/2 left-10 right-10 h-px -translate-y-1/2 bg-border hidden md:block" />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8">
        {steps.map((step, i) => (
          <div key={step.label} className="group relative flex flex-col items-center text-center">
            
            <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-background shadow-sm transition-all group-hover:-translate-y-1 group-hover:border-accent group-hover:shadow-[0_4px_20px_-10px_var(--color-accent)]">
              <span className="text-lg font-bold text-muted-foreground transition-colors group-hover:text-accent">
                {i + 1}
              </span>
              
              {i < steps.length - 1 && (
                 <div className="absolute -bottom-12 left-1/2 h-8 w-px -translate-x-1/2 bg-border md:hidden" />
              )}
            </div>

            <h3 className="mb-2 text-sm font-semibold text-foreground">
              {step.label}
            </h3>
            
            <p className="max-w-[200px] text-xs text-muted-foreground transition-colors group-hover:text-foreground">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
