import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HomeComponent } from './home/homecomponent'; 
// import { AboutComponent} from './about/about.component';
import {DealComponent} from './deal/deal.component'
import { AdminComponent } from './admin/admin.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: 'deal', component: DealComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
