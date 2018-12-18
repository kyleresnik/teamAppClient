import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-deal',
  templateUrl: './update-deal.component.html',
  styleUrls: ['./update-deal.component.scss']
})
export class UpdateDealComponent implements OnInit {
  public dealEditForm: FormGroup;
  @Input() id: number;
  private _router: Router

  constructor(private fb: FormBuilder, private ds: DataService) { }
   
  ngOnInit() {
    this.createForm();
    console.log(this.id)
  }

  createForm() {
    this.dealEditForm = this.fb.group({
      id: this.id,
      text: new FormControl(),
      title: new FormControl()
    });
  }
  onSubmit() {
    this.ds.updateDeal(this.dealEditForm.value).subscribe((updateDeal) => {
      console.log(updateDeal)
      location.reload()
    })
  }
  }


