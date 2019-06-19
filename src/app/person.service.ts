import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Person } from './person';
import { Patch } from './patch';
import { NewPerson } from './new-person';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  constructor(private http: HttpClient, private conf: ConfigService) { }

  person: Person;

  private endpoint = this.conf.api + 'person/';

  getPerson(): void {
    this.http.get<Person>(this.endpoint + 'me')
      .subscribe(person => this.person = person);
  }

  postPerson(person: NewPerson): Observable<Person> {
    return this.http.post<Person>(this.endpoint, person);
  }

  putPerson(person: Person): Observable<Person> {
    return this.http.put<Person>(this.endpoint, person);
  }

  patchPerson(patch: Patch): Observable<Person> {
    return this.http.patch<Person>(this.endpoint, patch);
  }

}
