import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'alquilerautosjs';
  description = 'Angular-Fire-Demo';

  /*autosValue = '';
  autos: Observable<any[]>;

  constructor(public db: AngularFirestore) {
    this.autos = db.collection('autos').valueChanges();
  }

  onSubmit() {
    this.db.collection('autos').add({ content: this.autosValue });
    this.autosValue = '';
  }*/
}
