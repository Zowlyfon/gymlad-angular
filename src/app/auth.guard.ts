import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      return this.checkAuth();
  }

  checkAuth(): boolean {
    if (this.auth.isAuthenticated) { return true; }

    const authToken = localStorage.getItem('authToken');

    if (authToken) {
      let valid = false;
      this.auth.setAuth(authToken).subscribe(
        response => valid = response
      );

      return valid;
    }

    this.router.navigate(['/login']);
    return false;
  }
}

