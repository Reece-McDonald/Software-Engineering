import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SecureModule} from "./secure/secure.module";
import {PublicModule} from "./public/public.module";
import {HttpClientModule} from "@angular/common/http";
import { StepperComponent } from './testing/cypress-example/stepper/stepper.component';

@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SecureModule,
    PublicModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
