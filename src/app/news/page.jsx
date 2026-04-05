import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

export const metadata = {
  title: 'News & Blog - MAT Classroom',
  description: 'Stay updated with the latest news, articles, and insights from MAT Classroom.',
};

// Mock data for news articles
const newsArticles = [
  {
    id: 1,
    title: 'How to Prepare for the Math Olympiad 2026',
    excerpt: 'Discover the best strategies and study materials to help you ace the upcoming Math Olympiad with confidence and ease.',
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800',
    date: 'April 4, 2026',
    author: 'Dr. Sarah Jenkins',
    category: 'Guides',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'New Physics Courses Added to Curriculum',
    excerpt: 'We are thrilled to announce five new advanced physics courses covering quantum mechanics, thermodynamics, and astrophysics.',
    image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
    date: 'April 1, 2026',
    author: 'Michael Chen',
    category: 'Announcements',
    readTime: '3 min read',
  },
  {
    id: 3,
    title: 'Top 10 Coding Platforms for Students in 2026',
    excerpt: 'Programming is an essential skill today. Here is our curated list of the best coding platforms to accelerate your software development journey.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    date: 'March 28, 2026',
    author: 'Emily Rodriguez',
    category: 'Technology',
    readTime: '7 min read',
  },
  {
    id: 4,
    title: 'Student Spotlight: Winning the National Science Fair',
    excerpt: 'Meet our student, David, who just secured first place at the National Science Fair with his innovative renewable energy project.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
    date: 'March 22, 2026',
    author: 'Admissions Team',
    category: 'Community',
    readTime: '4 min read',
  },
  {
    id: 5,
    title: 'Understanding Artificial Intelligence in Modern Education',
    excerpt: 'AI is transforming how we learn. Explore the benefits and challenges of integrating AI tools in daily educational workflows.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    date: 'March 15, 2026',
    author: 'James Wilson',
    category: 'Technology',
    readTime: '6 min read',
  },
  {
    id: 6,
    title: 'Spring 2026 Scholarship Applications Now Open',
    excerpt: 'Apply now for the MAT Classroom Spring Scholarship program. We are offering full and partial scholarships to deserving candidates.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800',
    date: 'March 10, 2026',
    author: 'Financial Aid',
    category: 'Announcements',
    readTime: '2 min read',
  }
];

export default function NewsPage() {
  const mainArticle = newsArticles[0];
  const regularArticles = newsArticles.slice(1);

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            News & <span className="text-primary">Blog</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest educational trends, platform announcements, and student success stories.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Story</h2>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row hover:shadow-md transition-shadow">
            <div className="md:w-1/2 relative h-72 md:h-auto min-h-[300px]">
              <Image
                src={mainArticle.image}
                alt={mainArticle.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                {mainArticle.category}
              </div>
            </div>
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center text-sm text-gray-500 mb-4 gap-4">
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {mainArticle.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {mainArticle.readTime}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                {mainArticle.title}
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                {mainArticle.excerpt}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary font-bold">
                    {mainArticle.author.charAt(0)}
                  </div>
                  <span className="font-medium text-gray-900">{mainArticle.author}</span>
                </div>
                <Link href={`/news/${mainArticle.id}`} className="inline-flex items-center text-primary font-semibold hover:text-blue-700 transition-colors">
                  Read More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Latest Articles Grid */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularArticles.map((article) => (
            <div key={article.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-56">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1 rounded-full border border-gray-200 uppercase tracking-wide">
                  {article.category}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-xs text-gray-500 mb-3 gap-4">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {article.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-6 line-clamp-3 text-sm flex-grow">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between mt-auto border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-gray-400" />
                    <span className="text-xs font-medium text-gray-700">{article.author}</span>
                  </div>
                  <span className="text-xs font-medium text-gray-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {article.readTime}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Newsletter Section */}
        <div className="mt-20 bg-primary rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-blue-100 mb-8 text-lg">
              Get the latest courses, news, and updates delivered right to your inbox. No spam, we promise!
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-grow px-5 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300"
                required
              />
              <button 
                type="button" 
                className="bg-gray-900 hover:bg-black text-white px-8 py-3 rounded-full font-medium transition-all shadow-md hover:shadow-lg whitespace-nowrap"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}