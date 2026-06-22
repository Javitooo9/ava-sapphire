# Ava Sapphire — Site Vitrine

Site vitrine premium pour une société de négoce de saphirs d'exception.

## Stack technique

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** — design sombre, couleur or `#C4A35A`
- **next-intl** — multilingue FR/EN
- **Supabase** — base de données, stockage images, auth admin

## Structure des pages publiques

| Route | Description |
|-------|-------------|
| `/fr` `/en` | Page d'accueil avec hero + présentation |
| `/fr/catalogue` | Catalogue filtrable par couleur |
| `/fr/catalogue/[id]` | Fiche produit détaillée |
| `/fr/sapphire` | Page pédagogique "Le monde du saphir" |
| `/fr/expertise` | Service d'expertise gemmologique |
| `/fr/contact` | Formulaire de contact |
| `/fr/rdv` | Prise de RDV (B2B / Particulier) via Calendly |

## Back-office admin

URL : `/admin/dashboard`

| Route | Description |
|-------|-------------|
| `/admin/login` | Connexion admin |
| `/admin/dashboard` | Tableau de bord |
| `/admin/products` | Gestion des produits |
| `/admin/newsletter` | Envoi de newsletters |

## Installation

```bash
npm install
cp .env.local.example .env.local
# Remplir les variables dans .env.local
npm run dev
```

## Configuration Supabase

1. Créer un projet sur [supabase.com](https://supabase.com)
2. Exécuter `supabase-schema.sql` dans l'éditeur SQL
3. Copier les clés dans `.env.local`

## Liens RDV à configurer

Dans `src/app/[locale]/rdv/page.tsx`, remplacer les liens Calendly par vos vrais liens.

## Photos terrain

Placer vos photos dans `/public/images/` et les référencer dans les pages.

## Déploiement recommandé

[Vercel](https://vercel.com) — déploiement automatique depuis GitHub.
