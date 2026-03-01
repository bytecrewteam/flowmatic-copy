# Flowmatic

> Automate the boring. Ship the brilliant.

A complete dummy SaaS website built to showcase full-stack web development capabilities — landing page, blog, auth flow, and a full app dashboard. Built with Next.js 14, TypeScript, Tailwind CSS, and Bun.

---

## Tech Stack

- **Runtime:** Bun 1.x
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS + CSS custom properties
- **State:** Zustand
- **Charts:** Recharts
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

---

## Getting Started

### Prerequisites

Install Bun if you haven't already:

```bash
# macOS / Linux / WSL
curl -fsSL https://bun.sh/install | bash

# Windows (PowerShell)
powershell -c "irm bun.sh/install.ps1 | iex"
```

Verify installation:

```bash
bun --version
```

### Install dependencies

```bash
bun install
```

### Run the development server

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

| Command | Description |
|---|---|
| `bun run dev` | Start development server on port 3000 |
| `bun run build` | Build for production |
| `bun run start` | Start production server (after build) |
| `bun run lint` | Run ESLint |
| `bun run type-check` | Run TypeScript type checker without emitting files |

---

## Environment Variables

Copy `.env.example` to `.env.local` for local development:

```bash
cp .env.example .env.local
```

See `.env.example` for all required variables and their descriptions. Never commit `.env.local`.

---

## Project Structure

```
/app                    → Next.js App Router pages
  /app/*                → Protected app pages (dashboard, projects, etc.)
  /blog/*              → Blog listing and article pages
  /login, /signup      → Auth pages
  /pricing, /about, etc → Public marketing pages
/components
  /ui                  → Reusable primitive components
  /layout              → Navigation, sidebar, footer
  /sections            → Landing page sections
/lib
  /mock-data.ts        → All dummy data
  /store/*             → Zustand stores
/types                 → Shared TypeScript types
/styles                → Global CSS and design tokens
/public                → Static assets
middleware.ts          → Auth redirect simulation
vercel.json            → Vercel deployment configuration
```

---

## Deployment (Vercel)

This project is pre-configured for Vercel deployment via `vercel.json`.

### Deploy via Vercel CLI

```bash
# Install Vercel CLI with Bun
bun add -g vercel

# Login
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### Deploy via Vercel Dashboard

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Vercel will auto-detect Next.js and read `vercel.json` for Bun configuration
4. Add any environment variables from `.env.example` in the Vercel project settings
5. Click Deploy

No additional configuration is needed — `vercel.json` handles everything.

---

## Notes

- All data is dummy/hardcoded in `/lib/mock-data.ts` — no real backend
- Auth is simulated with Zustand + localStorage — no real authentication
- All forms show loading/success/error states but do not POST anywhere

---

**Status:** Successfully pushed to GitHub on $(date)