import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavComponent} from "./nav/nav.component";
import {MenuComponent} from "./menu/menu.component";
import { SecureComponent } from './secure.component';
import {TestChatComponent} from "./test-chat/test-chat.component";



@NgModule({
  declarations: [
    NavComponent,
    MenuComponent,
    TestChatComponent,
    SecureComponent,
  ],
  exports: [
    SecureComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SecureModule { }
