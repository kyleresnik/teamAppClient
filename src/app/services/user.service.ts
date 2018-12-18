import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { Profile } from '../models/profile.model';
import { Observable } from 'rxjs'; 

const httpOptions = {
    headers: new HttpHeaders ({
        'Content-Type' : 'application/json',
        'Authorization': sessionStorage.getItem('currentUser')
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
  
        register(user: User){
            console.log(user);
            return this.http.post(`${this._dbUrl}user/signup`, user);
        }
    
        // update(user: User) {
        //     return this.http.put(`` + user.id, user);
        // }
    
        // delete(id: number) {
        //     return this.http.delete(`` + id);
        // }

        deleteProfile(id) {
            return this.http.delete(`https://savepoint-server.herokuapp.com/profile/delete/${id}`, httpOptions);
        }

        createProfile(id) : Observable <Profile[]> {
            return this.http.post<Profile[]>(
                `${this._dbUrl}profile/newprofile`,
            id, httpOptions);
        }

        getProfile() : Observable <Profile[]> {
            return this.http.get<Profile[]>(`${this._dbUrl}profile/getall`)
          }


        updateProfile(id: any): Observable<Profile> {
            return this.http.put<Profile>(`https://savepoint-server.herokuapp.com/profile/update/${id}`, httpOptions)
        }
}