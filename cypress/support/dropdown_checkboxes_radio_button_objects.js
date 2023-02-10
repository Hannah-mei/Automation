export class DropdownsCheckboxesRadioButtons {
    dropdownValues() {
        let values1 = ['java', 'c#', 'python', 'sql']
        let values2 = ["eclipse", "maven", "testng", "junit"]
        let values3 = ["html", "css", "javascript", "jquery"]
        let values4 = ['apple', 'orange', 'pear', 'grape']
        let values = [values1, values2, values3, values4]
        cy.get('.dropdown-menu-lists').each((dropdown, i) => {
            cy.wrap(dropdown).find('option').each((option, j) => {
                if (!option.attr('disabled')) {
                    cy.wrap(dropdown).select(j).should('have.value', values[i][j])
                }
            })
        })
    }

    checkboxes() {
        cy.get('[type="checkbox"]').each(checkbox => {
            cy.wrap(checkbox).check().invoke('prop', 'checked').should('equal', true)
        })
        cy.get('[value="option-2"]').uncheck().invoke('prop', 'checked').should('equal', false)
        cy.get('[value="option-4"]').uncheck().invoke('prop', 'checked').should('equal', false)
    }

    radioButtons() {
        cy.get('[type="radio"]').each(radiobutton => {
            if (radiobutton.attr('disabled') != 'disabled') {
                cy.wrap(radiobutton).click().invoke('prop', 'checked').should('equal', true)
            } 
        })
    }
}


export const onDropdownsPage = new DropdownsCheckboxesRadioButtons()