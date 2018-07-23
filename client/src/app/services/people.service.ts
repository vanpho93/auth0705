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

    addFriend(_id: string) {
        this.request.post('/friend/add/' + _id, null)
        .then(response => {
            const action = { type: 'ADD_FRIEND', user: response.user };
            this.store.dispatch(action);
        })
        .catch(error => console.log(error.message));
    }
}
