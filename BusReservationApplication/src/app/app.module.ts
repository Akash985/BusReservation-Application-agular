import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { SearchBusComponent } from './search-bus/search-bus.component';
=======
import { SignupComponent } from './signup/signup.component';
>>>>>>> ffee7552ce81ccadf45db1f7ee62a77fe34732ae

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    SearchBusComponent
=======
    SignupComponent
>>>>>>> ffee7552ce81ccadf45db1f7ee62a77fe34732ae
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
