# eSIM Market UI

`esim-market-ui` is the React and TypeScript frontend for the **eSIM Market** project. It uses Vite for development and builds to static assets served by nginx in production.

## Development

```bash
cd frontend
npm ci
npm run dev
```

Vite listens on all interfaces and uses polling so HMR works reliably with bind mounts, Docker Desktop, and WSL2.

Create a production build with `npm run build` from `frontend/`.

## Docker

Build from the repository root:

```bash
docker build -f ./Dockerfiles/esim-market-ui -t esim-market-ui:local .
```

Run the production image on port 5001:

```bash
docker run --rm -p 5001:80 esim-market-ui:local
```

Open <http://localhost:5001>. The baked-in `nginx/nginx.conf` is installed at `/etc/nginx/conf.d/default.conf`, allowing an orchestrator to replace it at runtime.

## Related Repositories

- `esim-market` — integration and local orchestration
- `esim-market-backend` — backend APIs and background services
