import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Oferta } from '../../components/Clases/oferta';

@Injectable()
export class OfertaService {
  constructor(private _db: AngularFirestore) {}

  createOferta(oferta: Oferta): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this._db
        .collection('oferta')
        .add(oferta)
        .then(
          (res) => {},
          (err) => reject(err)
        );
    });
  }

  updateOferta(oferta: Oferta): Promise<any> {
    return this._db
      .collection('oferta')
      .doc('' + oferta.id_oferta)
      .set({ completed: true }, { merge: true });
  }

  deleteOferta(id_oferta: number): Promise<any> {
    return this._db
      .collection('oferta')
      .doc('' + id_oferta)
      .delete();
  }

  getOferta() {
    return this._db.collection('oferta').snapshotChanges();
  }
}
