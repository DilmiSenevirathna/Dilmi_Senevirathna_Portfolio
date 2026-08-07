# Hosting this portfolio on GitHub Pages

1. Push this project to a GitHub repository (branch `main`).
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. (Only if the contact form / backend is used) add repository secrets under
   **Settings → Secrets and variables → Actions**:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_PUBLISHABLE_KEY`
   - `VITE_SUPABASE_PROJECT_ID`
   (values are in the local `.env`; they are publishable keys)
4. Push to `main` — the workflow in `.github/workflows/deploy.yml` builds and deploys.
   Site URL: `https://<username>.github.io/<repo>/`

## Notes
- The build base path is set automatically from the repo name (`BASE_PATH`).
  For a user site repo (`<username>.github.io`), change `BASE_PATH` to `/` in the workflow.
- `404.html` is generated from `index.html` so client-side routes (`/blog`) work on refresh.
- `.nojekyll` prevents GitHub from stripping files starting with `_`.
