"use client";

import { memo, useCallback } from "react";

interface QuestionMapProps {
  totalQuestions: number;
  currentIndex: number;
  answeredQuestions: Record<number, number>;
  onSelect: (index: number) => void;
}

const QuestionButton = memo(
  function QuestionButton({
    index,
    isAnswered,
    isCurrent,
    onSelect,
  }: {
    index: number;
    isAnswered: boolean;
    isCurrent: boolean;
    onSelect: (index: number) => void;
  }) {
    const handleClick = useCallback(() => onSelect(index), [index, onSelect]);

    return (
      <button
        onClick={handleClick}
        className={`
          aspect-square flex items-center justify-center rounded-lg text-sm font-medium transition-all duration-200
          ${
            isCurrent
              ? "bg-primary text-primary-foreground ring-2 ring-primary ring-offset-2 ring-offset-background"
              : isAnswered
              ? "bg-primary/20 text-primary hover:bg-primary/30"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }
        `}
        aria-label={`Go to question ${index + 1}${isAnswered ? " (answered)" : ""}`}
      >
        {index + 1}
      </button>
    );
  }
);

export const QuestionMap = memo(function QuestionMap({
  totalQuestions,
  currentIndex,
  answeredQuestions,
  onSelect,
}: QuestionMapProps) {
  const handleSelect = useCallback((index: number) => onSelect(index), [onSelect]);

  return (
    <div className="grid grid-cols-8 gap-2">
      {Array.from({ length: totalQuestions }, (_, index) => (
        <QuestionButton
          key={index}
          index={index}
          isAnswered={index in answeredQuestions}
          isCurrent={index === currentIndex}
          onSelect={handleSelect}
        />
      ))}
    </div>
  );
});
