# Personal ePortfolio

A personal ePortfolio and developer portfolio built with Next.js, React, TypeScript, and Tailwind CSS. It will document the owner's progression from university student to software engineer without inventing personal information or project details.

## Stack

- Next.js App Router
- React and TypeScript
- Tailwind CSS
- ESLint
- Supabase Auth, Database and Storage foundation

## Getting started

Install dependencies and start the local development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

## Supabase setup

Supabase is the planned content backend for projects, skills, achievements and portfolio assets.

1. Create a project at [supabase.com](https://supabase.com).
2. Open the SQL Editor and run [`supabase/schema.sql`](supabase/schema.sql).
3. Copy `.env.example` to `.env.local`.
4. Add the project URL and publishable key from Supabase project settings.
5. Create your owner account in Supabase Authentication.

Do not expose a Supabase secret/service-role key in the browser or commit `.env.local`. The public pages remain backed by the typed files until the authenticated admin editor is added.

After configuration, open `/admin/login` to sign in. The protected `/admin` dashboard lets the authenticated owner create, edit, publish, unpublish and delete projects, skill groups and achievements. Public pages will be migrated from the typed files to published Supabase records in the next content migration step.

## Commands

```bash
npm run lint
npm run build
npm run start
```

## Project structure

```
app/          Route files and global styles
components/   Reusable interface components
data/         Structured portfolio content
lib/          Shared utilities and helpers
lib/supabase/ Supabase browser/server clients and database types
public/       Static assets
supabase/     Database tables, row-level security and storage policies
```

Portfolio content will live in typed files under `data/`. Project images, certificates, and documents belong in the corresponding `public/` folders.

## Development approach

Build in small, verified stages. Do not add personal details, achievements, project facts, or links unless they have been provided. See [AGENTS.md](AGENTS.md) for project conventions.
