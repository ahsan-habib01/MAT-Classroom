'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { user, loading, logout } = useAuth();
  const pathname = usePathname();

  const getLinkClasses = path => {
    const isActive =
      path === '/' ? pathname === '/' : pathname.startsWith(path);
    return isActive
      ? 'text-[#ff6b00] font-bold border-b-2 border-[#ff6b00] py-1'
      : 'text-[#0b1a41] hover:text-[#ff6b00] font-semibold transition-colors py-1 border-b-2 border-transparent hover:border-[#ff6b00]/30';
  };

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link
              href="/"
              className="flex items-center gap-2 text-2xl font-bold text-gray-900 tracking-tight hover:scale-105 transition-transform"
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
            <Link href="/" className={getLinkClasses('/')}>
              Home
            </Link>
            <Link href="/about" className={getLinkClasses('/about')}>
              About
            </Link>
            <Link href="/courses" className={getLinkClasses('/courses')}>
              Courses
            </Link>
            <div className="relative group cursor-pointer">
              <span className="text-gray-600 hover:text-primary font-medium flex items-center gap-1 transition-colors py-1 border-b-2 border-transparent hover:border-primary/30">
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
            <Link href="/news" className={getLinkClasses('/news')}>
              News
            </Link>
            <Link href="/contact" className={getLinkClasses('/contact')}>
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

            {loading ? (
              <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse"></div>
            ) : user ? (
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-2 focus:outline-none"
                >
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary">
                    {user.image ? (
                      <Image
                        src={user.image}
                        alt="Profile"
                        width={40}
                        height={40}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <div className="w-full h-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                        {user.name?.charAt(0).toUpperCase() || 'U'}
                      </div>
                    )}
                  </div>
                </button>

                {isProfileOpen && (
                  <div className="absolute right-0 mt-3 w-48 bg-white rounded-md shadow-lg py-1 border border-gray-100 z-50">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {user.name}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {user.email}
                      </p>
                    </div>
                    <Link
                      href="/dashboard"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={() => logout()}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
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
              </>
            )}
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
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-xl absolute w-full left-0 animate-fade-in">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link
              href="/"
              className={`block px-3 py-2 rounded-md font-medium transition-colors ${pathname === '/' ? 'text-primary bg-primary/10' : 'text-gray-700 hover:text-primary hover:bg-gray-50'}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`block px-3 py-2 rounded-md font-medium transition-colors ${pathname === '/about' ? 'text-primary bg-primary/10' : 'text-gray-700 hover:text-primary hover:bg-gray-50'}`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/courses"
              className={`block px-3 py-2 rounded-md font-medium transition-colors ${pathname === '/courses' ? 'text-primary bg-primary/10' : 'text-gray-700 hover:text-primary hover:bg-gray-50'}`}
              onClick={() => setIsOpen(false)}
            >
              Courses
            </Link>
            <Link
              href="/pages"
              className={`block px-3 py-2 rounded-md font-medium transition-colors ${pathname === '/pages' ? 'text-primary bg-primary/10' : 'text-gray-700 hover:text-primary hover:bg-gray-50'}`}
              onClick={() => setIsOpen(false)}
            >
              Pages
            </Link>
            <Link
              href="/news"
              className={`block px-3 py-2 rounded-md font-medium transition-colors ${pathname === '/news' ? 'text-primary bg-primary/10' : 'text-gray-700 hover:text-primary hover:bg-gray-50'}`}
              onClick={() => setIsOpen(false)}
            >
              News
            </Link>
            <Link
              href="/contact"
              className={`block px-3 py-2 rounded-md font-medium transition-colors ${pathname === '/contact' ? 'text-primary bg-primary/10' : 'text-gray-700 hover:text-primary hover:bg-gray-50'}`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 mt-2 border-t border-gray-100 flex flex-col gap-3">
              {loading ? (
                <div className="w-full h-10 bg-gray-200 animate-pulse rounded-md" />
              ) : user ? (
                <>
                  <div className="px-3 py-2 bg-gray-50 rounded-md">
                    <p className="font-medium text-gray-900 truncate">
                      {user.name}
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      {user.email}
                    </p>
                  </div>
                  <Link
                    href="/dashboard"
                    className="block text-center bg-gray-100 text-gray-800 py-2.5 rounded-md font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => logout()}
                    className="block w-full text-center bg-red-50 text-red-600 py-2.5 rounded-md font-medium"
                  >
                    Sign out
                  </button>
                </>
              ) : (
                <>
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
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
