import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Admin } from '../models/admin.model';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    admin: Admin;

    login(email: string, password: string) {
        return this.http.post<any>('https://efa-gardenapp-backend.herokuapp.com/api/auth/login', { email: email, password: password })
            .pipe(map(admin => {
                if (admin && admin.token) {
                    sessionStorage.setItem('currentUser', admin.token);
                }

                return admin;
            }));
    }

    loggedIn(){
        return !!localStorage.getItem('token')
    };

    logout() {
        sessionStorage.removeItem('currentUser');
    }
}