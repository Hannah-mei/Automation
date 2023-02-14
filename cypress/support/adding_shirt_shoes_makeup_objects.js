export class MakingOrder {
    addShirt() {
        cy.visit('https://automationteststore.com/')
        let items = ['T-shirts', 'Shoes']
        let itemIds = ['[data-id="121"]', '[data-id="118"]']
        items.forEach((item, i) => {
            cy.contains('Apparel & accessories').click({force: true})
            cy.contains(item).click({force: true})
            cy.get(itemIds[i]).first().click()
            cy.contains('Add to Cart').click()
            cy.contains('Continue Shopping').click()             
        })
        cy.get('[placeholder="Search Keywords"]').type('nail')
        cy.get('.button-in-search').click()
        cy.get('[data-id="99"]').first().click()
        cy.contains('Add to Cart').click()
        cy.get('#cart_checkout1').click()
        cy.get('#accountFrm_accountguest').click()
        cy.get('#accountFrm').submit()
        let user = ['John', 'Snow', 'john@snow.com', 'Downing 10', 'London', '81-095']
        let textFields = ['#guestFrm_firstname', '#guestFrm_lastname', '#guestFrm_email', '#guestFrm_address_1', '#guestFrm_city', '#guestFrm_postcode']
        textFields.forEach((textField, i) => {
            cy.get(textField).type(user[i])
        })
        cy.get('#guestFrm_zone_id').select('Edinburgh')
        cy.get('#guestFrm_country_id').select('United Kingdom')
        cy.get('#guestFrm').submit()
        cy.get('#checkout_btn').click()
        cy.get('.heading1').should('contain', 'Your Order Has Been Processed!')
    }
}

export const makeAnOrder = new MakingOrder()