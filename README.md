# Next.js 16 Base Template

A modern, production-ready Next.js 16 starter template for Tesslate Studio with pre-baked dependencies for instant startup.

## Features

- **Next.js 16** with App Router
- **React 19** with Server Components
- **Turbopack** for fast compilation
- **TypeScript** for type safety
- **Tailwind CSS v4** for styling
- **bun** for fastest package management
- **Pre-baked node_modules** for instant startup

## What's Included

- Pre-configured Next.js 16 setup
- Tailwind CSS v4 integration (new @import syntax)
- TypeScript configuration
- Example API route (`/api/hello`)
- Responsive landing page
- ESLint configuration
- PostCSS setup for Tailwind v4

## Development

The development server starts automatically when you create a project from this base in Tesslate Studio.

Access your app at the preview URL provided in the IDE.

## Project Structure

```
/app
  /api
    /hello
      route.ts          # Example API route
  layout.tsx            # Root layout
  page.tsx              # Home page
  globals.css           # Global styles (Tailwind v4)
next.config.js          # Next.js configuration
postcss.config.mjs      # PostCSS configuration (Tailwind v4)
tsconfig.json           # TypeScript configuration
package.json            # Dependencies
```

## API Routes

Create new API routes in `/app/api/`. Example:

```typescript
// app/api/users/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ users: [] });
}
```

## Styling

This template uses Tailwind CSS v4. Add custom styles in `app/globals.css` or use Tailwind utilities directly in your components.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## Tesslate Studio

This base is optimized for use with Tesslate Studio. The `TESSLATE.md` file contains configuration for automatic dev server setup.

**Performance Note**: Dependencies are pre-baked (node_modules included in repo) for instant startup - no npm/pnpm install required.
