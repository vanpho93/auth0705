import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../types';
import { RequestService } from './request.service';

@Injectable()

export class PeopleService {
    constructor(
        private request: RequestService,
        private store: Store<AppState>
    ) {}

    getPeople() {
        this.request.get('/friend')
        .then(response => this.store.dispatch({ type: 'SET_PEOPLE', people: response.users }))
        .catch(error => console.log(error.message));
    }
}