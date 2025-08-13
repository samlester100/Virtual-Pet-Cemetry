// app/page.tsx
import Link from 'next/link';

export const metadata = {
  title: 'Virtual Pet Cemetery — A Peaceful Memorial World',
  description:
    'Create a gentle memorial space for your pet, invite loved ones, and host an online funeral from anywhere.',
};

export default function Home() {
  return (
    <main className="home">
      {/* HERO */}
      <section className="hero card">
        <div className="hero-copy">
          <span className="badge">MVP Live</span>
          <h1 className="hero-title">A peaceful place to remember our pets</h1>
          <p className="hero-sub">
            Create a beautiful memorial plot, light candles, leave messages, and invite family
            and friends to visit. When you’re ready, host an online funeral in the same space.
          </p>

          <div className="hero-actions">
            <Link className="btn" href="/world">Create a Memorial</Link>
            <Link className="btn secondary" href="/event/demo">Preview a Funeral</Link>
          </div>
          <p className="small hero-footnote">Works on mobile & desktop — no download required.</p>
        </div>

        {/* Simple illustrative preview */}
        <div className="hero-visual">
          <div className="hero-preview" aria-hidden>
            <div className="preview-sky" />
            <div className="preview-hill" />
            <div className="preview-stone">🐾</div>
            <div className="preview-candle" />
            <div className="preview-tree" />
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="section card">
        <h2 className="section-title">What you can do</h2>
        <div className="pillars">
          <div className="pillar">
            <div className="pillar-icon" aria-hidden>🕯️</div>
            <h3>Create a memorial</h3>
            <p>Place stones, benches, trees and more in a calm 3D world. Personalize with photos and notes.</p>
            <Link href="/world" className="link">Start building →</Link>
          </div>
          <div className="pillar">
            <div className="pillar-icon" aria-hidden>🎥</div>
            <h3>Hold an online funeral</h3>
            <p>Livestream the service in the same space. Friends and family can attend from anywhere.</p>
            <Link href="/event/demo" className="link">See a demo →</Link>
          </div>
          <div className="pillar">
            <div className="pillar-icon" aria-hidden>💬</div>
            <h3>Gather messages & candles</h3>
            <p>Invite guests to leave tributes, light virtual candles, and share memories.</p>
            <Link href="/world" className="link">Create your space →</Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section card">
        <h2 className="section-title">How it works</h2>
        <ol className="steps">
          <li>
            <strong>Build your plot</strong>
            <p>Open the builder and place objects. Everything saves locally — and to the cloud when signed in.</p>
          </li>
          <li>
            <strong>Invite people</strong>
            <p>Share a link so loved ones can visit the memorial and leave messages.</p>
          </li>
          <li>
            <strong>Schedule a ceremony</strong>
            <p>Embed a livestream (Mux or Zoom) with music, slides, and a recording to keep.</p>
          </li>
        </ol>
      </section>

      {/* PRICING TEASER */}
      <section className="section card">
        <h2 className="section-title">Start free, upgrade any time</h2>
        <div className="pricing">
          <div className="price-tier">
            <div className="price-name">Free</div>
            <div className="price-amt">£0</div>
            <ul className="price-list">
              <li>1 memorial plot</li>
              <li>Basic assets & candles</li>
              <li>30-min livestream (embed)</li>
              <li>7-day recording</li>
            </ul>
          </div>
          <div className="price-tier highlight">
            <div className="price-name">Plus</div>
            <div className="price-amt">£9<span className="muted">/mo</span></div>
            <ul className="price-list">
              <li>Themes & ambience</li>
              <li>Guestbook & tributes</li>
              <li>3 ceremonies / year</li>
              <li>90-day recordings</li>
            </ul>
          </div>
          <div className="price-tier">
            <div className="price-name">Pro</div>
            <div className="price-amt">£29<span className="muted">/mo</span></div>
            <ul className="price-list">
              <li>Full HD RTMP</li>
              <li>Live captions</li>
              <li>Lifetime recordings</li>
              <li>Highlight reels</li>
            </ul>
          </div>
        </div>

        <div className="center mt16">
          <Link className="btn" href="/world">Create your memorial</Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="section card">
        <h2 className="section-title">Questions</h2>
        <div className="faq">
          <details>
            <summary>Do I need to install anything?</summary>
            <p>No. It runs in your browser on mobile and desktop.</p>
          </details>
          <details>
            <summary>Can I keep the memorial private?</summary>
            <p>Yes. Set it to public, unlisted, or private — and moderate all messages.</p>
          </details>
          <details>
            <summary>How do online funerals work?</summary>
            <p>We embed a livestream (Mux or Zoom) into your memorial with chat, slides, and recording.</p>
          </details>
        </div>
        <div className="center mt16">
          <Link className="btn secondary" href="/event/demo">See a ceremony demo</Link>
        </div>
      </section>
    </main>
  );
}
