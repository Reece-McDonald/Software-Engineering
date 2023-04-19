describe('template spec', () => {
    it('types a message and sends it', () => {
      cy.visit('http://localhost:4200/chat')
      cy.get('[name=message]').type('Hello, this is a test message.')
      cy.contains('Send').click()
      cy.wait(1000)
    })

    /*it('types a message and sends it', () => {
        cy.visit('http://localhost:4200/chat')
        cy.get('[name=message]').type('Hello, this is a test message.')
        cy.contains('Send').click()
        cy.wait(2000)
      }) */
})
