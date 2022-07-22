describe('Your list', () => {

  beforeEach(() => {

    cy.fixture('listItems.json')
      .then(listItems => {
        cy.intercept('http://localhost:3001/items', {
          body: listItems
        })
      })
    cy.visit('http://localhost:3000/')
  })

  it('Should display the heading Your List', () => {
    cy.get('.your-list-heading').should('have.text', 'Your List')
  })

  it('Should display grocery list items', () => {
    cy.get('.item').should('have.lengthOf', 2)
  })

  describe('List Item', () => {

    it('Should display the name of the item', () => {
      cy.get('.item > h3').eq(1).should('have.text', 'carrots')
    })

    it('Should display the amount of the item', () => {
      cy.get('.item > h4').eq(1).should('have.text', '10')
    })

    it('Should delete an item when the delete button is clicked', () => {

    })
  })
})
