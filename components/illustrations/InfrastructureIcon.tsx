export function InfrastructureIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="pipeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2dd4bf" />
          <stop offset="100%" stopColor="#14b8a6" />
        </linearGradient>
      </defs>

      {/* Base platform */}
      <rect x="40" y="140" width="120" height="8" rx="4" fill="#27272a" />

      {/* Main tower/pump station */}
      <rect x="70" y="80" width="60" height="60" rx="4" fill="url(#pipeGradient)" opacity="0.2" />
      <rect x="70" y="80" width="60" height="60" rx="4" fill="none" stroke="url(#pipeGradient)" strokeWidth="2" />

      {/* Control panel lines */}
      <line x1="85" y1="95" x2="115" y2="95" stroke="#2dd4bf" strokeWidth="2" />
      <line x1="85" y1="105" x2="105" y2="105" stroke="#2dd4bf" strokeWidth="2" />
      <line x1="85" y1="115" x2="110" y2="115" stroke="#2dd4bf" strokeWidth="2" />

      {/* Status indicators */}
      <circle cx="120" cy="95" r="3" fill="#2dd4bf" className="animate-pulse-slow" />
      <circle cx="120" cy="110" r="3" fill="#14b8a6" className="animate-pulse-slow" style={{ animationDelay: "0.5s" }} />
      <circle cx="120" cy="125" r="3" fill="#2dd4bf" className="animate-pulse-slow" style={{ animationDelay: "1s" }} />

      {/* Pipes */}
      <path d="M 100 80 L 100 40 L 140 40" stroke="url(#pipeGradient)" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M 100 140 L 100 170 L 60 170" stroke="url(#pipeGradient)" strokeWidth="4" fill="none" strokeLinecap="round" />

      {/* Water flow animation */}
      <circle cx="100" cy="60" r="2" fill="#2dd4bf" className="animate-pulse" />
      <circle cx="120" cy="40" r="2" fill="#2dd4bf" className="animate-pulse" style={{ animationDelay: "0.3s" }} />
      <circle cx="100" cy="155" r="2" fill="#14b8a6" className="animate-pulse" style={{ animationDelay: "0.6s" }} />
      <circle cx="80" cy="170" r="2" fill="#14b8a6" className="animate-pulse" style={{ animationDelay: "0.9s" }} />

      {/* Floating tech nodes */}
      <g opacity="0.6">
        <circle cx="50" cy="60" r="8" fill="#18181b" stroke="#2dd4bf" strokeWidth="1.5" className="animate-float" />
        <path d="M 47 60 L 50 63 L 53 60" stroke="#2dd4bf" strokeWidth="1" fill="none" />

        <circle cx="150" cy="120" r="8" fill="#18181b" stroke="#14b8a6" strokeWidth="1.5" className="animate-float" style={{ animationDelay: "1s" }} />
        <path d="M 147 120 L 150 123 L 153 120" stroke="#14b8a6" strokeWidth="1" fill="none" />
      </g>
    </svg>
  );
}
