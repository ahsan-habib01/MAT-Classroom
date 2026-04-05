import React from 'react';

const features = [
  {
    icon: '🎓',
    title: '10K Online Courses',
    description: 'Enjoy a variety of fresh topics.',
    bg: 'bg-secondary-light text-secondary-hover',
  },
  {
    icon: '👨‍🏫',
    title: 'Top Instructors',
    description: 'Find the right instructor for you.',
    bg: 'bg-primary-light text-primary',
  },
  {
    icon: '♾️',
    title: 'Life Time Access',
    description: 'Learn on your schedule.',
    bg: 'bg-purple-100 text-purple-600',
  },
  {
    icon: '🌐',
    title: 'Learn Anywhere',
    description: 'Access our courses anywhere anytime.',
    bg: 'bg-green-100 text-green-600',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-12 -mt-16 sm:-mt-20 z-10 relative px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300"
          >
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-6 ${feature.bg}`}
            >
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-500">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
