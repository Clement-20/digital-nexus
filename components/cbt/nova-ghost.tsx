"use client";

import { useState, useEffect, useRef, memo } from "react";

export const NovaGhost = memo(function NovaGhost() {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const scheduleNextAppearance = () => {
      // Hide after 2 seconds
      timeoutRef.current = setTimeout(() => {
        setIsVisible(false);

        // Schedule next appearance (5-15 seconds)
        const nextDelay = Math.random() * 10000 + 5000;
        timeoutRef.current = setTimeout(() => {
          setIsVisible(true);
          scheduleNextAppearance();
        }, nextDelay);
      }, 2000);
    };

    // Show immediately with small delay
    setIsVisible(true);
    scheduleNextAppearance();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`
        fixed bottom-20 right-4 z-40 pointer-events-none
        transition-opacity duration-500 will-change-opacity
        ${isVisible ? "opacity-30" : "opacity-0"}
      `}
      role="status"
      aria-live="polite"
      aria-label="Nova ghost watermark"
    >
      <span className="text-xs text-muted-foreground font-mono tracking-wider select-none">
        co-developer: NOVA
      </span>
    </div>
  );
});
