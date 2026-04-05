import React from 'react';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="py-24 px-6 sm:px-12 md:px-24 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Images Side */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="h-64 sm:h-80 bg-blue-200 rounded-2xl overflow-hidden mt-8">
              {/* Image placeholder */}
            </div>
            <div className="h-64 sm:h-80 bg-orange-200 rounded-2xl overflow-hidden">
              {/* Image placeholder */}
            </div>
          </div>
          {/* Badge */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-full shadow-2xl flex flex-col items-center justify-center w-32 h-32 border-4 border-primary-light">
            <span className="text-3xl font-bold text-primary">10+</span>
            <span className="text-xs text-gray-500 font-semibold text-center mt-1">
              Years
              <br />
              Experience
            </span>
          </div>
        </div>

        {/* Text Side */}
        <div className="space-y-6">
          <p className="text-secondary font-bold uppercase tracking-wide flex items-center gap-2">
            <span className="w-8 h-1 bg-secondary rounded-full"></span>
            Welcome to e-learning
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight">
            Empowering Students to Achieve Success
          </h2>
          <p className="text-gray-600 text-lg">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 font-medium pb-6 pt-4">
            <li className="flex items-center gap-3">
              <span className="text-blue-500 text-xl text-center flex items-center justify-center w-6 h-6 rounded-full bg-primary-light">
                ✓
              </span>
              Flexible Schedule
            </li>
            <li className="flex items-center gap-3">
              <span className="text-blue-500 text-xl text-center flex items-center justify-center w-6 h-6 rounded-full bg-primary-light">
                ✓
              </span>
              Expert Instructors
            </li>
            <li className="flex items-center gap-3">
              <span className="text-blue-500 text-xl text-center flex items-center justify-center w-6 h-6 rounded-full bg-primary-light">
                ✓
              </span>
              Interactive Learning
            </li>
            <li className="flex items-center gap-3">
              <span className="text-blue-500 text-xl text-center flex items-center justify-center w-6 h-6 rounded-full bg-primary-light">
                ✓
              </span>
              Offline and Online classes
            </li>
          </ul>

          <Link
            href="/about"
            className="inline-block bg-secondary hover:bg-secondary-hover text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300"
          >
            Discover More
          </Link>
        </div>
      </div>
    </section>
  );
}
