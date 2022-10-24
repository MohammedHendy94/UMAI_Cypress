/// <reference types="cypress" />

describe('UMAI', ()=> {

    it('Validate user can book successfully', ()=> {
        cy.visit('/')
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

    it('Validate user cant enter invalid data or leave fields empty', ()=> {
        cy.visit('/')
          cy.get('#timeslot-football-time-0').click()
          cy.contains('Sky Bar').click()
          cy.get('#um-field--first-name').clear()
          cy.get('#um-field--last-name').type("hendy")
          cy.get('[name="phoneCountry"]').select('EG')
          cy.get('#um-field--phone-number').type(" ")
          cy.get('#um-field--email').type("@hendy")
         // cy.contains('Phone number is required').should('contain','Phone number is required')
          cy.get('[for="um-field--phone-number"]')
          .parent('div')
          .find('.um-form-error')
          .should('contain','Phone number is required')
          cy.contains('Please enter a valid email address').should('contain','Please enter a valid email address')
          cy.get('#um-field--first-name').parent('div').find('.um-form-error').should('contain', 'First name is required')

    })

    it('Validatios on the call us button', ()=> {
        cy.visit('/')
       // cy.get('#um-reservation-date-picker').click()
      cy.contains('button', 'Call us here').then(colus => {
        const tex = colus.text()
        cy.wrap(colus).click()
        expect(tex).to.equal('Call us here')
      })
      cy.get('#um-private-events').invoke('text').then(text => {
        expect(text).to.equal('Call us here')
      })    

    })

    it.only('Validate that policy checkbox is unchecked by default', ()=> {

        cy.visit('/')
          cy.get('#timeslot----0').click()
          cy.contains('Sky Bar').click()
         // cy.get('#um-field-checkbox').click()
          cy.contains('button', 'Confirm Reservation Details').invoke('attr','disabled').should('exist')

    })
    
    
    
    })