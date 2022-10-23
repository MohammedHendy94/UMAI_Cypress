/// <reference types="cypress" />

describe('UMAI', ()=> {

    it('Validate user can book successfully', ()=> {
        cy.visit('/')

      /*  cy.get('#um-reservation-date-picker').click()
       cy.get('tbody').contains('tr').then( tableRow => {
            cy.wrap(tableRow).find('.day-content').click()
          })
       */

          cy.get('#timeslot-football-time-0').click()
          //cy.contains('Sky Bar').click()
          cy.get('#um-field--first-name').type("Mohamed")
          cy.get('#um-field--last-name').type("Hendy")
          cy.get('[name="phoneCountry"]').select('EG')
          cy.get('#um-field--phone-number').type("01023818181")
          cy.get('#um-field--email').type("Mohamed@hendy.com")
          cy.get('#um-field-checkbox').check()
          cy.get('#ums-confirm-reservation-details-button').click()
         // cy.get('.um-dialog__button--confirm').click()
          cy.get('#ums-browse-more-button').should('contain','Make another reservation') 

    })
    
    
    
    
    })