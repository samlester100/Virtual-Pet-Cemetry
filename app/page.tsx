// app/page.tsx
'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="site light-premium">
      {/* Decorative backdrop (subtle colour in corners) */}
      <div className="backdrop">
        <div className="corner c1" />
        <div className="corner c2" />
        <div className="grain" />
      </div>

      {/* HERO */}
      <section className="frame hero">
        <div className="hero-copy">
          <span className="pill new">New • Memorial worlds</span>
          <h1 className="display">
            A <span className="grad-text">beautiful</span> place<br />
            to remember our pets
          </h1>
          <p className="lede">
            Build a gentle 3D memorial, light candles, gather messages, and bring everyone together
            for an online funeral—no downloads, just a link.
          </p>
          <div className="cta">
            <Link href="/world" className="btn primary">Open the Builder</Link>
            <Link href="/event/demo" className="btn ghost">Preview a Funeral</Link>
          </div>
          <p className="fineprint">Works on mobile & desktop • Privacy-first • Shareable link</p>
        </div>

        {/* Premium hero card with gradient border ring */}
        <div className="hero-viz">
          <div className="ring">
            <div className="card">
              <div className="sky" />
              <div className="hill" />
              <div className="stone spin">🐾</div>
              <div className="candle pulse" />
              <div className="tree" />
              <div className="glow" />
            </div>
          </div>
          <div className="inline-badges">
            <span className="chip"><i className="dot live" /> Live ceremony</span>
            <span className="chip"><i className="dot safe" /> Private by default</span>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider" aria-hidden />

      {/* PILLARS */}
      <section className="frame pillars">
        <article className="tile hover">
          <div className="icon">🕯️</div>
          <h3>Rituals & Tributes</h3>
          <p>Light candles, leave flowers and notes, add photos and audio messages.</p>
          <Link href="/world" className="underline">Create your memorial</Link>
        </article>
        <article className="tile hover">
          <div className="icon">🎥</div>
          <h3>Online Funerals</h3>
          <p>Embed a livestream (Mux/Zoom), play slideshows, and keep the recording.</p>
          <Link href="/event/demo" className="underline">See a demo</Link>
        </article>
        <article className="tile hover">
          <div className="icon">🌳</div>
          <h3>Custom World</h3>
          <p>Choose terrain, weather, music, and objects. Make it feel like their place.</p>
          <Link href="/world" className="underline">Start building</Link>
        </article>
      </section>

      {/* GALLERY */}
      <section className="frame gallery">
        <header className="section-head">
          <h2>Memorial scenes that feel alive</h2>
          <p>Soft light, calming colours, gentle motion—each space is yours to shape.</p>
        </header>
        <div className="cards">
          <div className="scene s1 shimmer"><span className="tag">Dawn Garden</span></div>
          <div className="scene s2 shimmer"><span className="tag">Forest Path</span></div>
          <div className="scene s3 shimmer"><span className="tag">Starlit Grove</span></div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="frame how">
        <h2>How it works</h2>
        <ol className="steps">
          <li className="hover">
            <span className="step">1</span>
            <div>
              <h4>Build your plot</h4>
              <p>Place stones, trees, benches and candles in a calm 3D world.</p>
            </div>
          </li>
          <li className="hover">
            <span className="step">2</span>
            <div>
              <h4>Invite loved ones</h4>
              <p>Share a link for messages, tributes, and quiet visits from anywhere.</p>
            </div>
          </li>
          <li className="hover">
            <span className="step">3</span>
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
            <div className="tier-head">Free</div>
            <div className="price">£0</div>
            <ul>
              <li>1 memorial plot</li>
              <li>Basic assets & candles</li>
              <li>30-min livestream (embed)</li>
              <li>7-day recording</li>
            </ul>
            <Link href="/world" className="btn primary slim">Create free</Link>
          </div>

          <div className="tier featured">
            <div className="ribbon">Most Popular</div>
            <div className="tier-head">Plus</div>
            <div className="price">£9<span>/mo</span></div>
            <ul>
              <li>Themes & ambience</li>
              <li>Guestbook & tributes</li>
              <li>3 ceremonies / year</li>
              <li>90-day recordings</li>
            </ul>
            <Link href="/world" className="btn gradient slim">Start Plus</Link>
          </div>

          <div className="tier">
            <div className="tier-head">Pro</div>
            <div className="price">£29<span>/mo</span></div>
            <ul>
              <li>Full HD RTMP</li>
              <li>Live captions</li>
              <li>Lifetime recordings</li>
              <li>Highlight reels</li>
            </ul>
            <Link href="/world" className="btn ghost slim">Go Pro</Link>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="frame closer">
        <div className="closer-card">
          <h2>Ready when you are</h2>
          <p>Create a peaceful place today. Invite others when it feels right.</p>
          <div className="cta">
            <Link href="/world" className="btn primary">Open the Builder</Link>
            <Link href="/login" className="btn ghost">Sign in</Link>
          </div>
        </div>
      </section>

      {/* Styles */}
      <style jsx global>{`
        :root{
          --bg: #ffffff;
          --ink: #0e1320;
          --muted: #5f6977;
          --soft: #f7f9fc;
          --card: #ffffff;
          --stroke: rgba(15,23,42,.12);
          --ring: rgba(15,23,42,.08);
          --shadow: 0 10px 40px rgba(16,24,40,.08);
          --brand: #1e8a68;      /* deep green */
          --blue: #3aa8ff;       /* accent blue */
          --lilac: #b574ff;      /* accent lilac */
          --peach: #ffd89e;      /* warm accent */
        }

        .light-premium { background: var(--bg); color: var(--ink); overflow: clip; }

        .frame { max-width: 1180px; margin: 0 auto; padding: 28px 18px; }

        /* BACKDROP */
        .backdrop { position: fixed; inset: 0; z-index: -2; pointer-events: none; }
        .corner {
          position: absolute; width: 58vmin; height: 58vmin; filter: blur(44px); opacity: .18;
          transform: translate3d(0,0,0); animation: bob 16s ease-in-out infinite;
        }
        .c1 { left: -10vmin; top: -8vmin;
          background: radial-gradient(circle at 30% 30%, #aaf0d4, #66e4a6 38%, transparent 62%); }
        .c2 { right: -12vmin; top: -10vmin; animation-delay: -8s;
          background: radial-gradient(circle at 60% 40%, #c4e2ff, #7bc4ff 40%, transparent 64%); }
        @keyframes bob { 0%,100%{ transform: translateY(0)} 50%{ transform: translateY(14px)} }

        .grain {
          position: absolute; inset: 0;
          opacity: .065;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E");
          mix-blend-mode: multiply;
        }

        /* TYPOGRAPHY */
        .pill.new{
          display:inline-block; padding:6px 10px; border-radius: 999px; font-weight: 700; font-size: 12px; letter-spacing: .06em;
          color:#093424; background: linear-gradient(90deg,#b9efd9,#d8f3ff); border:1px solid var(--ring);
          box-shadow: 0 8px 18px rgba(102,228,166,.25);
        }
        .display{
          font-size: clamp(34px, 6vw, 56px);
          line-height: 1.04; letter-spacing: -.02em; margin: 14px 0 10px;
        }
        .grad-text{
          background: linear-gradient(90deg, var(--brand), var(--blue));
          -webkit-background-clip: text; background-clip: text; color: transparent;
        }
        .lede{ color: var(--muted); font-size: 18px; max-width: 58ch; }
        .fineprint{ color: var(--muted); margin-top: 10px; }

        /* BUTTONS */
        .btn{
          border-radius: 14px; padding: 12px 16px; font-weight: 800; font-size: 15px;
          text-decoration: none; display:inline-flex; align-items:center; gap:10px;
          border: 1px solid var(--stroke); background: var(--card); color: var(--ink);
          transition: transform .15s ease, box-shadow .15s ease, background .15s ease, color .15s ease;
        }
        .btn.primary{ color:#fff; background: linear-gradient(90deg, var(--brand), #27b082); box-shadow: 0 12px 28px rgba(39,176,130,.22); }
        .btn.gradient{ color:#fff; background: linear-gradient(90deg, var(--blue), var(--lilac)); box-shadow: 0 12px 28px rgba(58,168,255,.18); }
        .btn.ghost{ background:#fff; }
        .btn:hover{ transform: translateY(-1px); }
        .btn.slim{ padding: 10px 14px; border-radius: 12px; width:100%; justify-content:center; }

        /* HERO LAYOUT */
        .hero{
          display:grid; grid-template-columns: 1.06fr 1fr; gap: 26px; align-items: center;
        }
        @media (max-width: 980px){ .hero{ grid-template-columns: 1fr; } }
        .cta{ display:flex; gap:12px; flex-wrap:wrap; margin-top: 14px; }

        /* HERO VISUAL */
        .hero-viz{ display:flex; flex-direction:column; gap:12px; align-items:center; }
        .ring{
          padding: 2px; border-radius: 22px;
          background: linear-gradient(135deg, rgba(58,168,255,.4), rgba(181,116,255,.35), rgba(39,176,130,.45));
          box-shadow: var(--shadow);
        }
        .card{
          position:relative; width:100%; max-width:560px; aspect-ratio: 16/10;
          border-radius: 20px; background: #ffffff; border: 1px solid var(--stroke); overflow: hidden;
        }
        .sky{ position:absolute; inset:0;
          background: radial-gradient(1200px 600px at 60% -10%, rgba(122,178,255,.18), transparent 60%),
                      radial-gradient(900px 500px at 30% -20%, rgba(255,205,133,.18), transparent 60%);}
        .hill{ position:absolute; left:-10%; right:-10%; bottom:-16%; height:66%; border-radius: 50% 50% 0 0 / 70% 70% 0 0;
          background: linear-gradient(180deg, #dff6ec, #b7ead4); box-shadow: 0 -10px 40px rgba(0,0,0,.04) inset;}
        .stone{ position:absolute; left:16%; bottom:23%; width:72px; height:72px; border-radius:20px; display:grid; place-items:center; font-size:30px;
          background: linear-gradient(180deg, #f1f3f6, #d9dfe7); color:#2b2b2b; transform: rotate(-6deg); box-shadow: 0 10px 20px rgba(0,0,0,.08);}
        .candle{ position:absolute; left:40%; bottom:25%; width:18px; height:44px; border-radius:6px; background:#fff6e8; box-shadow: 0 0 16px rgba(255,210,130,.4);}
        .candle::after{ content:''; position:absolute; left:50%; top:-10px; transform:translateX(-50%); width:10px; height:16px;
          background: radial-gradient(circle at 50% 40%, #ffd68a, #ffad57 70%, transparent 72%); border-radius: 50%; filter: blur(.2px);}
        .tree{ position:absolute; right:14%; bottom:20%; width:120px; height:120px; border-radius: 60% 60% 55% 55%;
          background: radial-gradient(110px 70px at 50% 40%, #82ceb0, #3a8a6a 70%); box-shadow: 0 10px 18px rgba(0,0,0,.07);}
        .glow{ position:absolute; left:0; right:0; bottom:0; height:36%;
          background: radial-gradient(50% 100% at 50% 100%, rgba(39,176,130,.16), transparent 60%);}
        .spin{ animation: spin 28s linear infinite; } @keyframes spin{from{transform:rotate(-6deg)} to{transform:rotate(354deg)}}
        .pulse{ animation: pulse 1.9s ease-in-out infinite; }
        @keyframes pulse{0%,100%{box-shadow:0 0 12px rgba(255,210,130,.35)}50%{box-shadow:0 0 22px rgba(255,210,130,.6)}}

        .inline-badges{ display:flex; gap:10px; flex-wrap:wrap; }
        .chip{
          display:inline-flex; align-items:center; gap:8px; padding:8px 12px; border-radius:999px;
          background:#fff; border:1px solid var(--stroke); box-shadow: var(--shadow); font-weight:700; font-size:13px;
        }
        .dot{ width:8px; height:8px; border-radius:50%; display:inline-block; }
        .dot.live{ background:#ff8aa1; box-shadow: 0 0 0 3px rgba(255,138,161,.2); }
        .dot.safe{ background:#27b082; box-shadow: 0 0 0 3px rgba(39,176,130,.2); }

        /* DIVIDER */
        .divider{
          height: 1px; margin: 10px auto 2px; max-width: 1180px;
          background: linear-gradient(90deg, rgba(0,0,0,0), rgba(16,24,40,.12), rgba(0,0,0,0));
        }

        /* PILLARS */
        .pillars{ display:grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap:18px; }
        @media (max-width: 980px){ .pillars{ grid-template-columns: 1fr; } }
        .tile{
          background: var(--card); border:1px solid var(--stroke); border-radius: 18px; padding: 18px; box-shadow: var(--shadow);
        }
        .tile .icon{ font-size: 22px; }
        .tile h3{ margin:6px 0 6px; font-size: 20px; }
        .tile p{ color: var(--muted); }
        .hover{ transition: transform .2s ease, box-shadow .2s ease; }
        .hover:hover{ transform: translateY(-4px); box-shadow: 0 16px 36px rgba(16,24,40,.12); }
        .underline{
          position:relative; text-decoration:none; font-weight:800; color: var(--brand);
        }
        .underline::after{
          content:''; position:absolute; left:0; right:0; bottom:-2px; height:2px;
          background: linear-gradient(90deg, var(--brand), var(--blue)); transform: scaleX(0); transform-origin: left; transition: transform .25s ease;
        }
        .underline:hover::after{ transform: scaleX(1); }

        /* GALLERY */
        .section-head h2{ font-size: 28px; margin-bottom: 6px; }
        .section-head p{ color: var(--muted); }
        .gallery .cards{ display:grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap:14px; }
        @media (max-width: 980px){ .gallery .cards{ grid-template-columns: 1fr; } }
        .scene{
          position:relative; border-radius: 16px; height: 220px; overflow:hidden; background:#fff;
          border:1px solid var(--stroke); box-shadow: var(--shadow);
        }
        .scene::before{
          content:''; position:absolute; inset:0;
          background: radial-gradient(700px 400px at 30% -10%, rgba(154,240,255,.18), transparent 60%),
                      radial-gradient(700px 400px at 70% -20%, rgba(255,185,150,.16), transparent 65%);
        }
        .scene .tag{
          position:absolute; left:12px; top:12px; font-weight:800; font-size:12px; padding:6px 10px; border-radius:999px;
          background:#fff; border:1px solid var(--stroke); box-shadow: var(--shadow);
        }
        .scene.s1{ background-image: linear-gradient(180deg, #f5fbf7, #e8f6ef); }
        .scene.s2{ background-image: linear-gradient(180deg, #f3f8ff, #eaf2ff); }
        .scene.s3{ background-image: linear-gradient(180deg, #f8f3ff, #f1eaff); }
        .shimmer::after{
          content:''; position:absolute; inset:-1px; background: linear-gradient(120deg, transparent 0%, rgba(255,255,255,.6) 18%, transparent 38%);
          transform: translateX(-100%); animation: shimmer 3.2s ease-in-out infinite;
        }
        @keyframes shimmer{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}

        /* HOW */
        .how h2{ font-size: 26px; margin-bottom: 12px; }
        .steps{ list-style:none; margin:0; padding:0; display:grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap:14px; }
        @media (max-width: 980px){ .steps{ grid-template-columns: 1fr; } }
        .steps li{
          display:flex; gap:12px; align-items:flex-start; background:#fff; border:1px solid var(--stroke); border-radius:16px; padding:16px; box-shadow: var(--shadow);
        }
        .step{
          width:28px; height:28px; border-radius:10px; display:grid; place-items:center; font-weight:900; color:#fff;
          background: linear-gradient(90deg, var(--brand), var(--blue));
        }

        /* PRICING (premium) */
        .pricing h2{ font-size: 26px; margin-bottom: 12px; }
        .tiers{
          display:grid;
          grid-template-columns: repeat(3, minmax(280px, 1fr)); /* 3 across on desktop */
          gap: 20px; align-items: stretch;
        }
        @media (max-width: 1024px){
          .tiers{ grid-template-columns: repeat(2, minmax(260px, 1fr)); } /* 2 across on tablet */
        }
        @media (max-width: 640px){
          .tiers{ grid-template-columns: 1fr; } /* 1 on mobile */
        }
        .tier{
          position:relative;
          background:#fff; border:1px solid var(--stroke); border-radius: 18px; padding: 22px; text-align:center; box-shadow: var(--shadow);
        }
        .tier-head{ font-weight:900; letter-spacing:.02em; font-size:14px; color:#1f2a37; }
        .price{ font-size: 34px; font-weight: 900; margin: 10px 0 12px; }
        .price span{ font-size:14px; color: var(--muted); margin-left: 4px; }
        .tier ul{ list-style:none; padding:0; margin:0; color: var(--muted); line-height:1.55; }
        .tier ul li + li{ margin-top: 6px; }
        .tier.featured{
          outline: 2px solid rgba(58,168,255,.28);
          background: linear-gradient(180deg, rgba(58,168,255,.07), rgba(255,255,255,1) 58%);
          transform: translateY(-2px);
        }
        .tier .ribbon{
          position:absolute; top:12px; right:12px; font-size:11px; font-weight:900; padding:6px 8px; border-radius:999px;
          background: linear-gradient(90deg, var(--blue), var(--lilac)); color:#fff; box-shadow: 0 10px 22px rgba(58,168,255,.18);
        }

        /* CLOSER */
        .closer { padding-bottom: 54px; }
        .closer-card{
          background: #fff; border: 1px solid var(--stroke); border-radius: 18px; padding: 24px; text-align: center; box-shadow: var(--shadow);
        }

        /* Motion preferences */
        @media (prefers-reduced-motion: reduce){
          .spin, .pulse, .shimmer::after { animation: none !important; }
        }
      `}</style>
    </main>
  );
}
