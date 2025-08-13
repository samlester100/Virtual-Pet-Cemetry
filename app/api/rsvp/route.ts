import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  // TODO: connect to Supabase and store RSVP
  const body = await req.json().catch(() => ({}));
  return NextResponse.json({ ok: true, received: body });
}
