import React from 'react';

const categories = [
  {
    name: 'Business',
    count: 120,
    icon: '💼',
    color: 'bg-emerald-100 text-emerald-600',
  },
  {
    name: 'Marketing',
    count: 180,
    icon: '📊',
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    name: 'Development',
    count: 210,
    icon: '💻',
    color: 'bg-rose-100 text-rose-600',
  },
  {
    name: 'Photography',
    count: 90,
    icon: '📸',
    color: 'bg-amber-100 text-amber-600',
  },
  {
    name: 'Health & Fitness',
    count: 110,
    icon: '💪',
    color: 'bg-cyan-100 text-cyan-600',
  },
  {
    name: 'Design',
    count: 150,
    icon: '🎨',
    color: 'bg-violet-100 text-violet-600',
  },
];

export default function CategoriesSection() {
  return (
    <section className="py-24 bg-gray-50 px-6 sm:px-12 md:px-24">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <p className="text-secondary font-bold uppercase tracking-wide flex items-center justify-center gap-2 mb-4">
          <span className="w-8 h-1 bg-secondary rounded-full"></span>
          Top Categories
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6">
          Explore Featured <span className="text-primary">Categories</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-100 p-8 rounded-2xl flex items-center gap-6 hover:shadow-xl hover:border-primary-light transition duration-300 group cursor-pointer"
          >
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl group-hover:scale-110 transition duration-300 ${cat.color}`}
            >
              {cat.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-primary transition">
                {cat.name}
              </h3>
              <p className="text-gray-500 text-sm">{cat.count}+ Courses</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
