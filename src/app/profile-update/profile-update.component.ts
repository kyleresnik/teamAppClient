import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Profile } from '../models/profile.model';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.scss']
})
export class ProfileUpdateComponent implements OnInit {
  public profileEditForm: FormGroup;
  tempProfileId: number;
  createdClicked = false;

  constructor(private fb: FormBuilder, private us: UserService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.profileEditForm = this.fb.group({
      bio: new FormControl(),
      twHandle: new FormControl(),
      fbUrl: new FormControl()
    })
  }

  onSubmit() {
    this.us.createProfile(this.profileEditForm.value).subscribe((createProfileFromServer) => {
      console.log(createProfileFromServer)
    })
  }

  clickedButton(id) {
    this.createdClicked = !this.createdClicked;
    this.tempProfileId = id;
  }

}
