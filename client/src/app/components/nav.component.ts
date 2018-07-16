import { Component } from '@angular/core';
import { AppState, User } from '../types';
import { Store } from '@ngrx/store';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-nav',
    template: `
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">Khoa Pham</a>
        </div>
        <ul class="nav navbar-nav" *ngIf="user">
            <li>
                <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">
                    Home
                </a>
            </li>
          <li><a routerLink="/profile" routerLinkActive="active">Profile</a></li>
          <li><a routerLink="/friends" routerLinkActive="active">Friends</a></li>
          <li><a (click)="logOut();" style="cursor: pointer;">Log out</a></li>
        </ul>
        <ul class="nav navbar-nav" *ngIf="!user">
            <li>
                <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">
                    Home
                </a>
            </li>
          <li><a routerLink="/signin" routerLinkActive="active">Sign In</a></li>
          <li><a routerLink="/signup" routerLinkActive="active">Sign Up</a></li>
          <li><a routerLink="/password" routerLinkActive="active">Forgot Password</a></li>
        </ul>
      </div>
    </nav>
    `,
    styles: [` a.active { color: gray; font-weight: bold; } `]
})

export class NavComponent {
  user: User;
  constructor(private userSerivce: UserService, private store: Store<AppState>) {
    this.store.select('user').subscribe(u => this.user = u);
  }

  logOut() { this.userSerivce.logOut(); }
}
