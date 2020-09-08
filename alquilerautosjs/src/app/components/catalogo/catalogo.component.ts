import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  arregloAutos = [
    {
      id: 0,
      urlAutoimage: './assets/Auto1.svg',
      nombreAuto: 'Chevrolet D – MAX',
      precioAuto: '105.00'
    },
    {
      id: 1,
      urlAutoimage: './assets/Auto2.svg',
      nombreAuto: 'Mazda BT – 50',
      precioAuto: '95.00'
    },
    {
      id: 2,
      urlAutoimage: './assets/Auto3.svg',
      nombreAuto: 'KIA SPORTAGE ACTIVE',
      precioAuto: '100.00'
    },
    {
      id: 3,
      urlAutoimage: './assets/Auto3.svg',
      nombreAuto: 'KIA SPORTAGE ACTIVE',
      precioAuto: '100.00'
    },
    {
      id: 4,
      urlAutoimage: './assets/Auto2.svg',
      nombreAuto: 'Mazda BT – 50',
      precioAuto: '95.00'
    },
    {
      id: 5,
      urlAutoimage: './assets/Auto3.svg',
      nombreAuto: 'KIA SPORTAGE ACTIVE',
      precioAuto: '100.00'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
