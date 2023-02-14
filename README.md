# OW Title Viewer

Small Vue webapp for viewing property titles based on the Land Registry data format. You are able to view a list of property titles and click on them to see more details, including a Googe Maps pin of its location. 

## Technologies used
* Framework: Vue3 with Vuetify3, Vuex, Vue Router
* Build tool: Vite
* Testing: Vitest (Unit), Cypress (E2E)
* Linting: ESLint
* Browser versions: Chrome 109 & 110

## Project Setup & Development Server

1. Install dependencies
```sh
npm install
```
2. Run Development server
```sh
npm run dev
```
3. Navigate to [http://localhost:5173/](http://localhost:5173/)

## Testing
### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

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
