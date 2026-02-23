# Behavioral Inference Layer — Marketing site

Minimalist, premium landing page for infrastructure that translates human behavior into structured signals software can reason about.

## Stack

- **Next.js 14** (App Router) + **TypeScript** + **Tailwind CSS**
- Dark mode, responsive (mobile-first), accessible
- SEO and OpenGraph metadata
- Subtle CSS animations

## Setup

### Install

```bash
npm install
```

### Develop

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
```

### Run production build

```bash
npm run start
```

## Deploy (Vercel)

1. Push the repo to GitHub (or connect your Git provider in Vercel).
2. In [Vercel](https://vercel.com), **Add New Project** and import the repo.
3. Leave **Build Command** as `next build` and **Output Directory** as default.
4. Deploy. Vercel will detect Next.js and set everything automatically.

Or with the Vercel CLI:

```bash
npx vercel
```

Follow the prompts and deploy.

## Project structure

```
├── app/
│   ├── layout.tsx      # Root layout, metadata, fonts
│   ├── page.tsx        # Single-page landing
│   └── globals.css     # Tailwind + CSS variables
├── components/
│   ├── CopyButton.tsx  # Copy to clipboard for API/definition blocks
│   ├── Section.tsx     # Section container + title/lead
│   ├── SkipLink.tsx    # A11y skip to content
│   ├── Hero.tsx
│   ├── Problem.tsx
│   ├── Solution.tsx
│   ├── HowItWorks.tsx
│   ├── HowItWorksDiagram.tsx
│   ├── Outputs.tsx
│   ├── UseCases.tsx
│   ├── WhyNow.tsx
│   ├── Progress.tsx
│   ├── Credibility.tsx
│   └── Footer.tsx      # Request access form + CTA
├── docs/
│   └── MESSAGE-ARCHITECTURE.md  # Section takeaways + headline variations
├── tailwind.config.ts
├── next.config.js
└── package.json
```

## Request access form

The footer “Request access” form is client-only with a dummy submit handler (logs to console and shows a success message). To wire it to a backend or email provider, edit `components/Footer.tsx` and replace the `handleSubmit` logic with a `fetch()` call to your API or form service.

## Contact link

Update the Contact href in `components/Footer.tsx` from `mailto:hello@example.com` to your real contact email or page.
