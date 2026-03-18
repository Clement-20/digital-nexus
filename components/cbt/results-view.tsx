"use client";

import { useState, useMemo, useCallback, memo } from "react";
import { Question, courses } from "@/lib/questions";
import { useTheme } from "@/components/theme-provider";
import {
  Moon,
  Sun,
  CheckCircle2,
  XCircle,
  RotateCcw,
  ChevronDown,
  ChevronUp,
  Trophy,
  Target,
} from "lucide-react";

interface ResultsViewProps {
  answers: Record<number, number>;
  questions: Question[];
  courseCode: string;
  onRetake: () => void;
  onHome: () => void;
}

export const ResultsView = memo(function ResultsView({
  answers,
  questions,
  courseCode,
  onRetake,
  onHome,
}: ResultsViewProps) {
  const { theme, setTheme } = useTheme();
  const [showReview, setShowReview] = useState(false);
  const [expandedQuestions, setExpandedQuestions] = useState<Set<number>>(
    new Set()
  );

  const course = useMemo(
    () => courses.find((c) => c.code === courseCode),
    [courseCode]
  );

  // Memoize score calculation
  const { correctAnswers, totalQuestions, percentage, unanswered, grade } =
    useMemo(() => {
      const correct = questions.filter(
        (q, index) => answers[index] === q.correctAnswer
      ).length;
      const total = questions.length;
      const pct = Math.round((correct / total) * 100);
      const unans = total - Object.keys(answers).length;

      let gradeData = {
        label: "Fail",
        color: "text-destructive",
      };
      if (pct >= 70) {
        gradeData = { label: "Excellent", color: "text-green-500" };
      } else if (pct >= 60) {
        gradeData = { label: "Good", color: "text-primary" };
      } else if (pct >= 50) {
        gradeData = { label: "Pass", color: "text-yellow-500" };
      }

      return {
        correctAnswers: correct,
        totalQuestions: total,
        percentage: pct,
        unanswered: unans,
        grade: gradeData,
      };
    }, [answers, questions]);

  const toggleQuestion = useCallback((index: number) => {
    setExpandedQuestions((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
              CBT
            </div>
            <div>
              <h1 className="text-lg font-semibold tracking-tight">Results</h1>
              <p className="text-xs text-muted-foreground">
                {course?.code} • {course?.title}
              </p>
            </div>
          </div>
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
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-2xl mx-auto">
          {/* Score Card */}
          <div className="text-center mb-8 p-8 rounded-2xl border border-border bg-card">
            <div className="flex justify-center mb-4">
              <div
                className={`flex h-20 w-20 items-center justify-center rounded-full ${
                  percentage >= 50 ? "bg-primary/10" : "bg-destructive/10"
                }`}
              >
                {percentage >= 50 ? (
                  <Trophy className="h-10 w-10 text-primary" />
                ) : (
                  <Target className="h-10 w-10 text-destructive" />
                )}
              </div>
            </div>
            <div className="text-6xl md:text-7xl font-bold mb-2">
              {percentage}%
            </div>
            <div className={`text-xl font-semibold mb-4 ${grade.color}`}>
              {grade.label}
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-3 rounded-lg bg-green-500/10">
                <div className="text-2xl font-bold text-green-500">
                  {correctAnswers}
                </div>
                <div className="text-xs text-muted-foreground">Correct</div>
              </div>
              <div className="p-3 rounded-lg bg-destructive/10">
                <div className="text-2xl font-bold text-destructive">
                  {totalQuestions - correctAnswers - unanswered}
                </div>
                <div className="text-xs text-muted-foreground">Wrong</div>
              </div>
              <div className="p-3 rounded-lg bg-muted">
                <div className="text-2xl font-bold text-muted-foreground">
                  {unanswered}
                </div>
                <div className="text-xs text-muted-foreground">Skipped</div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={onHome}
              className="flex-1 h-12 rounded-lg border border-border bg-secondary hover:bg-secondary/80 font-medium transition-colors"
            >
              Back to Courses
            </button>
            <button
              onClick={onRetake}
              className="flex-1 flex items-center justify-center gap-2 h-12 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 font-medium transition-colors"
            >
              <RotateCcw className="h-5 w-5" />
              Retake Test
            </button>
          </div>

          {/* Review Toggle */}
          <button
            onClick={() => setShowReview(!showReview)}
            className="w-full flex items-center justify-between p-4 rounded-lg border border-border bg-card hover:bg-accent transition-colors mb-4"
          >
            <span className="font-medium">Review Answers</span>
            {showReview ? (
              <ChevronUp className="h-5 w-5" />
            ) : (
              <ChevronDown className="h-5 w-5" />
            )}
          </button>

          {/* Review List */}
          {showReview && (
            <div className="space-y-3">
              {questions.map((question, index) => {
                const userAnswer = answers[index];
                const isCorrect = userAnswer === question.correctAnswer;
                const isUnanswered = userAnswer === undefined;
                const isExpanded = expandedQuestions.has(index);

                return (
                  <div
                    key={index}
                    className={`rounded-xl border-2 overflow-hidden transition-colors ${
                      isCorrect
                        ? "border-green-500/50 bg-green-500/5"
                        : isUnanswered
                        ? "border-muted bg-muted/50"
                        : "border-destructive/50 bg-destructive/5"
                    }`}
                  >
                    <button
                      onClick={() => toggleQuestion(index)}
                      className="w-full flex items-center gap-3 p-4 text-left"
                    >
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                          isCorrect
                            ? "bg-green-500 text-white"
                            : isUnanswered
                            ? "bg-muted-foreground text-white"
                            : "bg-destructive text-white"
                        }`}
                      >
                        {isCorrect ? (
                          <CheckCircle2 className="h-5 w-5" />
                        ) : (
                          <XCircle className="h-5 w-5" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-sm text-muted-foreground">
                          Q{index + 1}
                        </span>
                        <p className="font-medium truncate">
                          {question.question}
                        </p>
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="h-5 w-5 shrink-0 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground" />
                      )}
                    </button>

                    {isExpanded && (
                      <div className="px-4 pb-4 pt-0 border-t border-border/50">
                        <p className="text-sm mb-4 mt-3">{question.question}</p>
                        <div className="space-y-2">
                          {question.options.map((option, optIndex) => {
                            const isUserAnswer = userAnswer === optIndex;
                            const isCorrectOption =
                              question.correctAnswer === optIndex;

                            return (
                              <div
                                key={optIndex}
                                className={`flex items-center gap-3 p-3 rounded-lg text-sm ${
                                  isCorrectOption
                                    ? "bg-green-500/20 text-green-700 dark:text-green-400"
                                    : isUserAnswer
                                    ? "bg-destructive/20 text-destructive"
                                    : "bg-muted/50"
                                }`}
                              >
                                <span className="font-medium">
                                  {String.fromCharCode(65 + optIndex)}.
                                </span>
                                <span className="flex-1">{option}</span>
                                {isCorrectOption && (
                                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                                )}
                                {isUserAnswer && !isCorrectOption && (
                                  <XCircle className="h-4 w-4 text-destructive" />
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>
    </div>
  );
});
