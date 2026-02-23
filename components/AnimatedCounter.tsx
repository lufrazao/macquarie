"use client";

import { useEffect, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type AnimatedCounterProps = {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
};

export function AnimatedCounter({
  end,
  duration = 2000,
  suffix = "",
  prefix = "",
  className = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const { ref, isVisible } = useScrollAnimation(0.3);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
      let startTime: number | null = null;
      const startValue = 0;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function (ease-out cubic)
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentCount = Math.floor(easeOut * (end - startValue) + startValue);

        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isVisible, hasAnimated, end, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
