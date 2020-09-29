import { Component, OnInit } from '@angular/core';
import { Puntuacion } from 'src/app/components/Clases/puntuacion';
import { PuntuacionService } from 'src/app/servicios/http/puntuacion.service';

@Component({
  selector: 'app-ruta-admin-valoracion',
  templateUrl: './ruta-admin-valoracion.component.html',
  styleUrls: ['./ruta-admin-valoracion.component.css'],
})
export class RutaAdminValoracionComponent implements OnInit {
  arregloValoracion = [];

  constructor(private readonly _puntuacionService: PuntuacionService) {}

  ngOnInit(): void {
    this.getPuntuacion();
  }

  getPuntuacion() {
    this._puntuacionService
      .getPuntuacion()
      .subscribe(
        (puntuacion) =>
          (this.arregloValoracion = puntuacion.map((item) =>
            item.payload.doc.data()
          ))
      );
  }
}
