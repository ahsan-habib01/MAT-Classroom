'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../../context/AuthContext';
import {
  Camera,
  Mail,
  Shield,
  User as UserIcon,
  Edit2,
  LogOut,
} from 'lucide-react';

export default function ProfilePage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full min-h-[400px]">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          My Profile
        </h1>
        <button
          onClick={logout}
          className="flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 px-4 py-2 rounded-lg transition-colors"
        >
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Banner */}
        <div className="h-32 bg-gradient-to-r from-blue-500 to-indigo-600 relative"></div>

        <div className="px-8 pb-8 relative">
          {/* Avatar */}
          <div className="relative -mt-16 mb-6 flex justify-between items-end">
            <div className="relative inline-block">
              <div className="w-32 h-32 rounded-full border-4 border-white shadow-md bg-white overflow-hidden flex items-center justify-center text-4xl font-bold text-white bg-primary">
                {user.image ? (
                  <Image
                    src={user.image}
                    alt={user.name}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="uppercase bg-blue-600 w-full h-full flex items-center justify-center">
                    {user.name?.charAt(0) || 'U'}
                  </div>
                )}
              </div>
              <button className="absolute bottom-0 right-0 bg-gray-900 text-white p-2 rounded-full shadow-lg hover:bg-gray-800 transition-colors cursor-pointer border-2 border-white">
                <Camera className="w-4 h-4" />
              </button>
            </div>

            <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium rounded-lg text-sm border border-gray-200 transition-colors">
              <Edit2 className="w-4 h-4" />
              Edit Profile
            </button>
          </div>

          {/* User Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  Personal Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 bg-gray-50/50 p-4 rounded-xl border border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                      <UserIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">
                        Full Name
                      </p>
                      <p className="text-gray-900 font-semibold">{user.name}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 bg-gray-50/50 p-4 rounded-xl border border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">
                        Email Address
                      </p>
                      <p className="text-gray-900 font-semibold">
                        {user.email}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 bg-gray-50/50 p-4 rounded-xl border border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">
                        Account Role
                      </p>
                      <p className="text-gray-900 font-semibold capitalize">
                        {user.role || 'Student'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  Account Settings
                </h3>
                <div className="bg-gray-50/50 rounded-xl border border-gray-100 p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">
                        Email Notifications
                      </p>
                      <p className="text-sm text-gray-500">
                        Receive course updates and announcements
                      </p>
                    </div>
                    <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                      <input
                        type="checkbox"
                        name="toggle"
                        id="toggle1"
                        className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer checked:right-0 checked:border-blue-600 transition-all"
                        defaultChecked
                      />
                      <label
                        htmlFor="toggle1"
                        className="toggle-label block overflow-hidden h-6 rounded-full bg-blue-600 cursor-pointer"
                      ></label>
                    </div>
                  </div>

                  <hr className="border-gray-200" />

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">
                        Two-Factor Auth
                      </p>
                      <p className="text-sm text-gray-500">
                        Add an extra layer of security
                      </p>
                    </div>
                    <button className="text-sm font-medium text-blue-600 hover:text-blue-700 bg-blue-50 py-1.5 px-3 rounded-md transition-colors">
                      Enable
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
