import {RegisterComponent} from "./register.component";
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {TestBed} from "@angular/core/testing";

describe('RegisterComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [RegisterComponent]
  }));

  it('mounts', () => {
    cy.mount(RegisterComponent)
  })

  it('populate name fields', () => {
    cy.mount(RegisterComponent)
    cy.get('[name=firstName]').type('Rhyan')
  })

  it('populate all fields', () => {
    cy.mount(RegisterComponent)
    cy.get('[name=firstName]').type('Rhyan')
    cy.get('[name=lastName]').type('Lugo')
    cy.get('[name=email]').type('test@test.com')
    cy.get('[name=password]').type('test')
    cy.get('[name=passwordConfirm]').type('test')
  })
})