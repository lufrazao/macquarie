import { Section, SectionTitle, SectionLead } from "./Section";

const workforceImpact = [
  {
    title: "Safety First",
    outcome: "Reduces injury rates by providing explicit safety warnings and equipment checks before each step.",
    metric: "60% reduction in field incidents",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    )
  },
  {
    title: "Confidence Building",
    outcome: "Empowers junior technicians to handle complex repairs by breaking them into manageable steps with expert backup.",
    metric: "2x faster skill development",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    )
  },
  {
    title: "Career Growth",
    outcome: "Creates verified competency records that document skills and support professional advancement.",
    metric: "Portable skill credentials",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    )
  },
];

const operatorImpact = [
  {
    title: "Faster Restoration",
    outcome: "Reduces mean time to repair (MTTR) by providing immediate expert guidance during outages.",
    metric: "40% reduction in downtime",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    )
  },
  {
    title: "Knowledge Preservation",
    outcome: "Captures and codifies expert knowledge before retirement—protecting institutional memory.",
    metric: "Immune to turnover",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    )
  },
  {
    title: "Consistent Quality",
    outcome: "Standardizes repair procedures across all crews regardless of experience level or location.",
    metric: "95% first-time fix rate",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    )
  },
  {
    title: "Reduced Training Costs",
    outcome: "Embeds training into daily work—eliminating weeks of classroom time and accelerating onboarding.",
    metric: "80% lower training OpEx",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    )
  },
];

export function UseCases() {
  return (
    <Section id="impact">
      <SectionTitle>Real-World Impact</SectionTitle>
      <SectionLead>
        Fluence creates measurable value for both frontline workers and utility operators—improving safety, speed, and service reliability.
      </SectionLead>

      {/* Key metrics callout */}
      <div className="mt-12 rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 to-transparent p-8">
        <div className="grid gap-6 sm:grid-cols-3 text-center">
          <div>
            <div className="text-3xl font-bold text-accent mb-1">40%</div>
            <div className="text-sm text-muted-foreground">Faster restoration times</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent mb-1">60%</div>
            <div className="text-sm text-muted-foreground">Fewer safety incidents</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent mb-1">95%</div>
            <div className="text-sm text-muted-foreground">First-time fix success rate</div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-2xl font-semibold text-foreground mb-8">For Frontline Crews</h3>
        <div className="grid gap-6 md:grid-cols-3">
          {workforceImpact.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all hover:border-accent/30 hover:shadow-lg"
            >
              <div className="mb-4">
                <div className="inline-flex rounded-lg bg-accent/10 p-2 mb-3">
                  <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {item.icon}
                  </svg>
                </div>
                <h4 className="font-semibold text-foreground text-lg">{item.title}</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {item.outcome}
              </p>
              <div className="rounded-lg bg-accent/5 border border-accent/20 px-3 py-2">
                <p className="text-xs font-medium text-accent">{item.metric}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <h3 className="text-2xl font-semibold text-foreground mb-8">For Utility Operators</h3>
        <div className="grid gap-6 lg:grid-cols-2">
          {operatorImpact.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-8 transition-all hover:border-accent/30 hover:shadow-lg"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="rounded-lg bg-accent/10 p-2.5 shrink-0">
                  <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {item.icon}
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground text-lg mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.outcome}
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border/50">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wide text-muted-foreground">Impact</span>
                  <span className="text-sm font-semibold text-accent">{item.metric}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
