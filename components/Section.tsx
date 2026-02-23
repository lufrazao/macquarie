import { type ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  as?: "section" | "div";
};

export function Section({
  id,
  children,
  className = "",
  as: Component = "section",
}: SectionProps) {
  return (
    <Component
      id={id}
      className={`mx-auto max-w-5xl px-6 py-20 sm:py-24 lg:px-8 ${className}`}
    >
      {children}
    </Component>
  );
}

export function SectionTitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`text-3xl font-semibold tracking-tight text-foreground sm:text-4xl ${className}`}
    >
      {children}
    </h2>
  );
}

export function SectionLead({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed ${className}`}>
      {children}
    </p>
  );
}
