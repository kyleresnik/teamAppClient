import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Profile } from '../models/profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public profileForm: FormGroup;
  profile: Profile[];
  token: string;

  constructor(private fb: FormBuilder, private us: UserService) { }

  ngOnInit() {
    this.createForm();
    this.us.getProfile().subscribe(us => {
      this.profile = us
      console.log(this.profile)
    });
    
  }

  createForm() {
    this.profileForm = this.fb.group({
      bio: new FormControl(),
      twHandle: new FormControl(),
      fbUrl: new FormControl()
    })
  }

  onSubmit() {
    this.us.createProfile(this.profileForm.value).subscribe((createProfileFromServer) => {
      console.log(createProfileFromServer)
    })
  }

}