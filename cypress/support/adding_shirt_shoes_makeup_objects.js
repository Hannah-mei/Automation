function getToGuestForm() {
    cy.get('#cart_checkout1').click()
    cy.get('#accountFrm_accountguest').click()
    cy.get('#accountFrm').submit()
}

export class MakingOrder {
    addTshirtShoes () {
        cy.visit('https://automationteststore.com/')
        let items = ['T-shirts', 'Shoes']
        let prices = []
        items.forEach((item, i) => {
            cy.contains('Apparel & accessories').click({force: true})
            cy.contains(item).click({force: true})
            cy.get('[title="Add to Cart"]').eq(1).click()
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
            '#guestFrm_firstname' : ['s', 'sn', 'ulnVvbLf8TJJw5LtDVjA96wxsmoNHyVCy'],
            '#guestFrm_lastname' : ['s', 'sn', 'ulnVvbLf8TJJw5LtDVjA96wxsmoNHyVCy'],
            '#guestFrm_email': ['john.com', 'john@snow', 'john', 'john@snow.'],
            '#guestFrm_address_1' : ['s', 'sn', 'beOq3WvsnzfeHCjHNPhQwusyqDzqIyXm4t1vGrp9l7R6K9BcwvVgJjQG4Ujgk6ge4WwuWNrtCgMx01jflHC3n181TiM6O8ZIc8yULYyJIzRkZANtJvmG6tNG11msZrkU5'],
            '#guestFrm_city' : ['s', 'sn', 'beOq3WvsnzfeHCjHNPhQwusyqDzqIyXm4t1vGrp9l7R6K9BcwvVgJjQG4Ujgk6ge4WwuWNrtCgMx01jflHC3n181TiM6O8ZIc8yULYyJIzRkZANtJvmG6tNG11msZrkU5'],
            '#guestFrm_postcode': ['s', 'sn', '7RFxPAKrVAm']
        }
        let errors = {
            'First Name:': 'First Name must be greater than 3 and less than 32 characters!',
            'Last Name:': 'Last Name must be greater than 3 and less than 32 characters!',
            'E-Mail:': 'E-Mail Address does not appear to be valid!',
            'Address 1:': 'Address 1 must be greater than 3 and less than 128 characters!',
            'City:': 'City must be greater than 3 and less than 128 characters!',
            'ZIP/Post Code:': 'Zip/postal code must be between 3 and 10 characters!'

        }
        let textFields = Object.keys(fieldsAndValues)
        let wrongValues = Object.values(fieldsAndValues)
        let errorMessages = Object.values(errors)
        let textFieldsNames = Object.keys(errors)
        for (let i=0; i<textFields.length; i++) {
            for (let j=0; j<wrongValues[i].length; j++) {
                cy.get(textFields[i]).type(wrongValues[i][j])
                cy.get('#guestFrm').submit()
                cy.contains(textFieldsNames[i]).parent().find('span').should('contain', errorMessages[i])
                cy.get(textFields[i]).clear()
            }
        }
        cy.contains('Region / State:').parent().find('span').should('contain', 'Please select a region / state!')
        cy.get('#guestFrm_country_id').select(0)
        cy.get('#guestFrm').submit()
        cy.contains('Country:').parent().find('span').should('contain', 'Please select a country!')
    }

    addReview() {
        cy.visit('https://automationteststore.com/')
        cy.get('[src="//automationteststore.com/image/thumbnails/18/6b/demo_product02_3_jpg-100029-250x250.jpg"]')
            .parent()
            .parent()
            .trigger('mouseover')
            .contains('Write Review')
            .click()
        cy.get('#rating5').click()
        cy.get('#name').type('John')
        cy.get('#text').type('mG4*H9j@1Nzxo7v2QfS%p$6Kl')
        cy.get('#text').then(() => {
            let captcha = prompt('Enter the number from the image')
            cy.get('#captcha').type(captcha)
        })
        cy.get('#review_submit').click()
        cy.get('[class="alert alert-success"]').should('contain', 'Thank you for your review. It has been submitted to the webmaster for approval.')
    }

}

export const makeAnOrder = new MakingOrder()