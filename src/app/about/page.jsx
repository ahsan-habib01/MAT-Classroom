import React from 'react';

export const metadata = {
  title: 'About Us | MAT Classroom',
  description: 'Learn more about MAT Classroom and our mission.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-8">
        About MAT Classroom
      </h1>
      <div className="space-y-6 text-lg text-gray-700">
        <p>
          Welcome to{' '}
          <strong className="text-primary">
            MAT Classroom
          </strong>
          , your trusted destination for achieving academic and professional
          excellence. Our institute is dedicated to nurturing young minds,
          guiding their ambitions, and helping them turn their goals into
          achievements.
        </p>
        <p>
          Founded on the principle of providing high-quality education, we
          believe that every student has the potential to excel if given the
          right guidance. Our team consists of passionate educators who bring
          years of teaching expertise, simplifying complex subjects to make
          learning engaging and effective.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-black">
          Our Mission
        </h2>
        <p className="bg-blue-50 p-6 rounded-lg border-l-4 border-primary">
          "To empower students with the knowledge, skills, and confidence
          required to excel in their academic and professional journeys,
          fostering a lifelong love for learning."
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-black">
          Why Learn With Us?
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Experiential learning methods beyond rote memorization.</li>
          <li>Regular performance tracking and detailed feedback.</li>
          <li>Dedicated mentorship and counseling sessions.</li>
          <li>
            State-of-the-art classroom facilities (both offline and online).
          </li>
        </ul>
      </div>
    </div>
  );
}
