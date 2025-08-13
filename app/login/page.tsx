'use client';

import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function sendLink(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: window.location.origin }
    });
    if (error) setError(error.message);
    else setSent(true);
  }

  return (
    <div className="card">
      <h1>Sign in</h1>
      <p className="small">Enter your email and we’ll send a one-time sign-in link.</p>
      {sent ? (
        <p>Check your email for the sign-in link.</p>
      ) : (
        <form onSubmit={sendLink} className="grid" style={{maxWidth:380}}>
          <input
            className="input"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
          <button className="btn" type="submit">Send magic link</button>
        </form>
      )}
      {error && <p style={{ color: 'crimson' }}>{error}</p>}
    </div>
  );
}
