"use client";

import { memo, useCallback } from "react";
import { courses } from "@/lib/questions";
import { useTheme } from "@/components/theme-provider";
import { Moon, Sun, BookOpen } from "lucide-react";

interface CourseSelectionProps {
  onSelectCourse: (courseCode: string) => void;
}

export const CourseSelection = memo(function CourseSelection({
  onSelectCourse,
}: CourseSelectionProps) {
  const { theme, setTheme } = useTheme();

  const handleCourseSelect = useCallback(
    (courseCode: string) => {
      onSelectCourse(courseCode);
    },
    [onSelectCourse]
  );

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
              <h1 className="text-lg font-semibold tracking-tight">CBT—OAU</h1>
              <p className="text-xs text-muted-foreground">Computer Based Test</p>
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
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-balance">
              Select Your Course
            </h2>
            <p className="text-muted-foreground text-lg">
              Choose a course to begin your examination
            </p>
          </div>

          <div className="grid gap-4">
            {courses.map((course) => (
              <button
                key={course.code}
                onClick={() => handleCourseSelect(course.code)}
                className="group w-full text-left p-6 rounded-xl border border-border bg-card hover:bg-accent hover:border-primary/50 transition-all duration-200 active:scale-[0.99]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="inline-flex items-center rounded-md bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                        {course.code}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        40 Questions • 20 mins
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight mb-1 truncate">
                      {course.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {course.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-lg border border-border bg-muted/50">
            <h4 className="font-medium mb-2">Instructions</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Each test contains 40 randomly selected questions</li>
              <li>• You have 20 minutes to complete the test</li>
              <li>• Use the question map to navigate between questions</li>
              <li>• Your answers are saved as you progress</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
});
