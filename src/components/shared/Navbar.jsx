'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link
              href="/"
              className="flex items-center gap-2 text-2xl font-bold text-gray-900 tracking-tight"
            >
              <Image
                src="/mat-logo-without-bg.png"
                alt="MAT Classroom Logo"
                width={120}
                height={50}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-primary font-medium border-b-2 border-primary py-1"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-primary font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="/courses"
              className="text-gray-600 hover:text-primary font-medium transition-colors"
            >
              Courses
            </Link>
            <div className="relative group cursor-pointer">
              <span className="text-gray-600 hover:text-primary font-medium flex items-center gap-1 transition-colors">
                Pages
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </div>
            <Link
              href="/news"
              className="text-gray-600 hover:text-primary font-medium transition-colors"
            >
              News
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-primary font-medium transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-6">
            <button
              className="text-gray-600 hover:text-primary transition-colors"
              aria-label="Search"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <Link
              href="/login"
              className="text-gray-800 font-medium hover:text-primary transition-colors"
            >
              Log in
            </Link>
            <Link
              href="/register"
              className="bg-primary hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg flex items-center gap-2 group"
            >
              Get Started
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full left-0">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link
              href="/"
              className="block px-3 py-2 text-primary font-medium bg-blue-50 rounded-md"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md font-medium"
            >
              About
            </Link>
            <Link
              href="/courses"
              className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md font-medium"
            >
              Courses
            </Link>
            <Link
              href="/pages"
              className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md font-medium"
            >
              Pages
            </Link>
            <Link
              href="/news"
              className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md font-medium"
            >
              News
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md font-medium"
            >
              Contact
            </Link>
            <div className="pt-4 mt-2 border-t border-gray-100 flex flex-col gap-3">
              <Link
                href="/login"
                className="block text-center text-gray-800 font-medium py-2"
              >
                Log in
              </Link>
              <Link
                href="/register"
                className="block text-center bg-primary text-white py-2.5 rounded-md font-medium"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
