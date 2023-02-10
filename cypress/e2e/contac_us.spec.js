import { onContactUsPage } from "../support/contact_us_objects"

describe('contact us', () => {
    beforeEach('start the Contact Us page', () => {
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
    })
    it('check the reset function', () => {
        onContactUsPage.completeTheForm("John", "Snow", "john@snow.com", 'No comments')
        cy.get('[type="reset"]').click()
        onContactUsPage.emptyTextBoxes()
    })

    it ('check the error when submitting incomplete form', () => {
        onContactUsPage.submitIncompleteForm("John", "Snow", "john@snow.com", 'No comments')
    })

    it ('wrong email', () => {
        onContactUsPage.wrongEmailError()
    })

    it('notification after sending the form', () => {
        onContactUsPage.completeTheForm("John", "Snow", "john@snow.com", 'No comments')
        onContactUsPage.submitTheForm()
    })
})