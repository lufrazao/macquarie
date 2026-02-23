type LogoProps = {
  className?: string;
};

export function Logo({ className = "h-8 w-8" }: LogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Water droplet with flow lines representing operational intelligence */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2dd4bf" />
          <stop offset="100%" stopColor="#14b8a6" />
        </linearGradient>
      </defs>

      {/* Main water drop shape */}
      <path
        d="M20 4C20 4 10 14 10 22C10 27.5228 14.4772 32 20 32C25.5228 32 30 27.5228 30 22C30 14 20 4 20 4Z"
        fill="url(#logoGradient)"
        className="drop-shadow-lg"
      />

      {/* Flow/signal lines representing intelligence */}
      <path
        d="M16 18C16 18 17 16 20 16C23 16 24 18 24 18"
        stroke="#09090b"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.3"
      />
      <path
        d="M15 22C15 22 16.5 20 20 20C23.5 20 25 22 25 22"
        stroke="#09090b"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
      <circle
        cx="20"
        cy="25"
        r="1.5"
        fill="#09090b"
        opacity="0.4"
      />
    </svg>
  );
}
