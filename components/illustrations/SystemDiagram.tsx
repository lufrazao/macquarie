export function SystemDiagram({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="systemGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2dd4bf" />
          <stop offset="100%" stopColor="#14b8a6" />
        </linearGradient>
        <filter id="systemGlow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Central AI core */}
      <g className="animate-pulse-slow">
        <circle cx="200" cy="200" r="40" fill="#18181b" stroke="url(#systemGradient)" strokeWidth="3" filter="url(#systemGlow)" />
        <circle cx="200" cy="200" r="28" fill="none" stroke="#2dd4bf" strokeWidth="1" opacity="0.3" className="animate-pulse" />
        <circle cx="200" cy="200" r="20" fill="none" stroke="#2dd4bf" strokeWidth="1" opacity="0.5" className="animate-pulse" style={{ animationDelay: "0.5s" }} />

        {/* Core symbol */}
        <circle cx="195" cy="195" r="3" fill="#2dd4bf" />
        <circle cx="205" cy="195" r="3" fill="#2dd4bf" />
        <circle cx="195" cy="205" r="3" fill="#2dd4bf" />
        <circle cx="205" cy="205" r="3" fill="#2dd4bf" />
        <circle cx="200" cy="200" r="3" fill="#14b8a6" className="animate-pulse" />
      </g>

      {/* Orbital nodes - Knowledge Capture */}
      <g className="animate-float">
        <circle cx="120" cy="120" r="25" fill="#27272a" stroke="#2dd4bf" strokeWidth="2" filter="url(#systemGlow)" />
        <path d="M 115 115 L 120 122 L 125 115" stroke="#2dd4bf" strokeWidth="2" fill="none" strokeLinecap="round" />
        <text x="120" y="165" fontSize="10" fill="#a1a1aa" textAnchor="middle" fontWeight="500">Capture</text>
      </g>

      {/* Orbital nodes - Contextual Matching */}
      <g className="animate-float" style={{ animationDelay: "1s" }}>
        <circle cx="280" cy="120" r="25" fill="#27272a" stroke="#2dd4bf" strokeWidth="2" filter="url(#systemGlow)" />
        <rect x="270" y="112" width="7" height="7" fill="none" stroke="#2dd4bf" strokeWidth="1.5" />
        <rect x="278" y="112" width="7" height="7" fill="none" stroke="#2dd4bf" strokeWidth="1.5" />
        <rect x="270" y="120" width="7" height="7" fill="none" stroke="#2dd4bf" strokeWidth="1.5" />
        <rect x="278" y="120" width="7" height="7" fill="#2dd4bf" />
        <text x="280" y="165" fontSize="10" fill="#a1a1aa" textAnchor="middle" fontWeight="500">Match</text>
      </g>

      {/* Orbital nodes - Guided Execution */}
      <g className="animate-float" style={{ animationDelay: "2s" }}>
        <circle cx="280" cy="280" r="25" fill="#27272a" stroke="#14b8a6" strokeWidth="2" filter="url(#systemGlow)" />
        <path d="M 275 275 L 280 280 L 285 275 M 275 282 L 280 287 L 285 282" stroke="#14b8a6" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <text x="280" y="320" fontSize="10" fill="#a1a1aa" textAnchor="middle" fontWeight="500">Execute</text>
      </g>

      {/* Orbital nodes - Competency Tracking */}
      <g className="animate-float" style={{ animationDelay: "3s" }}>
        <circle cx="120" cy="280" r="25" fill="#27272a" stroke="#14b8a6" strokeWidth="2" filter="url(#systemGlow)" />
        <path d="M 112 280 Q 120 275 128 280" stroke="#14b8a6" strokeWidth="2" fill="none" />
        <circle cx="116" cy="282" r="1.5" fill="#14b8a6" />
        <circle cx="120" cy="281" r="1.5" fill="#14b8a6" />
        <circle cx="124" cy="282" r="1.5" fill="#14b8a6" />
        <text x="120" y="320" fontSize="10" fill="#a1a1aa" textAnchor="middle" fontWeight="500">Track</text>
      </g>

      {/* Connection lines with flow animation */}
      <g opacity="0.4">
        <path d="M 145 138 L 175 180" stroke="url(#systemGradient)" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse-slow" />
        <path d="M 255 138 L 225 180" stroke="url(#systemGradient)" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse-slow" style={{ animationDelay: "0.5s" }} />
        <path d="M 255 262 L 225 220" stroke="url(#systemGradient)" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse-slow" style={{ animationDelay: "1s" }} />
        <path d="M 145 262 L 175 220" stroke="url(#systemGradient)" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
      </g>

      {/* Data flow particles */}
      <circle cx="160" cy="159" r="2" fill="#2dd4bf" className="animate-pulse" />
      <circle cx="240" cy="159" r="2" fill="#2dd4bf" className="animate-pulse" style={{ animationDelay: "0.3s" }} />
      <circle cx="240" cy="241" r="2" fill="#14b8a6" className="animate-pulse" style={{ animationDelay: "0.6s" }} />
      <circle cx="160" cy="241" r="2" fill="#14b8a6" className="animate-pulse" style={{ animationDelay: "0.9s" }} />

      {/* Outer ring */}
      <circle cx="200" cy="200" r="150" stroke="#27272a" strokeWidth="1" fill="none" opacity="0.3" />
    </svg>
  );
}
