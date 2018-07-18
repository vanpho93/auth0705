import { Component, Input } from '@angular/core';
import { Story } from '../types';
import { StoryService } from '../services/story.service';

@Component({
    selector: 'app-story',
    templateUrl: './story.component.html'
})

export class StoryComponent {
    @Input() story: Story;
}
