'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Visual Elements */}
        <div className="relative w-full flex justify-center lg:justify-start">
          {/* Main Image Mask - Custom Shape for "Bangla" Artistic Feel */}
          <div className="relative w-[85%] max-w-[450px] aspect-[4/5] bg-blue-50 rounded-t-[200px] rounded-br-[200px] rounded-bl-[50px] overflow-hidden shadow-2xl border-b-[12px] border-primary">
            {/* Replace with your actual mentor/classroom image */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-blue-100 to-white">
              <div className="text-center p-10">
                <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 shadow-lg flex items-center justify-center text-4xl">
                  👨‍🏫
                </div>
                <p className="text-[#0b1a41] font-bold text-lg">আপনার মেন্টর</p>
                <p className="text-gray-500 text-sm italic">
                  সঠিক গাইডলাইনই সাফল্যের চাবিকাঠি
                </p>
              </div>
            </div>

            {/* Decorative Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-primary/5 pointer-events-none"></div>
          </div>

          {/* Secondary Floating Card: Location/Trust */}
          <div className="absolute bottom-12 -right-4 lg:-right-10 w-56 bg-white p-5 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] hidden md:block border-t-4 border-secondary">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-orange-100 text-secondary rounded-full flex items-center justify-center text-2xl mb-3">
                📍
              </div>
              <h4 className="font-bold text-[#0b1a41] text-lg">রাজশাহী শাখা</h4>
              <p className="text-xs text-gray-500 font-medium">
                আমির হামজা লেন, রাজশাহী
              </p>
            </div>
          </div>

          {/* Experience Badge */}
          <div className="absolute top-10 -left-6 lg:-left-12 bg-[#0b1a41] text-white px-6 py-5 rounded-[2rem] shadow-2xl flex flex-col items-center animate-pulse">
            <span className="text-3xl font-black text-secondary">১০+</span>
            <span className="text-[10px] uppercase tracking-widest font-bold text-blue-200">
              বছরের অভিজ্ঞতা
            </span>
          </div>

          {/* Decorative Background Circles */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-gray-100 rounded-full"></div>
        </div>

        {/* Right Side: Content */}
        <div className="space-y-8 lg:pl-6">
          <div className="inline-flex items-center gap-3 bg-orange-50 px-5 py-2 rounded-full border border-orange-100">
            <span className="w-2 h-2 bg-secondary rounded-full animate-ping"></span>
            <span className="text-secondary font-bold tracking-widest uppercase text-xs">
              আমাদের সম্পর্কে জানুন
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0b1a41] leading-[1.2]">
            সঠিক গাইডলাইন আর <br />
            <span className="text-primary">স্মার্ট লার্নিং</span> এর সমাহার
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            MAT Classroom (ম্যাট ক্লাসরুম) বাংলাদেশের সকল শিক্ষার্থীর জন্য একটি
            নির্ভরযোগ্য অনলাইন ও অফলাইন এডুকেশন প্ল্যাটফর্ম। আমাদের মূল লক্ষ্য
            হলো শিক্ষার্থীদের জন্য মানসম্মত শিক্ষা ও রিসোর্স সহজলভ্য করা.
          </p>

          {/* Bangla-Style Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-blue-50 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center text-2xl group-hover:bg-primary group-hover:text-white transition-all">
                🎓
              </div>
              <div>
                <p className="text-lg font-bold text-[#0b1a41]">সেরা মেন্টর</p>
                <p className="text-sm text-gray-500">
                  অভিজ্ঞ শিক্ষকদের সরাসরি তত্ত্বাবধান
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-orange-50 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center text-2xl group-hover:bg-secondary group-hover:text-white transition-all">
                📝
              </div>
              <div>
                <p className="text-lg font-bold text-[#0b1a41]">
                  নিয়মিত পরীক্ষা
                </p>
                <p className="text-sm text-gray-500">
                  সাপ্তাহিক ও মাসিক মূল্যায়ন টেস্ট
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-green-50 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center text-2xl group-hover:bg-green-600 group-hover:text-white transition-all">
                🚀
              </div>
              <div>
                <p className="text-lg font-bold text-[#0b1a41]">
                  ক্যারিয়ার গাইড
                </p>
                <p className="text-sm text-gray-500">
                  ভবিষ্যৎ গড়ার সঠিক দিকনির্দেশনা
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-purple-50 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center text-2xl group-hover:bg-purple-600 group-hover:text-white transition-all">
                💬
              </div>
              <div>
                <p className="text-lg font-bold text-[#0b1a41]">লাইভ সাপোর্ট</p>
                <p className="text-sm text-gray-500">
                  যেকোনো সমস্যায় ২৪/৭ কমিউনিটি
                </p>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center gap-8 pt-10 border-t border-gray-100">
            <Link
              href="/courses"
              className="w-full sm:w-auto bg-primary hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-2xl shadow-xl shadow-blue-200 transition-all text-center"
            >
              কোর্সগুলো দেখুন
            </Link>

            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-14 h-14 bg-secondary text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                  যেকোনো জিজ্ঞাসায়
                </p>
                <p className="text-xl font-black text-[#0b1a41] group-hover:text-secondary transition-colors">
                  ০১৫২১৭৬১৩৬৯
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
