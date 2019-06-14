import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Person } from './person';
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

}
