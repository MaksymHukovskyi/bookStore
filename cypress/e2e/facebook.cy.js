/// <reference types="cypress" />
describe('User should be able to', () => {
  // beforeEach(() => {
  //   cy.visit('https://uk-ua.facebook.com/')
  // });
  it('should ', () => {
    cy.visit('https://cirosantilli-realworld-next.herokuapp.com/')
    cy.xpath('//a[text()="sandeep92"]')
    .click()
  });
  
});