// lib/supabaseClient.ts
'use client';

import { createClient } from '@supabase/supabase-js';

/**
 * Create the client only in the browser. During SSR/prerender (build time),
 * we return a harmless placeholder so Next won't try to init Supabase
 * without env vars and crash the build.
 */
export const supabase =
  typeof window !== 'undefined'
    ? createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL as string,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
      )
    // Placeholder object with the minimal shape we call.
    // We cast to any so TypeScript is happy; these methods should never run on the server.
    : ({} as any);
