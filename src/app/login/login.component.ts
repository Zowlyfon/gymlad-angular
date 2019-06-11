import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';
import { Login } from '../login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) { }

  login = new Login();

  loginSuccess = false;

  authToken = '';

  performLogin(): void {
    this.auth.performLogin(this.login).subscribe(data => {
      this.authToken = data;
      this.loginSuccess = true;
    });
  }

  ngOnInit() {
  }

}
