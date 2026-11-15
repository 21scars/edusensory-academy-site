# EduSensory Online Academy

Static website for the EduSensory Online Academy. The site entry point is
`index.html`; its styles, scripts, and images are stored alongside it.

## Local preview

Serve this directory with any static file server and open its root URL.

## GitHub Pages

The workflow in `.github/workflows/pages.yml` deploys the repository root to
GitHub Pages whenever a commit is pushed to `main`. After the first successful
deployment, the site will be available at:

<https://21scars.github.io/edusensory-academy-site/>

The waiting-list form calls `/api/waitlist/token` and `/api/waitlist`. Those
backend endpoints are not included here, and GitHub Pages cannot run them, so
form submissions will need a separately hosted API before they can be saved.

The workspace's `landing-page` directory is a separate Git repository and is
intentionally kept independent of this site repository.
