import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {
  email = '';
  
  constructor(
    private router: Router,
    private authService: AuthService) {
  }

  submit(): void {
    console.log({
      email: this.email
  })

  this.authService.register({ // don't NEED to do this, just send it to backend.
    email: this.email
  })
}}
