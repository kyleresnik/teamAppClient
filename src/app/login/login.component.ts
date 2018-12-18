import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm} from '@angular/forms'
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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
                  if (data.user.userRole == 'admin') {
                    this.router.navigate(["/dashboard"]);
                  } else {
                    this.router.navigate([""])
                  }
                  console.log(data.user.userRole)
                },
                error => {
                    this.error = error;
                    this.loading = false;
                });
    }

}
