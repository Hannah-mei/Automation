import { onAutocompletePage } from "../support/autocomplete-textfield_objects"

describe ('autocomplete', () => {
    beforeEach(() =>{
        cy.visit('https://webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html')
    })

    it('type 3 characters and select the second element from the list', () => {
        onAutocompletePage.typeAndSelect('chi')
    })
})