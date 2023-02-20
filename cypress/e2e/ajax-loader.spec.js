describe ('Ajax-Loader', () => {
    it ('Ajax-Loader', () => {
        cy.visit('https://webdriveruniversity.com/Ajax-Loader/index.html')
        cy.wait('@button').click()
        cy.get('#button1').as('button')
    })
})