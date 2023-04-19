import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './../public.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  submit() {
    if (this.checkIfEmpty(this.form.get(['email'])?.value) || this.checkIfEmpty(this.form.get(['password'])?.value)) {
      this.toastr.error('All fields must be filled in.', 'Error',
        {
          timeOut: 3000,
        });
    }
    else {
      this.authService.login(this.form.getRawValue()).subscribe(
        () => {
          this.toastr.success('Login successful.', 'Success',
            {
              timeOut: 3000,
            });
          this.router.navigate(['/']);
        });
    }

  }

  // check if user inputs are empty
  checkIfEmpty(value: string): boolean {
    return value === null || value.trim().length === 0;
  }
}
