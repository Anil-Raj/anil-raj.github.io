import { Component, OnInit } from '@angular/core';
import { SidebarService } from './sidebar.service';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: 'dashboard', title: 'DashBoard', icon: 'dock', class: '' },
  { path: 'talking-pen', title: 'Talking Pen', icon: 'account_balance_wallet', class: '' },
  // { path: 'trend', title: 'Trends', icon: 'trending_up', class: '' },
  // { path: 'category', title: 'Categories', icon: 'category', class: '' },
  // { path: 'fitness', title: 'Fitness', icon: 'fitness_center', class: '' },
  // { path: 'sign-in', title: 'Sign In', icon: 'account_circle', class: '' },
];

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.css']
})
export class AppNavComponent  implements OnInit {

  constructor( public nav: SidebarService ) {

    console.log(nav.visible);

  }
  menuItems: any[];

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    // if ($(window).width() > 991) {
    //   return false;
    // }
    return false;
  }
  closeSidebar() {
    this.nav.hide();
  }

}
