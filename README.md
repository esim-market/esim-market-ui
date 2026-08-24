# eSIM Market UI

`esim-market-ui` is the React and TypeScript web application for eSIM Market. Vite provides the development server, and nginx serves the production build.

For detailed architecture, development, and orchestration guidance, see the [root `AGENTS.md`](https://github.com/tolga-kabadurmus/esim-market/blob/main/AGENTS.md).

## Relationship to the other repositories

- [`esim-market`](https://github.com/tolga-kabadurmus/esim-market) runs the complete project with Docker Compose.
- [`esim-market-backend`](https://github.com/tolga-kabadurmus/esim-market-backend) provides the API and background services used by the UI.

## Run for frontend development

From this repository:

```bash
cd frontend
npm ci
npm run dev
```

Open <http://localhost:5173>.

## Run with the complete project

From the parent `esim-market` repository:

```bash
docker compose --profile dev up --build
```

The UI is then available at <http://localhost:5001>.

To build and run only the production nginx image:

```bash
docker build -f Dockerfiles/esim-market-ui -t esim-market-ui:local .
docker run --rm -p 5001:80 esim-market-ui:local
```
