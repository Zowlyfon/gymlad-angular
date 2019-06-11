import { Injectable } from '@angular/core';

import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  constructor() { }

  person: Person;
}
