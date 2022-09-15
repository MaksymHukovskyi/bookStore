// ***********************************************************
// This example support/e2e.js is processed and
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
Cypress.on('uncaught:exception', () =>  {
  return false
});
// Import commands.js using ES2015 syntax:
import './commands'
import './login'
require('cypress-xpath')
module.exports = (on, config) => {
  on("task", {
    newUser() {
      return {
        username: faker.name.firstName() + `${Math.round(Math.random(1000) * 1000)}`,
        email: faker.name.firstName() + `${Math.round(Math.random(1000) * 1000)}` + '@mail.com',
        password: '12345Qwert!'
      };
    },
  });
};
// Alternatively you can use CommonJS syntax:
// require('./commands')