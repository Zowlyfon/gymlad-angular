import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { NewPerson } from '../new-person';
import { PersonService } from '../person.service';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private personService: PersonService, private router: Router, private messagesService: MessagesService) { }

  person = new NewPerson();

  newPerson(): void {
    this.personService.postPerson(this.person)
      .subscribe(
        response => this.router.navigate(['/login']),
        error => this.messagesService
          .addMessage('One or more fields invlaid, height and weight must be numbers, password must be min 8 characters, username must be unique')
      );
  }
  ngOnInit() {
  }

}
