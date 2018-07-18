import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../types';
import { RequestService } from './request.service';

@Injectable()

export class StoryService {
    constructor(
        private request: RequestService,
        private store: Store<AppState>
    ) {}

    getAllStories() {
        this.request.get('/story')
        .then(response => this.store.dispatch({ type: 'SET_STORIES', stories: response.stories }))
        .catch(error => console.log(error.message));
    }
}
