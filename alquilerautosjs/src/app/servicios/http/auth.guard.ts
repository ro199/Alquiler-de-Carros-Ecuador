import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private firebaseService: AuthService, private router: Router) {
    console.log('AUTH GUARD FIRST');
  }

  // @ts-ignore
  async canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Observable<boolean> | Promise<boolean> | boolean> {
    const fireUser = await this.firebaseService.getCurrentUser();
    if (fireUser) {
      const rol = localStorage.getItem('rol');
      if (next.data.roles && next.data.roles.indexOf(rol) === -1) {
        // role not authorized
        this.router.navigate(['/inicio']);
      } else {
        return true;
      }
    }
    const currentUser = this.firebaseService.currentUser;
    if (currentUser) {
      // check if the route is retricted by role
      if (next.data.roles && next.data.roles.indexOf(currentUser.rol) === -1) {
        // role not authorized
        this.router.navigate(['/inicio']);
      } else {
        return true;
      }
    } else {
      this.router.navigate(['/inicio']);
    }
  }
}
