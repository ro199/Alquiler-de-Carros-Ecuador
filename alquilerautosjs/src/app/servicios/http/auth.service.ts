import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { User } from 'firebase';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { first, switchMap } from 'rxjs/operators';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user: User;
  public currentUser: any;
  public userStatus: string;
  public userStatusChanges: BehaviorSubject<string> = new BehaviorSubject<
    string
  >(this.userStatus);

  setUserStatus(userStatus: any): void {
    this.userStatus = userStatus;
    this.userStatusChanges.next(userStatus);
  }

  constructor(
    private ngZone: NgZone,
    public afAuth: AngularFireAuth,
    private _db: AngularFirestore,
    private router: Router
  ) {}

  async login(email: string, password: string): Promise<User> {
    try {
      const { user } = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
      );

      this._db
        .collection('usuario')
        .ref.where('email', '==', user.email)
        .onSnapshot((snap) => {
          snap.forEach((userRef) => {
            this.currentUser = userRef.data();
            this.setUserStatus(this.currentUser);
            localStorage.setItem('rol', userRef.data().rol);
            if (userRef.data().rol !== 'administrador') {
              this.router.navigate(['/cliente']);
            } else {
              this.router.navigate(['/administrador']);
            }
          });
        });

      return user;
    } catch (error) {
      console.log('Login Error', error);
    }
  }

  async register(usuarioData): Promise<void> {
    try {
      const {
        nombre,
        apellido,
        email,
        password,
        cedula,
        telefono,
      } = usuarioData;

      const { user } = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      const userdb = await this._db.collection('usuario').add({
        uid: user.uid,
        nombre,
        apellido,
        cedula,
        telefono,
        email,
        password,
        rol: 'cliente',
      });

      const getUser = await userdb.get();
      this.currentUser = getUser.data();
      this.setUserStatus(this.currentUser);
      localStorage.setItem('rol', getUser.data().rol);
      await this.router.navigate(['/cliente']);
    } catch (error) {
      console.log(error);
    }
  }

  async logout(): Promise<void> {
    try {
      await this.afAuth.signOut();
      this.currentUser = null;
      this.setUserStatus(null);
      localStorage.removeItem('rol');
    } catch (error) {
      console.log(error);
    }
  }

  getCurrentUser(): Promise<User> {
    return this.afAuth.authState.pipe(first()).toPromise();
  }

  async userChanges(): Promise<void> {
    await this.afAuth.onAuthStateChanged(async (currentUser) => {
      if (currentUser) {
        await this._db
          .collection('usuario')
          .ref.where('email', '==', currentUser.email)
          .onSnapshot((snap) => {
            snap.forEach((userRef) => {
              this.currentUser = userRef.data();
              this.setUserStatus(this.currentUser);
              if (
                userRef.data().rol === 'administrador' &&
                window.location.href.includes('administrador')
              ) {
                this.ngZone.run(() => this.router.navigate(['/administrador']));
              } else if (
                userRef.data().rol === 'cliente' &&
                window.location.href.includes('cliente')
              ) {
                this.ngZone.run(() => this.router.navigate(['/cliente']));
              }
            });
          });
      } else {
        this.ngZone.run(() => this.router.navigate([window.location.pathname]));
      }
    });
  }
}
