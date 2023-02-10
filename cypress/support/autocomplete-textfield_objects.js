export class Autocomplete {
    typeAndSelect(char) {
        cy.get('[placeholder="Food Item"]').type(char)
        cy.get('#myInputautocomplete-list').find('div').eq(1).click()
    }
}

export const onAutocompletePage = new Autocomplete()