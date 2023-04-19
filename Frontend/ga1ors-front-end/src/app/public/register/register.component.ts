import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

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

  constructor(private router: Router,
              private authService: AuthService,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
  }

  submit() {
    if (this.checkIfEmpty(this.firstName) || this.checkIfEmpty(this.lastName) || this.checkIfEmpty(this.email) || this.checkIfEmpty(this.password) || this.checkIfEmpty(this.password)) {
      this.toastr.error('All fields must be filled in.', 'Error',
        {
          timeOut: 3000,
        });
    }
    else if (this.password != this.passwordConfirm) {
      this.toastr.error('Passwords are not the same.', 'Error',
        {
          timeOut: 3000,
        });
    }
    else if (!this.email.includes('@ufl.edu'))
    {
      this.toastr.error('Email must be a valid UF email.', 'Error',
        {
          timeOut: 3000,
        });
    }
    else {
      this.authService.register({
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        passwordConfirm: this.passwordConfirm,
      }).subscribe(() => {
        this.toastr.info('Please verify your email.', 'Verification',
          {
            timeOut: 3000,
          });
        this.router.navigate(['/verify']);
      }); //redirect after successful login
    }
  }

  // check if user inputs are empty
  checkIfEmpty(value: string): boolean {
    return value === null || value.trim().length === 0;
  }
}
