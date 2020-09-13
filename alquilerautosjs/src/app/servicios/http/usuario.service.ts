import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Usuario } from '../../components/Clases/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private _db: AngularFirestore) {}

  createUsuario(usuario: Usuario): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this._db
        .collection('usuario')
        .add(usuario)
        .then(
          (res) => {},
          (err) => reject(err)
        );
    });
  }

  updateUsuario(usuario: Usuario): Promise<any> {
    return this._db
      .collection('usuario')
      .doc(usuario.cedula)
      .set({ completed: true }, { merge: true });
  }

  deleteUsuario(cedula: string): Promise<any> {
    return this._db.collection('usuario').doc(cedula).delete();
  }

  getUsuario() {
    return this._db.collection('usuario').snapshotChanges();
  }
}
