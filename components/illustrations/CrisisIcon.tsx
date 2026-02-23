export function CrisisIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="crisisGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f87171" />
          <stop offset="50%" stopColor="#fb923c" />
          <stop offset="100%" stopColor="#fbbf24" />
        </linearGradient>
        <filter id="crisisGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Warning triangle */}
      <g className="animate-pulse-slow">
        <path
          d="M 100 40 L 140 120 L 60 120 Z"
          fill="none"
          stroke="url(#crisisGradient)"
          strokeWidth="3"
          filter="url(#crisisGlow)"
        />
        <path d="M 100 70 L 100 95" stroke="#fb923c" strokeWidth="3" strokeLinecap="round" />
        <circle cx="100" cy="105" r="2.5" fill="#fb923c" />
      </g>

      {/* Clock/urgency indicator */}
      <g opacity="0.8">
        <circle cx="160" cy="60" r="18" fill="#27272a" stroke="#f87171" strokeWidth="2" className="animate-pulse" />
        <path d="M 160 50 L 160 60 L 167 67" stroke="#f87171" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* Broken connection lines */}
      <g opacity="0.6">
        <path d="M 70 140 L 85 155" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" className="animate-pulse-slow" />
        <path d="M 115 155 L 130 140" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" className="animate-pulse-slow" style={{ animationDelay: "0.5s" }} />
        <circle cx="85" cy="155" r="3" fill="#fb923c" className="animate-pulse" />
        <circle cx="115" cy="155" r="3" fill="#f87171" className="animate-pulse" style={{ animationDelay: "0.3s" }} />
      </g>

      {/* Impact waves */}
      <g opacity="0.3">
        <circle cx="100" cy="120" r="30" stroke="#fb923c" strokeWidth="1" fill="none" className="animate-pulse-slow" />
        <circle cx="100" cy="120" r="45" stroke="#f87171" strokeWidth="1" fill="none" className="animate-pulse-slow" style={{ animationDelay: "0.5s" }} />
        <circle cx="100" cy="120" r="60" stroke="#fbbf24" strokeWidth="1" fill="none" className="animate-pulse-slow" style={{ animationDelay: "1s" }} />
      </g>

      {/* Declining graph */}
      <g opacity="0.7">
        <path
          d="M 40 170 L 60 165 L 80 175 L 100 160 L 120 170 L 140 155 L 160 165"
          stroke="url(#crisisGradient)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          className="animate-pulse-slow"
        />
        <circle cx="40" cy="170" r="2" fill="#f87171" />
        <circle cx="160" cy="165" r="2" fill="#fbbf24" />
      </g>
    </svg>
  );
}
