import React from 'react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-gray-50 py-20 px-6 sm:px-12 md:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side Content */}
        <div className="space-y-6">
          <p className="text-secondary font-bold uppercase tracking-wide flex items-center gap-2">
            <span className="w-8 h-1 bg-secondary rounded-full"></span>
            100% Guaranteed Success
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 leading-tight">
            Build Your Best Future With{' '}
            <span className="text-primary">Online Course</span>
          </h1>
          <p className="text-gray-600 text-lg">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/courses"
              className="bg-primary hover:bg-primary-hover text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300"
            >
              Explore Courses
            </Link>
          </div>
          {/* Small Stats below button */}
          <div className="pt-6 flex gap-8 border-t border-gray-200 mt-6">
            <div>
              <h4 className="text-3xl font-bold text-blue-900">24k+</h4>
              <p className="text-gray-500 text-sm">Active Students</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-blue-900">15k+</h4>
              <p className="text-gray-500 text-sm">Online Courses</p>
            </div>
          </div>
        </div>

        {/* Right Side Image Placeholder */}
        <div className="relative">
          <div className="w-full max-w-md mx-auto aspect-square bg-primary-light rounded-full relative">
            {/* Main Image Mock */}
            <div className="absolute inset-0 bg-blue-200 rounded-full overflow-hidden flex items-end justify-center">
              <div className="w-3/4 h-[90%] bg-blue-300 rounded-t-full relative">
                {/* This represents a picture of the student */}
                <div className="absolute top-10 left-10 w-4 h-4 rounded-full bg-secondary"></div>
                <div className="absolute top-20 right-10 w-6 h-6 rounded-full bg-primary"></div>
              </div>
            </div>

            {/* Floating Badges */}
            <div className="absolute top-10 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4">
              <div className="w-10 h-10 bg-secondary-light rounded-full flex items-center justify-center text-secondary text-xl font-bold">
                🎓
              </div>
              <div>
                <p className="text-xs text-gray-500">Tutors</p>
                <p className="font-bold text-gray-900">250+</p>
              </div>
            </div>

            <div className="absolute bottom-10 -right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4">
              <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center text-primary text-xl font-bold">
                ⭐
              </div>
              <div>
                <p className="text-xs text-gray-500">Rating</p>
                <p className="font-bold text-gray-900">4.8 (10k)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
