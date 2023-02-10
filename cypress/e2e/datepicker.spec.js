import { onDatepickerPage } from "../support/datepicker_objects";

describe ('datepicker', () => {
    beforeEach(() =>{
        cy.visit('https://webdriveruniversity.com/Datepicker/index.html')
    })

    it('pick and check the date', () => {
        onDatepickerPage.pickADate()
    })
})