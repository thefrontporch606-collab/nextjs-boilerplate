create extension if not exists pgcrypto;

create table if not exists scratch_games (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  ticket_price numeric(10,2) not null default 10,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists scratch_tickets (
  id uuid primary key default gen_random_uuid(),
  game_id uuid not null references scratch_games(id) on delete cascade,
  ticket_number integer not null,
  prize_code text not null,
  min_sold_before_reveal integer not null default 0,
  sold_at timestamptz,
  purchase_ref text unique,
  buyer_name text,
  buyer_email text,
  created_at timestamptz not null default now(),
  unique (game_id, ticket_number)
);

create index if not exists idx_scratch_tickets_game_sold
  on scratch_tickets(game_id, sold_at);

create index if not exists idx_scratch_tickets_game_min_sold
  on scratch_tickets(game_id, min_sold_before_reveal);

alter table scratch_games enable row level security;
alter table scratch_tickets enable row level security;

drop policy if exists "read active games" on scratch_games;
create policy "read active games"
on scratch_games
for select
using (true);

drop policy if exists "read tickets" on scratch_tickets;
create policy "read tickets"
on scratch_tickets
for select
using (true);
