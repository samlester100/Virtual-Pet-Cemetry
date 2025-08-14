// app/page.tsx
'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="hp-root" role="main">
      {/* HERO */}
      <section className="hp-frame hp-hero">
        <div className="hp-hero-copy">
          <span className="hp-pill">New • Memorial worlds</span>
          <h1 className="hp-display">
            A <span className="hp-accent">gentle place</span> to remember your best friend
          </h1>
          <p className="hp-lede">
            Create a peaceful memorial world, invite loved ones, and hold an online ceremony — all from a simple link.
          </p>
          <div className="hp-cta">
            <Link href="/world" className="hp-btn hp-btn--primary">Open the Builder</Link>
            <Link href="/event/demo" className="hp-btn hp-btn--ghost">See a live ceremony demo</Link>
          </div>
          <p className="hp-fine">No downloads • Private by default • Works on mobile & desktop</p>
        </div>

        {/* Hero visual — dreamy sky + rainbow arc + soft clouds (pure CSS, no images) */}
        <div className="hp-hero-visual" aria-hidden="true">
          <div className="hp-hero-canvas">
            <div className="hp-rainbow" />
            <div className="hp-cloud hp-cloud--1" />
            <div className="hp-cloud hp-cloud--2" />
            <div className="hp-cloud hp-cloud--3" />
            <div className="hp-flowers" />
            <div className="hp-path" />
            <div className="hp-paws" />
          </div>
          <div className="hp-badges">
            <span className="hp-chip"><i className="hp-dot hp-dot--live" /> Live ceremony</span>
            <span className="hp-chip"><i className="hp-dot hp-dot--safe" /> Private by default</span>
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="hp-frame hp-trust">
        <div className="hp-trust-row">
          <span className="hp-trust-label">Trusted by pet families worldwide</span>
          <div className="hp-logos">
            <span className="hp-logo">Pet Society</span>
            <span className="hp-logo">Guardian Pets</span>
            <span className="hp-logo">Memory Lane</span>
            <span className="hp-logo">Forever Friends</span>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="hp-frame hp-features">
        <article className="hp-tile">
          <div className="hp-ico">🕯️</div>
          <h3>Rituals & Tributes</h3>
          <p>Light candles, leave flowers and notes, add photos and audio messages to honour their life.</p>
          <Link href="/world" className="hp-link">Create your memorial →</Link>
        </article>
        <article className="hp-tile">
          <div className="hp-ico">🎥</div>
          <h3>Online Funerals</h3>
          <p>Host a ceremony with livestream, slideshows and music. Keep a recording to revisit together.</p>
          <Link href="/event/demo" className="hp-link">See a demo →</Link>
        </article>
        <article className="hp-tile">
          <div className="hp-ico">🌳</div>
          <h3>Your World, Your Way</h3>
          <p>Choose terrain, weather and ambience. Arrange stones, trees and benches to feel like their place.</p>
          <Link href="/world" className="hp-link">Start building →</Link>
        </article>
      </section>

      {/* TESTIMONIALS */}
      <section className="hp-frame hp-testimonials">
        <div className="hp-head">
          <h2>What families say</h2>
          <p>Gentle spaces and shared rituals that help us grieve — and remember — together.</p>
        </div>
        <div className="hp-test-grid">
          <figure className="hp-quote">
            <div className="hp-avatar hp-avatar--luna" aria-hidden="true" />
            <blockquote>
              “Lighting a candle in her garden and seeing everyone’s notes made it feel like we were there together.”
            </blockquote>
            <figcaption>Amelia • Luna’s person</figcaption>
          </figure>
          <figure className="hp-quote">
            <div className="hp-avatar hp-avatar--archie" aria-hidden="true" />
            <blockquote>
              “The ceremony was beautiful. We laughed and cried. Now we have a place to visit any time.”
            </blockquote>
            <figcaption>Marcus • Archie’s family</figcaption>
          </figure>
        </div>
      </section>

      {/* PRICING */}
      <section className="hp-frame hp-pricing">
        <h2>Start free, grow gently</h2>
        <p className="hp-sub">Upgrade any time. Cancel whenever.</p>
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
            <p className="hp-micro">No card required</p>
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
            <p className="hp-micro">Cancel anytime</p>
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
            <p className="hp-micro">For frequent ceremonies</p>
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
            <Link href="/sign-in" className="hp-btn hp-btn--ghost">Sign in</Link>
          </div>
        </div>
      </section>

      {/* Styles */}
      <style jsx global>{`
        :root{
          /* Pastel, dreamy palette */
          --hp-bg:#ffffff; --hp-ink:#0f1b2d; --hp-muted:#667488; --hp-soft:#f7fbff;
          --hp-stroke:rgba(15,23,42,.12); --hp-ring:rgba(15,23,42,.10);
          --hp-shadow:0 12px 36px rgba(16,24,40,.10);

          /* Accents inspired by the painting */
          --hp-brand:#6aa6ff;   /* sky */
          --hp-blue:#79d4ff;    /* sea */
          --hp-lilac:#c9a7ff;   /* cloud */
          --hp-rose:#ffb7c3;    /* flowers */
          --hp-gold:#ffd78e;    /* sunlight */

          --hp-body: var(--font-body, Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif);
          --hp-display: var(--font-display, Georgia, 'Times New Roman', serif);
        }

        /* Root & container */
        .hp-root{ background:var(--hp-bg); color:var(--hp-ink); overflow:clip; }
        .hp-frame{ max-width:1160px; margin:0 auto; padding:32px 18px; }

        /* Typography */
        .hp-display{ font-family: var(--hp-display); font-size: clamp(36px, 6vw, 56px); line-height:1.04; letter-spacing:-.02em; margin:.6rem 0 .5rem; }
        .hp-lede, .hp-fine, p, li, a, button, small{ font-family: var(--hp-body); }
        .hp-lede{ color:var(--hp-muted); font-size:18px; max-width:60ch; }
        .hp-fine{ color:var(--hp-muted); margin-top:10px; font-size:14px; }
        h2{ font-family: var(--hp-display); font-size:28px; line-height:1.1; margin:0 0 8px; }
        h3{ font-weight:800; font-size:20px; margin:6px 0; }

        /* Accent & pills */
        .hp-accent{ background:
          linear-gradient(90deg,var(--hp-gold),var(--hp-rose),var(--hp-lilac),var(--hp-brand));
          -webkit-background-clip:text; background-clip:text; color:transparent; }
        .hp-pill{ display:inline-block; padding:6px 10px; border-radius:999px; font-size:12px; font-weight:800; letter-spacing:.06em; background:linear-gradient(90deg,#ffefcf,#fbe0ff); color:#2b2540; border:1px solid var(--hp-ring); }

        /* Buttons */
        .hp-cta{ display:flex; gap:12px; flex-wrap:wrap; margin-top:14px; }
        .hp-btn{ border-radius:14px; padding:12px 16px; font-weight:800; font-size:15px; text-decoration:none; display:inline-flex; align-items:center; gap:10px; border:1px solid var(--hp-stroke); transition:transform .15s ease, box-shadow .15s ease, background .15s ease; background:#fff; color:var(--hp-ink); }
        .hp-btn:hover{ transform:translateY(-1px); }
        .hp-btn--primary{ color:#fff; background:linear-gradient(90deg,var(--hp-brand),#27b082); box-shadow:0 12px 26px rgba(39,176,130,.20); }
        .hp-btn--gradient{ color:#fff; background:linear-gradient(90deg,var(--hp-blue),var(--hp-lilac)); box-shadow:0 12px 26px rgba(58,168,255,.18); }
        .hp-btn--ghost:hover{ background:var(--hp-soft); }
        .hp-btn--slim{ padding:10px 14px; border-radius:12px; width:100%; justify-content:center; }
        .hp-micro{ margin:8px 0 0; font-size:12px; color:var(--hp-muted); }

        /* HERO layout */
        .hp-hero{ display:grid; grid-template-columns: 1.05fr 1fr; gap:26px; align-items:center; }
        @media (max-width: 980px){ .hp-hero{ grid-template-columns:1fr; } }

        /* Hero visual container */
        .hp-hero-visual{ display:flex; flex-direction:column; align-items:flex-start; }
        .hp-hero-canvas{
          position:relative; width:100%; max-width:640px; aspect-ratio:16/10; border-radius:22px;
          overflow:hidden; border:1px solid var(--hp-stroke); box-shadow:var(--hp-shadow);
          background:
            radial-gradient(1200px 700px at 75% -10%, rgba(201,167,255,.28), transparent 60%),
            linear-gradient(180deg, rgba(255,241,204,.45) 0%, rgba(255,255,255,.0) 40%),
            linear-gradient(180deg, #cfe8ff 0%, #e9f6ff 40%, #fff 100%);
        }

        /* Rainbow arc */
        .hp-rainbow{
          position:absolute; inset:-30% -10% auto -10%; height:220%;
          background: conic-gradient(from 200deg at 50% 60%,
            transparent 0deg, transparent 48deg,
            #ffd78e 52deg, #ffd78e 60deg,
            #ffb7c3 64deg, #ffb7c3 72deg,
            #c9a7ff 76deg, #c9a7ff 84deg,
            #79d4ff 88deg, #79d4ff 96deg,
            transparent 100deg);
          filter: blur(10px) saturate(1.1) opacity(.6);
        }

        /* Soft clouds */
        .hp-cloud{ position:absolute; border-radius:50%;
          background: radial-gradient(closest-side, rgba(255,255,255,.9), rgba(255,255,255,.0) 70%);
          filter: blur(1px);
        }
        .hp-cloud--1{ width:420px; height:240px; left:10%; top:6%; transform:rotate(-4deg); }
        .hp-cloud--2{ width:380px; height:220px; right:6%; top:2%; transform:rotate(3deg); }
        .hp-cloud--3{ width:460px; height:260px; left:30%; top:22%; transform:rotate(-2deg); }

        /* Flower field at bottom */
        .hp-flowers{
          position:absolute; left:0; right:0; bottom:0; height:30%;
          background:
            radial-gradient(800px 120px at 20% 80%, rgba(255,183,195,.35), transparent 60%),
            radial-gradient(700px 120px at 60% 85%, rgba(201,167,255,.30), transparent 60%),
            radial-gradient(600px 120px at 90% 90%, rgba(121,212,255,.30), transparent 60%),
            linear-gradient(180deg, rgba(124,192,160,.25), rgba(255,255,255,0) 70%);
          mix-blend-mode: multiply;
        }

        /* Gentle path toward horizon */
        .hp-path{
          position:absolute; left:50%; transform:translateX(-50%); bottom:0; width:70%; height:60%;
          background:
            linear-gradient( to top, rgba(255,255,255,.85), rgba(255,255,255,.0) 70% ),
            repeating-linear-gradient( to top,
              rgba(0,0,0,.06), rgba(0,0,0,.06) 2px,
              rgba(255,255,255,.0) 18px, rgba(255,255,255,.0) 42px);
          clip-path: polygon(10% 100%, 90% 100%, 58% 10%, 42% 10%); border-radius:12px;
          border:1px solid rgba(0,0,0,.06);
        }

        /* Paw trail */
        .hp-paws{
          position:absolute; left:50%; bottom:8%; width:40%; height:30%;
          transform:translateX(-50%) rotate(-2deg);
          background:
            radial-gradient(circle at 10% 80%, rgba(0,0,0,.15) 0 6px, transparent 7px) 0 0/20% 40%,
            radial-gradient(circle at 30% 60%, rgba(0,0,0,.15) 0 6px, transparent 7px) 0 0/20% 40%,
            radial-gradient(circle at 50% 40%, rgba(0,0,0,.15) 0 6px, transparent 7px) 0 0/20% 40%,
            radial-gradient(circle at 70% 20%, rgba(0,0,0,.15) 0 6px, transparent 7px) 0 0/20% 40%;
          opacity:.25; filter: blur(.4px);
        }

        .hp-badges{ display:flex; gap:10px; flex-wrap:wrap; margin-top:10px; }
        .hp-chip{ display:inline-flex; align-items:center; gap:8px; padding:8px 12px; border-radius:999px; background:#fff; border:1px solid var(--hp-stroke); box-shadow:var(--hp-shadow); font-weight:700; font-size:13px; }
        .hp-dot{ width:8px; height:8px; border-radius:50%; display:inline-block; }
        .hp-dot--live{ background:#ff8aa1; box-shadow:0 0 0 3px rgba(255,138,161,.2); }
        .hp-dot--safe{ background:#27b082; box-shadow:0 0 0 3px rgba(39,176,130,.2); }

        /* TRUST */
        .hp-trust-row{ display:flex; align-items:center; justify-content:space-between; gap:12px; background:#fff; border:1px solid var(--hp-stroke); border-radius:14px; padding:10px 12px; box-shadow:var(--hp-shadow); }
        .hp-trust-label{ font-size:14px; color:var(--hp-muted); white-space:nowrap; }
        .hp-logos{ display:flex; gap:12px; align-items:center; flex-wrap:wrap; opacity:.95; }
        .hp-logo{ padding:8px 12px; border-radius:12px; border:1px solid var(--hp-stroke); background:#fff; box-shadow:var(--hp-shadow); font-weight:700; font-size:13px; color:#304056; }

        /* FEATURES */
        .hp-features{ display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:18px; }
        @media (max-width:980px){ .hp-features{ grid-template-columns:1fr; } }
        .hp-tile{ background:#fff; border:1px solid var(--hp-stroke); border-radius:16px; padding:16px; box-shadow:var(--hp-shadow); transition: transform .18s ease, box-shadow .18s ease; }
        .hp-tile:hover{ transform: translateY(-2px); box-shadow: 0 14px 36px rgba(16,24,40,.12); }
        .hp-ico{ font-size:22px; }
        .hp-tile p{ color:var(--hp-muted); }
        .hp-link{ color:var(--hp-brand); font-weight:800; text-decoration:none; }
        .hp-link:hover{ text-decoration:underline; }

        /* TESTIMONIALS */
        .hp-testimonials .hp-head p{ color:var(--hp-muted); }
        .hp-test-grid{ display:grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap:16px; }
        @media (max-width:980px){ .hp-test-grid{ grid-template-columns:1fr; } }
        .hp-quote{ background:#fff; border:1px solid var(--hp-stroke); border-radius:16px; padding:16px; box-shadow:var(--hp-shadow); display:grid; grid-template-columns: 44px 1fr; gap:12px; align-items:start; }
        .hp-avatar{ width:44px; height:44px; border-radius:50%; border:1px solid var(--hp-stroke); }
        .hp-avatar--luna{ background:
          radial-gradient(circle at 30% 30%, #ffd78e 0 40%, transparent 41%),
          radial-gradient(circle at 70% 60%, #ffb7c3 0 42%, transparent 43%),
          #fff; }
        .hp-avatar--archie{ background:
          radial-gradient(circle at 35% 35%, #79d4ff 0 40%, transparent 41%),
          radial-gradient(circle at 65% 65%, #c9a7ff 0 42%, transparent 43%),
          #fff; }
        .hp-quote blockquote{ margin:0; font-size:16px; line-height:1.55; }
        .hp-quote figcaption{ margin-top:6px; font-size:13px; color:var(--hp-muted); grid-column: 2; }

        /* PRICING */
        .hp-pricing h2{ margin-bottom:4px; }
        .hp-sub{ margin:0 0 14px; color:var(--hp-muted); }
        .hp-tiers{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:20px; align-items:stretch;
        }
        @media (max-width:1024px){ .hp-tiers{ grid-template-columns:repeat(2,1fr); } }
        @media (max-width:640px){ .hp-tiers{ grid-template-columns:1fr; } }
        .hp-tier{ position:relative; background:#fff; border:1px solid var(--hp-stroke); border-radius:18px; padding:22px; text-align:center; box-shadow:var(--hp-shadow); min-width:0; }
        .hp-title{ font-weight:900; letter-spacing:.02em; font-size:14px; color:#1f2a37; }
        .hp-price{ font-size:34px; font-weight:900; margin:10px 0 12px; }
        .hp-price span{ font-size:14px; color:var(--hp-muted); margin-left:4px; }
        .hp-tier ul{ list-style:none; margin:0; padding:0; color:var(--hp-muted); line-height:1.55; }
        .hp-tier ul li+li{ margin-top:6px; }
        .hp-tier--featured{ outline:2px solid rgba(58,168,255,.28); background:linear-gradient(180deg, rgba(58,168,255,.07), #fff 60%); transform:translateY(-2px); }
        .hp-pop{ position:absolute; top:12px; right:12px; font-size:11px; font-weight:900; padding:6px 8px; border-radius:999px; color:#fff; background:linear-gradient(90deg,var(--hp-blue),var(--hp-lilac)); }

        /* CLOSER */
        .hp-closer{ padding-bottom:56px; }
        .hp-ctaCard{ background:#fff; border:1px solid var(--hp-stroke); border-radius:18px; padding:24px; text-align:center; box-shadow:var(--hp-shadow); }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce){
          * { animation: none !important; transition: none !important; }
        }
      `}</style>
    </main>
  );
}
