import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Our Courses | MAT Classroom',
  description: 'Browse academic and professional courses at MAT Classroom.',
};

const courses = [
  {
    id: 1,
    title: 'Foundation Class (Grades 8-10)',
    description:
      'Strengthening core concepts in Mathematics, Science, and English to prepare students for upcoming board exams.',
    price: '$50 / month',
    duration: '1 Year',
  },
  {
    id: 2,
    title: 'Board Exam Preparation (Grades 11-12)',
    description:
      'Intensive coaching and test series modeled strictly on the latest syllabus. Available across Science, Commerce, and Arts streams.',
    price: '$75 / month',
    duration: '1 Year',
  },
  {
    id: 3,
    title: 'Competitive Exam Crash Course',
    description:
      'Short-term targeted preparation strategy designed specifically for national-level entrance and competitive exams.',
    price: '$200 / course',
    duration: '3 Months',
  },
  {
    id: 4,
    title: 'Spoken English & Personality Development',
    description:
      'Improve communication skills, gain confidence, and prepare for interviews or public speaking events.',
    price: '$100 / course',
    duration: '2 Months',
  },
];

export default function CoursesPage() {
  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Our Programs & Courses</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We offer comprehensive courses designed by experts, tailored
          specifically to build careers and fuel academic excellence. Explore
          what fits you best.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {courses.map(course => (
          <div
            key={course.id}
            className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition bg-white flex flex-col h-full"
          >
            <h2 className="text-2xl font-semibold mb-3">{course.title}</h2>
            <p className="text-gray-600 mb-6 flex-1">
              {course.description}
            </p>

            <div className="flex items-center justify-between mb-6 pt-4 border-t border-gray-100">
              <div>
                <span className="block text-sm text-gray-500">Duration</span>
                <span className="font-semibold text-gray-800">
                  {course.duration}
                </span>
              </div>
              <div className="text-right">
                <span className="block text-sm text-gray-500">Fee</span>
                <span className="font-semibold text-primary">
                  {course.price}
                </span>
              </div>
            </div>

            <Link
              href="/contact"
              className="block text-center bg-gray-100 hover:bg-gray-200 text-black font-medium py-3 rounded-lg transition"
            >
              Enroll Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
