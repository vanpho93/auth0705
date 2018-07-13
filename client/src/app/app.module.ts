import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in.component';
import { ProfileComponent } from './components/profile.component';

import { RequestService } from './services/request.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [RequestService, UserService],
  bootstrap: [AppComponent]
})

export class AppModule { }
