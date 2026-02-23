"use client";

import { useState } from "react";
import { Section, SectionTitle, SectionLead } from "./Section";

const faqs = [
  {
    question: "How is Fluence different from training manuals or digital documentation?",
    answer: "Traditional manuals are static and generic—they can't adapt to specific situations or skill levels. Fluence analyzes real-time field conditions (error codes, photos, equipment history) and delivers personalized, step-by-step guidance based on your experts' actual problem-solving approaches. It's like having your best technician available 24/7, not just a PDF."
  },
  {
    question: "How long does it take to get started?",
    answer: "We start by working with 2-3 of your senior technicians for 4-6 weeks to capture core procedures. Then we run a field pilot with 10-15 crew members. Most teams see results within 60 days—faster repairs, fewer callbacks, and more confident technicians."
  },
  {
    question: "What do technicians see on their devices?",
    answer: "When a technician opens a work order, Fluence shows them the exact steps for that repair—with photos, safety warnings, and decision points. As they work, they can log what they're seeing, take photos, and get real-time suggestions. It's designed to work with gloves on, in the field, with simple taps and voice input."
  },
  {
    question: "What if we don't have connectivity in the field?",
    answer: "Fluence works offline. All guidance, protocols, and knowledge bases are stored locally on devices and sync when connectivity returns. This is essential for infrastructure environments where cellular coverage is unreliable."
  },
  {
    question: "Who owns the knowledge that's captured?",
    answer: "You do. All knowledge captured from your technicians remains your intellectual property. Fluence provides the platform and AI infrastructure, but your operational knowledge stays within your organization. We never share data between customers."
  },
  {
    question: "How do you ensure the AI provides safe, accurate guidance?",
    answer: "Safety is non-negotiable. All protocols are verified by senior engineers before deployment. The system includes mandatory safety checks and escalation triggers for high-risk situations. If Fluence encounters an unfamiliar scenario, it escalates to human experts rather than guessing."
  },
  {
    question: "What happens when procedures change or equipment is updated?",
    answer: "Senior technicians can add new procedures, edit existing ones, or flag outdated guidance through a simple interface. Changes are validated by your team and deployed to field devices within 24 hours. The system also learns from each repair, automatically identifying gaps in coverage."
  },
  {
    question: "How does Fluence track what each technician knows?",
    answer: "Every time a technician completes a repair, Fluence logs what procedures they've mastered, where they needed extra guidance, and which skills they've validated. This creates individual competency profiles that help managers assign the right people to the right jobs and identify training needs."
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
        Common questions about how Fluence works, getting started, and keeping your data secure.
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
          We're happy to walk you through how Fluence would work for your team.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:bg-accent-hover hover:shadow-lg"
        >
          Get in touch
        </a>
      </div>
    </Section>
  );
}
