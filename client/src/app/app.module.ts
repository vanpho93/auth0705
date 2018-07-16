import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in.component';
import { ProfileComponent } from './components/profile.component';
import { HomeComponent } from './components/home.component';
import { ForgotPasswordComponent } from './components/forgot-password.component';
import { FriendsComponent } from './components/friends.component';
import { SignUpComponent } from './components/sign-up.component';

import { NavComponent } from './components/nav.component';

import { RequestService } from './services/request.service';
import { UserService } from './services/user.service';

import { loadedReducer, userReducer } from './reducers';

const routesConfig: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'password', component: ForgotPasswordComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'friends', component: FriendsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    ProfileComponent,
    HomeComponent,
    ForgotPasswordComponent,
    FriendsComponent,
    SignUpComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routesConfig),
    StoreModule.forRoot({ loaded: loadedReducer, user: userReducer })
  ],
  providers: [RequestService, UserService],
  bootstrap: [AppComponent]
})

export class AppModule { }
