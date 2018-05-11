import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TalkingPenComponent } from '../talking-pen/talking-pen.component';
import { AppDashboardComponent } from '../app-dashboard/app-dashboard.component';


const routes: Routes = [
  { path: 'talking-pen', component: TalkingPenComponent },
  { path: 'dashboard', component: AppDashboardComponent },
  // { path: 'transaction/edit/:id', component: TransactionEditComponent },
  // { path: 'transaction-add', component: TransactionAddComponent },
  // { path: 'debt', component: DebtComponent },
  // { path: 'trend', component: TrendComponent },
  // { path: 'category', component: CategoryListComponent },
  // { path: 'category/:id', component: CategoryDetailComponent },
  // { path: 'category/edit/:id', component: CategoryEditComponent },
  // { path: 'category-add', component: CategoryAddComponent },
  // { path: 'settings', component: SettingComponent },
  // { path: 'fitness', component: FitnessComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  // { path: 'sign-in', component: GoogleSigninComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
