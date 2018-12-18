import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-update-deal',
  templateUrl: './update-deal.component.html',
  styleUrls: ['./update-deal.component.scss']
})
export class UpdateDealComponent implements OnInit {
  public dealEditForm: FormGroup;
  @Input() id: number;

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
    this.ds.updateDeal(this.dealEditForm.value).subscribe((createDealFromServer) => {
      console.log(createDealFromServer)
    })
  }
    // this._dataService.updateDeal(updateDeal).subscribe(d => {
    //   this._router.navigate(['/deal']);
    // });
  }


