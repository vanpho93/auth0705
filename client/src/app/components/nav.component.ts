import { Component } from '@angular/core';

@Component({
    selector: 'app-nav',
    template: `
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">Khoa Pham</a>
        </div>
        <ul class="nav navbar-nav">
            <li>
                <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">
                    Home
                </a>
            </li>
          <li><a routerLink="/signin" routerLinkActive="active">Sign In</a></li>
          <li><a routerLink="/signup" routerLinkActive="active">Sign Up</a></li>
          <li><a routerLink="/password" routerLinkActive="active">Forgot Password</a></li>
          <li><a routerLink="/profile" routerLinkActive="active">Profile</a></li>
          <li><a routerLink="/friends" routerLinkActive="active">Friends</a></li>
        </ul>
      </div>
    </nav>
    `,
    styles: [` a.active { color: gray; font-weight: bold; } `]
})

export class NavComponent {}
