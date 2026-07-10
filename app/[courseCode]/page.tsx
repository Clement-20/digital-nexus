'use client';

import { ExamInterface } from '@/components/cbt/exam-interface';
import { ResultsPage } from '@/components/cbt/results-page';
import { useState, useCallback } from 'react';
import { Question, courses } from '@/lib/questions';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{
    courseCode: string;
  }>;
}

export default async function CoursePage({ params }: PageProps) {
  const { courseCode } = await params;

  // Validate course exists
  const course = courses.find(
    (c) => c.code.toLowerCase() === courseCode.toLowerCase()
  );

  if (!course) {
    notFound();
  }

  return <CoursePageClient courseCode={courseCode} />;
}

function CoursePageClient({ courseCode }: { courseCode: string }) {
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<{
    answers: Record<number, number>;
    questions: Question[];
    courseCode: string;
  } | null>(null);

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

// Generate static paths for all courses
export async function generateStaticParams() {
  return courses.map((course) => ({
    courseCode: course.code.toLowerCase(),
  }));
}

// Set revalidation for ISR (Incremental Static Regeneration)
export const revalidate = 3600; // Revalidate every hour
