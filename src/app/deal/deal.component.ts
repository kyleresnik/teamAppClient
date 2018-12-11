import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import {Deal} from '../models/deal.model'

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.scss']
})
export class DealComponent implements OnInit {

  deal: Deal[];
  owner_id: number;
  owner_username: string;
  title: string;
  text: string;
  token: string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getDeals().subscribe(data => {
      this.deal = data
      console.log(this.deal)
    })
  }

  getDeals():void{
    this.data.getDeals()
    .subscribe(Deal => this.deal = Deal)
    console.log(this.deal)
  }

  deleteDeal(id){
    if (sessionStorage.getItem('currentUser') !== null || undefined){
      this.data.deleteDeal(id).subscribe((res: any) => {console.log(res); this.getDeals()})
    }
    else {
      alert('Cannot delete item.')
    };
  } ;
};
