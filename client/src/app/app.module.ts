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
import { PageNotFoundComponent } from './components/page-not-found.component';
import { NavComponent } from './components/nav.component';
import { StoryComponent } from './components/story.component';

import { RequestService } from './services/request.service';
import { UserService } from './services/user.service';
import { StoryService } from './services/story.service';

import { loadedReducer, userReducer, storiesReducer } from './reducers';
import { MustBeGuestGuard } from './guards/must-be-guest.guard';
import { MustBeUserGuard } from './guards/must-be-user.guard';

const routesConfig: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signin', component: SignInComponent, canActivate: [MustBeGuestGuard] },
  { path: 'signup', component: SignUpComponent, canActivate: [MustBeGuestGuard] },
  { path: 'password', component: ForgotPasswordComponent, canActivate: [MustBeGuestGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [MustBeUserGuard] },
  { path: 'friends', component: FriendsComponent, canActivate: [MustBeUserGuard] },
  { path: '**', component: PageNotFoundComponent }
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
    NavComponent,
    PageNotFoundComponent,
    StoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routesConfig),
    StoreModule.forRoot({ loaded: loadedReducer, user: userReducer, stories: storiesReducer })
  ],
  providers: [RequestService, UserService, MustBeGuestGuard, MustBeUserGuard, StoryService],
  bootstrap: [AppComponent]
})

export class AppModule { }
