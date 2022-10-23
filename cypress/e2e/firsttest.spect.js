/// <reference types="cypress" />

describe('my first suite', ()=> {

it('my first test', ()=> {
cy.visit('/')
cy.get('.um-notify-me__button').click()

})




})