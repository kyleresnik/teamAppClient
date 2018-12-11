import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this._fb.group({
      username: new FormControl(),
      password: new FormControl(),
    })
  }

}
