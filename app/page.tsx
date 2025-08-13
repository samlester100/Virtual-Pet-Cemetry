// app/page.tsx
'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="wow-root light">
      {/* SUBTLE BACKDROP DECOR (light, minimal) */}
      <div className="wow-bg">
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="grid-veil" />
      </div>

      {/* HERO */}
      <section className="frame hero">
        <div className="hero-copy">
          <span className="chip">New • Memorial worlds</span>
          <h1>
            A <em>beautiful</em> place
            <br /> to remember our pets
          </h1>
          <p className="sub">
            Build a gentle 3D memorial, light candles, gather messages, and bring everyone together
            for an online funeral—no downloads, just a link.
          </p>
          <div className="cta">
            <Link href="/world" className="btn-hero primary">Open the Builder</Link>
            <Link href="/event/demo" className="btn-hero ghost">Preview a Funeral</Link>
          </div>
          <p className="note">Works on mobile & desktop • Privacy-first • Shareable link</p>
        </div>

        {/* HERO VISUAL */}
        <div className="hero-viz">
          <div className="viz-card float">
            <div className="viz-sky" />
            <div className="viz-hill" />
            <div className="viz-stone spin">🐾</div>
            <div className="viz-candle pulse" />
            <div className="viz-tree" />
            <div className="viz-glow" />
          </div>
          <div className="viz-badges">
            <div className="badge">
              <span className="dot live" /> Live ceremony
            </div>
            <div className="badge">
              <span className="dot safe" /> Private by default
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="frame pillars">
        <div className="pillar hover-rise">
          <div className="icon">🕯️</div>
          <h3>Rituals & Tributes</h3>
          <p>Light candles, leave flowers and notes, add photos and audio messages.</p>
          <Link href="/world" className="link">Create your memorial →</Link>
        </div>
        <div className="pillar hover-rise">
          <div className="icon">🎥</div>
          <h3>Online Funerals</h3>
          <p>Embed a livestream (Mux/Zoom), play slideshows, and keep the recording.</p>
          <Link href="/event/demo" className="link">See a demo →</Link>
        </div>
        <div className="pillar hover-rise">
          <div className="icon">🌳</div>
          <h3>Custom World</h3>
          <p>Choose terrain, weather, music, and objects. Make it feel like their place.</p>
          <Link href="/world" className="link">Start building →</Link>
        </div>
      </section>

      {/* GALLERY */}
      <section className="frame gallery">
        <div className="head">
          <h2>Memorial scenes that feel alive</h2>
        </div>
        <div className="cards">
          <div className="scene s1 shimmer"><div className="tag">Dawn Garden</div></div>
          <div className="scene s2 shimmer"><div className="tag">Forest Path</div></div>
          <div className="scene s3 shimmer"><div className="tag">Starlit Grove</div></div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="frame how">
        <h2>How it works</h2>
        <ol className="steps">
          <li className="hover-rise">
            <span className="num">1</span>
            <div>
              <h4>Build your plot</h4>
              <p>Place stones, trees, benches and candles in a calm 3D world.</p>
            </div>
          </li>
          <li className="hover-rise">
            <span className="num">2</span>
            <div>
              <h4>Invite loved ones</h4>
              <p>Share a link for messages, tributes, and quiet visits from anywhere.</p>
            </div>
          </li>
          <li className="hover-rise">
            <span className="num">3</span>
            <div>
              <h4>Hold a ceremony</h4>
              <p>Stream the service, play slideshows, and preserve a recording to keep.</p>
            </div>
          </li>
        </ol>
      </section>

      {/* PRICING */}
      <section className="frame pricing">
        <h2>Start free, grow gently</h2>
        <div className="tiers">
          <div className="tier">
            <div className="title">Free</div>
            <div className="price">£0</div>
            <ul>
              <li>1 memorial plot</li>
              <li>Basic assets & candles</li>
              <li>30-min livestream (embed)</li>
              <li>7-day recording</li>
            </ul>
            <Link href="/world" className="btn-hero primary slim">Create free</Link>
          </div>
          <div className="tier pro">
            <div className="title">Plus</div>
            <div className="price">£9<span>/mo</span></div>
            <ul>
              <li>Themes & ambience</li>
              <li>Guestbook & tributes</li>
              <li>3 ceremonies / year</li>
              <li>90-day recordings</li>
            </ul>
            <Link href="/world" className="btn-hero gradient slim">Start Plus</Link>
          </div>
          <div className="tier">
            <div className="title">Pro</div>
            <div className="price">£29<span>/mo</span></div>
            <ul>
              <li>Full HD RTMP</li>
              <li>Live captions</li>
              <li>Lifetime recordings</li>
              <li>Highlight reels</li>
            </ul>
            <Link href="/world" className="btn-hero ghost slim">Go Pro</Link>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="frame footer-cta">
        <h2>Ready when you are</h2>
        <p>Create a peaceful place today. Invite others when it feels right.</p>
        <div className="cta">
          <Link href="/world" className="btn-hero primary">Open the Builder</Link>
          <Link href="/login" className="btn-hero ghost">Sign in</Link>
        </div>
      </section>

      {/* INLINE GLOBAL STYLES (light, elegant) */}
      <style jsx global>{`
        :root{
          --bg: #ffffff;
          --fg: #0b1220;
          --muted: #5b6775;
          --soft: #f7f9fb;
          --glass: rgba(15,23,42,.04);
          --stroke: rgba(15,23,42,.10);
          --brand: #1c7f5f;       /* deep green */
          --brand-2: #3aa8ff;     /* accent blue */
          --brand-3: #b574ff;     /* lilac accent */
          --accent: #ffd89e;      /* warm accent */
          --shadow: 0 12px 40px rgba(16, 24, 40, .08);
        }

        .light.wow-root{
          background: var(--bg);
          color: var(--fg);
          overflow: clip;
        }
        .wow-bg { position: fixed; inset: 0; z-index: -2; pointer-events:none; }
        .blob { position: absolute; width: 60vmin; height: 60vmin; filter: blur(40px); opacity:.18; animation: float 14s ease-in-out infinite; }
        .b1 { left: -8vmin; top: -8vmin; background: radial-gradient(circle at 30% 30%, #a6f2d2, #66e4a6 35%, transparent 62%); }
        .b2 { right: -10vmin; top: -10vmin; background: radial-gradient(circle at 60% 40%, #bfe1ff, #7bc4ff 40%, transparent 64%); animation-delay: -6s; }
        @keyframes float { 0%,100% { transform: translateY(0) scale(1); } 50% { transform: translateY(14px) scale(1.02); } }
        .grid-veil { position:absolute; inset:0; background-image: radial-gradient(rgba(16,24,40,.05) 1px, transparent 1px); background-size: 26px 26px; mask-image: linear-gradient(to bottom, rgba(255,255,255,.7), rgba(255,255,255,0.1)); }

        .frame{ max-width: 1140px; margin: 0 auto; padding: 28px 18px; }

        /* HERO */
        .hero{ display: grid; grid-template-columns: 1.05fr 1fr; gap: 24px; align-items: center; }
        @media (max-width: 980px){ .hero{ grid-template-columns: 1fr; } }
        .chip{
          display:inline-block; font-size:12px; font-weight:700; letter-spacing:.06em;
          padding:6px 10px; border-radius:999px; color:#0c2017;
          background: linear-gradient(90deg, #9be7c9, #c6f3ff);
          box-shadow: 0 6px 18px rgba(102,228,166,.25);
        }
        .hero h1{ font-size: clamp(34px, 6vw, 56px); line-height: 1.05; margin: 12px 0 8px; letter-spacing:-.02em; }
        .hero h1 em{ color: var(--brand); font-style: normal; }
        .sub{ color: var(--muted); font-size: 18px; max-width: 56ch; }
        .note{ color: var(--muted); margin-top: 10px; }
        .cta{ display:flex; gap:12px; flex-wrap: wrap; margin-top: 14px; }

        .btn-hero{
          border-radius: 14px; padding: 12px 16px; font-weight: 700; font-size: 15px;
          transition: transform .15s ease, box-shadow .15s ease, background .15s ease, color .15s ease;
          border: 1px solid var(--stroke); text-decoration:none; display:inline-flex; align-items:center; gap:10px;
          background: #fff; color: var(--fg);
        }
        .btn-hero.primary{
          color:#ffffff; background: linear-gradient(90deg, #1c7f5f, #27b082);
          box-shadow: 0 10px 24px rgba(39, 176, 130, .22);
        }
        .btn-hero.primary:hover{ transform: translateY(-1px); }
        .btn-hero.gradient{ color:#ffffff; background: linear-gradient(90deg, #3aa8ff, #b574ff); box-shadow: 0 10px 24px rgba(58,168,255,.18); }
        .btn-hero.ghost{ color: var(--fg); background: #ffffff; }
        .btn-hero.ghost:hover{ background: var(--soft); }
        .btn-hero.slim{ padding: 10px 14px; border-radius: 12px; }

        .hero-viz{ display:flex; flex-direction: column; gap:10px; align-items:center; }
        .viz-card{
          position: relative; width: 100%; max-width: 560px; aspect-ratio: 16/10;
          border-radius: 18px; background: #ffffff; border: 1px solid var(--stroke);
          box-shadow: var(--shadow); overflow: hidden;
        }
        .viz-sky{ position:absolute; inset:0; background:
          radial-gradient(1200px 600px at 60% -10%, rgba(122,178,255,.20), transparent 60%),
          radial-gradient(900px 500px at 30% -20%, rgba(255,205,133,.20), transparent 60%); }
        .viz-hill{ position:absolute; left:-10%; right:-10%; bottom:-14%; height:64%; border-radius: 50% 50% 0 0 / 70% 70% 0 0;
          background: linear-gradient(180deg, #d9f3e9, #a7dfc9); box-shadow: 0 -10px 40px rgba(0,0,0,.05) inset; }
        .viz-stone{ position:absolute; left:16%; bottom:23%; width:72px; height:72px; border-radius:20px; display:grid; place-items:center; font-size:30px;
          background: linear-gradient(180deg, #f0f2f5, #d7dde4); color:#2b2b2b; transform: rotate(-6deg); box-shadow: 0 8px 18px rgba(0,0,0,.08); }
        .viz-candle{ position:absolute; left:40%; bottom:25%; width:18px; height:44px; border-radius:6px; background:#fff6e8; box-shadow: 0 0 16px rgba(255,210,130,.45); }
        .viz-candle::after{ content:''; position:absolute; left:50%; top:-10px; transform:translateX(-50%); width:10px; height:16px;
          background: radial-gradient(circle at 50% 40%, #ffd68a, #ffad57 70%, transparent 72%); border-radius: 50%; filter: blur(.2px); }
        .viz-tree{ position:absolute; right:14%; bottom:20%; width:120px; height:120px; border-radius: 60% 60% 55% 55%;
          background: radial-gradient(110px 70px at 50% 40%, #77c7a6, #3a8a6a 70%); box-shadow: 0 10px 20px rgba(0,0,0,.08); }
        .viz-glow{ position:absolute; inset:auto; left:0; right:0; bottom:0; height:35%;
          background: radial-gradient(50% 100% at 50% 100%, rgba(39,176,130,.18), transparent 60%); }
        .float{ animation: float 10s ease-in-out infinite; }
        .spin{ animation: spin 28s linear infinite; }
        .pulse{ animation: pulse 1.8s ease-in-out infinite; }
        @keyframes spin { 0%{transform: rotate(-6deg);} 100%{transform: rotate(354deg);} }
        @keyframes pulse { 0%,100%{ box-shadow: 0 0 14px rgba(255,210,130,.35);} 50%{ box-shadow: 0 0 22px rgba(255,210,130,.65);} }

        .viz-badges{ display:flex; gap:10px; flex-wrap:wrap; }
        .badge{ display:flex; align-items:center; gap:8px; padding:8px 12px; border-radius: 999px; background: #ffffff; border:1px solid var(--stroke); font-weight:600; font-size:13px; box-shadow: var(--shadow); }
        .dot{ display:inline-block; width:8px; height:8px; border-radius:50%; background: #3aa8ff; box-shadow: 0 0 0 3px rgba(58,168,255,.15); }
        .dot.live{ background:#ff8aa1; box-shadow: 0 0 0 3px rgba(255,138,161,.15); }
        .dot.safe{ background:#27b082; box-shadow: 0 0 0 3px rgba(39,176,130,.15); }

        /* PILLARS */
        .pillars{ display:grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap:18px; }
        @media (max-width: 980px){ .pillars{ grid-template-columns: 1fr; } }
        .pillar{
          border:1px solid var(--stroke); border-radius:16px; padding:16px;
          background: #ffffff; box-shadow: var(--shadow);
        }
        .pillar .icon{ font-size:22px; }
        .pillar h3{ margin:6px 0 6px; font-size:20px; }
        .pillar p{ color: var(--muted); }
        .hover-rise{ transition: transform .2s ease, box-shadow .2s ease; }
        .hover-rise:hover{ transform: translateY(-3px); box-shadow: 0 16px 34px rgba(16,24,40,.10); }
        .link{ color: var(--brand); text-decoration: none; font-weight:700; }
        .link:hover{ text-decoration: underline; }

        /* GALLERY */
        .gallery .head h2{ font-size: 28px; margin-bottom: 8px; }
        .gallery .cards{ display:grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap:14px; }
        @media (max-width: 980px){ .gallery .cards{ grid-template-columns: 1fr; } }
        .scene{
          position:relative; border-radius:16px; height:220px; overflow:hidden; background: #ffffff; border:1px solid var(--stroke); box-shadow: var(--shadow);
        }
        .scene::before{ content:''; position:absolute; inset:0;
          background: radial-gradient(700px 400px at 30% -10%, rgba(154,240,255,.16), transparent 60%),
                      radial-gradient(700px 400px at 70% -20%, rgba(255,185,150,.14), transparent 65%); }
        .scene .tag{ position:absolute; left:12px; top:12px; font-weight:700; font-size:12px; padding:6px 10px; border-radius:999px;
          background: #ffffff; border:1px solid var(--stroke); box-shadow: var(--shadow); }
        .scene.s1{ background-image: linear-gradient(180deg, #f5fbf7, #e8f6ef); }
        .scene.s2{ background-image: linear-gradient(180deg, #f3f8ff, #eaf2ff); }
        .scene.s3{ background-image: linear-gradient(180deg, #f8f3ff, #f1eaff); }
        .shimmer{ position:relative; }
        .shimmer::after{ content:''; position:absolute; inset:-1px; background: linear-gradient(120deg, transparent 0%, rgba(255,255,255,.4) 18%, transparent 38%); transform: translateX(-100%); animation: shimmer 3.2s ease-in-out infinite; }
        @keyframes shimmer { 0%{ transform: translateX(-100%);} 100%{ transform: translateX(100%);} }

        /* HOW */
        .how h2{ font-size: 26px; margin-bottom: 12px; }
        .steps{ list-style: none; margin:0; padding:0; display:grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap:14px; }
        @media (max-width: 980px){ .steps{ grid-template-columns: 1fr; } }
        .steps li{ display:flex; gap:12px; align-items:flex-start; border:1px solid var(--stroke); border-radius:16px; padding:16px; background:#ffffff; box-shadow: var(--shadow); }
        .num{ width:28px; height:28px; border-radius: 10px; display:grid; place-items:center; font-weight:800;
              background: linear-gradient(90deg, #27b082, #3aa8ff); color:#ffffff; }

        /* PRICING */
        .pricing h2{ font-size: 26px; margin-bottom: 12px; }
        .tiers{
          display: grid;
          grid-template-columns: repeat(3, 1fr); /* always horizontal on desktop */
          gap: 18px;
          align-items: stretch;
        }
        @media (max-width: 768px){
          .tiers{ grid-template-columns: 1fr; } /* stack on mobile */
        }
        .tier{
          border:1px solid var(--stroke); border-radius:18px; padding:22px;
          background: #ffffff; box-shadow: var(--shadow); text-align:center;
        }
        .tier .title{ font-weight:800; letter-spacing:.02em; font-size:14px; color:#1f2a37; }
        .tier .price{ font-size: 32px; font-weight: 900; margin: 8px 0 10px; }
        .tier .price span{ font-size:14px; color: var(--muted); margin-left: 4px; }
        .tier ul{ margin:0; padding:0; list-style:none; color: var(--muted); line-height:1.5; }
        .tier ul li + li{ margin-top: 6px; }
        .tier.pro{
          outline: 2px solid rgba(58,168,255,.25);
          background: linear-gradient(180deg, rgba(58,168,255,.06), rgba(255,255,255,1) 60%);
        }

        .btn-hero.slim{
          width: 100%;
          justify-content: center;
          text-align: center;
          margin-top: 12px;
        }

        /* FOOTER CTA */
        .footer-cta{ text-align:center; }
        .footer-cta h2{ font-size: 28px; margin-bottom: 6px; }
        .footer-cta p{ color: var(--muted); }

        /* Motion preferences */
        @media (prefers-reduced-motion: reduce){
          .float, .spin, .pulse, .shimmer::after { animation: none !important; }
        }
      `}</style>
    </main>
  );
}
