describe('Name of the group', () => {
  const user = {
    Name: "Maksym",
    lastName: "Hukovskyi",
    email: "Drakon@gmail.com",
    mobile: '0979797123'

  }
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form/');
    
  });
  it('should ', () => {
    
    

    cy.xpath("//input[@id='lastName']")
    .type(user.lastName)

    cy.get('#userEmail')
    .type(user.email)

    cy.get('[value="Male"]')
    .click({force:true})

    cy.get('#userNumber')
    .type(user.mobile)

    cy.get('#dateOfBirthInput')
    .type("{selectall}")
    .type("10-02-2015 {enter}")

    cy.get('#subjectsInput')
    .type('Math{enter}')

    cy.xpath("//label[text()='Sports']")
    .click({force:true})
  
    cy.get('#currentAddress')
    .type('Gora drakoniv')

    cy.contains('#state', 'Select State')
      .type('NCR'+'{enter}')

    cy.contains('#city', 'Select City')
      .type('Delhi'+'{enter}')

      cy.xpath("//input[@id='firstName']")
    .type(`${user.Name}{enter}`)

      cy.checkValues('Student Name', `${user.Name} ${user.lastName}`);
      cy.checkValues('Student Email', `${user.email}`);
      cy.checkValues("Gender", "Male" );
      cy.checkValues("Mobile", "0979797123");
      cy.checkValues("Date of Birth", "02 October,2015");
      cy.checkValues("Subjects", "Math");
      cy.checkValues("Hobbies", "Sports");
      cy.checkValues("Address", "Gora drakoniv");
      cy.checkValues("State and City", "NCR Delhi");
  });


});