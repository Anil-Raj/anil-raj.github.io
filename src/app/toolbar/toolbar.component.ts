import { Component, OnInit } from '@angular/core';
import { AdalService } from 'adal-angular4';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  user: Observable<adal.User>;

  constructor(private adalService: AdalService, private router: Router) {
    // this.user = this.adalService.getUser();
  }


  ngOnInit() {

    this.adalService.handleWindowCallback();
  }

  get user12() {
    let userData: adal.User;
    this.adalService.getUser().subscribe(user => userData = user);
    console.log(userData);
    return userData.profile.name.match(/\b(\w)/g).join('');
  }

  logout() {
    this.adalService.logOut();
  }

  get authenticated(): boolean {
    if (this.adalService.userInfo.authenticated ) {
      this.router.navigate(['home']);
    }
    return this.adalService.userInfo.authenticated;
  }
}