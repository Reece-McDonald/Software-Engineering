import { ChatComponent } from "./chat.component";
import { createOutputSpy } from "cypress/angular";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {TestBed} from "@angular/core/testing";


describe('LoginComponent', () => {
    beforeEach(() => TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ChatComponent]
    }));

    it('mounts', () => {
      cy.mount(ChatComponent)
      cy.wait(500)
    })

    it('fills in message bar', () => {
      cy.mount(ChatComponent)
      cy.get('[name = message]').type('Hello. This is a test message.')
      cy.wait(1000)
    })

    it('clicks on the send button', () => {
      cy.mount(ChatComponent)
      cy.get('button[id="send"]').click()      

      //cy.url().should("include","register") // going to assert URL but cypress doesn't register a change in URL for this

    } )

  })