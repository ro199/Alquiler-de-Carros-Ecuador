import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { __assign } from 'tslib';
import { Auto } from '../../components/Clases/auto';

@Injectable({
  providedIn: 'root',
})
export class AutoService {
  constructor(private _db: AngularFirestore) {}

  createAuto(auto: any): Promise<any> {
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

  updateAuto(auto: any, id: string): Promise<void> {
    return this._db.collection('autos').doc(id).set(Object.assign({}, auto));
  }

  deleteAuto(id_autos: string): Promise<void> {
    console.log('entre al delete el id es: ' + id_autos);
    return this._db
      .collection('autos')
      .doc('' + id_autos)
      .delete();
  }

  getAutoCollection() {
    return this._db.collection('autos').snapshotChanges();
  }

  getAutoCollectionForId(idAuto: string) {
    return this._db.collection('autos').doc(idAuto).snapshotChanges();
  }
}
