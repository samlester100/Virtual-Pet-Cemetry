// app/layout.tsx
import './globals.css';
import Link from 'next/link';
import Providers from './providers'; // NEW
import { Inter, Fraunces } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-body' });
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-display' });

export const metadata = {
  title: 'Virtual Pet Cemetery',
  description: 'A gentle place to remember your best friend.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="bg-white text-slate-900">
        <Providers>
          {/* Header / Nav */}
          <header className="bg-white/90 backdrop-blur border-b border-slate-200">
            <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
              <Link href="/" className="text-lg font-bold">Virtual Pet Cemetery</Link>
              <div className="flex items-center gap-6">
                <Link href="/" className="hover:underline">Home</Link>
                <Link href="/about" className="hover:underline">About Us</Link>
                <Link href="/sign-in" className="hover:underline">Sign In</Link>
              </div>
            </nav>
          </header>

          {/* Page content */}
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
