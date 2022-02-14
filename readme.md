# Formula Bun Website

This repo houses the website for Formula Bun, which is hosted at formulabun.club. It runs on [NextJS](https://nextjs.org) and uses [Semantic UI](https://react.semantic-ui.com). It's meant to be hosted alongside the [Formula Bun API](https://github.com/formulabun/api).

## Prerequisites

- NodeJS v16
- Yarn

## Bootstrapping

Run `yarn` to install all dependencies.

## Development

Run `yarn dev` to run the development server.

### Guidelines

#### Content is separate from markup

`content.js` houses text on the site. Files under `pages` use the exported content when rendering the page. This keeps text content separate from markup.

## Production

Run `yarn build` to generate a production build. The [Formula Bun API](https://github.com/formulabun/api) should be running at the same time.
