'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    title: 'MAT Classroom',
    subtitle: 'Mobasher Aspiring Talent',
    description:
      'সঠিক পথেই লক্ষ্য অর্জন শুরু হয় — Start your journey with smart learning.',
    cta1: 'Enroll Now',
    theme: 'from-blue-600 to-indigo-700',
    // Custom UI Component for the right side
    banner: (
      <div className="relative flex flex-col items-center justify-center text-[#0b1a41] h-full bg-white rounded-[40px] shadow-2xl p-10 border-b-8 border-blue-600">
        <div className="text-8xl font-black opacity-10 absolute top-5">MAT</div>
        <h3 className="text-6xl font-bold tracking-tighter">MAT</h3>
        <div className="h-1 w-20 bg-green-500 my-2"></div>
        <p className="text-2xl font-semibold uppercase tracking-[0.2em]">
          Classroom
        </p>
        <p className="text-[10px] mt-4 border border-gray-200 px-3 py-1 rounded-full">
          MOBASHER ASPIRING TALENT
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: 'আপনার সাফল্যের গন্তব্য',
    subtitle: 'Academic Programs',
    description:
      'SSC, HSC, Admission এবং NU Honours-এর জন্য সেরা প্রস্তুতি নিন আমাদের সাথে।',
    cta1: 'Enroll Now',
    theme: 'from-orange-500 to-red-600',
    banner: (
      <div className="grid grid-cols-1 gap-4 w-full">
        <div className="bg-white p-6 rounded-2xl shadow-lg border-l-8 border-blue-600 flex items-center gap-4">
          <div className="text-3xl">🎓</div>
          <div>
            <h4 className="font-bold text-lg">একাডেমিক</h4>
            <p className="text-sm text-gray-500">SSC, HSC, Admission</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-lg border-l-8 border-green-500 flex items-center gap-4 ml-8">
          <div className="text-3xl">💻</div>
          <div>
            <h4 className="font-bold text-lg">স্কিলস</h4>
            <p className="text-sm text-gray-500">ফ্রিল্যান্সিং ও গ্রাফিক্স</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-lg border-l-8 border-purple-500 flex items-center gap-4">
          <div className="text-3xl">🏢</div>
          <div>
            <h4 className="font-bold text-lg">সুযোগ-সুবিধা</h4>
            <p className="text-sm text-gray-500">আবাসন ও মেন্টরশিপ</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: 'Looking For An Answer?',
    subtitle: 'Problem Solving',
    description:
      'রাজশাহী শহরে আপনার আস্থার সারথি হয়ে আমরা থাকছি আপনার সাফল্যের প্রতিটি ধাপে।',
    cta1: 'Contact Us',
    theme: 'from-emerald-500 to-teal-700',
    banner: (
      <div className="relative w-full aspect-square flex items-center justify-center">
        <div className="absolute inset-0 border-4 border-dashed border-pink-400 rounded-full animate-[spin_20s_linear_infinite] opacity-30"></div>
        <div className="bg-white w-64 h-64 rounded-full shadow-2xl flex flex-col items-center justify-center p-8 text-center border-8 border-gray-50">
          <span className="text-7xl font-bold text-pink-500 mb-2 text-shadow-md">
            ?
          </span>
          <p className="font-bold text-[#0b1a41]">Looking For An Answer?</p>
        </div>
      </div>
    ),
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[index];

  return (
    <section className="relative bg-[#f8fbff] overflow-hidden pt-20 pb-28 min-h-[85vh] flex items-center">
      {/* Animated Background blobs */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-blue-50/50 clip-path-hero hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Text Side */}
          <div className="order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6">
                  ✨ {slide?.subtitle}
                </div>
                <h1 className="text-5xl lg:text-7xl font-black text-[#0b1a41] leading-tight mb-6">
                  {slide?.title}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-lg font-medium">
                  {slide?.description}
                </p>
                <div className="flex gap-4">
                  <Link
                    href="/enroll"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-bold shadow-xl transition-all hover:-translate-y-1"
                  >
                    {slide?.cta1}
                  </Link>
                  <button className="p-4 rounded-2xl border border-gray-200 hover:bg-white transition-all">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Banner Side (The Code-Generated Banners) */}
          <div className="order-1 lg:order-2 flex justify-center items-center min-h-[450px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.1, y: -20 }}
                transition={{ duration: 0.6, type: 'spring', bounce: 0.4 }}
                className="w-full max-w-[500px]"
              >
                {slide?.banner}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Progress Nav */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className="group relative h-2 transition-all duration-300"
          >
            <div
              className={`h-full rounded-full transition-all duration-500 ${i === index ? 'w-12 bg-blue-600' : 'w-4 bg-gray-300'}`}
            ></div>
          </button>
        ))}
      </div>
    </section>
  );
}
