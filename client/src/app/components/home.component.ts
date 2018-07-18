import { Component } from '@angular/core';
import { AppState, User, Story } from '../types';
import { Store } from '@ngrx/store';
import { StoryService } from '../services/story.service';

@Component({
    selector: 'app-home',
    template: `
        <h4>Home component</h4>
        <div *ngIf="!user">
            Gioi thieu gi do o day.
            <a routerLink="/signup">Dang ky tai day.</a>
        </div>
        <div *ngIf="user">
            <app-story *ngFor="let story of stories" [story]="story"></app-story>
        </div>
    `
})

export class HomeComponent {
    stories: Story[];
    user: User;
    constructor(
        private store: Store<AppState>,
        private storyService: StoryService
    ) {
        this.store.select('user').subscribe(u => this.user = u);
        this.store.select('stories').subscribe(l => this.stories = l);
        this.storyService.getAllStories();
    }
}
