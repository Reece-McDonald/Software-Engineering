import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./public/login/login.component";
import {RegisterComponent} from "./public/register/register.component";
import {SecureComponent} from "./secure/secure.component";
import {PublicComponent} from "./public/public.component";
import {ChatComponent} from "./secure/chat/chat.component";
import {ProfileComponent} from "./secure/profile/profile.component";
import {MessagesComponent} from "./secure/chat/messages/messages.component";

const routes: Routes = [
  {
    path: '',
    component: SecureComponent,
    children: [
      {path: '', redirectTo: '/chat', pathMatch: 'full'},
      {
        path: 'chat',
        component: ChatComponent,
        children: [
          {path: '', redirectTo: '/chat', pathMatch: 'full'},
          {path: 'messages', component: MessagesComponent}
        ]
      },
      {path: 'profile', component: ProfileComponent}
    ]
  },
  {
    path: '',
    component: PublicComponent,
    children: [
      {path: 'register', component: RegisterComponent},
      {path: 'login', component: LoginComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
