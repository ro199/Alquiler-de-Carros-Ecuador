import { Component, OnInit } from '@angular/core';
import { OfertaService } from 'src/app/servicios/http/oferta.service';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css'],
})
export class OfertasComponent implements OnInit {
  arregloAutos = [];

  constructor(private readonly _ofertaService: OfertaService) {}

  ngOnInit(): void {
    this.getOferta();
  }

  getOferta() {
    this._ofertaService
      .getOferta()
      .subscribe(
        (oferta) => (this.arregloAutos = oferta.map((item) => item.payload.doc))
      );
  }
}
