"use client";

import { useState, useEffect } from "react";

const steps = [
  {
    type: "alert",
    title: "Critical Alert",
    code: "E7-312",
    message: "Pump Station 4: Low Pressure. Water ingress detected in Zone B.",
    action: "Start Diagnosis"
  },
  {
    type: "analysis",
    title: "Fluence Flow",
    message: "Analyzing Context: Heavy Rain + Previous Vibration.",
    detail: "Protocol sourced from Senior Tech A. Silva (ID: 442).",
    result: "Recommended: Protocol #42 - Impeller Clearance."
  },
  {
    type: "step",
    number: 1,
    title: "Isolate Power",
    message: "Turn off main breaker to Zone B before inspection.",
    safety: "High Voltage Risk",
    icon: "power"
  },
  {
    type: "step",
    number: 2,
    title: "Inspect Intake",
    message: "Check intake screen for debris blockage.",
    tool: "Flashlight",
    icon: "search"
  },
  {
    type: "capture",
    title: "Capture Insight",
    message: "Fix verified. Recording operational data for model update.",
    detail: "Voice note added: 'Debris was clay, not plastic.'",
    icon: "mic"
  }
];

export function MobileSimulation({ className = "" }: { className?: string }) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 3500); // Change step every 3.5 seconds

    return () => clearInterval(timer);
  }, []);

  const step = steps[currentStep];

  return (
    <div className={`relative mx-auto w-full max-w-[300px] ${className}`}>
      {/* Phone Frame */}
      <div className="relative rounded-[2.5rem] border-8 border-border bg-background shadow-2xl overflow-hidden ring-1 ring-white/10">
        <div className="aspect-[9/19] bg-surface relative flex flex-col">
          
          {/* Status Bar */}
          <div className="h-8 bg-background/50 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-5 z-10">
            <span className="text-[10px] font-semibold text-foreground">9:41</span>
            <div className="flex gap-1.5">
              <div className="w-1 h-1 rounded-full bg-foreground/50" />
              <div className="w-1 h-1 rounded-full bg-foreground/50" />
              <div className="w-3 h-1 rounded-full bg-foreground/50" />
            </div>
          </div>

          {/* Dynamic Content Area */}
          <div className="flex-1 p-4 flex flex-col relative">
            
            {/* Animated Transition Wrapper */}
            <div className="absolute inset-0 p-4 flex flex-col transition-all duration-500 ease-in-out">
              
              {/* HEADER based on type */}
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`h-2 w-2 rounded-full ${step.type === 'alert' ? 'bg-red-500 animate-pulse' : 'bg-green-500'}`} />
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Fluence Copilot</span>
                </div>
              </div>

              {/* MAIN CARD */}
              <div className={`
                flex-1 rounded-2xl border p-5 flex flex-col justify-center shadow-lg transition-all duration-500
                ${step.type === 'alert' ? 'bg-red-500/10 border-red-500/20' : 
                  step.type === 'capture' ? 'bg-purple-500/10 border-purple-500/20' : 
                  'bg-surface border-accent/20'}
              `}>
                
                {/* Icon/Badge */}
                <div className="mb-4">
                  {step.type === 'alert' && (
                    <span className="inline-flex items-center rounded-md bg-red-500/20 px-2 py-1 text-xs font-medium text-red-400 ring-1 ring-inset ring-red-500/20">
                      {step.code}
                    </span>
                  )}
                  {step.type === 'step' && (
                    <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
                      {step.number}
                    </div>
                  )}
                  {step.type === 'success' && (
                    <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                  {step.type === 'analysis' && (
                    <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center text-accent animate-spin-slow">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  )}
                  {step.type === 'capture' && (
                    <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 animate-pulse">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                      </svg>
                    </div>
                  )}
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.message}
                </p>

                {/* Extra Details */}
                {step.detail && (
                  <div className="mt-2 text-xs text-accent/80 font-medium">
                    {step.detail}
                  </div>
                )}
                {step.safety && (
                  <div className="mt-4 flex items-center gap-2 text-xs text-orange-400 bg-orange-400/10 p-2 rounded-lg">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    Warning: {step.safety}
                  </div>
                )}

                {step.result && (
                  <div className="mt-4 p-2 bg-background/50 rounded-lg text-xs text-foreground">
                    {step.result}
                  </div>
                )}

                {step.stat && (
                  <div className="mt-4 text-xs font-medium text-green-400">
                    Performance: {step.stat}
                  </div>
                )}

              </div>

              {/* Bottom Action Area */}
              <div className="mt-6">
                <div className="h-12 w-full rounded-xl bg-accent text-accent-foreground font-semibold text-sm flex items-center justify-center shadow-lg shadow-accent/20">
                  {step.type === 'alert' ? 'Start Diagnostics' : 
                   step.type === 'capture' ? 'Submit Insight' : 
                   'Confirm & Continue'}
                </div>
              </div>

              {/* Progress Dots */}
              <div className="mt-6 flex justify-center gap-2">
                {steps.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1.5 rounded-full transition-all duration-300 ${i === currentStep ? 'w-4 bg-accent' : 'w-1.5 bg-border'}`}
                  />
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
