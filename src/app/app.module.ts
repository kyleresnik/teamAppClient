import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
// import {MatDialogModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { DealComponent } from './deal/deal.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './footer/footer.component';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule, MatOptionModule, MatSelectModule, MatFormFieldControl } from '@angular/material';
import { DemoMaterialModule } from './material-module'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DealComponent,
    AdminComponent,
    ProfileComponent,
    FooterComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatOptionModule,
    // FlexLayoutModule,    
    // MatDialogModule,
    CarouselModule.forRoot(),
    MatSelectModule,
    MatSelectModule,
    MatFormFieldModule,
    DemoMaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
