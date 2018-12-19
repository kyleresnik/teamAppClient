import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.scss']
})
export class ProfileUpdateComponent implements OnInit {
  public profileEditForm: FormGroup;
  @Input() id:number;
  token: string;

  constructor(private fb: FormBuilder, private us: UserService) { }

  ngOnInit() {
    this.createForm();
    console.log(this.id)
  }

  createForm() {
    this.profileEditForm = this.fb.group({
      id: this.id,
      bio: new FormControl(),
      twHandle: new FormControl(),
      fbUrl: new FormControl()
    })
  }

  onSubmit() {
    this.us.updateProfile(this.profileEditForm.value).subscribe((createProfileFromServer) => {
      console.log(createProfileFromServer)
      location.reload()
    })
  }

}
