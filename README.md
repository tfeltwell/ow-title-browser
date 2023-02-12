# OW-Technical Task

Small Vue webapp for viewing property titles based on the Land Registry data format. You are able to view a list of property titles and click on them to see more details, including a Googe Maps pin of its location. 

## Technologies used
* Framework: Vue3 with Vuetify3
* Build tool: Vite
* Testing: Vitest (Unit), Cypress (E2E)
* Linting: ESLint

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

`npx cypress open` - using Chrome 110

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
