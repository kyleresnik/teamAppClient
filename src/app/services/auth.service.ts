import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../models/user.model';

const httpOptions = {
    headers: new HttpHeaders ({
        'Content-Type' : 'application/json'
    })
}

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) { 
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')))
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        return this.http.post<any>('https://savepoint-server.herokuapp.com/user/signin', { username: username, password: password }, httpOptions)
            .pipe(map(user => {
                if (user && user.token) {
                    sessionStorage.setItem('currentUser', user.token);
                }

                return user;
            }));
    } 

    logout() {
        sessionStorage.removeItem('currentUser');
    }
}