"use client";

import { useState, useEffect, useCallback, useMemo, memo } from "react";
import { Question, getRandomQuestions, courses } from "@/lib/questions";
import { QuestionMap } from "./question-map";
import { Timer } from "./timer";
import { useTheme } from "@/components/theme-provider";
import {
  Moon,
  Sun,
  ChevronLeft,
  ChevronRight,
  Grid3X3,
  X,
  Send,
} from "lucide-react";

interface ExamInterfaceProps {
  courseCode: string;
  onComplete: (
    answers: Record<number, number>,
    questions: Question[],
    courseCode: string
  ) => void;
  onExit: () => void;
}

export function ExamInterface({
  courseCode,
  onComplete,
  onExit,
}: ExamInterfaceProps) {
  const { theme, setTheme } = useTheme();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showMap, setShowMap] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const course = useMemo(
    () => courses.find((c) => c.code === courseCode),
    [courseCode]
  );

  useEffect(() => {
    const selectedQuestions = getRandomQuestions(courseCode, 40);
    setQuestions(selectedQuestions);
  }, [courseCode]);

  const handleAnswer = useCallback((optionIndex: number) => {
    setAnswers((prev) => ({
      ...prev,
      [currentIndex]: optionIndex,
    }));
  }, [currentIndex]);

  const handleTimeUp = useCallback(() => {
    onComplete(answers, questions, courseCode);
  }, [answers, questions, courseCode, onComplete]);

  const handleSubmit = useCallback(() => {
    setIsSubmitting(true);
  }, []);

  const confirmSubmit = useCallback(() => {
    onComplete(answers, questions, courseCode);
  }, [answers, questions, courseCode, onComplete]);

  const goToQuestion = useCallback((index: number) => {
    setCurrentIndex(index);
    setShowMap(false);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => Math.min(questions.length - 1, prev + 1));
  }, [questions.length]);

  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse text-muted-foreground">
          Loading questions...
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];
  const answeredCount = Object.keys(answers).length;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onExit}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/50 hover:bg-destructive hover:text-destructive-foreground hover:border-destructive transition-colors"
              aria-label="Exit exam"
            >
              <X className="h-5 w-5" />
            </button>
            <div>
              <h1 className="text-sm font-semibold tracking-tight">
                {course?.code}
              </h1>
              <p className="text-xs text-muted-foreground hidden sm:block">
                {course?.title}
              </p>
            </div>
          </div>

          <Timer initialMinutes={20} onTimeUp={handleTimeUp} />

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowMap(!showMap)}
              className={`flex h-10 w-10 items-center justify-center rounded-lg border transition-colors ${
                showMap
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-secondary/50 hover:bg-secondary"
              }`}
              aria-label="Toggle question map"
            >
              <Grid3X3 className="h-5 w-5" />
            </button>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/50 hover:bg-secondary transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Question Map Overlay */}
      {showMap && (
        <div className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-2xl mx-auto bg-card border border-border rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold">Question Navigator</h3>
                  <p className="text-sm text-muted-foreground">
                    {answeredCount} of {questions.length} answered
                  </p>
                </div>
                <button
                  onClick={() => setShowMap(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border hover:bg-secondary transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <QuestionMap
                totalQuestions={questions.length}
                currentIndex={currentIndex}
                answeredQuestions={answers}
                onSelect={goToQuestion}
              />
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-6 md:py-8">
        <div className="max-w-2xl mx-auto">
          {/* Progress */}
          <div className="mb-6">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="font-medium">
                Question {currentIndex + 1} of {questions.length}
              </span>
              <span className="text-muted-foreground">
                {answeredCount} answered
              </span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-300"
                style={{
                  width: `${((currentIndex + 1) / questions.length) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Question */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold leading-relaxed mb-6 text-balance">
              {currentQuestion.question}
            </h2>

            {/* Options */}
            <div className="grid gap-3">
              {currentQuestion.options.map((option, index) => {
                const isSelected = answers[currentIndex] === index;
                const optionLabel = String.fromCharCode(65 + index);

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-200 active:scale-[0.99] ${
                      isSelected
                        ? "border-primary bg-primary/10"
                        : "border-border bg-card hover:border-primary/50 hover:bg-accent"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-semibold transition-colors ${
                          isSelected
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground"
                        }`}
                      >
                        {optionLabel}
                      </span>
                      <span className="text-base md:text-lg leading-relaxed pt-1.5">
                        {option}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={goToPrevious}
              disabled={currentIndex === 0}
              className="flex items-center gap-2 h-12 px-6 rounded-lg border border-border bg-secondary/50 hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="hidden sm:inline">Previous</span>
            </button>

            {currentIndex === questions.length - 1 ? (
              <button
                onClick={handleSubmit}
                className="flex items-center gap-2 h-12 px-8 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 font-medium transition-colors"
              >
                <Send className="h-5 w-5" />
                Submit
              </button>
            ) : (
              <button
                onClick={goToNext}
                className="flex items-center gap-2 h-12 px-6 rounded-lg border border-border bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
      </main>

      {/* Submit Confirmation Modal */}
      {isSubmitting && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4">
          <div className="w-full max-w-md bg-card border border-border rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Submit Examination?</h3>
            <p className="text-muted-foreground mb-6">
              You have answered{" "}
              <span className="font-semibold text-foreground">
                {answeredCount}
              </span>{" "}
              out of{" "}
              <span className="font-semibold text-foreground">
                {questions.length}
              </span>{" "}
              questions.
              {answeredCount < questions.length && (
                <span className="block mt-2 text-destructive">
                  Warning: {questions.length - answeredCount} questions are
                  unanswered.
                </span>
              )}
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setIsSubmitting(false)}
                className="flex-1 h-12 rounded-lg border border-border bg-secondary hover:bg-secondary/80 font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmSubmit}
                className="flex-1 h-12 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 font-medium transition-colors"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
