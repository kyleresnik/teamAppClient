import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { User } from '../models/user.model';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders ({
        'Content-Type' : 'application/json'
    })
}

@Injectable({ providedIn: 'root' })
export class UserService {
    private _dbUrl = "https://savepoint-server.herokuapp.com/"

    constructor(private http: HttpClient) { }

        getAll() {
            return this.http.get<User[]>(`/`);
        }
    
        getById(id: number) {
            return this.http.get(`` + id);
        }
    
        register(user: User) : Observable<User[]> {
            console.log(user);
            return this.http.post<User[]>(`${this._dbUrl}user/signup`, user, httpOptions);
        }
    
        // update(user: User) {
        //     return this.http.put(`` + user.id, user);
        // }
    
        delete(id: number) {
            return this.http.delete(`` + id);
        }

    
}