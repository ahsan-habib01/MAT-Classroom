import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      {/* 1. Hero Section */}
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-green-600 mb-6">
          আমরা কারা এবং আমাদের লক্ষ্য কি?
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          MAT Classroom (ম্যাট ক্লাসরুম) বাংলাদেশের সকল শিক্ষার্থীর জন্য একটি
          নির্ভরযোগ্য অনলাইন ও অফলাইন এডুকেশন প্ল্যাটফর্ম। আমাদের মূল লক্ষ্য হলো
          শিক্ষার্থীদের জন্য মানসম্মত শিক্ষা ও রিসোর্স সহজলভ্য করা।
        </p>
      </section>

      {/* 2. Mission & Vision Cards */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 mb-20">
        {/* Mission Card */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start">
          <div className="bg-pink-100 p-3 rounded-full mb-4">🎯</div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">
            আমাদের লক্ষ্য (Our Mission)
          </h3>
          <p className="text-gray-600 leading-relaxed">
            আমাদের লক্ষ্য হলো শিক্ষার্থীদের জন্য প্রতিটি বিষয়ের কঠিন টপিকগুলো
            সহজভাবে উপস্থাপন করা এবং পরীক্ষার জন্য সর্বোত্তম প্রস্তুতি নিশ্চিত
            করা। আমরা স্বল্প খরচে সেরা মানের কোর্স, বই এবং সাপোর্ট দিয়ে থাকি।
          </p>
        </div>

        {/* Vision Card */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start">
          <div className="bg-red-100 p-3 rounded-full mb-4">👁️‍🗨️</div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">
            আমাদের উদ্দেশ্য (Our Vision)
          </h3>
          <p className="text-gray-600 leading-relaxed">
            আমরা এমন একটি শিক্ষা ব্যবস্থা তৈরি করতে চাই যেখানে ভৌগোলিক অবস্থান
            বা আর্থিক অবস্থা কোনো শিক্ষার্থীর জ্ঞান অর্জনের পথে বাধা হবে না।
            প্রযুক্তির সাহায্যে দেশের প্রতিটি প্রান্তে মানসম্মত শিক্ষা পৌঁছে
            দেওয়াই আমাদের স্বপ্ন।
          </p>
        </div>
      </section>

      {/* 3. Founder / Owner Quote Section */}
      <section className="max-w-5xl mx-auto px-6 mb-24">
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
          <div className="w-40 h-40 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center text-gray-400 border-4 border-white shadow-sm overflow-hidden">
            {/* Replace with <Image /> when ready */}
            <span className="text-sm">Owner Picture</span>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-800">
              মোঃ মোবাশ্বের আলী
            </h2>
            <p className="text-blue-600 font-medium mb-4 text-sm">
              প্রতিষ্ঠাতা ও পরিচালক, ম্যাট ক্লাসরুম
            </p>
            <p className="text-gray-700 italic leading-relaxed text-lg">
              "আমি বিশ্বাস করি, সঠিক গাইডলাইন ও রিসোর্স পেলে প্রতিটি শিক্ষার্থীই
              অসাধারণ ফলাফল করতে পারে। এই বিশ্বাস থেকেই ম্যাট ক্লাসরুমের পথচলা
              শুরু। আমাদের লক্ষ্য হলো, প্রতিটি শিক্ষার্থীর কাছে গণিতের মতো কঠিন
              বিষয়কে সহজ ও আনন্দদায়ক করে তোলা।"
            </p>
          </div>
        </div>
      </section>

      {/* 4. Features Section */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
          আমাদের কোর্সসমূহ কেন কিনবেন?
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Placeholder */}
          <div className="aspect-video bg-black rounded-2xl flex items-center justify-center text-white relative overflow-hidden group cursor-pointer">
            <div className="z-10 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2 backdrop-blur-md group-hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
              </div>
              <p className="font-medium">Promo Video Here</p>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FeatureCard
              icon="🎓"
              title="এক্সপার্ট শিক্ষক"
              desc="অভিজ্ঞ ও দক্ষ শিক্ষকদের দ্বারা ক্লাস পরিচালনা।"
            />
            <FeatureCard
              icon="🎧"
              title="লাইভ সাপোর্ট"
              desc="২৪/৭ লাইভ সাপোর্ট ও কমিউনিটি সুবিধা।"
            />
            <FeatureCard
              icon="📝"
              title="নিয়মিত পরীক্ষা"
              desc="অভিজ্ঞ শিক্ষকদের দ্বারা নিয়মিত পরীক্ষা গ্রহণ ও ফলাফল প্রদান।"
            />
            <FeatureCard
              icon="📖"
              title="সহজ ভাষা"
              desc="সহজ ভাষায় ও উদাহরণসহ ব্যাখ্যা।"
            />
          </div>
        </div>
      </section>

      {/* 5. CTA Banner Section */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <div className="bg-[#4E4FB0] rounded-3xl p-10 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            আমাদের সাথে আপনার শেখার যাত্রা শুরু করুন
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            আপনার পছন্দের কোর্সটি বেছে নিন এবং আপনার ক্যারিয়ারে এক নতুন মাত্রা
            যোগ করুন। আমরা আছি আপনার সফলতার প্রতিটি ধাপে।
          </p>
          <Link
            href="/courses"
            className="inline-block bg-white text-[#4E4FB0] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
          >
            সকল কোর্স দেখুন →
          </Link>
        </div>
      </section>
    </main>
  );
}

// Reusable Feature Card Component
function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="text-2xl mb-3">{icon}</div>
      <h4 className="font-bold text-gray-800 mb-1">{title}</h4>
      <p className="text-sm text-gray-600 leading-snug">{desc}</p>
    </div>
  );
}
