function getToGuestForm() {
    cy.get('#cart_checkout1').click()
    cy.get('#accountFrm_accountguest').click()
    cy.get('#accountFrm').submit()
}

export class MakingOrder {
    addTshirtShoes () {
        cy.visit('https://automationteststore.com/')
        let items = ['T-shirts', 'Shoes']
        let itemIds = ['[data-id="123"]', '[data-id="118"]']
        let prices = []
        items.forEach((item, i) => {
            cy.contains('Apparel & accessories').click({force: true})
            cy.contains(item).click({force: true})
            cy.get(itemIds[i]).first().click()
            cy.get('.productfilneprice').invoke('text').then(priceStr => {
                let priceNum = priceStr.replace(/[^0-9.-]+/g, "")
                parseFloat(priceNum)
                prices.push(priceNum)
                let sum = prices.reduce((partialSum, a) => partialSum + +a, 0)
                cy.contains('Add to Cart').click()
                cy.get('.cart_total').should('contain', sum)
            })
            cy.get('[class="label label-orange font14"]').eq(1).then(quantity => {
                expect(quantity).to.have.text(i+1)
            }) 
            cy.contains('Continue Shopping').click()
        })
    }
    addMakeUp() {
        cy.visit('https://automationteststore.com/')
        cy.get('[placeholder="Search Keywords"]').type('nail')
        cy.get('.button-in-search').click()
        cy.get('[data-id="99"]').first().click()
        cy.contains('Add to Cart').click()
    }
    checkOut() {
        getToGuestForm()
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

    validation() {
        getToGuestForm()
        let fieldsAndValues = {
            '#guestFrm_firstname' : ['s', 'sn', 'sno', 'ulnVvbLf8TJJw5LtDVjA96wxsmoNHyVC'],
            '#guestFrm_lastname' : ['s', 'sn', 'sno', 'ulnVvbLf8TJJw5LtDVjA96wxsmoNHyVC'],
            '#guestFrm_email': ['john.com', 'john@snow', 'john', 'john@snow.'],
            '#guestFrm_address_1' : ['s', 'sn', 'sno', 'eOq3WvsnzfeHCjHNPhQwusyqDzqIyXm4t1vGrp9l7R6K9BcwvVgJjQG4Ujgk6ge4WwuWNrtCgMx01jflHC3n181TiM6O8ZIc8yULYyJIzRkZANtJvmG6tNG11msZrkU5'],
            '#guestFrm_city' : ['s', 'sn', 'sno', 'eOq3WvsnzfeHCjHNPhQwusyqDzqIyXm4t1vGrp9l7R6K9BcwvVgJjQG4Ujgk6ge4WwuWNrtCgMx01jflHC3n181TiM6O8ZIc8yULYyJIzRkZANtJvmG6tNG11msZrkU5'],
            '#guestFrm_postcode': ['s', 'sn', 'sno', '7RFxPAKrVA']
        }
        let errorMessages = {
            firstName: 'First Name must be greater than 3 and less than 32 characters!',
            lastName: 'Last Name must be greater than 3 and less than 32 characters!',
            email: 'E-Mail Address does not appear to be valid!',
            address1: 'Address 1 must be greater than 3 and less than 128 characters!',
            city: 'City must be greater than 3 and less than 128 characters!',
            ZIP: 'Zip/postal code must be between 3 and 10 characters!'

        }
        let textFields = Object.keys(fieldsAndValues)
        let wrongValues = Object.values(fieldsAndValues)
        for (let i=0; i<textFields.length; i++) {
            for (let j=0; j<wrongValues[i].length; j++) {
                cy.get(textFields[i]).type(wrongValues[i][j])
                cy.get('#guestFrm').submit()
                
                cy.get(textFields[i]).clear()
            }
        }
    }

}

export const makeAnOrder = new MakingOrder()