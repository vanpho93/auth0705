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

    createStory(content: string) {
        this.request.post('/story', { content })
        .then(response => this.store.dispatch({ type: 'ADD_STORY', story: response.story }))
        .catch(error => alert(error.message));
    }

    likeStory(_id: string) {
        this.request.post(`/story/like/${_id}`, null)
        .then(response => {
            const action = { type: 'UPDATE_LIKES_STATE', _id, fans: response.story.fans };
            this.store.dispatch(action);
        })
        .catch(console.log);
    }

    dislikeStory(_id: string) {
        this.request.post(`/story/dislike/${_id}`, null)
        .then(response => {
            const action = { type: 'UPDATE_LIKES_STATE', _id, fans: response.story.fans };
            this.store.dispatch(action);
        })
        .catch(console.log);
    }

    createComment(content: string, idStory: string) {
        this.request.post('/comment', { content, idStory })
        .then(response => {
            const action = { type: 'ADD_COMMENT', _id: idStory, comment: response.comment };
            this.store.dispatch(action);
        })
        .catch(console.log);
    }
}
