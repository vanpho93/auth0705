import { Component } from '@angular/core';
import { StoryService } from '../services/story.service';

@Component({
    selector: 'app-story-form',
    template: `
    <div style="margin: 15px">
        <textarea
            class="form-control"
            rows="5"
            placeholder="Enter your story"
            (keyUp.enter)="createStory();"
            [(ngModel)]="txtContent"
        ></textarea>
        <br>
        <button class="btn btn-success" (click)="createStory();">Post</button>
    </div>
    `
})

export class StoryFormComponent {
    txtContent = '';
    constructor(private storyService: StoryService) {}

    createStory() {
        this.storyService.createStory(this.txtContent);
        this.txtContent = '';
    }
}
