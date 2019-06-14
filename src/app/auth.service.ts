import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Login } from './login';
import { HttpClient } from '@angular/common/http';
import { PersonService } from './person.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private personService: PersonService, private conf: ConfigService) { }

  authToken = '';
  isAuthenticated = false;

  private endpoint = this.conf.api + 'person/login/';

  performLogin(login: Login): Observable<string> {
    return this.http.post(this.endpoint, login, {responseType: 'text'}).pipe(
      tap(
        data => {
          this.performLogout();
          this.authToken = data;
          this.isAuthenticated = true;
          this.personService.getPerson();
          localStorage.setItem('authToken', this.authToken);
        }
      )
    );
  }

  setAuth(authToken: string): Observable<boolean> {
    this.authToken = authToken;
    this.isAuthenticated = true;
    return of(true);
  }

  performLogout(): void {
    this.authToken = '';
    this.isAuthenticated = false;
    localStorage.clear();
  }
}
