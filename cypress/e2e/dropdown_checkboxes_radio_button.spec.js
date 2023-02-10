import { onDropdownsPage } from "../support/dropdown_checkboxes_radio_button_objects";

describe ('Dropdown Menu(s), Checkboxe(s) & Radio Button(s)', () => {
    beforeEach (() =>{
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    })

    it('check values in dropdown lists', () => {
        onDropdownsPage.dropdownValues()
    })

    it('check checkboxes', () => {
        onDropdownsPage.checkboxes()
    })

    it('check radiobuttons', () => {
        onDropdownsPage.radioButtons()
    })
})