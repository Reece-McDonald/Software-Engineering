import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavComponent} from "./nav/nav.component";
import { SecureComponent } from './secure.component';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import { ChatComponent } from './chat/chat.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ProfileComponent } from './profile/profile.component';
import { DisplayMessagesComponent } from './chat/display-messages/display-messages.component';
import { MessageInputComponent } from './chat/message-input/message-input.component';

@NgModule({
  declarations: [
    NavComponent,
    SecureComponent,
    ChatComponent,
    ProfileComponent,
    DisplayMessagesComponent,
    MessageInputComponent,
  ],
  exports: [
    SecureComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    ReactiveFormsModule,
    RouterLinkActive
  ]
})
export class SecureModule { }
