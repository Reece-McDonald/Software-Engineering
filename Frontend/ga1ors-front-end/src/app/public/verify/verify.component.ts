import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css', './../public.component.css']
})
export class VerifyComponent implements OnInit {
  email = '';
  vCode = '';

  constructor(private router: Router,
              private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  submit() {
    this.authService.verify({
      email: this.email,
      vCode: this.vCode
    }).subscribe(
      () => {
        this.router.navigate(['/login'])
      },
      error => {
        window.alert("Wrong verification code");
        this.router.navigate(['/register'])
      });
  }
}
