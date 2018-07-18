import { Component, Input } from '@angular/core';
import { Story } from '../types';
import { StoryService } from '../services/story.service';

@Component({
    selector: 'app-story',
    templateUrl: './story.component.html',
    styles: [`
        .story {
            margin: 15px;
            padding: 10px;
            background-color: #ECEAEC;
            border-radius: 5px;
        }
        .story img {
            width: 50px;
            height: 50px;
            border-radius: 50px;
            display: inline-block;
        }
        h5 { float: right; }
        .header {
            width: 150px;
            margin-bottom: 10px;
        }
    `]
})

export class StoryComponent {
    @Input() story: Story;
}
