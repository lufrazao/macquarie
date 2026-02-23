export function FlowDiagram({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Animated flow lines showing data/knowledge transfer */}
      <defs>
        <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0" />
          <stop offset="50%" stopColor="#2dd4bf" stopOpacity="1" />
          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
        </linearGradient>

        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Expert node (left) */}
      <g className="animate-pulse-slow">
        <circle cx="60" cy="150" r="40" fill="#27272a" stroke="#2dd4bf" strokeWidth="2" filter="url(#glow)" />
        <path d="M50 145 L60 155 L70 145" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="55" cy="140" r="2" fill="#2dd4bf" />
        <circle cx="65" cy="140" r="2" fill="#2dd4bf" />
      </g>

      {/* Flow lines */}
      <g opacity="0.6">
        <path
          d="M 100 140 Q 200 120, 300 140"
          stroke="url(#flowGradient)"
          strokeWidth="2"
          fill="none"
          className="animate-pulse-slow"
        />
        <path
          d="M 100 150 Q 200 150, 300 150"
          stroke="url(#flowGradient)"
          strokeWidth="2"
          fill="none"
          className="animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        />
        <path
          d="M 100 160 Q 200 180, 300 160"
          stroke="url(#flowGradient)"
          strokeWidth="2"
          fill="none"
          className="animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        />
      </g>

      {/* AI Processing node (center) */}
      <g className="animate-float">
        <rect x="180" y="130" width="40" height="40" rx="8" fill="#18181b" stroke="#2dd4bf" strokeWidth="2" filter="url(#glow)" />
        <circle cx="190" cy="145" r="3" fill="#2dd4bf" className="animate-pulse-slow" />
        <circle cx="200" cy="145" r="3" fill="#2dd4bf" className="animate-pulse-slow" style={{ animationDelay: "0.5s" }} />
        <circle cx="210" cy="145" r="3" fill="#2dd4bf" className="animate-pulse-slow" style={{ animationDelay: "1s" }} />
        <path d="M185 155 L195 160 L205 155 L215 160" stroke="#2dd4bf" strokeWidth="1.5" fill="none" />
      </g>

      {/* Technician node (right) */}
      <g className="animate-pulse-slow" style={{ animationDelay: "1.5s" }}>
        <circle cx="340" cy="150" r="40" fill="#27272a" stroke="#14b8a6" strokeWidth="2" filter="url(#glow)" />
        <path d="M330 145 L340 155 L350 145" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="335" cy="140" r="2" fill="#14b8a6" />
        <circle cx="345" cy="140" r="2" fill="#14b8a6" />
        <path d="M335 160 Q340 165 345 160" stroke="#14b8a6" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>

      {/* Floating particles */}
      <circle cx="150" cy="100" r="2" fill="#2dd4bf" opacity="0.4" className="animate-float" />
      <circle cx="250" cy="200" r="2" fill="#14b8a6" opacity="0.4" className="animate-float" style={{ animationDelay: "1s" }} />
      <circle cx="120" cy="200" r="1.5" fill="#2dd4bf" opacity="0.3" className="animate-float" style={{ animationDelay: "2s" }} />
      <circle cx="280" cy="100" r="1.5" fill="#14b8a6" opacity="0.3" className="animate-float" style={{ animationDelay: "0.5s" }} />
    </svg>
  );
}
