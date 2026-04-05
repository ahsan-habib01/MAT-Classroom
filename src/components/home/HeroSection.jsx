'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    title: 'MAT Classroom',
    subtitle: 'Mobasher Aspiring Talent',
    description:
      'সঠিক পথেই লক্ষ্য অর্জন শুরু হয় — Start your journey with smart learning.',
    cta1: 'Enroll Now',
    cta2: 'Learn More',
  },
  {
    title: 'Academic Programs',
    subtitle: 'Build Your Foundation',
    description:
      'SSC & HSC, Admission Prep, Weekly Exams, Smart Study Guidelines.',
    cta1: 'View Courses',
  },
  {
    title: 'Skills & Facilities',
    subtitle: 'Grow Beyond Books',
    description:
      'Spoken English, ICT Skills, Career Guidance & Friendly Environment.',
    cta1: 'Explore Features',
  },
  {
    title: 'Admission Open',
    subtitle: 'Start Today',
    description: '📍 Rajshahi | 📞 01521761369 — Your success starts here!',
    cta1: 'Enroll Now',
    cta2: 'Contact',
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[index];

  return (
    <section className="relative bg-[#ebf3ff] overflow-hidden pt-24 pb-32">
      {/* Background Effects */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-secondary opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute top-40 right-40 w-64 h-64 bg-primary opacity-10 rounded-full blur-3xl"></div>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10"
        >
          {/* Left Content */}
          <div className="space-y-8 pr-0 lg:pr-12">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
              <span className="text-secondary font-bold tracking-widest text-sm">
                SMART EDUCATION
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#0b1a41] leading-[1.1]">
              {slide.title}
            </h1>

            <h2 className="text-xl md:text-2xl text-primary font-semibold">
              {slide.subtitle}
            </h2>

            <p className="text-gray-600 text-lg md:text-xl max-w-lg leading-relaxed">
              {slide.description}
            </p>

            <div className="flex flex-wrap items-center gap-5 pt-4">
              {slide.cta1 && (
                <Link
                  href="#"
                  className="bg-primary hover:bg-blue-700 text-white font-medium py-3.5 px-8 rounded-full shadow-xl shadow-blue-200 transition-all hover:scale-105"
                >
                  {slide.cta1}
                </Link>
              )}

              {slide.cta2 && (
                <Link
                  href="#"
                  className="text-[#0b1a41] bg-white hover:bg-gray-50 font-medium py-3.5 px-8 rounded-full shadow-lg border border-gray-100 transition-all hover:scale-105"
                >
                  {slide.cta2}
                </Link>
              )}
            </div>
          </div>

          {/* Right Content */}
          <div className="relative h-[500px] w-full flex justify-center items-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="w-[400px] h-[450px] bg-gradient-to-tr from-blue-200 to-blue-50 rounded-[40px] shadow-2xl flex items-center justify-center"
            >
              <span className="text-[#0b1a41] font-bold text-lg text-center px-6">
                {slide.title}
              </span>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              i === index ? 'bg-primary' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
