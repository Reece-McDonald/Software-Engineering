import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavComponent} from "./nav/nav.component";
import {MenuComponent} from "./menu/menu.component";
import {SecureComponent} from './secure.component';
import {RouterLink} from "@angular/router";
import {ChatboxComponent} from './chatbox/chatbox.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    NavComponent,
    MenuComponent,
    SecureComponent,
    ChatboxComponent,
  ],
  exports: [
    SecureComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule
  ]
})
export class SecureModule {
}
