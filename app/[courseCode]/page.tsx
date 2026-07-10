import { Question, courses } from '@/lib/questions';
import CoursePageClient from './page.client';

interface PageProps {
  params: Promise<{
    courseCode: string;
  }>;
}

export async function generateStaticParams() {
  return courses.map((course) => ({
    courseCode: course.code.toLowerCase(),
  }));
}

export default async function CoursePage({ params }: PageProps) {
  const { courseCode } = await params;

  // Validate course exists
  const course = courses.find(
    (c) => c.code.toLowerCase() === courseCode.toLowerCase()
  );

  if (!course) {
    // Let the client handle the 404
    return <CoursePageClient courseCode={courseCode} courseExists={false} />;
  }

  return <CoursePageClient courseCode={courseCode} courseExists={true} />;
}
