describe('The Home page', function() {
    it('visits the home page', function() {
        cy.visit('/')
    })

    it('has a header', function() {
        cy.get('#header>#banner').should('exist')
    })
})