"use client";

import { Section, SectionTitle, SectionLead } from "./Section";

export function WhoItsFor() {
  return (
    <Section id="who" className="relative">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 grid-pattern opacity-20" />

      <div className="text-center mb-16">
        <SectionTitle>Who is Fluence for?</SectionTitle>
        <SectionLead className="mx-auto">
          Water and sanitation operators who need to train crews faster, handle emergencies better, and preserve critical knowledge.
        </SectionLead>
      </div>

      <div className="grid gap-8 md:grid-cols-3 mb-16">
        {/* Operators */}
        <div className="card-hover rounded-2xl border border-border bg-surface p-8">
          <div className="inline-flex rounded-lg bg-accent/10 p-3 mb-4">
            <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-3">Utility Operators</h3>
          <p className="text-muted-foreground leading-relaxed text-sm">
            Managing pump stations, treatment facilities, and distribution networks. You need crews ready for anything, even when senior staff aren't available.
          </p>
        </div>

        {/* Field Supervisors */}
        <div className="card-hover rounded-2xl border border-border bg-surface p-8">
          <div className="inline-flex rounded-lg bg-accent/10 p-3 mb-4">
            <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-3">Field Supervisors</h3>
          <p className="text-muted-foreground leading-relaxed text-sm">
            Overseeing multiple crews across regions. You can't be everywhere at once, but you want every technician to work like your best.
          </p>
        </div>

        {/* Training Managers */}
        <div className="card-hover rounded-2xl border border-border bg-surface p-8">
          <div className="inline-flex rounded-lg bg-accent/10 p-3 mb-4">
            <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-3">Training Managers</h3>
          <p className="text-muted-foreground leading-relaxed text-sm">
            Responsible for workforce development. Traditional training takes years—you need new hires productive in weeks, not months.
          </p>
        </div>
      </div>

      {/* Use scenarios */}
      <div className="rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/5 to-transparent p-8 sm:p-10">
        <h3 className="text-xl font-semibold text-foreground mb-6">When do teams use Fluence?</h3>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
              <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">During emergencies</h4>
              <p className="text-sm text-muted-foreground">Floods, outages, equipment failures—when every minute counts and crews need immediate guidance.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
              <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">On routine maintenance</h4>
              <p className="text-sm text-muted-foreground">Ensure every repair follows best practices, even for experienced technicians on unfamiliar equipment.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
              <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Training new hires</h4>
              <p className="text-sm text-muted-foreground">Put junior technicians in the field immediately with guided workflows that teach as they work.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
              <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Capturing expertise</h4>
              <p className="text-sm text-muted-foreground">Document how senior staff solve complex problems before they retire or move on.</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
