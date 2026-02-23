"use client";

import { useState } from "react";
import { Section, SectionTitle, SectionLead } from "./Section";

const faqs = [
  {
    question: "How is Fluence different from training manuals or digital documentation?",
    answer: "Traditional manuals are static and generic—they can't adapt to specific situations or skill levels. Fluence is an active decision-support system that analyzes real-time field conditions (error codes, photos, equipment history) and delivers personalized, step-by-step guidance based on your experts' actual problem-solving approaches. It's like having your best technician available 24/7, not just a PDF."
  },
  {
    question: "How long does implementation take?",
    answer: "Phase 1 (Knowledge Capture) takes 4-6 weeks working with 2-3 senior technicians to document core procedures. Phase 2 (Field Pilot) begins immediately after with 10-15 crew members. Most operators see measurable results within 60 days. Full deployment across a regional operation typically scales over 3-6 months."
  },
  {
    question: "What if we don't have connectivity in the field?",
    answer: "Fluence is built offline-first. All guidance, protocols, and knowledge bases are stored locally on technician devices and sync when connectivity returns. This is essential for Brazil's infrastructure environments where cellular coverage is unreliable."
  },
  {
    question: "Who owns the knowledge that's captured?",
    answer: "You do. All knowledge captured from your technicians and operations remains your proprietary intellectual property. Fluence provides the platform and AI infrastructure, but your operational knowledge stays within your organization. We never share data between customers."
  },
  {
    question: "How do you ensure the AI provides safe, accurate guidance?",
    answer: "Safety is non-negotiable. All protocols are verified by senior engineers before deployment. The system includes mandatory safety checks, escalation triggers for high-risk situations, and never improvises—it only delivers pre-validated procedures. If Fluence encounters an unfamiliar scenario, it escalates to human experts rather than guessing."
  },
  {
    question: "What's the ROI? How quickly does this pay for itself?",
    answer: "Most operators see 3-5x ROI within the first year through: (1) 40% reduction in restoration times = less overtime and downtime costs, (2) 80% lower training expenses by embedding learning in daily work, and (3) Extended asset lifespan through correct maintenance. For a 100-person crew, typical annual savings exceed $200K."
  },
  {
    question: "Can Fluence integrate with our existing systems (CMMS, ERP, etc.)?",
    answer: "Yes. Fluence connects via API to existing work order management, asset tracking, and maintenance systems. This ensures technicians get contextual guidance without switching between multiple tools. We support standard integrations with systems like SAP, Maximo, and regional Brazilian CMMS platforms."
  },
  {
    question: "What happens when procedures change or new equipment is added?",
    answer: "The knowledge base is continuously updated. Senior technicians can add new procedures, edit existing ones, or flag outdated guidance through a simple interface. Changes are validated and deployed to the field within 24 hours. The system also learns from each repair, identifying gaps in coverage automatically."
  },
  {
    question: "Is this just for water/sanitation, or can it work in other sectors?",
    answer: "We're starting with water and sanitation infrastructure in Brazil because the need is urgent and the impact is immediate. But the core technology—capturing tacit knowledge and delivering contextual operational guidance—applies to any infrastructure sector: power distribution, telecom networks, transportation systems. Once proven in Brazil, we'll expand to other verticals and geographies."
  },
  {
    question: "How do you measure crew competency and skill development?",
    answer: "Fluence tracks every repair each technician completes: what procedures they've mastered, where they needed extra guidance, and which skills they've validated. This creates individual competency profiles that inform targeted training, support career advancement, and help managers assign the right people to the right jobs. It's like a verifiable skills passport."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq">
      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <SectionLead>
        Common questions about deploying Fluence, data security, implementation, and ROI.
      </SectionLead>

      <div className="mt-12 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-2xl border border-border bg-surface overflow-hidden transition-all"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-start justify-between p-6 text-left hover:bg-background/50 transition-colors"
              aria-expanded={openIndex === index}
            >
              <span className="font-semibold text-foreground pr-8 leading-relaxed">
                {faq.question}
              </span>
              <svg
                className={`h-5 w-5 shrink-0 text-accent transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-accent/30 bg-gradient-to-r from-accent/5 to-transparent p-8 text-center">
        <h3 className="text-lg font-semibold text-foreground mb-2">Still have questions?</h3>
        <p className="text-muted-foreground mb-6">
          We're happy to discuss your specific deployment scenario, data security requirements, or integration needs.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:bg-accent-hover hover:shadow-lg"
        >
          Schedule a conversation
        </a>
      </div>
    </Section>
  );
}
