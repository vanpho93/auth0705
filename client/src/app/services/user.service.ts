import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../types';
import { RequestService } from './request.service';

@Injectable()

export class UserService {
    constructor(private request: RequestService, private store: Store<AppState>) {}

    signIn(email: string, password: string) {
        this.request.post('/user/signin', { email, password })
        .then(response => {
            this.store.dispatch({ type: 'SET_USER', user: response.user });
        })
        .catch(error => alert(error.message));
    }
}
