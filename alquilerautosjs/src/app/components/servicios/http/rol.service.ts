import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class RolService {
  constructor(private _db: AngularFirestore) {}

  getRol() {
    return this._db.collection('rol').snapshotChanges();
  }
}
