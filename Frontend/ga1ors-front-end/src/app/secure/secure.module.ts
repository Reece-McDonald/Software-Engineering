import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavComponent} from "./nav/nav.component";
import { SecureComponent } from './secure.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import { ChatComponent } from './chat/chat.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    NavComponent,
    SecureComponent,
    ChatComponent,
    ProfileComponent
  ],
  exports: [
    SecureComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    ReactiveFormsModule
  ]
})
export class SecureModule { }