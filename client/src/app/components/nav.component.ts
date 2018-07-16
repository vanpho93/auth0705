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
          <li class="active"><a href="/">Home</a></li>
          <li><a routerLink="/signin">Sign In</a></li>
          <li><a routerLink="/signup">Sign Up</a></li>
          <li><a routerLink="/password">Forgot Password</a></li>
          <li><a routerLink="/profile">Profile</a></li>
          <li><a routerLink="/friends">Friends</a></li>
        </ul>
      </div>
    </nav>
    `
})

export class NavComponent {}
