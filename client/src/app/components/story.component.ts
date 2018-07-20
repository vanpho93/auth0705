import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoryService } from '../services/story.service';
import { AppState, User, Story } from '../types';

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
        .header img {
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

        img.like { width: 30px; height: 30px; margin-right: 5px; }
    `]
})

export class StoryComponent {
    @Input() story: Story;
    user: User;
    constructor(private store: Store<AppState>) {
        this.store.select('user').subscribe(u => this.user = u);
    }

    get shouldShowLikeIcon(): boolean {
        return this.story.fans.includes(this.user._id);
    }
}
