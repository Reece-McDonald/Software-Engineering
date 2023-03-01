import { LoginComponent } from "./login.component";
import { createOutputSpy } from "cypress/angular";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {TestBed} from "@angular/core/testing";


describe('LoginComponent', () => {
    beforeEach(() => TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoginComponent]
    }));
  
    it('mounts', () => {
      cy.mount(LoginComponent)
    })
  
    it('fills in email and password', () => {
      cy.mount(LoginComponent)
      cy.get('[name = email]').type('christian.bello@ufl.edu')
      cy.get('[name = password]').type('password')
    })

    it('clicks on the register button', () => {
      cy.mount(LoginComponent)
      cy.get('button[id="register"]').click()      

      //cy.url().should("include","register") // going to assert URL but cypress doesn't register a change in URL for this

    } )

  })