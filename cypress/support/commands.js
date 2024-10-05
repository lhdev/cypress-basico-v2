Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Lucas')
    cy.get('#lastName').type('Alves')
    cy.get('#email').type('lucas@lucas.com')
    cy.get('#open-text-area').type('teste')
    cy.contains('button', 'Enviar').click()
})