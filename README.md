# Virtual Online Pet Cemetery — Starter

This is an MVP starter for your virtual memorial world:
- Next.js (App Router) + Three.js world builder
- Event page with video embed placeholder (swap with Mux/Zoom later)
- Local save of plot design (Supabase-ready)

## 1) Run locally (optional)
```bash
npm i
npm run dev
# open http://localhost:3000
```

## 2) Prepare accounts
- **Vercel** (hosting): create an account.
- **Supabase** (database/auth): create a project, note the `PROJECT_URL` and `anon` key.
- **Stripe** (payments): enable test mode, get publishable + secret keys.
- **Mux** (live/VOD) *or* use **Zoom** SDK later.
(Optional now — the app works without keys.)

## 3) Environment variables
Create `.env.local` from `.env.example` and fill as you go.
At minimum you can keep them empty for a demo.

## 4) Deploy to Vercel
1. Create a **GitHub** repo.
2. Upload all files from this folder to the repo (GitHub website → Add file → Upload files).
3. In **Vercel**: New Project → Import from GitHub → pick the repo.
4. When prompted, add the env vars (you can leave blank to start).
5. Deploy. (Vercel auto-builds.)

## 5) Wire Supabase (later)
- In Supabase → SQL Editor, create tables:
```sql
create table if not exists plots (
  id uuid primary key default gen_random_uuid(),
  user_id uuid,
  title text,
  state jsonb not null default '[]'::jsonb,
  inserted_at timestamp with time zone default now()
);

create table if not exists events (
  id uuid primary key default gen_random_uuid(),
  plot_id uuid references plots(id) on delete cascade,
  title text,
  starts_at timestamptz,
  privacy text default 'unlisted',
  provider text default 'mux',
  join_url text,
  recording_url text,
  created_at timestamptz default now()
);
```
- In the code, replace localStorage with Supabase CRUD (I left a `Copy Plot JSON` button as a bridge).

## 6) Live funerals
- **Mux Live**: create a Live Stream → use the Playback ID in `NEXT_PUBLIC_MUX_PLAYBACK_ID` and embed the player.
- **Zoom SDK**: swap the `<iframe>` with Zoom Web SDK component and use JWT/credentials. For MVP, a simple Zoom link embedded is OK.

## 7) Next steps
- Add account system + billing gates (Stripe Checkout/Customer Portal).
- Real-time presence & chat (Liveblocks or Socket.io).
- Moderation, guestbook, candles persisted in DB.
- Theme presets, asset packs, slideshow generator.
- Test deployment trigger — Aug 14, 2025

```

