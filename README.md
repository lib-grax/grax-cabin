# Woodend Men

A lightweight Hugo site for `woodend.men`.

## Local development

Install Hugo, then run:

```sh
hugo server --disableFastRender
```

Open `http://localhost:1313/`.

## Build

```sh
hugo --minify --cleanDestinationDir
```

The generated static site is written to `public/`. That directory is ignored because deployment should build fresh artifacts from source.

## Content

Pages are Markdown files in `content/`:

- `content/_index.md`—home page
- `content/about.md`—purpose and background
- `content/events.md`—events and gatherings
- `content/projects.md`—projects and resources
- `content/contact.md`—public contact details

## Deployment

GitHub Actions deployment is configured in `.github/workflows/deploy.yml`.

Server and secret setup is documented in `docs/deployment.md`.
