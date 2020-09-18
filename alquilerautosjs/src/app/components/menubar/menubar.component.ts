import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../servicios/http/auth.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {first, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
  public user$: Observable<any> = this.authSvc.afAuth.user;

  constructor(private authSvc: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  async logOut(): Promise<void> {
    try {
      await this.authSvc.logout();
      this.router.navigate(['/inicio']);
    } catch (e) {
      console.log(e);
    }
  }

  irCuenta(): void {
    const currentUser = this.authSvc.currentUser;
    if (currentUser.rol === 'administrador') {
      this.router.navigate(['/administrador']);
    }
    if (currentUser.rol === 'cliente') {
      this.router.navigate(['/cliente']);
    }
  }
}
