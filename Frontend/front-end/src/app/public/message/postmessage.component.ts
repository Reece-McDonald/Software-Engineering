import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-message',
  templateUrl: './postmessage.component.html',
  styleUrls: ['./postmessage.component.css', './../public.component.css']
})

export class RegisterComponent implements OnInit {
  id = '';
  firstName = '';
  lastName = '';
  message = '';

  constructor(
    private router: Router,
    private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  submit(): void {
       console.log({
         id: this.id,
         firstName: this.firstName,
         lastName: this.lastName,
         message: this.message,  
     })

    window.alert('Message Posted');
    

    /*this.authService.register({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      passwordConfirm: this.password,
    }).subscribe(() => {
      this.router.navigate(['/login'])
    }); //redirect after successful login*/
  }
}
