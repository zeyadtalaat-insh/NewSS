# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Run production build
npm run lint     # ESLint check
```

There are no test commands configured in this project.

## Architecture

This is a **Next.js App Router** marketing website for SuperStudiosAI with three pages: Home (`/`), Partner Program (`/partner`), and Academy (`/academy`).

### Pages & Sections
Each page is composed of independent section components stacked vertically. Sections live in:
- `src/components/sections/` — Home page sections
- `src/components/sections/partner/` — Partner page sections
- `src/components/academy/` — Academy page sections

### Global State (Context API)
Two contexts wrap the entire app in `src/app/layout.tsx`:
- **`LanguageContext`** (`src/components/LanguageContext.tsx`) — English/Arabic toggle with RTL support. Components consume it via `useLanguage()`, which returns `{ language, setLanguage, t }` where `t` is a translation lookup function.
- **`ThemeContext`** (`src/components/ThemeProvider.tsx`) — Dark/light mode toggle via `useTheme()`.

### Translations
All UI strings are defined in `src/lib/translations.ts` as nested objects keyed by component/section name and language code (`en`/`ar`). When adding new text, add translations for both languages there.

### Styling
- **Tailwind CSS v4** via `@tailwindcss/postcss` — no `tailwind.config.ts` plugins required for v4 features
- Design tokens are CSS variables in `src/app/globals.css`: primary pink `#e8267a`, dark background `#0f0c14`
- Custom animations defined in globals.css: `blob-float`, `fade-in-up`, `shimmer`, `glow-pulse`
- Path alias `@/*` maps to `src/*`

### Component Library
shadcn components (new-york style, neutral base) live in `src/components/ui/`. Add new shadcn components with `npx shadcn@latest add <component>`.

### Key Integrations
- **Google Tag Manager / Analytics** — injected in root layout
- **Calendly** — embedded in `src/components/sections/Booking.tsx`
- **WhatsApp widget** — `src/components/WhatsAppWidget.tsx`
- **Embla Carousel** — used in `src/components/blocks/logos3.tsx`
- **Framer Motion** — used throughout for scroll-triggered animations
