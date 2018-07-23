import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { PeopleService } from '../services/people.service';
import { AppState, People } from '../types';

@Component({
    selector: 'app-friends',
    template: `
        <h4>Friends component</h4>
        <pre>{{ people | json }}</pre>
    `
})

export class FriendsComponent {
    people: People;
    constructor(private peopleSerive: PeopleService, private store: Store<AppState>) {
        this.peopleSerive.getPeople();
        this.store.select('people').subscribe(p => this.people = p);
    }
}
