-- Ava Sapphire — Schéma Supabase
-- À exécuter dans l'éditeur SQL de votre projet Supabase

-- Produits
create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  color text not null check (color in ('blue','pink','yellow','white','green','orange','purple','black')),
  weight_ct numeric(10,2) not null,
  origin text not null,
  clarity text,
  cut text,
  certificate text,
  images text[] default '{}',
  is_available boolean default true,
  created_at timestamptz default now()
);

-- Abonnés newsletter
create table if not exists newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  created_at timestamptz default now()
);

-- Messages de contact
create table if not exists contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  subject text not null,
  message text not null,
  created_at timestamptz default now()
);

-- RLS (Row Level Security)
alter table products enable row level security;
alter table newsletter_subscribers enable row level security;
alter table contact_messages enable row level security;

-- Lecture publique des produits disponibles
create policy "Produits visibles publiquement" on products
  for select using (is_available = true);

-- Seul le service role peut insérer/modifier
create policy "Admin peut tout faire" on products
  for all using (auth.role() = 'service_role');

create policy "Inscription newsletter" on newsletter_subscribers
  for insert with check (true);

create policy "Contact public" on contact_messages
  for insert with check (true);
