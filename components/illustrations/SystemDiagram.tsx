"use client";

import { useLanguage } from "../../context/LanguageContext";

export function SystemDiagram({ className = "" }: { className?: string }) {
  const { t } = useLanguage();

  return (
    <svg
      className={className}
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="triGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.2" />
        </linearGradient>
        
        <filter id="glow-soft">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* --- CONNECTING LINES (The Cycle) --- */}
      <path 
        d="M 250 140 L 400 320" 
        stroke="#27272a" 
        strokeWidth="2" 
        strokeDasharray="4 4" 
      />
      <path 
        d="M 400 320 L 100 320" 
        stroke="#27272a" 
        strokeWidth="2" 
        strokeDasharray="4 4" 
      />
      <path 
        d="M 100 320 L 250 140" 
        stroke="#27272a" 
        strokeWidth="2" 
        strokeDasharray="4 4" 
      />

      {/* Animated Flow Particles on the lines */}
      <circle r="3" fill="#2dd4bf">
        <animateMotion 
          dur="3s" 
          repeatCount="indefinite"
          path="M 250 140 L 400 320 L 100 320 Z"
        />
      </circle>
      <circle r="3" fill="#14b8a6" opacity="0.6">
        <animateMotion 
          dur="3s" 
          begin="1s"
          repeatCount="indefinite"
          path="M 250 140 L 400 320 L 100 320 Z"
        />
      </circle>

      {/* --- NODE 1: KNOWLEDGE CAPTURE (Top) --- */}
      <g transform="translate(250, 100)">
        <circle cx="0" cy="0" r="40" fill="#18181b" stroke="#2dd4bf" strokeWidth="2" filter="url(#glow-soft)" />
        <circle cx="0" cy="0" r="32" fill="#18181b" stroke="#2dd4bf" strokeWidth="1" opacity="0.5" />
        
        {/* Icon: Funnel/Ingest */}
        <path d="M -15 -15 L 15 -15 L 5 5 L 5 15 L -5 15 L -5 5 Z" stroke="#e2e8f0" strokeWidth="2" fill="none" />
        <line x1="-10" y1="-25" x2="-5" y2="-15" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" />
        <line x1="0" y1="-25" x2="0" y2="-15" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" />
        <line x1="10" y1="-25" x2="5" y2="-15" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" />

        <text x="0" y="60" textAnchor="middle" fill="#e2e8f0" fontSize="14" fontWeight="600">{t.howItWorks.steps[0].label}</text>
      </g>

      {/* --- NODE 2: CONTEXTUAL REASONING (Bottom Right) --- */}
      <g transform="translate(400, 360)">
        <circle cx="0" cy="0" r="40" fill="#18181b" stroke="#2dd4bf" strokeWidth="2" filter="url(#glow-soft)" />
        <circle cx="0" cy="0" r="32" fill="#18181b" stroke="#2dd4bf" strokeWidth="1" opacity="0.5" />
        
        {/* Icon: Network/Brain */}
        <circle cx="0" cy="-10" r="3" fill="#2dd4bf" />
        <circle cx="-10" cy="5" r="3" fill="#2dd4bf" />
        <circle cx="10" cy="5" r="3" fill="#2dd4bf" />
        <line x1="0" y1="-10" x2="-10" y2="5" stroke="#e2e8f0" strokeWidth="1.5" />
        <line x1="0" y1="-10" x2="10" y2="5" stroke="#e2e8f0" strokeWidth="1.5" />
        <line x1="-10" y1="5" x2="10" y2="5" stroke="#e2e8f0" strokeWidth="1.5" />

        <text x="0" y="60" textAnchor="middle" fill="#e2e8f0" fontSize="14" fontWeight="600">{t.howItWorks.steps[1].label}</text>
      </g>

      {/* --- NODE 3: CONTINUOUS LEARNING (Bottom Left) --- */}
      <g transform="translate(100, 360)">
        <circle cx="0" cy="0" r="40" fill="#18181b" stroke="#14b8a6" strokeWidth="2" filter="url(#glow-soft)" />
        <circle cx="0" cy="0" r="32" fill="#18181b" stroke="#14b8a6" strokeWidth="1" opacity="0.5" />
        
        {/* Icon: Growth/Loop */}
        <path d="M -15 10 L -5 0 L 5 10 L 15 -5" stroke="#e2e8f0" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 15 -5 L 10 -5 M 15 -5 L 15 0" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round" />

        <text x="0" y="60" textAnchor="middle" fill="#e2e8f0" fontSize="14" fontWeight="600">{t.howItWorks.steps[2].label}</text>
      </g>

      {/* --- CENTRAL CORE --- */}
      <g transform="translate(250, 260)">
        <circle cx="0" cy="0" r="30" fill="#2dd4bf" fillOpacity="0.1" stroke="#2dd4bf" strokeWidth="1" className="animate-pulse" />
        
        {/* Fluence Logo Icon */}
        <g transform="translate(-15, -15) scale(0.75)">
           <path
            d="M20 4C20 4 10 14 10 22C10 27.5228 14.4772 32 20 32C25.5228 32 30 27.5228 30 22C30 14 20 4 20 4Z"
            fill="#2dd4bf"
          />
          <path
            d="M16 18C16 18 17 16 20 16C23 16 24 18 24 18"
            stroke="#18181b"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.5"
          />
          <path
            d="M15 22C15 22 16.5 20 20 20C23.5 20 25 22 25 22"
            stroke="#18181b"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.6"
          />
        </g>
      </g>
      
    </svg>
  );
}
