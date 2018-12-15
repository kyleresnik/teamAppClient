import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { AlertService } from '../services/alert.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private _fb: FormBuilder,
    private router: Router,
    private AuthService: AuthService,
    private userService: UserService, 
    private alertService: AlertService
    ) { 
      if(this.AuthService.currentUserValue) {
        this.router.navigate(['/']);
      }
    }

  ngOnInit() {
    this.registerForm = this._fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }
  
  get f() {return this.registerForm.controls}

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.userService.register(this.registerForm.value)
          .pipe(first())
          .subscribe(
              data => {
                  this.alertService.success('Registration successful', true);
                  this.router.navigate(['/login'])
                },
                error => {
                  this.alertService.error(error);
                  this.loading = false;
                })

  }

}
