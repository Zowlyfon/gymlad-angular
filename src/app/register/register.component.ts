import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { NewPerson } from '../new-person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private personService: PersonService, private router: Router) { }

  person = new NewPerson();

  newPerson(): void {
    this.personService.postPerson(this.person)
      .subscribe(response => this.router.navigate(['/login']));
  }
  ngOnInit() {
  }

}
