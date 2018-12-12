import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { HomeComponent } from './home/homecomponent'; 
// import { AboutComponent} from './about/about.component';
import {DealComponent} from './deal/deal.component'
import { AdminComponent } from './admin/admin.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from '../app/login/login.component'
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'deal', component: DealComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'profile', component: ProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
