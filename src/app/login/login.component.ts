import { Component, OnInit } from '@angular/core';
import { AdalService } from 'adal-angular4';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private adalService: AdalService) { }

  ngOnInit() {
    this.adalService.handleWindowCallback();
  }
  login() {
    this.adalService.login();
  }


  get authenticated(): boolean {
    return this.adalService.userInfo.authenticated;
  }

}
