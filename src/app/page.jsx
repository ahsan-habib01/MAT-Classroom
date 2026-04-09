import React from 'react';
import HeroSection from '@/components/home/HeroSection'; 
import FeaturesSection from '@/components/home/FeaturesSection';
import AboutSection from '@/components/home/AboutSection';
import CategoriesSection from '@/components/home/CategoriesSection';
import CoursesSection from '@/components/home/CoursesSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection/>
      {/* <FeaturesSection /> */}
      <AboutSection />
      <CategoriesSection />
      <CoursesSection />
    </div>
  );
}
