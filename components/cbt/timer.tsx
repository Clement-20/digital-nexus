"use client";

import { useState, useEffect, useCallback, memo, useRef } from "react";
import { Clock } from "lucide-react";

interface TimerProps {
  initialMinutes: number;
  onTimeUp: () => void;
}

export const Timer = memo(function Timer({
  initialMinutes,
  onTimeUp,
}: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);
  const hasCalledTimeUp = useRef(false);

  const handleTimeUp = useCallback(() => {
    if (!hasCalledTimeUp.current) {
      hasCalledTimeUp.current = true;
      onTimeUp();
    }
  }, [onTimeUp]);

  useEffect(() => {
    if (timeLeft <= 0) {
      handleTimeUp();
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, handleTimeUp]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const isLowTime = timeLeft <= 300; // 5 minutes
  const isCriticalTime = timeLeft <= 60; // 1 minute

  return (
    <div
      className={`
        flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-lg font-semibold transition-colors
        ${
          isCriticalTime
            ? "bg-destructive/10 text-destructive animate-pulse"
            : isLowTime
            ? "bg-destructive/10 text-destructive"
            : "bg-secondary text-secondary-foreground"
        }
      `}
    >
      <Clock className="h-5 w-5" />
      <span>
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </span>
    </div>
  );
});
