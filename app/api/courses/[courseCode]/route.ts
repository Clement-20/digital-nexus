import { NextResponse } from 'next/server';
import { courses } from '@/lib/questions';

interface Params {
  courseCode: string;
}

export async function GET(
  request: Request,
  { params }: { params: Promise<Params> }
) {
  try {
    const { courseCode } = await params;
    
    // Find course from your data source
    const course = courses.find(
      (c) => c.code.toLowerCase() === courseCode.toLowerCase()
    );

    if (!course) {
      return NextResponse.json(
        { error: 'Course not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ course });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch course' },
      { status: 500 }
    );
  }
}
