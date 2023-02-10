export class DropdownsCheckboxesRadioButtons {
    dropdownValues() {
        let values1 = ['java', 'c#', 'python', 'sql']
        let values2 = ["eclipse", "maven", "testng", "junit"]
        let values3 = ["html", "css", "javascript", "jquery"]
        let values4 = ['apple', 'orange', 'pear', 'grape']
        let values = [values1, values2, values3, values4]
        for (let i=0; i<values.length; i++) {
            cy.get('.dropdown-menu-lists').each((dropdown, i) => {
                for (let j=0; j<values[i].length; j++) {
                    cy.wrap(dropdown).find('option').each((option, j) => {
                        if (!option.attr('disabled')) {
                            cy.wrap(dropdown).select(j).invoke('prop', 'value').should('equal', values[i][j])
                        } else {
                            cy.wrap(option).invoke('attr', 'value')
                        }
                    })
                        
                    // cy.wrap(dropdown).find('option').each(option => {
                    //     if (disabledAttr != disabledValue) {
                    //     }
                    // })
                }
            })
        }
        // for (let i=0; i<4; i++) {
        //     if ()
        //     cy.get('#dropdowm-menu-1').select(i).invoke('prop', 'value').should('equal', values1[i])
        //     cy.get('#dropdowm-menu-2').select(i).invoke('prop', 'value').should('equal', values2[i])
        //     cy.get('#dropdowm-menu-3').select(i).invoke('prop', 'value').should('equal', values3[i])
        // }
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