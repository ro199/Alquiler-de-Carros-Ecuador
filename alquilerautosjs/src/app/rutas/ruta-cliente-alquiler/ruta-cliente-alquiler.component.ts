import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ruta-cliente-alquiler',
  templateUrl: './ruta-cliente-alquiler.component.html',
  styleUrls: ['./ruta-cliente-alquiler.component.css']
})
export class RutaClienteAlquilerComponent implements OnInit {
  arregloTodosAlquilers = [
    {
      id: 0,
      urlAutoimage: './assets/Auto1.svg',
      nombreAuto: 'Chevrolet D – MAX',
      precioAuto: '105.00',
      fechaRecogida: '12/02/2020',
      fechaEntrega: '13/02/2020',
      lugarRecogida: 'Quito',
      lugarEntrega: 'Quito',
      modopago: 'Transferencia Bancaria'
    },
    {
      id: 1,
      urlAutoimage: './assets/Auto2.svg',
      nombreAuto: 'Mazda BT – 50',
      precioAuto: '95.00',
      fechaRecogida: '12/02/2020',
      fechaEntrega: '13/02/2020',
      lugarRecogida: 'Quito',
      lugarEntrega: 'Quito',
      modopago: 'Transferencia Bancaria'
    },
    {
      id: 2,
      urlAutoimage: './assets/Auto3.svg',
      nombreAuto: 'KIA SPORTAGE ACTIVE',
      precioAuto: '100.00',
      fechaRecogida: '12/02/2020',
      fechaEntrega: '13/02/2020',
      lugarRecogida: 'Quito',
      lugarEntrega: 'Quito',
      modopago: 'Transferencia Bancaria'
    },
    {
      id: 3,
      urlAutoimage: './assets/Auto3.svg',
      nombreAuto: 'KIA SPORTAGE ACTIVE',
      precioAuto: '100.00',
      fechaRecogida: '12/02/2020',
      fechaEntrega: '13/02/2020',
      lugarRecogida: 'Quito',
      lugarEntrega: 'Quito',
      modopago: 'Transferencia Bancaria'
    },
    {
      id: 4,
      urlAutoimage: './assets/Auto2.svg',
      nombreAuto: 'Mazda BT – 50',
      precioAuto: '95.00',
      fechaRecogida: '12/02/2020',
      fechaEntrega: '13/02/2020',
      lugarRecogida: 'Quito',
      lugarEntrega: 'Quito',
      modopago: 'Transferencia Bancaria'
    },
    {
      id: 5,
      urlAutoimage: './assets/Auto3.svg',
      nombreAuto: 'KIA SPORTAGE ACTIVE',
      precioAuto: '100.00',
      fechaRecogida: '12/02/2020',
      fechaEntrega: '13/02/2020',
      lugarRecogida: 'Quito',
      lugarEntrega: 'Quito',
      modopago: 'Transferencia Bancaria'
    },
  ];

  constructor() {
  }

  ngOnInit(): void {

  }

}
