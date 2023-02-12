function switchYears(year) {
    cy.get('[class="year old"]').then(oldYear => {
        cy.get('[class="year new"]').then(newYear => {
            if (year<parseInt(oldYear.text())) {
                cy.get('[class="prev"]').eq(2).click()
                switchYears(year)
            } else if (year>parseInt(newYear.text())){
                cy.get('[class="next"]').eq(2).click()
                switchYears(year)
            } else {
                cy.contains('span', year).click()
        }
        })
    })
}

export class Datepicker {
    pickADate (day, month, year) {
        cy.get('.form-control').click()
        cy.get('.datepicker-switch').first().click()
        cy.get('.datepicker-switch').eq(1).click()
        switchYears(year)
        let requiredDate = new Date()
        requiredDate.setMonth(month-1)
        let shortMonth = requiredDate.toLocaleString('default', {month: 'short'})
        cy.contains('span', shortMonth).click()
        cy.contains('[class="day"]', day).click()
        let dateAssert = "0"+month+'-'+day+'-'+year
        cy.get('.form-control').should('have.value', dateAssert)
    }
}

export const onDatepickerPage = new Datepicker()