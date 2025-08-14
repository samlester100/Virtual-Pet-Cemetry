'use client';

import Link from 'next/link';

/**
 * Clean, premium light homepage
 * - Single source of truth for styles
 * - Pricing grid fixed (3/2/1)
 * - Subtle colour accents; strong hierarchy
 * - Scoped class prefix `.hp-` to avoid clashes
 */
export default function Home() {
  return (
    <main className="hp-root" role="main">
      {/* HERO */}
      <section className="hp-frame hp-hero">
        <div className="hp-hero-copy">
          <span className="hp-pill">New • Memorial worlds</span>
          <h1 className="hp-display">
            A <span className="hp-accent">beautiful</span> place<br />to remember our pets
          </h1>
          <p className="hp-lede">
            Build a gentle 3D memorial, light candles, gather messages, and bring everyone together
            for an online funeral—no downloads, just a link.
          </p>
          <div className="hp-cta">
            <Link href="/world" className="hp-btn hp-btn--primary">Open the Builder</Link>
            <Link href="/event/demo" className="hp-btn hp-btn--ghost">Preview a Funeral</Link>
          </div>
          <p className="hp-fine">Works on mobile & desktop • Privacy-first • Shareable link</p>
        </div>

        {/* Minimal illustration card (kept subtle on light) */}
        <div className="hp-hero-visual">
          <div className="hp-card">
            <div className="hp-sky" />
            <div className="hp-hill" />
            <div className="hp-stone">🐾</div>
            <div className="hp-candle" />
            <div className="hp-tree" />
          </div>
          <div className="hp-badges">
            <span className="hp-chip"><i className="hp-dot hp-dot--live" /> Live ceremony</span>
            <span className="hp-chip"><i className="hp-dot hp-dot--safe" /> Private by default</span>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="hp-frame hp-features">
        <article className="hp-tile">
          <div className="hp-ico">🕯️</div>
          <h3>Rituals & Tributes</h3>
          <p>Light candles, leave flowers and notes, add photos and audio messages.</p>
          <Link href="/world" className="hp-link">Create your memorial →</Link>
        </article>
        <article className="hp-tile">
          <div className="hp-ico">🎥</div>
          <h3>Online Funerals</h3>
          <p>Embed a livestream (Mux/Zoom), play slideshows, and keep the recording.</p>
          <Link href="/event/demo" className="hp-link">See a demo →</Link>
        </article>
        <article className="hp-tile">
          <div className="hp-ico">🌳</div>
          <h3>Custom World</h3>
          <p>Choose terrain, weather, music, and objects. Make it feel like their place.</p>
          <Link href="/world" className="hp-link">Start building →</Link>
        </article>
      </section>

      {/* GALLERY */}
      <section className="hp-frame hp-gallery">
        <header className="hp-head">
          <h2>Memorial scenes that feel alive</h2>
          <p>Soft light, calming colours, gentle motion—each space is yours to shape.</p>
        </header>
        <div className="hp-cards">
          <div className="hp-scene hp-s1"><span className="hp-tag">Dawn Garden</span></div>
          <div className="hp-scene hp-s2"><span className="hp-tag">Forest Path</span></div>
          <div className="hp-scene hp-s3"><span className="hp-tag">Starlit Grove</span></div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="hp-frame hp-how">
        <h2>How it works</h2>
        <ol className="hp-steps">
          <li>
            <span className="hp-num">1</span>
            <div>
              <h4>Build your plot</h4>
              <p>Place stones, trees, benches and candles in a calm 3D world.</p>
            </div>
          </li>
          <li>
            <span className="hp-num">2</span>
            <div>
              <h4>Invite loved ones</h4>
              <p>Share a link for messages, tributes, and quiet visits from anywhere.</p>
            </div>
          </li>
          <li>
            <span className="hp-num">3</span>
            <div>
              <h4>Hold a ceremony</h4>
              <p>Stream the service, play slideshows, and preserve a recording to keep.</p>
            </div>
          </li>
        </ol>
      </section>

      {/* PRICING */}
      <section className="hp-frame hp-pricing">
        <h2>Start free, grow gently</h2>
        <div className="hp-tiers">
          <div className="hp-tier">
            <div className="hp-title">Free</div>
            <div className="hp-price">£0</div>
            <ul>
              <li>1 memorial plot</li>
              <li>Basic assets & candles</li>
              <li>30-min livestream (embed)</li>
              <li>7-day recording</li>
            </ul>
            <Link href="/world" className="hp-btn hp-btn--primary hp-btn--slim">Create free</Link>
          </div>

          <div className="hp-tier hp-tier--featured">
            <div className="hp-pop">Most Popular</div>
            <div className="hp-title">Plus</div>
            <div className="hp-price">£9<span>/mo</span></div>
            <ul>
              <li>Themes & ambience</li>
              <li>Guestbook & tributes</li>
              <li>3 ceremonies / year</li>
              <li>90-day recordings</li>
            </ul>
            <Link href="/world" className="hp-btn hp-btn--gradient hp-btn--slim">Start Plus</Link>
          </div>

          <div className="hp-tier">
            <div className="hp-title">Pro</div>
            <div className="hp-price">£29<span>/mo</span></div>
            <ul>
              <li>Full HD RTMP</li>
              <li>Live captions</li>
              <li>Lifetime recordings</li>
              <li>Highlight reels</li>
            </ul>
            <Link href="/world" className="hp-btn hp-btn--ghost hp-btn--slim">Go Pro</Link>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="hp-frame hp-closer">
        <div className="hp-ctaCard">
          <h2>Ready when you are</h2>
          <p>Create a peaceful place today. Invite others when it feels right.</p>
          <div className="hp-cta">
            <Link href="/world" className="hp-btn hp-btn--primary">Open the Builder</Link>
            <Link href="/login" className="hp-btn hp-btn--ghost">Sign in</Link>
          </div>
        </div>
      </section>

      {/* Styles (scoped, single source of truth) */}
      <style jsx global>{`
        :root{
          --hp-bg:#ffffff; --hp-ink:#0e1320; --hp-muted:#626c7a; --hp-soft:#f7f9fc;
          --hp-stroke:rgba(15,23,42,.12); --hp-ring:rgba(15,23,42,.10);
          --hp-shadow:0 10px 34px rgba(16,24,40,.08);
          --hp-brand:#1e8a68; --hp-blue:#3aa8ff; --hp-lilac:#b574ff;
        }

        /* Root */
        .hp-root{ background:var(--hp-bg); color:var(--hp-ink); overflow:clip; }

        /* Container */
        .hp-frame{ max-width:1140px; margin:0 auto; padding:28px 18px; }

        /* HERO */
        .hp-hero{ display:grid; grid-template-columns: 1.05fr 1fr; gap:24px; align-items:center; }
        @media (max-width: 980px){ .hp-hero{ grid-template-columns:1fr; } }

        .hp-pill{
          display:inline-block; padding:6px 10px; border-radius:999px; font-size:12px; font-weight:800; letter-spacing:.06em;
          background:linear-gradient(90deg,#b9efd9,#d8f3ff); color:#0b2b1f; border:1px solid var(--hp-ring);
        }
        .hp-display{ font-size: clamp(34px, 6vw, 56px); line-height:1.04; letter-spacing:-.02em; margin:.6rem 0 .4rem; }
        .hp-accent{ background:linear-gradient(90deg,var(--hp-brand),var(--hp-blue)); -webkit-background-clip:text; background-clip:text; color:transparent; }
        .hp-lede{ color:var(--hp-muted); font-size:18px; max-width:58ch; }
        .hp-fine{ color:var(--hp-muted); margin-top:10px; }
        .hp-cta{ display:flex; gap:12px; flex-wrap:wrap; margin-top:14px; }

        .hp-btn{
          border-radius:14px; padding:12px 16px; font-weight:800; font-size:15px; text-decoration:none;
          display:inline-flex; align-items:center; gap:10px; border:1px solid var(--hp-stroke);
          transition:transform .15s ease, box-shadow .15s ease, background .15s ease; background:#fff; color:var(--hp-ink);
        }
        .hp-btn:hover{ transform:translateY(-1px); }
        .hp-btn--primary{ color:#fff; background:linear-gradient(90deg,var(--hp-brand),#27b082); box-shadow:0 12px 26px rgba(39,176,130,.20); }
        .hp-btn--gradient{ color:#fff; background:linear-gradient(90deg,var(--hp-blue),var(--hp-lilac)); box-shadow:0 12px 26px rgba(58,168,255,.18); }
        .hp-btn--ghost:hover{ background:var(--hp-soft); }
        .hp-btn--slim{ padding:10px 14px; border-radius:12px; width:100%; justify-content:center; }

        /* HERO VISUAL */
        .hp-hero-visual{ display:flex; flex-direction:column; gap:10px; align-items:center; }
        .hp-card{
          position:relative; width:100%; max-width:560px; aspect-ratio:16/10; border-radius:20px;
          background:#fff; border:1px solid var(--hp-stroke); box-shadow:var(--hp-shadow); overflow:hidden;
        }
        .hp-sky{ position:absolute; inset:0; background:
          radial-gradient(1200px 600px at 60% -10%, rgba(122,178,255,.18), transparent 60%),
          radial-gradient(900px 500px at 30% -20%, rgba(255,205,133,.18), transparent 60%); }
        .hp-hill{
          position:absolute; left:-10%; right:-10%; bottom:-14%; height:64%; border-radius:50% 50% 0 0 / 70% 70% 0 0;
          background:linear-gradient(180deg,#dff6ec,#b7ead4); box-shadow:0 -10px 40px rgba(0,0,0,.04) inset;
        }
        .hp-stone{
          position:absolute; left:16%; bottom:23%; width:72px; height:72px; border-radius:20px; display:grid; place-items:center; font-size:30px;
          background:linear-gradient(180deg,#f1f3f6,#d9dfe7); color:#2b2b2b; transform:rotate(-6deg); box-shadow:0 8px 18px rgba(0,0,0,.08);
        }
        .hp-candle{
          position:absolute; left:40%; bottom:25%; width:18px; height:44px; border-radius:6px; background:#fff6e8; box-shadow:0 0 14px rgba(255,210,130,.4);
        }
        .hp-candle::after{
          content:''; position:absolute; left:50%; top:-10px; transform:translateX(-50%); width:10px; height:16px;
          background:radial-gradient(circle at 50% 40%,#ffd68a,#ffad57 70%,transparent 72%); border-radius:50%;
        }
        .hp-tree{
          position:absolute; right:14%; bottom:20%; width:120px; height:120px; border-radius:60% 60% 55% 55%;
          background:radial-gradient(110px 70px at 50% 40%,#82ceb0,#3a8a6a 70%); box-shadow:0 10px 18px rgba(0,0,0,.07);
        }
        .hp-badges{ display:flex; gap:10px; flex-wrap:wrap; }
        .hp-chip{ display:inline-flex; align-items:center; gap:8px; padding:8px 12px; border-radius:999px; background:#fff; border:1px solid var(--hp-stroke); box-shadow:var(--hp-shadow); font-weight:700; font-size:13px; }
        .hp-dot{ width:8px; height:8px; border-radius:50%; display:inline-block; }
        .hp-dot--live{ background:#ff8aa1; box-shadow:0 0 0 3px rgba(255,138,161,.2); }
        .hp-dot--safe{ background:#27b082; box-shadow:0 0 0 3px rgba(39,176,130,.2); }

        /* FEATURES */
        .hp-features{ display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:18px; }
        @media (max-width:980px){ .hp-features{ grid-template-columns:1fr; } }
        .hp-tile{ background:#fff; border:1px solid var(--hp-stroke); border-radius:16px; padding:16px; box-shadow:var(--hp-shadow); }
        .hp-ico{ font-size:22px; }
        .hp-tile h3{ margin:6px 0 6px; font-size:20px; }
        .hp-tile p{ color:var(--hp-muted); }
        .hp-link{ color:var(--hp-brand); font-weight:800; text-decoration:none; }
        .hp-link:hover{ text-decoration:underline; }

        /* GALLERY */
        .hp-head h2{ font-size:28px; margin-bottom:6px; }
        .hp-head p{ color:var(--hp-muted); }
        .hp-cards{ display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:14px; }
        @media (max-width:980px){ .hp-cards{ grid-template-columns:1fr; } }
        .hp-scene{ position:relative; border-radius:16px; height:220px; overflow:hidden; background:#fff; border:1px solid var(--hp-stroke); box-shadow:var(--hp-shadow); }
        .hp-scene::before{
          content:''; position:absolute; inset:0; background:
            radial-gradient(700px 400px at 30% -10%, rgba(154,240,255,.18), transparent 60%),
            radial-gradient(700px 400px at 70% -20%, rgba(255,185,150,.16), transparent 65%);
        }
        .hp-tag{ position:absolute; left:12px; top:12px; font-weight:800; font-size:12px; padding:6px 10px; border-radius:999px; background:#fff; border:1px solid var(--hp-stroke); box-shadow:var(--hp-shadow); }
        .hp-s1{ background-image:linear-gradient(180deg,#f5fbf7,#e8f6ef); }
        .hp-s2{ background-image:linear-gradient(180deg,#f3f8ff,#eaf2ff); }
        .hp-s3{ background-image:linear-gradient(180deg,#f8f3ff,#f1eaff); }

        /* HOW */
        .hp-how h2{ font-size:26px; margin-bottom:12px; }
        .hp-steps{ list-style:none; margin:0; padding:0; display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:14px; }
        @media (max-width:980px){ .hp-steps{ grid-template-columns:1fr; } }
        .hp-steps li{ display:flex; gap:12px; align-items:flex-start; background:#fff; border:1px solid var(--hp-stroke); border-radius:16px; padding:16px; box-shadow:var(--hp-shadow); }
        .hp-num{ width:28px; height:28px; border-radius:10px; display:grid; place-items:center; font-weight:900; color:#fff; background:linear-gradient(90deg,var(--hp-brand),var(--hp-blue)); }

        /* PRICING — single definitive layout (3/2/1) */
        .hp-pricing h2{ font-size:26px; margin-bottom:12px; }
        .hp-tiers{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:20px; align-items:stretch;
        }
        @media (max-width:1024px){ .hp-tiers{ grid-template-columns:repeat(2,1fr); } }
        @media (max-width:640px){ .hp-tiers{ grid-template-columns:1fr; } }

        .hp-tier{
          position:relative; background:#fff; border:1px solid var(--hp-stroke); border-radius:18px; padding:22px; text-align:center; box-shadow:var(--hp-shadow);
          min-width:0;
        }
        .hp-title{ font-weight:900; letter-spacing:.02em; font-size:14px; color:#1f2a37; }
        .hp-price{ font-size:34px; font-weight:900; margin:10px 0 12px; }
        .hp-price span{ font-size:14px; color:var(--hp-muted); margin-left:4px; }
        .hp-tier ul{ list-style:none; margin:0; padding:0; color:var(--hp-muted); line-height:1.55; }
        .hp-tier ul li+li{ margin-top:6px; }
        .hp-tier--featured{ outline:2px solid rgba(58,168,255,.28); background:linear-gradient(180deg, rgba(58,168,255,.07), #fff 60%); transform:translateY(-2px); }
        .hp-pop{ position:absolute; top:12px; right:12px; font-size:11px; font-weight:900; padding:6px 8px; border-radius:999px; color:#fff; background:linear-gradient(90deg,var(--hp-blue),var(--hp-lilac)); }

        /* FOOTER CTA */
        .hp-closer{ padding-bottom:54px; }
        .hp-ctaCard{ background:#fff; border:1px solid var(--hp-stroke); border-radius:18px; padding:24px; text-align:center; box-shadow:var(--hp-shadow); }

        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce){
          * { animation: none !important; transition: none !important; }
        }
      `}</style>
    </main>
  );
}
