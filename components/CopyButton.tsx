"use client";

import { useState, useCallback } from "react";

type CopyButtonProps = {
  text: string;
  className?: string;
  label?: string;
};

export function CopyButton({ text, className = "", label = "Copy" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }, [text]);

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`
        inline-flex items-center gap-2 rounded-md border border-zinc-700 bg-zinc-800/80 px-3 py-1.5 text-sm font-medium text-zinc-300
        transition-all duration-200 hover:border-zinc-500 hover:bg-zinc-700 hover:text-white
        focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 focus:ring-offset-zinc-950
        ${className}
      `}
      aria-label={copied ? "Copied" : label}
    >
      {copied ? (
        <>
          <span className="text-[var(--color-accent)]" aria-hidden>✓</span>
          <span className="text-[var(--color-accent)]">Copied</span>
        </>
      ) : (
        <>
          <span aria-hidden>⎘</span>
          <span>{label}</span>
        </>
      )}
    </button>
  );
}
