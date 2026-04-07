'use client';

import React from 'react';
import Link from 'next/link';
import {
  Facebook,
  Youtube,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  GraduationCap,
} from 'lucide-react';

const footerNavigation = {
  programs: [
    { name: 'Academic Prep', href: '/programs/academic' },
    { name: 'Admission Care', href: '/programs/admission' },
    { name: 'Skill Development', href: '/programs/skills' },
    { name: 'BPL Quiz Zone', href: '/bpl-quiz' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Mentors', href: '/mentors' },
    { name: 'Success Stories', href: '/success' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: Facebook,
      color: 'hover:text-blue-500',
    },
    { name: 'YouTube', href: '#', icon: Youtube, color: 'hover:text-red-500' },
    {
      name: 'Instagram',
      href: '#',
      icon: Instagram,
      color: 'hover:text-pink-500',
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: Linkedin,
      color: 'hover:text-blue-400',
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0b1a41] text-white pt-20 pb-10 overflow-hidden relative">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] -z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Section (4 Columns) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
                <GraduationCap className="text-white w-7 h-7" />
              </div>
              <span className="text-2xl font-black tracking-tight">
                MAT <span className="text-blue-400">Classroom</span>
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Empowering students in Rajshahi with smart learning tools, expert
              mentorship, and a community built for success.
            </p>
            <div className="flex gap-4">
              {footerNavigation.social.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`p-2 rounded-lg bg-white/5 transition-all ${item.color} hover:bg-white/10`}
                >
                  <item.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections (6 Columns) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-blue-400 mb-6">
                Programs
              </h4>
              <ul className="space-y-4">
                {footerNavigation.programs.map(item => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-white flex items-center gap-2 group text-sm transition-colors"
                    >
                      <ArrowRight
                        size={12}
                        className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all"
                      />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-blue-400 mb-6">
                Support
              </h4>
              <ul className="space-y-4">
                {footerNavigation.company.map(item => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Section (3 Columns) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-blue-400 mb-6">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4 group">
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-blue-500/20 transition-colors">
                  <MapPin size={18} className="text-blue-400" />
                </div>
                <p className="text-sm text-gray-400">
                  Amir Hamza Lane,
                  <br />
                  Rajshahi, Bangladesh
                </p>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-blue-500/20 transition-colors">
                  <Phone size={18} className="text-blue-400" />
                </div>
                <p className="text-sm text-gray-400">01521761369</p>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-blue-500/20 transition-colors">
                  <Mail size={18} className="text-blue-400" />
                </div>
                <p className="text-sm text-gray-400">hello@matclassroom.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-500">
            {footerNavigation.legal.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
          {/* <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} MAT Classroom. Built with{' '}
            <span className="text-red-500">❤️</span> for Students.
          </p> */}
        </div>
      </div>
    </footer>
  );
}
