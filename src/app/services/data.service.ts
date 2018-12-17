import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Deal } from '../models/deal.model';
import { Observable } from 'rxjs';

// let sessionToken = JSON.parse(sessionStorage.getItem('currentUser'))

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
  private dealUrl = 'https://savepoint-server.herokuapp.com/post/getall'

  constructor(private _http: HttpClient) { }

  getDeals() : Observable <Deal[]> {
    return this._http.get<Deal[]>(this.dealUrl)
  }

  deleteDeal(id) {
    console.log(id);
    console.log(`${this.dealUrl}/${id}`);
    let deleteUrl = `https://savepoint-server.herokuapp.com/post/${id}`
    return this._http.delete(deleteUrl, httpOptions);
  } 

  createDeal(deal) : Observable <Deal[]> {
    return this._http.post<Deal[]>(
      'https://savepoint-server.herokuapp.com/post/newthread',
       deal, httpOptions);
  }
} 