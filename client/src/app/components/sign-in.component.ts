import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-sign-in',
    template: `
    <form style="margin-top: 10px;" [formGroup]="formsignIn" (ngSubmit)="signIn();">
        <div class="form-group">
          <label>Email address</label>
          <input type="email" class="form-control" placeholder="Enter email" formControlName="email">
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-control" placeholder="Password" formControlName="password">
        </div>
        <button type="submit" class="btn btn-primary">
            Sign In
        </button>
    </form>
    `
})

export class SignInComponent {
    formsignIn = new FormGroup({
        email: new FormControl('teo@gmail.com'),
        password: new FormControl('123'),
    });

    constructor(private userSerivce: UserService) {}

    signIn() {
        const { email, password } = this.formsignIn.value;
        this.userSerivce.signIn(email, password);
    }
}
