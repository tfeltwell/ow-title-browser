// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')


// "exports is not defined"
// eslint-disable-next-line no-undef
Cypress.on('uncaught:exception', (err) => {
  // we expect Google Maps vue3 plugin to throw "exports is not defined"
  // and don't want to fail the test so we return false (functionality fine)
  if (err.message.includes("exports is not defined")) {
    return false
  }
  // we still want to ensure there are no other unexpected
  // errors, so we let them fail the test
})