/// <reference types="cypress" />

describe('User should be able', () => {
  const userData = {
    userName : "username" + Math.floor(Math.random(1000) * 1000),
    userMail : "Usermail" + Math.floor(Math.random(1000) * 1000) +"@gmail.com",
    userPassword: "Qwerty123!"
  
  }
  before(() => {
    cy.visit('https://cirosantilli-realworld-next.herokuapp.com/')
  
  });

  it.only('to registrate new user', () => {

    
    cy.get(':nth-child(3) > .nav-link')
    .click()

    cy.findByPlaceholder('Username')
    .type(userData.userName)

    cy.get(':nth-child(2) > .form-control')
    .type(userData.userMail)

    cy.get(':nth-child(3) > .form-control')
    .type(userData.userPassword)

    cy.get('.btn')
    .click()
    
    cy.xpath(`//a[text() = '${userData.userName}']`).click()

  })
  it('should ', () => {
    cy.reload();

    cy.get(':nth-child(3) > .nav-link')
    .click()

    cy.get(':nth-child(1) > .form-control')
    .type(userData.userName)

    cy.get(':nth-child(2) > .form-control')
    .type(userData.userMail)

    cy.get(':nth-child(3) > .form-control')
    .type(userData.userPassword)

     cy.get('.btn')
    .click()
    cy.get('.error-messages > :nth-child(1) > ul > li')
    .should('contain', 'This username is taken.')
  });
})

