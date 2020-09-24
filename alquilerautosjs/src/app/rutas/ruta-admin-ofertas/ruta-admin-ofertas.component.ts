import {Component, OnInit} from '@angular/core';
import {AutoService} from '../../servicios/http/auto.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ruta-admin-ofertas',
  templateUrl: './ruta-admin-ofertas.component.html',
  styleUrls: ['./ruta-admin-ofertas.component.css']
})
export class RutaAdminOfertasComponent implements OnInit {
  arregloAutos: any = [
    {
      id: '1',
      nombre: 'MAZDA',
      precio: 155.22,
      imageUrl: '../../assets/Auto1.svg',
      textOferta: '20% DE DESCUENTO'
    },
    {
      id: '2',
      nombre: 'MAZDA 2',
      precio: 155.22,
      imageUrl: '../../assets/Auto1.svg',
      textOferta: '30% DE DESCUENTO'
    },
    {
      id: '3',
      nombre: 'MAZDA 3',
      precio: 155.22,
      imageUrl: '../../assets/Auto1.svg',
      textOferta: '50% DE DESCUENTO'
    }
  ];

  constructor(private readonly _autoService: AutoService, public readonly _router: Router) {
  }

  ngOnInit(): void {
  }

  nuevaOferta(): void {
    const ruta = ['/administrador', 'ofertas', 'nuevo'];
    this._router.navigate(ruta);
  }

}
