'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const active = pathname === href;
    return (
      <Link
        href={href}
        className={`hdr__link ${active ? 'is-active' : ''}`}
        aria-current={active ? 'page' : undefined}
      >
        {children}
      </Link>
    );
  };

  return (
    <header className="hdr">
      <div className="hdr__blur" />
      <div className="hdr__in">
        <Link href="/" className="hdr__brand">
          <span className="logo">🌿</span>
          <span>Virtual Pet Cemetery</span>
        </Link>

        <nav className="hdr__nav">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/world">World</NavLink>
          <NavLink href="/event/demo">Funeral Demo</NavLink>
          <Link href="/login" className="btn-hero slim ghost">Sign in</Link>
        </nav>
      </div>

      {/* Inline styles so nothing else is required */}
      <style jsx global>{`
        .hdr {
          position: sticky;
          top: 0;
          z-index: 100;
          isolation: isolate;
          border-bottom: 1px solid rgba(255,255,255,.08);
        }
        .hdr__blur {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(7,11,16,.7), rgba(7,11,16,.45));
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          z-index: -1;
        }
        .hdr__in {
          max-width: 1180px;
          margin: 0 auto;
          padding: 10px 16px;
          display: flex;
          align-items: center;
          gap: 14px;
          justify-content: space-between;
        }
        .hdr__brand {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-weight: 800;
          letter-spacing: .01em;
          text-decoration: none;
          color: #e8f0f7;
          white-space: nowrap;
        }
        .hdr__brand .logo {
          display: inline-grid;
          place-items: center;
          width: 28px; height: 28px;
          border-radius: 8px;
          color: #0b1217;
          background: linear-gradient(90deg, #66e4a6, #9af0ff);
          box-shadow: 0 6px 20px rgba(154,240,255,.35);
          font-size: 16px;
        }
        .hdr__nav {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .hdr__link {
          color: #e8f0f7;
          text-decoration: none;
          opacity: .85;
          padding: 6px 8px;
          border-radius: 10px;
          transition: opacity .15s ease, background .15s ease;
        }
        .hdr__link:hover { opacity: 1; background: rgba(255,255,255,.06); }
        .hdr__link.is-active {
          background: rgba(255,255,255,.10);
          outline: 1px solid rgba(255,255,255,.15);
          opacity: 1;
        }
        /* Reuse your homepage buttons for the header */
        .btn-hero.slim {
          padding: 8px 12px;
          border-radius: 10px;
          font-weight: 700;
          border: 1px solid rgba(255,255,255,.15);
        }
        .btn-hero.ghost {
          color: #e8f0f7;
          background: rgba(255,255,255,.06);
          text-decoration: none;
        }
        .btn-hero.ghost:hover { background: rgba(255,255,255,.1); }
        @media (max-width: 720px) {
          .hdr__in { gap: 10px; }
          .hdr__nav { gap: 10px; }
          .hdr__brand span:last-child { display: none; } /* keep the 🌿 on small screens */
        }
      `}</style>
    </header>
  );
}
