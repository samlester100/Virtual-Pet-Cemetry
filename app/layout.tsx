// app/layout.tsx
import './globals.css';
import Link from 'next/link';
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
      <body>
        <header className="bg-white shadow">
          <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
            <Link href="/" className="text-xl font-bold">Virtual Pet Cemetery</Link>
            <div className="space-x-6">
              <Link href="/" className="hover:underline">Home</Link>
              <Link href="/about" className="hover:underline">About Us</Link>
              <Link href="/sign-in" className="hover:underline">Sign In</Link>
            </div>
          </nav>
        </header>

        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
