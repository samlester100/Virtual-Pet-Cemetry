// app/about/page.tsx
import Link from 'next/link';

export const metadata = {
  title: 'About — Virtual Pet Cemetery',
  description:
    'Our mission is to create a gentle, shared memorial world for pets and the people who love them.',
};

export default function AboutPage() {
  return (
    <main className="about-root">
      <section className="about-frame about-hero">
        <h1>About Virtual Pet Cemetery</h1>
        <p className="lede">
          We’re building a gentle place to remember our best friends — a calm, shared world where
          families can gather, light candles, and celebrate a life well loved.
        </p>
      </section>

      <section className="about-frame about-grid">
        <article className="card">
          <h2>Our mission</h2>
          <p>
            Grief deserves care. We combine simple technology with thoughtful rituals so anyone can
            create a beautiful memorial, invite loved ones, and hold an online ceremony — no apps,
            just a link.
          </p>
        </article>
        <article className="card">
          <h2>What we’re building</h2>
          <ul>
            <li>A peaceful 3D world to shape and revisit</li>
            <li>Livestream ceremonies with recordings to keep</li>
            <li>Guestbook, tributes, photos, audio and candles</li>
            <li>Privacy-first sharing that puts families in control</li>
          </ul>
        </article>
        <article className="card">
          <h2>Why it matters</h2>
          <p>
            Pets are family. Having a place to gather — even when we’re far apart — helps us grieve,
            remember, and keep telling their story together.
          </p>
        </article>
      </section>

      <section className="about-frame about-cta">
        <div className="cta-card">
          <h3>Ready to create a peaceful place?</h3>
          <div className="cta">
            <Link href="/world" className="btn primary">Open the Builder</Link>
            <Link href="/" className="btn ghost">Back to Home</Link>
          </div>
        </div>
      </section>

      <style jsx global>{`
        :root{
          --ink:#0e1320; --muted:#626c7a; --stroke:rgba(15,23,42,.12); --soft:#f7f9fc;
          --shadow:0 10px 34px rgba(16,24,40,.08);
          --brand:#1e8a68; --blue:#3aa8ff; --lilac:#b574ff;
        }
        .about-root{ background:#fff; color:var(--ink); }
        .about-frame{ max-width: 1100px; margin: 0 auto; padding: 28px 18px; }
        .about-hero h1{ font-size: clamp(32px, 5.5vw, 48px); letter-spacing:-.02em; margin: 4px 0 8px; }
        .about-hero .lede{ color:var(--muted); font-size:18px; max-width: 70ch; }
        .about-grid{
          display: grid; gap: 16px;
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }
        @media (max-width: 980px){
          .about-grid{ grid-template-columns: 1fr; }
        }
        .card{
          background:#fff; border:1px solid var(--stroke); border-radius:16px; padding:18px; box-shadow: var(--shadow);
        }
        .card h2{ font-size:22px; margin: 4px 0 8px; }
        .card p, .card li{ color:var(--muted); line-height:1.55; }
        .card ul{ margin:0; padding-left: 18px; }
        .about-cta{ padding-bottom: 56px; }
        .cta-card{
          background:#fff; border:1px solid var(--stroke); border-radius:16px; padding:22px; text-align:center; box-shadow: var(--shadow);
        }
        .cta{ display:flex; gap:12px; justify-content:center; flex-wrap:wrap; margin-top: 8px; }
        .btn{
          border-radius: 14px; padding: 12px 16px; font-weight: 800; font-size: 15px; text-decoration: none;
          border:1px solid var(--stroke); display:inline-flex; align-items:center; gap:10px; background:#fff; color:var(--ink);
          transition: transform .15s ease, box-shadow .15s ease, background .15s ease;
        }
        .btn:hover{ transform: translateY(-1px); }
        .btn.primary{ color:#fff; background: linear-gradient(90deg, var(--brand), #27b082); box-shadow: 0 12px 26px rgba(39,176,130,.20); }
        .btn.ghost:hover{ background: var(--soft); }
      `}</style>
    </main>
  );
}
