import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Puntuacion } from '../../Clases/puntuacion';

@Injectable()
export class PuntuacionService {
  constructor(private _db: AngularFirestore) {}

  createPuntuacion(puntuacion: Puntuacion): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this._db
        .collection('puntuacion')
        .add(puntuacion)
        .then(
          (res) => {},
          (err) => reject(err)
        );
    });
  }

  deletePuntuacion(id_puntuacion: number): Promise<any> {
    return this._db
      .collection('puntuacion')
      .doc('' + id_puntuacion)
      .delete();
  }

  getPuntuacion() {
    return this._db.collection('puntuacion').snapshotChanges();
  }
}
