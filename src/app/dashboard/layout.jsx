'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  User,
  BookOpen,
  Settings,
  Menu,
  X,
  LogOut,
  ShieldAlert,
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function DashboardLayout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { user, logout } = useAuth();

  const navItems = [
    { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Profile', href: '/dashboard/profile', icon: User },
    { name: 'My Courses', href: '/dashboard/courses', icon: BookOpen },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
  ];

  const adminItems = [
    { name: 'Admin Panel', href: '/dashboard/admin', icon: ShieldAlert },
  ];

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-gray-900/50 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-gray-100 shadow-[4px_0_24px_rgba(0,0,0,0.02)] flex flex-col transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between h-20 px-6 border-b border-gray-50 shrink-0">
          <Link
            href="/dashboard"
            className="text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center font-bold text-xl">
              M
            </div>
            <span>
              MAT <span className="font-normal text-primary">Panel</span>
            </span>
          </Link>
          <button
            className="lg:hidden text-gray-400 hover:text-gray-600 bg-gray-50 hover:bg-gray-100 p-2 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sidebar Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto overflow-x-hidden custom-scrollbar">
          <p className="px-3 text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
            Menu
          </p>

          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-3.5 px-3.5 py-3 rounded-xl font-medium transition-all duration-200 group ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'text-gray-600 hover:bg-blue-50 hover:text-blue-700'
                }`}
              >
                <Icon
                  className={`w-5 h-5 shrink-0 transition-colors ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-blue-600'}`}
                />
                <span className="truncate">{item.name}</span>
              </Link>
            );
          })}

          {/* Conditional Admin Section */}
          {user?.role === 'admin' && (
            <>
              <div className="pt-6 pb-2">
                <div className="h-px bg-gray-100 w-full mb-4"></div>
                <p className="px-3 text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                  Admin Controls
                </p>
              </div>
              {adminItems.map(item => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3.5 px-3.5 py-3 rounded-xl font-medium transition-all duration-200 group ${
                      isActive
                        ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/20'
                        : 'text-gray-600 hover:bg-emerald-50 hover:text-emerald-700'
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 shrink-0 transition-colors ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-emerald-600'}`}
                    />
                    <span className="truncate">{item.name}</span>
                  </Link>
                );
              })}
            </>
          )}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-gray-50 shrink-0 user-select-none">
          {user && (
            <div className="flex items-center gap-3 px-3 py-3 mb-2 rounded-xl bg-gray-50 border border-gray-100">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold shrink-0 overflow-hidden">
                {user.image ? (
                  <img
                    src={user.image}
                    alt={user.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  user.name?.charAt(0).toUpperCase() || 'U'
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 truncate">
                  {user.name}
                </p>
                <p className="text-xs text-gray-500 truncate">{user.email}</p>
              </div>
            </div>
          )}
          <button
            onClick={logout}
            className="flex items-center gap-3.5 px-3.5 py-3 w-full rounded-xl font-medium text-gray-600 hover:bg-red-50 hover:text-red-700 transition-all duration-200 group"
          >
            <LogOut className="w-5 h-5 shrink-0 text-gray-400 group-hover:text-red-500 transition-colors" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden bg-[#F8FAFC]">
        {/* Mobile Header (Only visible on small screens) */}
        <header className="lg:hidden flex items-center justify-between h-16 px-4 bg-white border-b border-gray-100 shrink-0 shadow-sm z-30">
          <div className="flex items-center gap-2">
            <button
              className="text-gray-500 hover:text-blue-600 focus:outline-none p-2 -ml-2 rounded-lg hover:bg-blue-50 transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <span className="font-bold text-gray-900">MAT Panel</span>
          </div>

          <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold overflow-hidden border border-blue-200">
            {user?.image ? (
              <img
                src={user.image}
                alt="User"
                className="w-full h-full object-cover"
              />
            ) : (
              user?.name?.charAt(0).toUpperCase() || 'U'
            )}
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          <div className="max-w-7xl mx-auto w-full h-full">{children}</div>
        </main>
      </div>
    </div>
  );
}
