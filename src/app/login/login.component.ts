import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MessagesService } from '../messages.service'
import { AuthService } from '../auth.service';
import { Login } from '../login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router, private messagesService: MessagesService) { }

  title = 'Login';

  login = new Login();

  loginSuccess = false;

  authToken = '';

  performLogin(): void {
    this.auth.performLogin(this.login).subscribe(
      data => {
      this.authToken = data;
      this.loginSuccess = true;
      this.router.navigate(['/person']);
      },
      error => this.messagesService.addMessage(error.error)
    );
  }

  ngOnInit() {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      this.auth.setAuth(authToken);
    }
  }

}
