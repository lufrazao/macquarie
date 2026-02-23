import { Section, SectionTitle, SectionLead } from "./Section";

export function Problem() {
  return (
    <Section id="problem">
      <SectionTitle>The Knowledge Transfer Crisis</SectionTitle>
      <SectionLead>
        Brazil needs 700,000 new sanitation workers by 2033 while extreme weather events accelerate infrastructure failures. But critical expertise is trapped in the minds of retiring technicians—and when they leave, decades of hard-won knowledge disappears.
      </SectionLead>

      {/* Visual impact stat */}
      <div className="mt-12 rounded-2xl border border-red-900/20 bg-gradient-to-br from-red-950/20 to-orange-950/10 p-8 sm:p-12">
        <div className="grid gap-8 sm:grid-cols-3 text-center">
          <div className="flex flex-col items-center">
            <div className="text-4xl sm:text-5xl font-bold text-red-400 mb-2">8hrs+</div>
            <div className="text-sm text-muted-foreground">Average restoration time without expert guidance</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl sm:text-5xl font-bold text-orange-400 mb-2">65%</div>
            <div className="text-sm text-muted-foreground">Of senior technicians retiring by 2030</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl sm:text-5xl font-bold text-yellow-400 mb-2">3–5yrs</div>
            <div className="text-sm text-muted-foreground">Traditional training time for complex repairs</div>
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        {/* The Context */}
        <div className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-8 transition-all hover:border-accent/30 hover:shadow-lg">
          <div className="flex items-center gap-3 text-red-400 mb-4">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <h3 className="font-semibold text-foreground">Climate Stress Multiplier</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Unprecedented flooding and extreme weather are causing unfamiliar failure patterns. Equipment breaks in new ways, and field conditions change faster than training manuals can be updated.
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-red-400">•</span>
              Flooded pump stations with contaminated control systems
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-red-400">•</span>
              Pressure surges from sudden weather-driven demand spikes
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-red-400">•</span>
              Infrastructure operating beyond designed tolerances
            </div>
          </div>
        </div>

        {/* The Gap */}
        <div className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-8 transition-all hover:border-accent/30 hover:shadow-lg">
          <div className="flex items-center gap-3 text-orange-400 mb-4">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <h3 className="font-semibold text-foreground">Institutional Memory Loss</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Senior technicians hold decades of unwritten troubleshooting knowledge. When they retire, junior crews face critical repairs alone—increasing safety risks, restoration times, and community impact.
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-orange-400">•</span>
              No documentation of rare but critical failure scenarios
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-orange-400">•</span>
              Junior staff overwhelmed during emergency callouts
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-orange-400">•</span>
              Communities lose water access for days instead of hours
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 rounded-2xl border-l-4 border-accent bg-surface/50 p-8">
        <p className="text-lg text-foreground leading-relaxed">
          <strong className="text-accent">The real crisis:</strong> We're investing billions in physical infrastructure while the human knowledge required to maintain it evaporates. No amount of concrete can compensate for lost expertise.
        </p>
      </div>
    </Section>
  );
}
