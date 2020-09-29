import { Component, OnInit } from '@angular/core';
import { AutoService } from '../../servicios/http/auto.service';
import { Router } from '@angular/router';
import { OfertaService } from 'src/app/servicios/http/oferta.service';

@Component({
  selector: 'app-ruta-admin-ofertas',
  templateUrl: './ruta-admin-ofertas.component.html',
  styleUrls: ['./ruta-admin-ofertas.component.css'],
})
export class RutaAdminOfertasComponent implements OnInit {
  arregloOfertas: any = [];

  constructor(
    private readonly _autoService: AutoService,
    public readonly _router: Router,
    private readonly _ofertaService: OfertaService
  ) {}

  ngOnInit(): void {
    this.getOfertas();
  }

  getOfertas() {
    this._ofertaService.getOferta().subscribe((puntuacion) => {
      this.arregloOfertas = puntuacion.map((item) => item.payload.doc);
    });
  }

  nuevaOferta(): void {
    const ruta = ['/administrador', 'ofertas', 'nuevo'];
    this._router.navigate(ruta);
  }
}
