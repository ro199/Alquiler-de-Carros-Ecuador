import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CheckUsuario implements CanActivate {
  constructor(private firebaseService: AuthService, private router: Router) {
  }

  // @ts-ignore
  async canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Observable<boolean> | Promise<boolean> | boolean> {
    const currentUser = await this.firebaseService.getCurrentUser();
    if (!currentUser) {
      return true;
    } else {
      await this.router.navigate(['/inicio']);
    }
  }
}
