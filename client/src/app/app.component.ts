import { Component } from '@angular/core';
import { AppState, User, Story } from './types';
import { Store } from '@ngrx/store';
import { UserService } from './services/user.service';
import { StoryService } from './services/story.service';

@Component({
  selector: 'app-root',
  template: `
    <app-nav *ngIf="loaded"></app-nav>
    <div class="container" *ngIf="loaded">
      <router-outlet></router-outlet>
    </div>
    <div class="container" *ngIf="!loaded">Loading...</div>
    <div class="container">
      <br>
      <pre>{{ stories | json }}</pre>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;
  stories: Story[];
  loaded: boolean;
  constructor(
    private userSerivce: UserService,
    private store: Store<AppState>,
    private storyService: StoryService
  ) {
    this.store.select('user').subscribe(u => this.user = u);
    this.store.select('loaded').subscribe(l => this.loaded = l);
    this.store.select('stories').subscribe(l => this.stories = l);
    this.userSerivce.check();
    this.storyService.getAllStories();
  }
}
