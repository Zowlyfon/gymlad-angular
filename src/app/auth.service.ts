import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Login } from './login';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  authToken = '';

  performLogin(login: Login): Observable<string> {

    return this.http.post('https://localhost:5001/api/person/login', login, {responseType: 'text'}).pipe(
      tap(
        data => this.authToken = data
      )
    );
  }
}
