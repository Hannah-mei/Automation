
export class ContactUs {
    completeTheForm (firstName, lastName, email, comments) {
        cy.get('[placeholder="First Name"]').type(firstName)
        cy.get('[placeholder="Last Name"]').type(lastName)
        cy.get('[placeholder="Email Address"]').type(email)
        cy.get('[placeholder="Comments"]').type(comments)
    }

    emptyTextBoxes () {
        cy.get('[class="feedback-input"]').each((textBox) => {
            cy.wrap(textBox).invoke('prop', 'value').should('contain', '')
        })
    }

    submitIncompleteForm(firstName, lastName, email, comments) {
        cy.get('[class="feedback-input"]').each((textBox) => {
            let placeholder = cy.wrap(textBox).invoke('attr', 'placeholder')
            if (placeholder == 'First Name') {
                cy.wrap(textBox).type(firstName)
            } else if (placeholder == 'Last Name') {
                cy.wrap(textBox).type(lastName)
            } else if (placeholder == 'Email Address') {
                cy.wrap(textBox).type(email)
            } else if (placeholder == 'Comments'){
                cy.wrap(textBox).type(comments)
            }
            cy.get('form').submit()
            cy.get('body').should('contain', 'Error: all fields are required')
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        })

    }

    wrongEmailError (wrongEmail) {
        let wrongEmails = ['john.snow', 'john@snow', 'john@snow.', '@snow']
        for (let wrongEmail of wrongEmails) {
            cy.get('[placeholder="Email Address"]').type(wrongEmail)
            cy.get('form').submit()
            cy.get('body').should('contain', 'Error: Invalid email address')
            cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
        }
    }

    submitTheForm() {
        cy.get('form').submit()
        cy.get('h1').should('contain', 'Thank You for your Message!')
    }

}

export const onContactUsPage = new ContactUs()