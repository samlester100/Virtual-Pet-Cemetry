import Link from 'next/link';

export default function Home() {
  return (
    <div className="grid two">
      <div className="card">
        <span className="badge">MVP Starter</span>
        <h1>Build a peaceful memorial world</h1>
        <p>Create a plot for your pet, customise the scene, and host an online funeral with guests worldwide.</p>
        <div style={{display:'flex',gap:12,marginTop:12}}>
          <Link className="btn" href="/world">Open the Builder</Link>
          <Link className="btn secondary" href="/event/demo">Preview a Funeral</Link>
        </div>
        <p className="small" style={{marginTop:12}}>
          This is a starter. Plug in Supabase/Stripe/Mux keys in <code>.env.local</code> to unlock accounts, payments and live streaming.
        </p>
      </div>
      <div className="card">
        <h2>What’s included</h2>
        <ul>
          <li>Three.js world canvas with orbit controls</li>
          <li>Place, move, rotate a few starter objects</li>
          <li>Save/load your plot to localStorage (Supabase ready)</li>
          <li>Event page with embedded video (Mux/Zoom placeholder)</li>
          <li>Clean UI you can expand</li>
        </ul>
        <h3>Next steps</h3>
        <ol>
          <li>Set env vars in <code>.env.local</code></li>
          <li>Connect your DB (Supabase)</li>
          <li>Switch the video embed to Mux Live or Zoom SDK</li>
        </ol>
      </div>
    </div>
  );
}
