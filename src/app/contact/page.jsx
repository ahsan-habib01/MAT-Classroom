import React from 'react';

export const metadata = {
  title: 'Contact Us | MAT Classroom',
  description: 'Get in touch with MAT Classroom for admissions and queries.',
};

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
        <p className="text-lg text-gray-600">
          Have questions about our courses or the admission process? Drop us a
          message or visit our center!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8 bg-blue-50 p-8 rounded-2xl">
          <div>
            <h3 className="text-2xl font-bold mb-2">Our Center</h3>
            <p className="text-gray-600">
              MAT Classroom Head Office
              <br />
              123 Education Lane, Success City
              <br />
              New York, NY 10001
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-2">Call Us</h3>
            <p className="text-gray-600">
              Phone: +1 (555) 123-4567
              <br />
              Mon-Sat: 9 AM - 7 PM
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-2">Email Us</h3>
            <p className="text-gray-600">
              admissions@matclassroom.edu
              <br />
              support@matclassroom.edu
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 shadow-sm border border-gray-100 rounded-2xl">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-primary outline-none"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-primary outline-none"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="course"
                className="block text-sm font-medium mb-2"
              >
                Course Interested In
              </label>
              <select
                id="course"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-primary outline-none"
              >
                <option value="">Select a Course</option>
                <option value="foundation">
                  Foundation Class (Grades 8-10)
                </option>
                <option value="boards">
                  Board Exam Preparation (Grades 11-12)
                </option>
                <option value="competitive">
                  Competitive Exam Crash Course
                </option>
                <option value="spoken-english">Spoken English</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-primary outline-none"
                placeholder="Write your question here..."
              ></textarea>
            </div>

            <button
              type="button"
              className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary-hover transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
