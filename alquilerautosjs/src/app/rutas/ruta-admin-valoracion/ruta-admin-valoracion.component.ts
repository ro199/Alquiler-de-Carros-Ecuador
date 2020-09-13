import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ruta-admin-valoracion',
  templateUrl: './ruta-admin-valoracion.component.html',
  styleUrls: ['./ruta-admin-valoracion.component.css']
})
export class RutaAdminValoracionComponent implements OnInit {
  arregloValoracion = [
    {
      id: 0,
      comentario: 'gracias',
      nombreCliente: 'alex',
      valoracion: 5
    },
    {
      id: 0,
      comentario: 'gracias',
      nombreCliente: 'alex',
      valoracion: 5
    },
    {
      id: 0,
      comentario: 'gracias',
      nombreCliente: 'alex',
      valoracion: 5
    },
    {
      id: 0,
      comentario: 'gracias',
      nombreCliente: 'alex',
      valoracion: 5
    },
    {
      id: 0,
      comentario: 'gracias',
      nombreCliente: 'alex',
      valoracion: 5
    },
    {
      id: 0,
      comentario: 'gracias',
      nombreCliente: 'alex',
      valoracion: 5
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
