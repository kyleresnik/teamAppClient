import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';

// const ApiUrl = 'http://kcpelevennoteapie.azurewebsites.net/';

@Injectable()
export class UsersService {

    private _dbUrl = "https://savepoint-server.herokuapp.com/"

    constructor(private _http: HttpClient) { }

    getUsers() {
        return this._http.get<User[]>(`${this._dbUrl}user/getall`);
    }    

    deleteUsers(id) {
        return this._http.delete(`https://savepoint-server.herokuapp.com/user/delete/${id}`);
    }

}