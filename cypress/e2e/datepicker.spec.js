import { onDatepickerPage } from "../support/datepicker_objects";

describe ('datepicker', () => {
    beforeEach(() =>{
        cy.visit('https://webdriveruniversity.com/Datepicker/index.html')
    })

    it('enter the date in the format DD, MM, YYYY', () => {
        onDatepickerPage.pickADate(28, 2, 2043)
    })
})