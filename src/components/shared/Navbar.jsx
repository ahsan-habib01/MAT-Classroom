import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-white border-b border-gray-100 py-4 px-6 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-primary"
        >
          MAT Classroom
        </Link>
        <nav className="hidden md:flex gap-6 font-medium text-gray-700">
          <Link href="/" className="hover:text-primary transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-primary transition">
            About
          </Link>
          <Link href="/courses" className="hover:text-primary transition">
            Courses
          </Link>
          <Link href="/contact" className="hover:text-primary transition">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
