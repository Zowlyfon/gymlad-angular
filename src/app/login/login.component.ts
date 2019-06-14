import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { Login } from '../login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  title = 'Login';

  login = new Login();

  loginSuccess = false;

  authToken = '';

  performLogin(): void {
    this.auth.performLogin(this.login).subscribe(data => {
      this.authToken = data;
      this.loginSuccess = true;
      this.router.navigate(['/person']);
    });
  }

  ngOnInit() {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      this.auth.setAuth(authToken);
    }
  }

}
