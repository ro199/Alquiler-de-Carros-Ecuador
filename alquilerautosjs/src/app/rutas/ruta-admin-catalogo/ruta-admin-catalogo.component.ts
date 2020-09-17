import {Component, OnInit} from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {finalize} from 'rxjs/operators';
import {AutoService} from 'src/app/servicios/http/auto.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ruta-admin-catalogo',
  templateUrl: './ruta-admin-catalogo.component.html',
  styleUrls: ['./ruta-admin-catalogo.component.css'],
})
export class RutaAdminCatalogoComponent implements OnInit {

  arregloAutos: any = [];

  constructor(private readonly _autoService: AutoService, public readonly _router: Router) {
  }

  ngOnInit(): void {
    this.getAutoCollection();
  }

  getAutoCollection(): void {
    this._autoService.getAutoCollection().subscribe((autos) => {
      this.arregloAutos = autos.map((item) => item.payload.doc);
    });
  }

  newAutoCard(): void{
    const ruta = ['/administrador', 'catalogo', 'nuevo'];
    this._router.navigate(ruta);
  }
}
