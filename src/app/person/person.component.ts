import { Component, OnInit } from '@angular/core';

import { Person } from '../person';
import { PersonService } from '../person.service';
import { Patch } from '../patch';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  constructor(public personService: PersonService) { }

  updatePerson(): void {
    this.personService.putPerson(this.personService.person)
      .subscribe();
  }

  ngOnInit() {
    this.personService.getPerson();
  }

}
