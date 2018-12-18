import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private fb: FormBuilder,
              private us: UserService,
              private _ar: ActivatedRoute,
              private _router: Router) {
                // this._ar.paramMap.subscribe(p => {
                //   this.us.getProfile(p.get('id')).subscribe((singleProfile: Profile) => {
                //     this.profile = singleProfile;
                //     this.createForm();
                //   })
                // })
              }

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

  getProfile():void{
    this.us.getProfile()
    .subscribe(Profile => this.profile = Profile)
    console.log(this.profile)
  }
  
    // editProfileForm: FormGroup;
    // editProfile(profile: Profile) {
    //   this.
    // }

  deleteProfile(id){
    if (sessionStorage.getItem('currentUser') !== null || undefined){
      this.us.deleteProfile(id).subscribe((res: any) => {console.log(res); this.getProfile()})
    }
    else {
      alert('Cannot delete item.')
    };
  };

  onSubmit() {
    this.us.createProfile(this.profileForm.value).subscribe((createProfileFromServer) => {
      console.log(createProfileFromServer)
    })
  }

}