describe('Main', () => {

  beforeEach(() => {

    cy.fixture('listItems.json')
      .then(listItems => {
        cy.intercept('http://localhost:3001/items', {
          body: listItems
        })
      })
    cy.visit('http://localhost:3000/')
  })

  it('Should display the heading Grocery List', () => {

  })

  it('Should display a server error message if unable to retrieve server data', () => {

  })
})
