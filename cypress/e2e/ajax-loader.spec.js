describe ('Ajax-Loader', () => {
    it ('Ajax-Loader', () => {
        cy.visit('https://webdriveruniversity.com/Ajax-Loader/index.html')
        cy.wait(1000)
        cy.get('p').click()
    })
})