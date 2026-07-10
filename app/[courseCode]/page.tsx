'use client';

import { useParams } from 'next/navigation';
import { ExamInterface } from '@/components/cbt/exam-interface';
import { ResultsPage } from '@/components/cbt/results-page';
import { useState, useCallback, useEffect } from 'react';
import { Question, courses } from '@/lib/questions';
import Link from 'next/link';

export default function CoursePage() {
  const params = useParams();
  const courseCode = Array.isArray(params?.courseCode) 
    ? params.courseCode[0] 
    : params?.courseCode as string;

  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<{
    answers: Record<number, number>;
    questions: Question[];
    courseCode: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [courseExists, setCourseExists] = useState(false);

  // Validate course on mount
  useEffect(() => {
    if (courseCode) {
      const course = courses.find(
        (c) => c.code.toLowerCase() === courseCode.toLowerCase()
      );
      setCourseExists(!!course);
      setLoading(false);
    }
  }, [courseCode]);

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
      window.location.href = '/';
    }
  }, []);

  const handleRetakeExam = useCallback(() => {
    setShowResults(false);
    setResults(null);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse text-muted-foreground">
          Loading...
        </div>
      </div>
    );
  }

  if (!courseExists) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-6 px-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">404</h1>
            <p className="text-xl text-muted-foreground">Course not found</p>
          </div>

          <p className="text-muted-foreground max-w-md">
            The course code "{courseCode}" doesn't exist. Please check the URL and try again.
          </p>

          <div className="space-y-3">
            <p className="text-sm font-medium text-muted-foreground">Available courses:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {courses.map((course) => (
                <Link
                  key={course.code}
                  href={`/${course.code.toLowerCase()}`}
                  className="px-3 py-2 rounded-md bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-medium"
                >
                  {course.code}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/"
            className="inline-block px-6 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
          >
            Back to Home
          </Link>
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
