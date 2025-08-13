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

      {/* NAV / HERO */}
      <section className="hero frame">
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
          <div className="viz-card">
            <div className="viz-sky" />
            <div className="viz-hill" />
            <div className="viz-stone">🐾</div>
            <div className="viz-candle" />
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
      <section className="pillars frame">
        <div className="pillar">
          <div className="icon">🕯️</div>
          <h3>Rituals & Tributes</h3>
          <p>Light candles, leave flowers and notes, add photos and audio messages.</p>
          <Link href="/world" className="link">Create your memorial →</Link>
        </div>
        <div className="pillar">
          <div className="icon">🎥</div>
          <h3>Online Funerals</h3>
          <p>Embed a livestream (Mux/Zoom), play slideshows, and keep the recording.</p>
          <Link href="/event/demo" className="link">See a demo →</Link>
        </div>
        <div className="pillar">
          <div className="icon">🌳</div>
          <h3>Custom World</h3>
          <p>Choose terrain, weather, music, and objects. Make it feel like their place.</p>
          <Link href="/world" className="link">Start building →</Link>
        </div>
      </section>

      {/* SHOWCASE / GALLERY */}
      <section className="gallery frame">
        <div className="head">
          <h2>Memorial scenes that feel alive</h2>
          <p>Soft light, calming colors, and subtle motion—each space is yours to shape.</p>
        </div>
        <div className="cards">
          <div className="scene s1">
            <div className="tag">Dawn Garden</div>
          </div>
          <div className="scene s2">
            <div className="tag">Forest Path</div>
          </div>
          <div className="scene s3">
            <div className="tag">Starlit Grove</div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how frame">
        <h2>How it works</h2>
        <ol className="steps">
          <li>
            <span className="num">1</span>
            <div>
              <h4>Build your plot</h4>
              <p>Place stones, trees, benches and candles in a calm 3D world.</p>
            </div>
          </li>
          <li>
            <span className="num">2</span>
            <div>
              <h4>Invite loved ones</h4>
              <p>Share a link for messages, tributes, and quiet visits from anywhere.</p>
            </div>
          </li>
          <li>
            <span className="num">3</span>
            <div>
              <h4>Hold a ceremony</h4>
              <p>Stream the service, play slideshows, and preserve a recording to keep.</p>
            </div>
          </li>
        </ol>
      </section>

      {/* PRICING */}
      <section className="pricing frame">
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
      <section className="footer-cta frame">
        <h2>Ready when you are</h2>
        <p>Create a peaceful place today. Invite others when it feels right.</p>
        <div className="cta">
          <Link href="/world" className="btn-hero primary">Open the Builder</Link>
          <Link href="/login" className="btn-hero ghost">Sign in</Link>
        </div>
      </section>
    </main>
  );
}
