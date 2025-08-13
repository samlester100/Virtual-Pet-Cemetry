'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../lib/supabaseClient'; // relative path to Supabase

export default function Header() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Get current user
    supabase.auth.getUser().then(({ data }) => setUser(data.user ?? null));

    // Listen for auth changes
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  return (
    <header style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
          🌿 Virtual Pet Cemetery
        </Link>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link href="/world">World</Link>
          <Link href="/event/demo">Funeral Demo</Link>
          {user ? (
            <button onClick={handleSignOut}>Sign out</button>
          ) : (
            <Link href="/login">Sign in</Link>
          )}
        </div>
      </nav>
    </header>
  );
}
