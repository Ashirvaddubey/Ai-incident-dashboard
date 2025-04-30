# AI Safety Incident Dashboard

A web application to monitor, report, and analyze AI safety incidents.

## Deployment
- Live: [https://ai-incident-dashboard.vercel.app](https://ai-incident-dashboard.vercel.app)
- Docker Hub: [ashirvaddubey/ai-safety-dashboard](https://hub.docker.com/r/ashirvaddubey/ai-safety-dashboard)
dflsklflskf
## CI/CD Pipeline
This project uses Jenkins for continuous integration and deployment. The pipeline:
1. Builds and tests the application
2. Builds and pushes Docker images to Docker Hub
3. Deploys to Vercel
4.hello

### Jenkins Setup
1. Install Jenkins on your server
2. Install required plugins:
   - Docker Pipeline
   - Credentials Binding
   - Git
3. Configure credentials in Jenkins:
   - `docker-hub-credentials`: Docker Hub username and password
   - `vercel-token`: Vercel deployment token

## Changelog
- **2024-06-09**: Fixed Vercel build error by wrapping Dashboard in Suspense for useSearchParams compatibility.
- **2024-06-09**: Added Docker support and published to Docker Hub.
- **2024-06-09**: Added Jenkins CI/CD pipeline configuration.

## Prerequisites
- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [pnpm](https://pnpm.io/) (install with `npm install -g pnpm`)
- [Docker](https://www.docker.com/) (optional, for containerized deployment)

## Getting Started

### Using Docker
```bash
# Pull and run the container
docker pull ashirvaddubey/ai-safety-dashboard:latest
docker run -p 3000:3000 ashirvaddubey/ai-safety-dashboard:latest
```

### Local Development
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

## Docker Commands
- `docker-compose up -d` — Start the containerized application
- `docker-compose down` — Stop the containerized application
- `docker-compose up -d --build` — Rebuild and start the application
- `docker-compose logs -f` — View application logs

## License
MIT 
