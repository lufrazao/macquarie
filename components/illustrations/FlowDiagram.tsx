"use client";

import { useLanguage } from "../../context/LanguageContext";

export function FlowDiagram({ className = "" }: { className?: string }) {
  const { t } = useLanguage();

  return (
    <svg
      className={className}
      viewBox="0 0 800 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="flowLine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#2dd4bf" stopOpacity="1" />
          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.2" />
        </linearGradient>
        
        <filter id="glow-strong">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* --- 1. EXPERT KNOWLEDGE (LEFT) --- */}
      <g transform="translate(100, 250)">
        {/* Base Circle */}
        <circle cx="0" cy="0" r="60" fill="#18181b" stroke="#2dd4bf" strokeWidth="2" strokeDasharray="4 4" opacity="0.5" />
        <circle cx="0" cy="0" r="50" fill="#18181b" stroke="#2dd4bf" strokeWidth="1" />
        
        {/* Icon: Document/Brain */}
        <rect x="-20" y="-25" width="40" height="50" rx="4" stroke="#e2e8f0" strokeWidth="2" fill="#27272a" />
        <line x1="-10" y1="-10" x2="10" y2="-10" stroke="#2dd4bf" strokeWidth="2" />
        <line x1="-10" y1="5" x2="10" y2="5" stroke="#2dd4bf" strokeWidth="2" />
        <line x1="-10" y1="20" x2="0" y2="20" stroke="#2dd4bf" strokeWidth="2" />
        
        {/* Label */}
        <text x="0" y="85" textAnchor="middle" fill="#e2e8f0" fontSize="14" fontWeight="600">{t.hero.diagram.expert}</text>
        <text x="0" y="105" textAnchor="middle" fill="#94a3b8" fontSize="12">{t.hero.diagram.manuals}</text>
      </g>

      {/* --- 2. FLUENCE CORE (CENTER) --- */}
      <g transform="translate(400, 250)">
        {/* Outer Ring */}
        <circle cx="0" cy="0" r="80" fill="#18181b" stroke="#2dd4bf" strokeWidth="1" opacity="0.3" className="animate-spin-slow" />
        <circle cx="0" cy="0" r="70" fill="#18181b" stroke="#2dd4bf" strokeWidth="2" />
        
        {/* Inner Core */}
        <g className="animate-pulse" transform="translate(-20, -20) scale(1)">
           <path
            d="M20 4C20 4 10 14 10 22C10 27.5228 14.4772 32 20 32C25.5228 32 30 27.5228 30 22C30 14 20 4 20 4Z"
            fill="#2dd4bf"
            fillOpacity="0.2"
            stroke="#2dd4bf"
            strokeWidth="2"
          />
          <path
            d="M16 18C16 18 17 16 20 16C23 16 24 18 24 18"
            stroke="#2dd4bf"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.6"
          />
          <path
            d="M15 22C15 22 16.5 20 20 20C23.5 20 25 22 25 22"
            stroke="#2dd4bf"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.8"
          />
        </g>
        
        {/* Brain/Network Nodes */}
        <circle cx="0" cy="-15" r="4" fill="#2dd4bf" filter="url(#glow-strong)" />
        <circle cx="-15" cy="10" r="4" fill="#2dd4bf" filter="url(#glow-strong)" />
        <circle cx="15" cy="10" r="4" fill="#2dd4bf" filter="url(#glow-strong)" />
        <line x1="0" y1="-15" x2="-15" y2="10" stroke="#2dd4bf" strokeWidth="1" opacity="0.6" />
        <line x1="0" y1="-15" x2="15" y2="10" stroke="#2dd4bf" strokeWidth="1" opacity="0.6" />
        <line x1="-15" y1="10" x2="15" y2="10" stroke="#2dd4bf" strokeWidth="1" opacity="0.6" />

        {/* Label */}
        <text x="0" y="110" textAnchor="middle" fill="#2dd4bf" fontSize="16" fontWeight="700" filter="url(#glow-strong)">{t.hero.diagram.ai}</text>
        <text x="0" y="130" textAnchor="middle" fill="#94a3b8" fontSize="12">{t.hero.diagram.reasoning}</text>
      </g>

      {/* --- 3. FIELD CREW (RIGHT) --- */}
      <g transform="translate(700, 250)">
        {/* Base Circle */}
        <circle cx="0" cy="0" r="60" fill="#18181b" stroke="#14b8a6" strokeWidth="2" strokeDasharray="4 4" opacity="0.5" />
        <circle cx="0" cy="0" r="50" fill="#18181b" stroke="#14b8a6" strokeWidth="1" />
        
        {/* Icon: Mobile Device */}
        <rect x="-18" y="-28" width="36" height="56" rx="4" stroke="#e2e8f0" strokeWidth="2" fill="#27272a" />
        <rect x="-10" y="-15" width="20" height="20" rx="1" fill="#14b8a6" fillOpacity="0.8" />
        <line x1="-10" y1="15" x2="10" y2="15" stroke="#14b8a6" strokeWidth="2" />
        
        {/* Label */}
        <text x="0" y="85" textAnchor="middle" fill="#e2e8f0" fontSize="14" fontWeight="600">{t.hero.diagram.crew}</text>
        <text x="0" y="105" textAnchor="middle" fill="#94a3b8" fontSize="12">{t.hero.diagram.guidance}</text>
      </g>

      {/* --- CONNECTIONS --- */}
      
      {/* Flow 1: Expert -> AI */}
      <path d="M160 250 L320 250" stroke="url(#flowLine)" strokeWidth="3" strokeDasharray="8 4" className="animate-dash" />
      <polygon points="315,245 325,250 315,255" fill="#2dd4bf" />

      {/* Flow 2: AI -> Crew */}
      <path d="M480 250 L640 250" stroke="url(#flowLine)" strokeWidth="3" strokeDasharray="8 4" className="animate-dash" />
      <polygon points="635,245 645,250 635,255" fill="#14b8a6" />

      {/* --- FEEDBACK LOOP (Bottom) --- */}
      <path 
        d="M 700 310 Q 700 400 400 400 Q 100 400 100 310" 
        stroke="#2dd4bf" 
        strokeWidth="2" 
        strokeDasharray="6 6" 
        fill="none" 
        opacity="0.4"
      />
      {/* Feedback arrows */}
      <polygon points="400,395 390,400 400,405" fill="#2dd4bf" transform="rotate(180 400 400)" />
      
      <text x="400" y="430" textAnchor="middle" fill="#2dd4bf" fontSize="12" letterSpacing="1" opacity="0.8">{t.hero.diagram.loop_bottom}</text>

      {/* --- FIELD INSIGHTS (Top Loop) --- */}
      <path 
        d="M 700 190 Q 700 100 400 100 Q 100 100 100 190" 
        stroke="#14b8a6" 
        strokeWidth="2" 
        strokeDasharray="6 6" 
        fill="none" 
        opacity="0.4"
      />
      {/* Feedback arrows */}
      <polygon points="410,105 400,100 410,95" fill="#14b8a6" />
      
      <text x="400" y="80" textAnchor="middle" fill="#14b8a6" fontSize="12" letterSpacing="1" opacity="0.8">{t.hero.diagram.loop_top}</text>

      {/* --- ANIMATED PARTICLES --- */}
      <circle cx="200" cy="250" r="3" fill="#2dd4bf">
        <animate attributeName="cx" values="160;320" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      
      <circle cx="500" cy="250" r="3" fill="#14b8a6">
        <animate attributeName="cx" values="480;640" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>

    </svg>
  );
}
