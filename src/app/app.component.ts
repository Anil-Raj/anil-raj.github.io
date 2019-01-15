import { Component, OnInit } from '@angular/core';
import { AdalService } from 'adal-angular4';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private adalService: AdalService, private router: Router) {

  }
  ngOnInit() {
    this.adalService.init(environment.config);
    if (this.adalService.userInfo.authenticated ) {
      this.router.navigate(['home']);
    } else {
      this.router.navigate(['login']);
    }
  }
}
