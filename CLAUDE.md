# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16.2.1 application using the App Router with TypeScript and Tailwind CSS v4. The project was bootstrapped with `create-next-app` and includes modern Next.js tooling.

**Critical:** This Next.js version has breaking changes that differ from standard training data. Read the documentation in `node_modules/next/dist/docs/` before implementing features. Pay attention to deprecation notices in any code you modify.

## Tech Stack

- **Framework:** Next.js 16.2.1 (App Router)
- **Runtime:** React 19.2.4
- **Language:** TypeScript 5 (strict mode enabled)
- **Styling:** Tailwind CSS v4 with `@tailwindcss/postcss`
- **Linting:** ESLint 9 with `eslint-config-next` (TypeScript + Core Web Vitals)
- **Fonts:** Geist (via `next/font/google`)

## Common Development Commands

### Setup & Development
```bash
npm run dev          # Start development server on http://localhost:3000
npm run build        # Create production build
npm run start        # Start production server
npm run lint         # Run ESLint across the codebase
```

### Single File Linting
```bash
npx eslint <file-path>
```

## Project Architecture

### File Structure
```
app/                    # App Router directory (Next.js 13+)
  layout.tsx           # Root layout (metadata, fonts, global structure)
  page.tsx             # Home page component
  globals.css          # Global styles with Tailwind CSS
  favicon.ico          # Favicon asset

public/                # Static assets (images, SVGs, etc.)
  next.svg
  vercel.svg
  file.svg
  globe.svg
  window.svg
```

### Key Patterns

1. **App Router Conventions:**
   - Server components by default (no `"use client"` directive needed for pages)
   - Layouts are hierarchical and support nesting
   - `layout.tsx` wraps all pages with shared UI (HTML structure, metadata)
   - `page.tsx` exports the main component for each route

2. **Styling with Tailwind CSS v4:**
   - Uses `@import "tailwindcss"` in `globals.css`
   - CSS custom properties defined in `:root` and `@theme inline`
   - Dark mode support via `@media (prefers-color-scheme: dark)`
   - Utility classes for responsive design (e.g., `sm:`, `md:`)

3. **Font Optimization:**
   - Geist fonts loaded via `next/font/google`
   - Automatically optimized and self-hosted
   - Font variables injected into CSS: `--font-geist-sans`, `--font-geist-mono`

4. **TypeScript Configuration:**
   - `moduleResolution: "bundler"` (Next.js specific)
   - `strict: true` - full type safety
   - Path alias: `@/*` maps to project root
   - `noEmit: true` - TypeScript only for type checking

5. **ESLint Configuration:**
   - Uses flat config format (`eslint.config.mjs`)
   - Combines `nextVitals` (accessibility, performance) and `nextTs` (TypeScript rules)
   - Extends/excludes standard Next.js ignore patterns

## Next.js Documentation Reference

Since this version deviates from standard Next.js documentation, consult:
- `node_modules/next/dist/docs/` for version-specific guides
- Look for deprecation warnings in any Next.js imports or APIs
- Test examples thoroughly as API signatures may differ

## Important Notes

- **No testing framework configured** yet (Jest/Vitest not set up)
- No environment variables or `.env.local` file present
- No API routes, middleware, or advanced features currently
- This is a starter template - minimal custom code outside of app/ and public/

## When Adding Features

1. Check `node_modules/next/dist/docs/` for current API signatures
2. Follow existing patterns in `app/` for file placement
3. Maintain TypeScript strict mode - no `any` types
4. Use Tailwind utilities over custom CSS when possible
5. Run `npm run lint` before committing to catch issues early
