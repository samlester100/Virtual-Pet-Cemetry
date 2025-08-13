// app/page.tsx
import Link from 'next/link';

export const metadata = {
  title: 'Virtual Pet Cemetery — A Peaceful, Living Memorial',
  description:
    'Create a beautiful, shared memorial world for your pet. Build a plot, invite loved ones, and host an online funeral with livestream and tributes.',
};

export default function Home() {
  return (
    <main className="wow-root">
      {/* BACKDROP DECOR */}
      <div className="wow-bg">
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="blob b3" />
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
          <p>Soft light, calming colors, and motion—each space is yours to shape.</p>
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
          <div className="tier pro glow">
            <div className="title">Plus</div>
            <div className="price">£9<span>/mo</span></div>
            <ul>
              <li>Themes & ambience</li>
              <li>Guestbook & tributes</li>
              <li>3 ceremonies / year</li>
              <li>90-day recordings</li>
            </ul>
            <Link href="/world" className="btn-hero glow slim">Start Plus</Link>
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

      {/* INLINE GLOBAL STYLES (self-contained) */}
      <style jsx global>{`
        :root{
          --bg: #070b10;
          --fg: #e8f0f7;
          --muted: #a5b3c3;
          --glass: rgba(255,255,255,.08);
          --stroke: rgba(255,255,255,.15);
          --brand: #66e4a6;
          --brand-2: #8ec5ff;
          --brand-3: #e7a7ff;
          --brand-4: #ffd89e;
          --shadow: 0 20px 60px rgba(0,0,0,.35);
        }
        .wow-root{
          position: relative;
          min-height: 100vh;
          color: var(--fg);
          background: radial-gradient(1400px 800px at 10% -10%, #0b1221 0%, transparent 60%),
                      radial-gradient(1000px 700px at 100% -10%, #0a1426 0%, transparent 65%),
                      #070b10;
          overflow: clip;
        }
        /* Background blobs + grid */
        .wow-bg { position: fixed; inset: 0; z-index: -2; }
        .blob { position: absolute; width: 70vmin; height: 70vmin; filter: blur(42px); opacity:.55; animation: float 14s ease-in-out infinite; }
        .b1 { left: -10vmin; top: -8vmin; background: radial-gradient(circle at 30% 30%, #3affc3, #2aa07b 40%, transparent 60%); }
        .b2 { right: -8vmin; top: -6vmin; background: radial-gradient(circle at 60% 40%, #7bc4ff, #4771f0 45%, transparent 62%); animation-delay: -6s; }
        .b3 { left: 10vmin; bottom: -20vmin; background: radial-gradient(circle at 40% 40%, #ffcf8b, #ff7db6 40%, transparent 62%); animation-delay: -3s; }
        @keyframes float { 0%,100% { transform: translateY(0) scale(1); } 50% { transform: translateY(20px) scale(1.02); } }
        .grid-veil { position:absolute; inset:0; background-image: radial-gradient(rgba(255,255,255,.06) 1px, transparent 1px); background-size: 26px 26px; mask-image: linear-gradient(to bottom, rgba(255,255,255,.9), rgba(255,255,255,.2)); }

        .frame{ max-width: 1180px; margin: 0 auto; padding: 28px 18px; }

        /* HERO */
        .hero{ display: grid; grid-template-columns: 1.1fr 1fr; gap: 22px; align-items: center; }
        @media (max-width: 980px){ .hero{ grid-template-columns: 1fr; } }
        .chip{ display:inline-block; font-size:12px; font-weight:700; letter-spacing:.06em; padding:6px 10px; border-radius:999px; color:#0a1b14;
               background: linear-gradient(90deg, #66e4a6, #9af0ff); box-shadow: 0 6px 18px rgba(102,228,166,.4); }
        .hero h1{ font-size: clamp(32px, 6vw, 56px); line-height: 1.05; margin: 12px 0 8px; letter-spacing:-.02em; }
        .hero h1 em{ color: #9af0ff; font-style: normal; text-shadow: 0 4px 30px rgba(154,240,255,.45); }
        .sub{ color: var(--muted); font-size: 18px; max-width: 56ch; }
        .note{ color: var(--muted); margin-top: 10px; }
        .cta{ display:flex; gap:12px; flex-wrap: wrap; margin-top: 14px; }

        .btn-hero{ border-radius: 14px; padding: 12px 16px; font-weight: 700; font-size: 15px;
                   transition: transform .15s ease, box-shadow .15s ease, background .15s ease;
                   border: 1px solid var(--stroke); text-decoration:none; display:inline-flex; align-items:center; gap:10px; backdrop-filter: blur(10px); }
        .btn-hero.primary{ color:#0b1217; background: linear-gradient(90deg, #66e4a6, #9af0ff); box-shadow: 0 10px 30px rgba(102,228,166,.35); }
        .btn-hero.primary:hover{ transform: translateY(-1px) scale(1.01); }
        .btn-hero.glow{ color:#0b1217; background: linear-gradient(90deg, #ffd89e, #ff7db6); box-shadow: 0 10px 30px rgba(255,145,170,.35); }
        .btn-hero.ghost{ color: var(--fg); background: rgba(255,255,255,.06); }
        .btn-hero.ghost:hover{ background: rgba(255,255,255,.1); }
        .btn-hero.slim{ padding: 10px 14px; border-radius: 12px; }

        .hero-viz{ display:flex; flex-direction: column; gap:12px; align-items:center; }
        .viz-card{ position: relative; width: 100%; max-width: 560px; aspect-ratio: 16/10;
                   border-radius: 18px; background: rgba(255,255,255,.06); border: 1px solid var(--stroke);
                   box-shadow: var(--shadow); overflow: hidden; backdrop-filter: blur(10px); }
        .viz-sky{ position:absolute; inset:0; background: radial-gradient(1200px 600px at 60% -10%, rgba(122,178,255,.35), transparent 60%),
                                              radial-gradient(900px 500px at 30% -20%, rgba(255,205,133,.28), transparent 60%); }
        .viz-hill{ position:absolute; left:-10%; right:-10%; bottom:-12%; height:60%; border-radius: 50% 50% 0 0 / 70% 70% 0 0;
                   background: linear-gradient(180deg, #1a6c54, #0f3d2f); box-shadow: 0 -10px 40px rgba(0,0,0,.25) inset; }
        .viz-stone{ position:absolute; left:16%; bottom:23%; width:72px; height:72px; border-radius:20px; display:grid; place-items:center; font-size:30px;
                    background: linear-gradient(180deg, #e5e7ea, #bfc5cc); color:#2b2b2b; transform: rotate(-6deg); box-shadow: 0 10px 24px rgba(0,0,0,.25); }
        .viz-candle{ position:absolute; left:40%; bottom:25%; width:18px; height:44px; border-radius:6px; background:#fff4e4; box-shadow: 0 0 22px rgba(255,210,130,.75); }
        .viz-candle::after{ content:''; position:absolute; left:50%; top:-10px; transform:translateX(-50%); width:10px; height:16px;
                             background: radial-gradient(circle at 50% 40%, #ffd68a, #ffad57 70%, transparent 72%); border-radius: 50%; filter: blur(.2px); }
        .viz-tree{ position:absolute; right:14%; bottom:20%; width:120px; height:120px; border-radius: 60% 60% 55% 55%;
                   background: radial-gradient(110px 70px at 50% 40%, #2a7b53, #174635 70%); box-shadow: 0 14px 28px rgba(0,0,0,.28); }
        .viz-glow{ position:absolute; inset:auto; left:0; right:0; bottom:0; height:35%;
                   background: radial-gradient(50% 100% at 50% 100%, rgba(102,228,166,.25), transparent 60%); }
        .float{ animation: float 9s ease-in-out infinite; }
        .spin{ animation: spin 24s linear infinite; }
        .pulse{ animation: pulse 1.6s ease-in-out infinite; }
        @keyframes spin { 0%{transform: rotate(-6deg);} 100%{transform: rotate(354deg);} }
        @keyframes pulse { 0%,100%{ box-shadow: 0 0 18px rgba(255,210,130,.55);} 50%{ box-shadow: 0 0 26px rgba(255,210,130,.9);} }

        .viz-badges{ display:flex; gap:10px; flex-wrap:wrap; }
        .badge{ display:flex; align-items:center; gap:8px; padding:8px 12px; border-radius: 999px; background: rgba(255,255,255,.08); border:1px solid var(--stroke); font-weight:600; font-size:13px; backdrop-filter: blur(10px); }
        .dot{ display:inline-block; width:8px; height:8px; border-radius:50%; background: #9af0ff; box-shadow: 0 0 0 3px rgba(154,240,255,.15); }
        .dot.live{ background:#ff8aa1; box-shadow: 0 0 0 3px rgba(255,138,161,.18); }
        .dot.safe{ background:#66e4a6; box-shadow: 0 0 0 3px rgba(102,228,166,.18); }

        /* PILLARS */
        .pillars{ display:grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap:16px; }
        @media (max-width: 980px){ .pillars{ grid-template-columns: 1fr; } }
        .pillar{ border:1px solid var(--stroke); border-radius:16px; padding:16px;
                 background: linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.04)); backdrop-filter: blur(8px); }
        .pillar .icon{ font-size:22px; }
        .pillar h3{ margin:6px 0 6px; font-size:20px; }
        .pillar p{ color: var(--muted); }
        .hover-rise{ transition: transform .2s ease, box-shadow .2s ease; }
        .hover-rise:hover{ transform: translateY(-3px); box-shadow: 0 18px 40px rgba(0,0,0,.25); }
        .link{ color: #9af0ff; text-decoration: none; font-weight:700; }
        .link:hover{ text-decoration: underline; }

        /* GALLERY */
        .gallery .head h2{ font-size: 28px; margin-bottom: 6px; }
        .gallery .head p{ color: var(--muted); margin-bottom: 12px; }
        .gallery .cards{ display:grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap:14px; }
        @media (max-width: 980px){ .gallery .cards{ grid-template-columns: 1fr; } }
        .scene{ position:relative; border-radius:16px; height:220px; overflow:hidden; background: #0f1723; border:1px solid var(--stroke); box-shadow: var(--shadow); }
        .scene::before{ content:''; position:absolute; inset:0;
          background: radial-gradient(700px 400px at 30% -10%, rgba(154,240,255,.22), transparent 60%),
                      radial-gradient(700px 400px at 70% -20%, rgba(255,185,150,.20), transparent 65%); }
        .scene .tag{ position:absolute; left:12px; top:12px; font-weight:700; font-size:12px; padding:6px 10px; border-radius:999px;
                     background: rgba(255,255,255,.08); border:1px solid var(--stroke); backdrop-filter: blur(8px); }
        .scene.s1{ background-image: linear-gradient(180deg, #1b4234, #0f241d); }
        .scene.s2{ background-image: linear-gradient(180deg, #13223f, #0c1426); }
        .scene.s3{ background-image: linear-gradient(180deg, #301b3f, #150f20); }
        .shimmer{ position:relative; }
        .shimmer::after{ content:''; position:absolute; inset:-1px; background: linear-gradient(120deg, transparent 0%, rgba(255,255,255,.12) 20%, transparent 40%); transform: translateX(-100%); animation: shimmer 3.2s ease-in-out infinite; }
        @keyframes shimmer { 0%{ transform: translateX(-100%);} 100%{ transform: translateX(100%);} }

        /* HOW */
        .how h2{ font-size: 26px; margin-bottom: 10px; }
        .steps{ list-style: none; margin:0; padding:0; display:grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap:14px; }
        @media (max-width: 980px){ .steps{ grid-template-columns: 1fr; } }
        .steps li{ display:flex; gap:12px; align-items:flex-start; border:1px solid var(--stroke); border-radius:16px; padding:16px;
                   background: linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.04)); backdrop-filter: blur(8px); }
        .num{ width:28px; height:28px; border-radius: 10px; display:grid; place-items:center; font-weight:800;
              background: linear-gradient(90deg, #66e4a6, #9af0ff); color:#0a1217; }

        /* PRICING */
        .pricing h2{ font-size: 26px; margin-bottom: 10px; }
        .tiers{ display:grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap:16px; }
        @media (max-width: 980px){ .tiers{ grid-template-columns: 1fr; } }
        .tier{ border:1px solid var(--stroke); border-radius:18px; padding:18px;
               background: linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.04)); box-shadow: var(--shadow); }
        .tier .title{ font-weight:800; letter-spacing:.02em; }
        .tier .price{ font-size: 30px; font-weight: 900; margin: 8px 0; }
        .tier .price span{ font-size:14px; color: var(--muted); margin-left: 4px; }
        .tier ul{ margin:0; padding-left: 18px; color: var(--muted); }
        .tier.pro{ outline: 3px solid rgba(154,240,255,.25); background: linear-gradient(180deg, rgba(154,240,255,.14), rgba(255,255,255,.04)); }
        .glow{ box-shadow: 0 0 40px rgba(154,240,255,.25); }

        /* FOOTER CTA */
        .footer-cta{ text-align:center; }
        .footer-cta h2{ font-size: 28px; margin-bottom: 6px; }
        .footer-cta p{ color: var(--muted); }
      `}</style>
    </main>
  );
}
