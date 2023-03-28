import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', './../public.component.css']
})

export class RegisterComponent implements OnInit {
  firstName = '';
  lastName = '';
  email = '';
  password = '';
  passwordConfirm = '';

  constructor(
    private router: Router,
    private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  submit(): void {
    //   console.log({
    //     firstName: this.firstName,
    //     lastName: this.lastName,
    //     email: this.email,
    //     password: this.password,
    //     passwordConfirm: this.password,
    // })

    if (this.checkIfEmpty(this.firstName) || this.checkIfEmpty(this.lastName) || this.checkIfEmpty(this.email) || this.checkIfEmpty(this.password) || this.checkIfEmpty(this.password)) {
      window.alert("All fields must be filled in.")
    }
    else if (this.password != this.passwordConfirm) {
      window.alert("Passwords are not the same");
    }
    else {
      this.authService.register({
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        passwordConfirm: this.passwordConfirm,
      }).subscribe(() => {
        this.router.navigate(['/login'])
      }); //redirect after successful login
    }
  }

  // check if user inputs are empty
  checkIfEmpty(value: string): boolean {
    return value === null || value.trim().length === 0;
  }
}
