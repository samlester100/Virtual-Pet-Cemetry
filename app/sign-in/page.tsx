'use client';

import { signIn } from 'next-auth/react';

export default function SignInPage() {
  return (
    <main className="max-w-md mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Sign in</h1>

      {/* Generic button that shows provider chooser */}
      <button
        onClick={() => signIn()} // or signIn('google') / 'credentials'
        className="px-4 py-2 rounded bg-black text-white"
      >
        Continue
      </button>
    </main>
  );
}
