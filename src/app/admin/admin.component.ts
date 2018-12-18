import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: 'admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';
  
    constructor(
      private _fb: FormBuilder, 
      private route: ActivatedRoute,
      private router: Router,
      private AuthService: AuthService
      ) { }
  
    ngOnInit() {
      this.loginForm = this._fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
      })
      this.AuthService.logout();
  
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
  
    get f() { return this.loginForm.controls; }
  
      onSubmit() {
          this.submitted = true;
  
          if (this.loginForm.invalid) {
              return;
          }
  
          this.loading = true;
          this.AuthService.login(this.f.username.value, this.f.password.value)
              .pipe(first())
              .subscribe(
                  data => {
                      this.router.navigate(["/dashboard"]);
                  },
                  error => {
                      this.error = error;
                      this.loading = false;
                  });
      }
  
  
  }
