import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="header">
          <div className="container nav">
            <div style={{fontWeight:800}}>🌿 Virtual Pet Cemetery</div>
            <Link href="/">Home</Link>
            <Link href="/world">World</Link>
            <Link href="/event/demo">Funeral Demo</Link>
          </div>
        </div>
        <div className="container">{children}</div>
        <div className="footer container">© {new Date().getFullYear()} Virtual Pet Cemetery</div>
      </body>
    </html>
  );
}
