import { Component } from '@angular/core';
import { SidebarService } from './app-nav/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(public nav: SidebarService) {

  }
  navOpen() {
    this.nav.show();
}
}