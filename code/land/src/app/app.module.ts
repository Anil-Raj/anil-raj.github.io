import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './/app-routing.module';
import { AppComponent } from './app.component';
import { Bot1Component} from './bot1/bot1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutComponent,
    Bot1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
