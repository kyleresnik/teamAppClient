import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { HttpClient } from '@angular/common/http'
import {MatTableDataSource} from '@angular/material';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  usersDataSource = new MatTableDataSource<any>();
  public usersColumnNames = ['userid','username', 'actions'];
  private _dbUrl = "https://savepoint-server.herokuapp.com/"

  constructor(private _http: HttpClient, private _usersService: UsersService) { }

  ngOnInit() {
    this._usersService.getUsers().subscribe((d: any[]) => {
      console.log(d);
      this.usersDataSource.data = d;
    });
  }

//   getUsers() {
//     return this._http.get(`${this._dbUrl}user/getall`);
// }    

  deleteUser(id){
    if (sessionStorage.getItem('currentUser') !== null || undefined){
      this._usersService.deleteUsers(id).subscribe((res: any) => {console.log(res)})
    }
    else {
      alert('Cannot delete item.')
    };
  }
}