import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autocard',
  templateUrl: './autocard.component.html',
  styleUrls: ['./autocard.component.css'],
})
export class AutocardComponent implements OnInit {
  @Input() id_Oferta: string;
  @Input() nombreOferta: string;
  @Input() precioOferta: string;
  @Input() porcentajeOferta: string;
  @Input() hidden: string;
  @Input() descripcionOferta: string;
  @Input() urlAutoimageOferta: string;
  @Input() id_auto: string;

  autoList: any;

  constructor(private readonly _router: Router) {}

  ngOnInit(): void {}

  alquilar(id): void {
    console.log(id);
    const ruta = ['/alquiler', id];
    this._router.navigate(ruta);
  }
}
