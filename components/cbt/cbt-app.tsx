"use client";

import { useState, useCallback } from "react";
import { Question } from "@/lib/questions";
import { CourseSelection } from "./course-selection";
import { ExamInterface } from "./exam-interface";
import { ResultsView } from "./results-view";
import { Footer } from "./footer";
import { NovaGhost } from "./nova-ghost";

type AppState = "selection" | "exam" | "results";

interface ExamResults {
  answers: Record<number, number>;
  questions: Question[];
  courseCode: string;
}

export function CBTApp() {
  const [appState, setAppState] = useState<AppState>("selection");
  const [selectedCourse, setSelectedCourse] = useState<string>("");
  const [examResults, setExamResults] = useState<ExamResults | null>(null);

  const handleSelectCourse = (courseCode: string) => {
    setSelectedCourse(courseCode);
    setAppState("exam");
  };

  const handleExamComplete = useCallback(
    (
      answers: Record<number, number>,
      questions: Question[],
      courseCode: string
    ) => {
      setExamResults({ answers, questions, courseCode });
      setAppState("results");
    },
    []
  );

  const handleExitExam = () => {
    if (
      window.confirm(
        "Are you sure you want to exit? Your progress will be lost."
      )
    ) {
      setAppState("selection");
      setSelectedCourse("");
    }
  };

  const handleRetake = () => {
    setAppState("exam");
    setExamResults(null);
  };

  const handleHome = () => {
    setAppState("selection");
    setSelectedCourse("");
    setExamResults(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        {appState === "selection" && (
          <CourseSelection onSelectCourse={handleSelectCourse} />
        )}

        {appState === "exam" && selectedCourse && (
          <ExamInterface
            courseCode={selectedCourse}
            onComplete={handleExamComplete}
            onExit={handleExitExam}
          />
        )}

        {appState === "results" && examResults && (
          <ResultsView
            answers={examResults.answers}
            questions={examResults.questions}
            courseCode={examResults.courseCode}
            onRetake={handleRetake}
            onHome={handleHome}
          />
        )}
      </div>

      <Footer />
      <NovaGhost />
    </div>
  );
}
