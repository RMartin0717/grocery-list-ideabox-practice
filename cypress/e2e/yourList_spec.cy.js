describe('your list', () => {

  beforeEach(() => {

    cy.fixture('listItems.json')
      .then(listItems => {
        cy.intercept('http://localhost:3001/items', {
          body: listItems
        })
      })
    cy.visit('http://localhost:3000/')
  })

  it('displays the heading Your List', () => {

  })
})
