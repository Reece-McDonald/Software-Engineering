import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', './../public.component.css']
})

export class RegisterComponent implements OnInit{
  firstName = '';
  lastName = '';
  email = '';
  password = '';
  passwordConfirm = '';

  constructor(
    private http: HttpClient,
    private router: Router) {
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
  // });
    this.http.post(`${environment.api}/register`, {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      passwordConfirm: this.password,
    }).subscribe(
        res =>{
          this.router.navigate(['/login']); //redirect after successful login
        });
  }
}
