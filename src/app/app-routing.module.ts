import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DealComponent } from './deal/deal.component';
import { AdminComponent } from './admin/admin.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from '../app/login/login.component'
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'deal',
    component: DealComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
]
  {
    path: 'dashboard',
    component: DashboardComponent
  }

];

  @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
