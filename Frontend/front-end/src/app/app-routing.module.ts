import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./public/login/login.component";
import {RegisterComponent} from "./public/register/register.component";
import {SecureComponent} from "./secure/secure.component";
import {PublicComponent} from "./public/public.component";

const routes: Routes = [
  {path: '', component: SecureComponent},
  {
    path: '',
    component: PublicComponent,
    children: [
      {path: 'register', component: RegisterComponent},
      {path: 'login', component: LoginComponent},]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
