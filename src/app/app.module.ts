import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { MatDialogModule,
        MatSelectModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule,
        MatCardModule,
        MatMenuModule,
        MatToolbarModule,
        MatOptionModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { DealComponent } from './deal/deal.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './footer/footer.component';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DemoMaterialModule } from './material-module';
import { AuthGuard } from './auth.guard';
import { AuthService } from './services/auth.service';
import { UpdateDealComponent } from './update-deal/update-deal.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UsersService } from './admin/services/users.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DealComponent,
    ProfileComponent,
    FooterComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    UpdateDealComponent,
    ProfileUpdateComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatOptionModule,
    // FlexLayoutModule,    
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatSelectModule,
    DemoMaterialModule,
    CarouselModule.forRoot(),

  ],
  providers: [AuthService, AuthGuard, UsersService],
  bootstrap: [AppComponent,]
})
export class AppModule { }