import { Component } from '@angular/core';
import { AppState, User } from './types';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <app-sign-in *ngIf="!user"></app-sign-in>
      <app-profile *ngIf="user"></app-profile>
      <pre>{{ user | json }}</pre>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;

  constructor(private store: Store<AppState>) {
    this.store.select('user').subscribe(u => this.user = u);
  }
}
