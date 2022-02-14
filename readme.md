# Formula Bun Website

This repo houses the website for Formula Bun, which is hosted at formulabun.club. It runs on [NextJS](https://nextjs.org) and uses [Semantic UI](https://react.semantic-ui.com). It's meant to be hosted alongside the [Formula Bun API](https://github.com/formulabun/api).

## Prerequisites

- NodeJS v16
- Yarn or npm

## Bootstrapping

Run `yarn`/`npm i` to install all dependencies.

## Development

Run `yarn dev`/`npm run dev` to run the development server.

### Guidelines

#### Content, markup and components are separated

`content.js` houses text on the site. Files under `pages` use the exported content when rendering the page. This keeps text content separate from markup.

Generic elements live in `components`. These are normal reactjs components that are reused throughout the site.

#### Nextjs

Nextjs can render pages before requests are made, turning some pages into static html+css. Use nextjs' features where applicable.

## Productioncomponents

Run `yarn build`/`npm run build` to generate a production build, `yarn start`/`npm run start` to start the production build. The [Formula Bun API](https://github.com/formulabun/api) should be running at the same time.
