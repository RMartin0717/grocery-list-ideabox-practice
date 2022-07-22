describe('Add item', () => {
  describe('Happy Path', () => {
      beforeEach(() => {
        cy.fixture('listItems.json')
          .then(listItems => {
            cy.intercept('GET', 'http://localhost:3001/items', {
              body: listItems
            })
          })
        cy.visit('http://localhost:3000/')
      })

      it('Should display the heading Add Item', () => {
        cy.get('.add-item').should('have.text', 'Add Item')
      })

      it('Should have a controlled input field for name of item whose value reflects the data entered in the form', () => {
        cy.get('form input[name="name"]').type('eggs')
          .get('form input[name="name"]').should('have.value', 'eggs')
      })

      it('Should have a controlled input field for amount of item whose value reflects the data entered in the form', () => {
        cy.get('form input[name="amount"]').type('1 carton')
          .get('form input[name="amount"]').should('have.value', '1 carton')
      })

      it('Should have a button to add the new item to the grocery list', () => {
        cy.fixture('mockPost.json')
            .then(mockPost => {
              cy.intercept('POST', 'http://localhost:3001/items', {
                statusCode: 200,
                delay: 100,
                body: mockPost
              })
            })
        cy.get('form input[name="name"]').type('eggs')
          .get('form input[name="amount"]').type('1 carton')
          .get('.submit-item').click()
      })

  })
  describe('Sad Path', () => {
    it('Should display an error message when submit is clicked if input fields are not both filled out', () => {
      cy.get('.submit-item').click()
        .get('.error').should('have.text', 'Please input both a name and an amount')
    })
  })
})
