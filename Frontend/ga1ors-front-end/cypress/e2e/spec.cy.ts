describe('template spec', () => {
  it('login to register', () => {
    cy.visit('http://localhost:4200/login')
    cy.wait(900)
    cy.contains('Register').click()
    cy.url().should('include', '/register')
    cy.wait(2000)

    cy.get('[name=firstName]').type('Christian')
    cy.get('[name=lastName]').type('Bello')
    cy.get('[name=email]').type('test@test.com')
    cy.get('[name=password]').type('test')
    cy.get('[name=passwordConfirm]').type('test')
    cy.wait(1000)
  })

  it('register to login', () => {
    cy.visit('http://localhost:4200/register')
    cy.wait(900)
    cy.contains('Login').click()
    cy.url().should('include', '/login')
    cy.wait(2000)
    cy.get('[name=email]').type('rlugo@ufl.edu')
    cy.get('[name=password]').type('rhyan')
    cy.wait(1000)
  })

  // it('navigates to another link', () =>{
  //   cy.visit('http://localhost:4200/chat/messages')
  //   cy.wait(1000)
  //   cy.get('[name=message]').type('Hello. This is a test message.')
  //   cy.wait(1000)
  //   cy.contains('Sign Out').click()
  //   cy.url().should('include', '/login')
  //   cy.wait(500)
  // })
})
