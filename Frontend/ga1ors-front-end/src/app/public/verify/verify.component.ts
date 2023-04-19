import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css', './../public.component.css']
})
export class VerifyComponent implements OnInit {
  email = '';
  vCode = '';

  constructor(private router: Router,
              private authService: AuthService,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
  }

  submit() {
    this.authService.verify({
      email: this.email,
      vCode: this.vCode
    }).subscribe(
      () => {
        this.toastr.success('Registration successful', 'Success',
          {
            timeOut: 3000,
          });
        this.router.navigate(['/login'])
      },
      () => {
        this.toastr.error('Registration unsuccessful. Wrong verification code. Please try again.', 'Error',
          {
            timeOut: 3000,
          });
        this.router.navigate(['/register'])
      });
  }
}
