# AI Safety Incident Dashboard

A web application to monitor, report, and analyze AI safety incidents.

## Deployment
- Live: [https://ai-incident-dashboard.vercel.app](https://ai-incident-dashboard.vercel.app)

## Changelog
- **2024-06-09**: Fixed Vercel build error by wrapping Dashboard in Suspense for useSearchParams compatibility.

## Prerequisites
- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [pnpm](https://pnpm.io/) (install with `npm install -g pnpm`)

## Getting Started

1. **Clone the repository**
   ```sh
   git clone <your-repo-url>
   cd ai-safety-dashboard
   ```

2. **Install dependencies**
   ```sh
   pnpm install
   ```

3. **Fix common errors**
   If you see errors like `Cannot find module 'lucide-react'` or `Cannot find module 'next/navigation'`, run:
   ```sh
   pnpm add lucide-react
   pnpm add next@latest
   pnpm add -D @types/react
   ```

4. **Start the development server**
   ```sh
   pnpm dev
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

5. **If you see a ChunkLoadError or build issues:**
   - Stop the dev server (Ctrl+C)
   - Remove the `.next` folder:
     - On Windows PowerShell:
       ```sh
       Remove-Item -Recurse -Force .next
       ```
     - On macOS/Linux:
       ```sh
       rm -rf .next
       ```
   - Restart the dev server:
     ```sh
     pnpm dev
     ```

## Firebase Configuration
Firebase is already configured in `lib/firebase.ts`. If you need to update the config, edit that file.

## Project Structure
- `app/` — Next.js app directory (pages, routes)
- `components/` — Reusable UI components
- `lib/` — Utility libraries (including Firebase config)
- `public/` — Static assets

## Scripts
- `pnpm dev` — Start development server
- `pnpm build` — Build for production
- `pnpm start` — Start production server

## License
MIT 