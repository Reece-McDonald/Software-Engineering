import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Auth} from "../../classes/auth";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css', './../secure.component.css']
})
export class ProfileComponent {
  infoForm!: FormGroup;
  passwordForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService) {
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
    this.authService.updateInfo(this.infoForm?.getRawValue()).subscribe(
      user => Auth.userEmitter.emit(user)
    );
  }

  passwordSubmit(): void {
    this.authService.updatePassword(this.passwordForm?.getRawValue()).subscribe(
      res=>console.log(res)
    );
  }
}
