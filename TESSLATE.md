# TESSLATE.md - Project Context

> Context for AI agents working on this project.

## Framework Configuration

**Framework**: Next.js
**Version**: 16.x
**Port**: 3000

**Tech Stack:**
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- App Router
- Turbopack

## File Structure

```
app/
├── api/                 # API routes
├── components/          # React components
├── globals.css          # Global styles (Tailwind v4)
├── layout.tsx           # Root layout
└── page.tsx             # Home page
public/                  # Static assets
next.config.js           # Next.js config
postcss.config.mjs       # PostCSS config (Tailwind v4)
```

## Development Server

**Start Command**:
```bash
bun run dev -- --hostname 0.0.0.0 --port 3000
```

**Production Build**:
```bash
bun run build
bun start
```

## Notes

- Dependencies are pre-baked (node_modules included)
- Uses bun for package management (fastest)
- Turbopack enabled for fast compilation
- Tailwind CSS v4 with new @import syntax
