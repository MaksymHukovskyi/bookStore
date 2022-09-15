describe('User should be able', () => {

  const book = {
    name: 'Speaking JavaScript',
    author: 'Axel Rauschmayer',
    publisher: 'O\'Reilly Media'
  }

  beforeEach(() => {
    cy.login()
    cy.visit('https://demoqa.com/profile')

    cy.login()

    cy.url()
     .should('include', '/profile')
      cy.viewport(1280, 720)
  });
  it('to login', () => {
    

    cy.get('#userName-value')
      .should('contain', 'Drakon123')

  });

  it('Go to book store and search for the book ', () => {
    
    cy.contains("#item-2","Book Store")
      .click()
    
    cy.get("#searchBox")
      .type(book.name)

    cy.xpath("//div[@class='rt-tr -odd']")
      .should('contain', book.author)
      .and('contain', book.publisher)
      .and('contain', book.name)

    cy.xpath('//a[text()="Speaking JavaScript"]')
      .click();

    cy.get('#description-wrapper')
      .should('contain', 'Like it or not')

    cy.contains('#addNewRecordButton','Add To Your Collection')
      .click()


    
  });

  it('delete book from collection', () => {
    
   cy.get('#delete-record-undefined')
      .click({force:true})

   cy.get("#closeSmallModal-ok")
      .click()

   cy.get('.rt-noData')
      .should('contain', 'No rows found')
   });

});