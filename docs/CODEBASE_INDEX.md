## PIMUNConnect Codebase Index

Short orientation to the repository: structure, frameworks, entry points, and useful links.

### Overview
- **Frontend**: React 18 + Vite + TypeScript + TailwindCSS + Radix UI + Wouter routing
- **Backend**: Express (TypeScript), single server handling API and static assets
- **Shared**: Types and schema in `shared/`

### Scripts
- `dev`: Run Express server in development (serves Vite dev in middleware)
- `build`: Build client with Vite, bundle server with esbuild to `dist`
- `start`: Run built server from `dist`

### Directory Structure
- `client/`
  - `index.html`: HTML shell, loads `/src/main.tsx`
  - `src/`
    - `main.tsx`: React entry; mounts `App`
    - `App.tsx`: Router and providers
    - `pages/`: Route components
    - `components/`: UI sections and Shadcn/Radix primitives in `components/ui/`
    - `lib/`: client utilities (e.g., React Query `queryClient`)
    - `hooks/`: reusable hooks
- `server/`
  - `index.ts`: Express setup, error handling, Vite dev/static
  - `routes.ts`: Placeholder for API route registration
  - `storage.ts`: In-memory storage interface and implementation
  - `vite.ts`: Vite integration helpers
- `shared/`
  - `schema.ts`: shared types used by server/client
- `attached_assets/`: static assets (images, video)
- `docs/`: developer documentation

### Frontend Routing (Wouter)
Defined in `client/src/App.tsx`:
- `/` → `Home`
- `/registration` → `Registration`
- `/resources` → `Resources`
- `/contact` → `Contact`
- `/team` → `Team`
- `/past` → `PastConferences`
- `*` → `not-found`

### Key Components
- `Navigation`, `HeroSection`, `HighlightsSection`, `CommitteesSection`, `TeamGallerySection`, `FooterSection`
- Shadcn/Radix UI primitives in `client/src/components/ui/*`

### Styles and Design
- Tailwind config: `tailwind.config.ts` (custom CSS variables mapping, typography plugin)
- Global CSS: `client/src/index.css`

### Build and Tooling
- Vite config: `vite.config.ts`
- TypeScript config: `tsconfig.json`
- PostCSS: `postcss.config.js`

### Backend
- Express app listens on `PORT` (default 5000)
- API routes: add in `server/routes.ts` and prefix with `/api`
- Storage: `server/storage.ts` exposes `IStorage` and `MemStorage`

### Getting Started
1. Install dependencies: `npm install`
2. Dev mode: `npm run dev` (http://localhost:5000)
3. Build: `npm run build`
4. Start production: `npm start`

### Aliases
Configured in Vite/TS:
- `@` → `client/src`
- `@shared` → `shared`
- `@assets` → `attached_assets`

### Notes
- In development, Vite middleware is enabled inside the Express server for HMR.
- Add new pages in `client/src/pages`, then add a `<Route>` in `client/src/App.tsx`.


