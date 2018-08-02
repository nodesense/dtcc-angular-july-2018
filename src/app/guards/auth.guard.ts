import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

            console.log("Auth guard called ", state.url);

            const token = window.localStorage.getItem('token');

            if (token) { // user logged in
              return true;
            }

            this.router.navigateByUrl("/login");

            return false;
  }
}
