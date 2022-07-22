describe('Add item', () => {

  beforeEach(() => {

    cy.fixture('listItems.json')
      .then(listItems => {
        cy.intercept('http://localhost:3001/items', {
          body: listItems
        })
      })
    cy.visit('http://localhost:3000/')
  })

  it('Should display the heading Add Item', () => {

  })

  it('Should have a controlled input field for name of item whose value reflects the data entered in the form', () => {

  })

  it('Should have a controlled input field for amount of item whose value reflects the data entered in the form', () => {

  })

  it('Should have a button to add the new item to the grocery list', () => {

  })

  it('Should display an error message when submit is clicked if input fields are not both filled out', () => {

  })
})
