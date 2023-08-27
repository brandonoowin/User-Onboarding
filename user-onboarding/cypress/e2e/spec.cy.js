describe('Team Builder App', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Team Builder App')



    cy.get('.fname')
      .type('brandon')
      .should('have.value', 'brandon')

    cy.get('.lname')
      .type('nguyen')
      .should('have.value', 'nguyen')
    
    cy.get('.email')
      .type('brandonxnguyen@gmail.com')
      .should('have.value', 'brandonxnguyen@gmail.com')
    
    cy.get('.pw')
      .type('123456')
      .should('have.value', '123456')
    
    cy.get('[type="checkbox"]').check()
    
    
  })
})