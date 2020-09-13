import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Renta } from '../../components/Clases/renta';

@Injectable()
export class RentaService {
  constructor(private _db: AngularFirestore) {}

  createRenta(renta: Renta): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this._db
        .collection('renta')
        .add(renta)
        .then(
          (res) => {},
          (err) => reject(err)
        );
    });
  }

  updateRenta(renta: Renta): Promise<any> {
    return this._db
      .collection('renta')
      .doc('' + renta.id_renta)
      .set({ completed: true }, { merge: true });
  }

  deleteRenta(id_renta: number): Promise<any> {
    return this._db
      .collection('renta')
      .doc('' + id_renta)
      .delete();
  }

  getRenta() {
    return this._db.collection('renta').snapshotChanges();
  }
}
