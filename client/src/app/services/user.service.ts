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
            localStorage.setItem('token', response.user.token);
        })
        .catch(error => alert(error.message));
    }

    check() {
        const token = localStorage.getItem('token');
        if (!token) {
            this.store.dispatch({ type: 'LOADED' });
            return console.log('Khong co token.');
        }
        this.request.post('/user/check', { token: localStorage.getItem('token') })
        .then(response => {
            this.store.dispatch({ type: 'SET_USER', user: response.user });
            localStorage.setItem('token', response.user.token);
        })
        .catch(error => {
            localStorage.removeItem('token');
            console.log(error.message);
        })
        .then(() => this.store.dispatch({ type: 'LOADED' }));
    }

    logOut() {
        localStorage.removeItem('token');
        this.store.dispatch({ type: 'LOG_OUT' });
    }
}
