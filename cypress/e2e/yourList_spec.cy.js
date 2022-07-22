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

  })

  it('Should display grocery list items', () => {

  })

  describe('List Item', () => {

    it('Should display the name of the item', () => {

    })

    it('Should display the amount of the item', () => {

    })

    it('Should delete an item when the delete button is clicked', () => {

    })
  })
})
