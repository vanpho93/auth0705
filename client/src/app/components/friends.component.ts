import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { PeopleService } from '../services/people.service';
import { AppState, People } from '../types';

@Component({
    selector: 'app-friends',
    template: `
        <h4>Friends component</h4>
        <div class="user">
            <div class="header">
                <img src="https://s3.amazonaws.com/uifaces/faces/twitter/antonyzotov/128.jpg" />
                <h4>Abcd</h4>
            </div>
            <button class="btn btn-success">Add Friend</button>
            <button class="btn btn-success">Remove Friend</button>
        </div>
    `,
    styles: [`
        .header h4 { float: left; margin-left: 10px; }
        .header img{float: left;}
        div.header { width: 200px; height: 100px; margin-bottom: 10px; }
        .btn-success{
            color: #fff;
            background-color: #449d44;
            border-color: #398439;
            margin-top: -94px;
            margin-left: 10px;
        }

        .user {
            background-color: #E9E9E9;
            margin: 10px;
            padding: 10px;
            border-radius: 10px;
        }
    `]
})

export class FriendsComponent {
    people: People;
    constructor(private peopleSerive: PeopleService, private store: Store<AppState>) {
        this.peopleSerive.getPeople();
        this.store.select('people').subscribe(p => this.people = p);
    }
}
