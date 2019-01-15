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
  modalVisible: boolean;

  constructor(private adalService: AdalService, private router: Router) {
    this.user = this.adalService.getUser();
    
  }


  ngOnInit() {

    this.adalService.handleWindowCallback();
  }
  getInitials(name) {
    return name.match(/\b(\w)/g).join('');
  }

  logout() {
    this.adalService.logOut();
  }
  toggleModal(){
    this.modalVisible = !this.modalVisible;
  }

  get authenticated(): boolean {

    return this.adalService.userInfo.authenticated;
  }
}
