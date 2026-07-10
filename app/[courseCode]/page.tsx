'use client';

import { ExamInterface } from '@/components/cbt/exam-interface';
import { ResultsPage } from '@/components/cbt/results-page';
import { useState, useCallback } from 'react';
import { Question, courses } from '@/lib/questions';
import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function CoursePage() {
  const params = useParams();
  const router = useRouter();
  const courseCode = params?.courseCode as string;
  const [isValid, setIsValid] = useState(true);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<{
    answers: Record<number, number>;
    questions: Question[];
    courseCode: string;
  } | null>(null);

  // Validate course exists
  useEffect(() => {
    const course = courses.find(
      (c) => c.code.toLowerCase() === courseCode?.toLowerCase()
    );
    if (!course) {
      setIsValid(false);
      router.push('/not-found');
    }
  }, [courseCode, router]);

  const handleComplete = useCallback(
    (
      answers: Record<number, number>,
      questions: Question[],
      code: string
    ) => {
      setResults({ answers, questions, courseCode: code });
      setShowResults(true);
    },
    []
  );

  const handleExit = useCallback(() => {
    if (
      confirm(
        'Are you sure you want to exit? Your progress will not be saved.'
      )
    ) {
      router.push('/');
    }
  }, [router]);

  const handleRetakeExam = useCallback(() => {
    setShowResults(false);
    setResults(null);
  }, []);

  if (!isValid || !courseCode) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse text-muted-foreground">
          Validating course...
        </div>
      </div>
    );
  }

  if (showResults && results) {
    return (
      <ResultsPage
        answers={results.answers}
        questions={results.questions}
        courseCode={results.courseCode}
        onRetake={handleRetakeExam}
      />
    );
  }

  return (
    <ExamInterface
      courseCode={courseCode}
      onComplete={handleComplete}
      onExit={handleExit}
    />
  );
}
