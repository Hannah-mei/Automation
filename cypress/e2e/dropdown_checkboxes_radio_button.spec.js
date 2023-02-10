import { onDropdownsPage } from "../support/dropdown_checkboxes_radio_button_objects";

describe ('Dropdown Menu(s), Checkboxe(s) & Radio Button(s)', () => {
    beforeEach (() =>{
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    })

    it('check values in dropdown lists', () => {
        onDropdownsPage.dropdownValues()
        // cy.get('#fruit-selects').then(dropdown => {
        //     cy.wrap(dropdown).find('option').each(option => {
        //         if(option.attr('disabled')) {
        //             alert(false)
        //         }
        //     })
        // })
    })

    it('check checkboxes', () => {
        onDropdownsPage.checkboxes()
    })

    it('check radiobuttons', () => {
        onDropdownsPage.radioButtons()
    })
})