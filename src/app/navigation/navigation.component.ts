import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { NavLink } from '../navlink';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router) { }

  authedLinks: NavLink[] = [
    {name: 'Home', link: '/person'},
    {name: 'Exercises', link: '/exercises'},
    {name: 'Workouts', link: '/workouts'}
  ];
  anonLinks: NavLink[] = [
    {name: 'Login', link: '/login'}
  ];

  performLogout(): void {
    this.auth.performLogout();
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
