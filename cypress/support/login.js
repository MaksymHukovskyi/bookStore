// Cypress.Commands.add('login', (username='Drakon123', password='Maxim@123q') =>{
//   cy.get('#userName')
//       .type(username)

//     cy.get('#password')
//       .type(password)

//     cy.get('#login')
//       .click()
// });

Cypress.Commands.add('login', (username='Drakon123', password='Maxim@123q') =>{
  cy.request({
    url:'https://demoqa.com/Account/v1/Login' ,
    method: 'POST',
    body: {
      "userName": username,
      "password": password
    }
  }).then(response => {
    cy.setCookie( 'token', response.body.token);
    cy.setCookie('userName', response.body.username);
    cy.setCookie('userID', response.body.userId);
    cy.setCookie('expires', response.body.expires)
  })
});