import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Deal } from '../models/deal.model';
import { Observable } from 'rxjs';

// let token = JSON.parse(sessionStorage.getItem('currentUser'))

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': sessionStorage.getItem('currentUser')
  })
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dealUrl = 'https://efa-gardenapp-backend.herokuapp.com/api/product/?limit=100'

  constructor(private _http: HttpClient) { }

  getDeals() : Observable <Deal[]> {
    return this._http.get<Deal[]>(this.dealUrl)
  }

  deleteDeal(id) {
    console.log(id);
    console.log(`${this.dealUrl}/${id}`);
    let deleteUrl = `https://efa-gardenapp-backend.herokuapp.com/api/product/${id}`
    return this._http.delete(deleteUrl, httpOptions);
  }
}