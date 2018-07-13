import { Component } from '@angular/core';
import { AppState, User } from '../types';
import { Store } from '@ngrx/store';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-profile',
    template: `
        <div>
            <h1>Profile Page</h1>
            <button class="btn btn-warning" (click)="logOut()">
                Log out
            </button>
            <div>
                <h4>Name: {{ user.name }}</h4>
                <p>email: {{ user.email }}</p>
                <img src="{{ user.avatar }}" />
            </div>
        </div>
    `
})

export class ProfileComponent {
    user: User;

    constructor(private userSerivce: UserService, private store: Store<AppState>) {
        this.store.select('user').subscribe(u => this.user = u);
    }

    logOut() { this.userSerivce.logOut(); }
}
