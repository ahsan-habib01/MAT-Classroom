import { Geist, Geist_Mono, Hind_Siliguri } from 'next/font/google';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import FloatingContact from '@/components/shared/FloatingContact';
import { AuthProvider } from './Providers';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const hindSiliguri = Hind_Siliguri({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['bengali'],
  variable: '--font-hind-siliguri',
});

export const metadata = {
  title: 'MAT Classroom | Coaching Excellence',
  description: 'Top-tier academic and professional coaching for exams.',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${hindSiliguri.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen flex flex-col font-sans"
        suppressHydrationWarning
      >
        <AuthProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingContact />
        </AuthProvider>
      </body>
    </html>
  );
}
