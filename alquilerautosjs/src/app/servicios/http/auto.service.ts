import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Auto } from '../../components/Clases/auto';

@Injectable({
  providedIn: 'root',
})
export class AutoService {
  constructor(private _db: AngularFirestore) {}

  createAuto(auto: Auto): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this._db
        .collection('autos')
        .add(auto)
        .then(
          (res) => {},
          (err) => reject(err)
        );
    });
  }

  updateAuto(auto: Auto): Promise<void> {
    return this._db
      .collection('autos')
      .doc('' + auto.id_autos)
      .set({ completed: true }, { merge: true });
  }

  deleteAuto(id_autos: number): Promise<void> {
    return this._db
      .collection('autos')
      .doc('' + id_autos)
      .delete();
  }

  getAutoCollection() {
    return this._db.collection('autos').snapshotChanges();
  }
}
