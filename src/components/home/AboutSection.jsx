'use client';

import React from 'react';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Images */}
        <div className="relative w-full flex justify-center lg:justify-start">
          {/* Main Image Mask */}
          <div className="relative w-[85%] max-w-[450px] aspect-[4/5] bg-gray-100 rounded-t-[150px] rounded-br-[150px] rounded-bl-[40px] overflow-hidden shadow-2xl">
            {/* The actual image would go here. For now we use placeholder color */}
            <div className="absolute inset-0 bg-blue-50">
               {/* Decorative placeholder image mockup */}
               <div className="absolute bottom-0 w-full h-[85%] bg-[#0b1a41] rounded-t-full flex justify-center pt-8 overflow-hidden">
                  <span className="text-white/50 uppercase font-bold text-xs tracking-widest mt-12 z-20">Student Photo Placeholder</span>
                  <div className="absolute bottom-0 w-full h-1/2 bg-blue-900 border-t-8 border-secondary rounded-t-[100px] opacity-50"></div>
               </div>
            </div>
            
            {/* Top decorative arc border */}
            <div className="absolute -top-10 -right-10 w-32 h-32 border-8 border-secondary rounded-full opacity-20"></div>
          </div>
          
          {/* Small Secondary Image (Overlap) */}
          <div className="absolute bottom-8 right-0 lg:-right-8 w-48 h-48 bg-white p-3 rounded-2xl shadow-2xl hidden md:block">
             <div className="w-full h-full bg-blue-100 rounded-xl overflow-hidden flex items-center justify-center relative">
                <span className="text-[#0b1a41]/50 text-sm font-bold z-10 z-10">Secondary Image</span>
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-full h-1/2 bg-primary/10 rounded-bl-full"></div>
             </div>
          </div>

          {/* Floating Experience Badge */}
          <div className="absolute top-16 -left-4 lg:-left-12 bg-white px-5 py-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce" style={{animationDuration: '4s'}}>
            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white text-xl font-bold">
               ★
            </div>
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider leading-tight pb-1">Our Company <br className="hidden sm:block"/> Active</p>
              <h4 className="text-xl font-extrabold text-[#0b1a41]">10+ Years</h4>
            </div>
          </div>

          {/* Decorative shapes background */}
          <div className="absolute -z-10 -bottom-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
        </div>

        {/* Right Side: Content */}
        <div className="space-y-7 lg:pl-10">
          
          <div className="inline-flex items-center gap-3">
            <span className="w-3 h-3 bg-secondary rounded-full"></span>
            <span className="text-secondary font-bold tracking-widest uppercase text-sm">About Us</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0b1a41] leading-[1.12]">
            Build Your Career <br className="hidden md:block"/> Start Learning
          </h2>

          <p className="text-gray-600 text-[1.1rem] leading-relaxed pb-2">
            We provide the best service in the industry for years... We create beautiful and engaging interfaces. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
          </p>

          {/* Feature List */}
          <div className="space-y-5 pt-2">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 shadow-sm flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-primary font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </div>
              <p className="text-xl font-bold text-[#0b1a41]">We Provide Best Service</p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 shadow-sm flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-primary font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </div>
              <p className="text-xl font-bold text-[#0b1a41]">Creative User Interface</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 shadow-sm flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-primary font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </div>
              <p className="text-xl font-bold text-[#0b1a41]">Easy And Fast Support</p>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 pt-8">
            <Link 
              href="/about" 
              className="bg-secondary hover:bg-orange-600 text-white font-medium py-3.5 px-8 rounded-full shadow-lg shadow-orange-200 transition-all hover:scale-105"
            >
              Discover More
            </Link>
            
            <div className="flex items-center gap-4 group cursor-pointer hover:opacity-90">
              <div className="w-14 h-14 bg-primary/5 rounded-full flex items-center justify-center shadow-inner group-hover:bg-primary/10 transition-colors">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Call For Details</p>
                <p className="text-2xl font-extrabold text-[#0b1a41] group-hover:text-primary transition-colors">+123 456 789 23</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
