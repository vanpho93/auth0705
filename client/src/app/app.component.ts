import { Component } from '@angular/core';
import { AppState, User } from './types';
import { Store } from '@ngrx/store';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  template: `
  <app-nav></app-nav>
  <div class="container">
    <router-outlet></router-outlet>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;
  loaded: boolean;
  constructor(private userSerivce: UserService, private store: Store<AppState>) {
    this.userSerivce.check();
    this.store.select('user').subscribe(u => this.user = u);
    this.store.select('loaded').subscribe(l => this.loaded = l);
  }
}

/*
<div class="container" *ngIf="loaded">
  <app-sign-in *ngIf="!user"></app-sign-in>
  <app-profile *ngIf="user"></app-profile>
  <br>
  <pre>{{ user | json }}</pre>
</div>
<div class="container" *ngIf="!loaded">Loading...</div>
*/
