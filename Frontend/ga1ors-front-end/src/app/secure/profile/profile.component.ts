import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Auth} from "../../classes/auth";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css', './../secure.component.css']
})
export class ProfileComponent implements OnInit {
  infoForm!: FormGroup;
  passwordForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.infoForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      email: ''
    });

    this.passwordForm = this.formBuilder.group({
      password: '',
      passwordConfirm: ''
    });

    Auth.userEmitter.subscribe(
      user => {
        this.infoForm.patchValue(user);
      }
    )
  }

  infoSubmit(): void {
    let firstName: string = this.infoForm.get('firstName')?.value
    let lastName: string = this.infoForm.get('lastName')?.value
    let email: string = this.infoForm.get('email')?.value

    if (this.checkIfEmpty(firstName) || this.checkIfEmpty(lastName) || this.checkIfEmpty(email)) {
      this.toastr.error('All fields must be filled. Please refresh page.', 'Error',
        {
          timeOut: 3000,
        });
    }
    else if (!email.includes('@ufl.edu')) {
      this.toastr.error('Email must be a valid ufl email.', 'Error',
        {
          timeOut: 3000,
        });
    }
    else if (this.infoForm.get('firstName')?.dirty || this.infoForm.get('lastName')?.dirty || this.infoForm.get('email')?.dirty) {
      this.authService.updateInfo(this.infoForm?.getRawValue()).subscribe(
        user => {
          this.toastr.success('Profile successfully updated.', 'Success',
            {
              timeOut: 3000,
            });
          Auth.userEmitter.emit(user)
        }
      );
    }
    else {
      this.toastr.error('At least one field must be changed.', 'Error',
        {
          timeOut: 3000,
        });
    }

  }

  passwordSubmit(): void {
    let password: string = this.passwordForm.get('password')?.value
    let passwordConfirm: string = this.passwordForm.get('passwordConfirm')?.value

    if (this.checkIfEmpty(password) || this.checkIfEmpty(passwordConfirm))
    {
      this.toastr.error('All fields must be filled. Please refresh page.', 'Error',
        {
          timeOut: 3000,
        });
    }
    else
    {
      this.authService.updatePassword(this.passwordForm?.getRawValue()).subscribe(
        () => {
          this.toastr.success('Password successfully updated.', 'Success',
            {
              timeOut: 3000,
            });
        },
        () => {
          this.toastr.error('Passwords do not match', 'Error',
            {
              timeOut: 3000,
            });
        }
      );
    }
  }

  checkIfEmpty(value: string): boolean {
    return value === null || value.trim().length === 0;
  }

}
