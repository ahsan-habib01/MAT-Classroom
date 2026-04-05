import React from 'react';
import Link from 'next/link';

const courses = [
  {
    title: 'Development',
    name: 'Advanced Web Development Course',
    level: 'Beginner',
    rating: '5.0',
    reviews: '5k+',
    lessons: '12',
    students: '150+',
    author: 'Admin',
    price: '$50.00',
    originalPrice: '$85.00',
    color: 'bg-indigo-100 text-indigo-600',
    imgColor: 'bg-indigo-200',
  },
  {
    title: 'Marketing',
    name: 'Digital Marketing Fundamentals',
    level: 'Intermediate',
    rating: '4.8',
    reviews: '3k+',
    lessons: '15',
    students: '200+',
    author: 'Admin',
    price: '$45.00',
    originalPrice: '$70.00',
    color: 'bg-rose-100 text-rose-600',
    imgColor: 'bg-rose-200',
  },
  {
    title: 'Design',
    name: 'UI/UX Design Masterclass',
    level: 'Advanced',
    rating: '4.9',
    reviews: '4.2k+',
    lessons: '20',
    students: '300+',
    author: 'Admin',
    price: '$60.00',
    originalPrice: '$90.00',
    color: 'bg-emerald-100 text-emerald-600',
    imgColor: 'bg-emerald-200',
  },
];

export default function CoursesSection() {
  return (
    <section className="py-24 bg-white px-6 sm:px-12 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
        <div className="max-w-2xl">
          <p className="text-secondary font-bold uppercase tracking-wide flex items-center gap-2 mb-4">
            <span className="w-8 h-1 bg-secondary rounded-full"></span>
            Top Popular Courses
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6 leading-tight">
            Our Top Quality <span className="text-primary">Courses</span> That
            Provide Best Skills
          </h2>
          <p className="text-gray-600 text-lg">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
        </div>
        <Link
          href="/courses"
          className="shrink-0 bg-secondary hover:bg-secondary-hover text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300"
        >
          View All Courses
        </Link>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-2xl transition duration-300 group"
          >
            {/* Image Placeholder */}
            <div className={`h-56 ${course.imgColor} relative`}>
              <span
                className={`absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full ${course.color}`}
              >
                {course.level}
              </span>
            </div>

            <div className="p-8 pb-6">
              <div className="flex items-center gap-2 text-sm text-gray-500 font-medium mb-3">
                <span className="text-orange-400">★ {course.rating}</span> (
                {course.reviews} Reviews)
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 hover:text-primary cursor-pointer transition">
                {course.name}
              </h3>

              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 pb-6 border-b border-gray-100">
                <span className="flex items-center gap-1">
                  📘 {course.lessons} Lessons
                </span>
                <span className="flex items-center gap-1">
                  👥 {course.students} Students
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-sm font-bold text-gray-600">
                    A
                  </div>
                  <span className="font-semibold text-gray-900">
                    {course.author}
                  </span>
                </div>

                <div className="text-right">
                  <span className="line-through text-gray-400 text-sm block">
                    {course.originalPrice}
                  </span>
                  <span className="text-xl font-bold text-primary">
                    {course.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
