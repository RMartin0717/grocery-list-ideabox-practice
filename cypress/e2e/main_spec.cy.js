describe('Main', () => {

  describe('Happy Path', () => {

    it('Should display the heading Grocery List', () => {
      cy.fixture('listItems.json')
        .then(listItems => {
          cy.intercept('http://localhost:3001/items', {
            body: listItems
          })
        })
      cy.visit('http://localhost:3000/')
      cy.get('.grocery-list-heading').should('have.text', 'Grocery List')
    })
  })

  describe('Sad Path', () => {

    it('Should display a server error message if unable to retrieve server data', () => {
      cy.fixture('listItems.json')
        .then(listItems => {
          cy.intercept('http://localhost:3001/items', {
            statusCode:404,
            body: listItems
          })
        })
      cy.visit('http://localhost:3000/')
        .get('.error').should('have.text', 'Unable to retrieve list')
    })
  })
})
