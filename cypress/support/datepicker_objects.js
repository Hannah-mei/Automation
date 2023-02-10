export class Datepicker {
    pickADate () {
        cy.get('.form-control').click()
        let newDate = new Date()

    }
}

export const onDatepickerPage = new Datepicker()