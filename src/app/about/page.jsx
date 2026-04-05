import React from 'react';
import AboutSection from '@/components/home/AboutSection';
import Link from 'next/link';

export const metadata = {
  title: 'About Us | MAT Classroom',
  description: 'Learn more about MAT Classroom and our mission.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Mini Breadcrumb Hero for internal pages */}
      <div className="bg-[#0b1a41] text-white py-16 flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary rounded-full blur-3xl opacity-20"></div>

        <h1 className="text-4xl md:text-5xl font-extrabold z-10 relative">
          About Us
        </h1>
        <div className="flex items-center gap-2 mt-4 text-sm z-10 relative">
          <Link
            href="/"
            className="text-primary-light hover:text-white transition"
          >
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-white">About Us</span>
        </div>
      </div>

      {/* Embedded the new AboutSection directly into the page */}
      <div className="my-10">
        <AboutSection />
      </div>

      {/* Additional About Details */}
      <div className="max-w-4xl mx-auto py-10 px-6 sm:px-8 mb-20 bg-gray-50 rounded-3xl shadow-sm border border-gray-100">
        <h2 className="text-3xl font-extrabold mb-6 text-[#0b1a41] flex items-center gap-3">
          <span className="w-8 h-1 bg-secondary rounded-full"></span> Our
          Mission
        </h2>
        <p className="bg-white p-8 rounded-2xl border-l-4 border-primary text-gray-700 text-lg leading-relaxed shadow-sm italic font-medium">
          "To empower students with the knowledge, skills, and confidence
          required to excel in their academic and professional journeys,
          fostering a lifelong love for learning."
        </p>

        <h2 className="text-3xl font-extrabold mt-12 mb-6 text-[#0b1a41] flex items-center gap-3">
          <span className="w-8 h-1 bg-secondary rounded-full"></span> Why Learn
          With Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            'Experiential learning methods beyond rote memorization.',
            'Regular performance tracking and detailed feedback.',
            'Dedicated mentorship and counseling sessions.',
            'State-of-the-art classroom facilities (offline/online).',
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-50 hover:shadow-md transition"
            >
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <svg
                  className="w-4 h-4 text-primary font-bold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="text-gray-700 font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
