// app/page.tsx
import Link from 'next/link';

export const metadata = {
  title: 'Virtual Pet Cemetery — A Peaceful Memorial World',
  description:
    'Create a beautiful memorial space for your pet, host an online funeral, and invite friends and family to remember together.',
};

export default function Home() {
  return (
    <div className="home">
      {/* HERO */}
      <section className="hero card">
        <div className="hero-copy">
          <span className="badge">New • MVP Live</span>
          <h1 className="hero-title">A peaceful place to remember our pets</h1>
          <p className="hero-sub">
            Create a gentle, customizable memorial world. Invite loved ones to
            wander, light candles, leave notes — and host an online funeral from anywhere.
          </p>
          <div className="hero-actions">
            <Link className="btn" href="/world">Open the Builder</Link>
            <Link className="btn secondary" href="/event/demo">Preview a Funeral</Link>
          </div>
          <p className="small hero-footnote">
            No downloads needed. Works on mobile & desktop.
          </p>
        </div>
        <div className="hero-visual">
          {/* Simple “world preview” card */}
          <div className="hero-preview">
            <div className="preview-sky" />
            <div className="preview-hill" />
            <div className="preview-stone">🐾</div>
            <div className="preview-candle" />
            <div className="preview-tree" />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section card">
        <h2 className="section-title">How it works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-icon" aria-hidden>①</div>
            <h3>Create your plot</h3>
            <p>Pick a theme and place stones, benches, trees, candles, and more.</p>
          </div>
          <div className="step">
            <div className="step-icon" aria-hidden>②</div>
            <h3>Invite family & friends</h3>
            <p>Share a link to visit, leave notes, and light virtual candles.</p>
          </div>
          <div className="step">
            <div className="step-icon" aria-hidden>③</div>
            <h3>Hold an online funeral</h3>
            <p>Livestream the ceremony, play a slideshow, and keep the recording as a keepsake.</p>
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="section card">
        <h2 className="section-title">Thoughtful features</h2>
        <div className="feature-grid">
          <div className="feature">
            <div className="feature-icon" aria-hidden>🕯️</div>
            <h3>Rituals & tributes</h3>
            <p>Light candles, leave flowers, pawprints, notes, and audio messages.</p>
          </div>
          <div className="feature">
            <div className="feature-icon" aria-hidden>🌳</div>
            <h3>Custom world</h3>
            <p>Choose terrain, flora, structures, time of day, weather, and music.</p>
          </div>
          <div className="feature">
            <div className="feature-icon" aria-hidden>🎞️</div>
            <h3>Slideshows & keepsakes</h3>
            <p>Upload photos and videos, play during ceremonies, save recordings.</p>
          </div>
          <div className="feature">
            <div className="feature-icon" aria-hidden>🔒</div>
            <h3>Privacy controls</h3>
            <p>Make memorials public, unlisted, or private — with safe, moderated messages.</p>
          </div>
          <div className="feature">
            <div className="feature-icon" aria-hidden>♿</div>
            <h3>Accessible by design</h3>
            <p>Captions, keyboard navigation, reduced motion, high-contrast themes.</p>
          </div>
          <div className="feature">
            <div className="feature-icon" aria-hidden>💚</div>
            <h3>GDPR-first</h3>
            <p>Clear consent for recording, export/delete options, and sensible retention.</p>
          </div>
        </div>
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
              <li>Basic assets</li>
              <li>30-min livestream (embed)</li>
              <li>7-day recording</li>
            </ul>
          </div>
          <div className="price-tier highlight">
            <div className="price-name">Plus</div>
            <div className="price-amt">£9<span className="muted">/mo</span></div>
            <ul className="price-list">
              <li>Themes & ambient</li>
              <li>200 photos</li>
              <li>3 ceremonies/yr</li>
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

      {/* FAQ / FOOTER CTA */}
      <section className="section card">
        <h2 className="section-title">Questions</h2>
        <div className="faq">
          <details>
            <summary>Do I need to install anything?</summary>
            <p>No — it runs in your browser on mobile and desktop.</p>
          </details>
          <details>
            <summary>Can I keep the memorial private?</summary>
            <p>Yes. You can make it public, unlisted, or private, and moderate all messages.</p>
          </details>
          <details>
            <summary>How do online funerals work?</summary>
            <p>We embed a livestream (Mux or Zoom) into your memorial space with chat, slideshows, and recording.</p>
          </details>
        </div>
        <div className="center mt16">
          <Link className="btn secondary" href="/event/demo">See a ceremony demo</Link>
        </div>
      </section>
    </div>
  );
}
