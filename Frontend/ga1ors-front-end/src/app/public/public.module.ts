import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { VerifyComponent } from './verify/verify.component';



@NgModule({
  declarations: [
    PublicComponent,
    LoginComponent,
    RegisterComponent,
    VerifyComponent,
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PublicModule { }
