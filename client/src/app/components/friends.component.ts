import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { PeopleService } from '../services/people.service';
import { AppState, People } from '../types';

@Component({
    selector: 'app-friends',
    template: `
        <h4>Friends</h4>
        <div class="user" *ngFor="let user of people.friends">
            <div class="header">
                <img src="{{user.avatar}}" />
                <h4>{{user.name}}</h4>
            </div>
            <button class="btn btn-success">Add Friend</button>
            <button class="btn btn-success">Remove Friend</button>
        </div>
        <h4>Incomming requests</h4>
        <div class="user" *ngFor="let user of people.incommingRequests">
            <div class="header">
                <img src="{{user.avatar}}" />
                <h4>{{user.name}}</h4>
            </div>
            <button class="btn btn-success">Add Friend</button>
            <button class="btn btn-success">Remove Friend</button>
        </div>
        <h4>Sent requests</h4>
        <div class="user" *ngFor="let user of people.sentRequests">
            <div class="header">
                <img src="{{user.avatar}}" />
                <h4>{{user.name}}</h4>
            </div>
            <button class="btn btn-success">Add Friend</button>
            <button class="btn btn-success">Remove Friend</button>
        </div>
        <h4>Others</h4>
        <div class="user" *ngFor="let user of people.others">
            <div class="header">
                <img src="{{user.avatar}}" />
                <h4>{{user.name}}</h4>
            </div>
            <button class="btn btn-success" (click)="addFriend(user._id);">
                Add Friend
            </button>
        </div>
    `,
    styles: [`
        .header h4 { float: left; margin-left: 10px; }
        .header img{float: left;}
        div.header { width: 300px; height: 100px; margin-bottom: 10px; }
        .btn-success{
            color: #fff;
            background-color: #449d44;
            border-color: #398439;
            margin-top: -94px;
            margin-left: 10px;
        }

        .user {
            background-color: #E9E9E9;
            margin: 20px;
            padding: 20px;
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

    addFriend(_id: string) {
        this.peopleSerive.addFriend(_id);
    }
}
