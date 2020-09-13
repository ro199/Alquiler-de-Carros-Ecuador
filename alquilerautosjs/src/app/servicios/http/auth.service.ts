import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase/app';
import {User} from 'firebase';
import {Observable, of} from 'rxjs';
import {first, switchMap} from 'rxjs/operators';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: User;

  constructor(public afAuth: AngularFireAuth) {
  }

  async login(email: string, password: string): Promise<User> {
    try {
      const {user} = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
      );
      return user;
    } catch (error) {
      console.log('Login Error', error);
    }
  }

  async register(name: string, email: string, password: string): Promise<User> {
    try {
      const {user} = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password,
      );
      await user.updateProfile({displayName: name});
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async logout(): Promise<void> {
    try {
      await this.afAuth.signOut();
    } catch (error) {
      console.log(error);
    }
  }

  getCurrentUser(): Promise<User> {
    return this.afAuth.authState.pipe(first()).toPromise();
  }
}
