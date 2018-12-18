import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  usersDataSource = new MatTableDataSource<any>();
  private usersColumnNames = ['userid','username'];

  constructor(private _usersService: UsersService) { }

  ngOnInit() {
    this._usersService.getUsers().subscribe((d: any[]) => {
      console.log(d);
      this.usersDataSource.data = d;
    });
  }
}