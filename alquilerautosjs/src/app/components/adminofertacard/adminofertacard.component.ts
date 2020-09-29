import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutoService } from 'src/app/servicios/http/auto.service';
import { OfertaService } from 'src/app/servicios/http/oferta.service';
import { PuntuacionService } from 'src/app/servicios/http/puntuacion.service';

@Component({
  selector: 'app-adminofertacard',
  templateUrl: './adminofertacard.component.html',
  styleUrls: ['./adminofertacard.component.css'],
})
export class AdminofertacardComponent implements OnInit {
  @Input() id_Oferta: string;
  @Input() nombreOferta: string;
  @Input() precioOferta: string;
  @Input() porcentajeOferta: string;
  @Input() hidden: string;
  @Input() descripcionOferta: string;
  @Input() urlAutoimageOferta: string;
  @Input() id_auto: string;

  nombreAuto: string;

  constructor(
    private readonly _router: Router,
    private readonly _ofertaService: OfertaService,
    private readonly _autoService: AutoService
  ) {}

  ngOnInit(): void {
    this.getAutosId(this.id_auto);
  }

  async getAutosId(id: string) {
    await this._autoService.getAutoCollectionForId(id).subscribe(
      (auto: any) => (this.nombreAuto = auto.payload.data().nombre),
      (error) => console.error(error)
    );
  }

  eliminarAuto(id_auto): void {
    this._ofertaService.deleteOferta(id_auto);
  }

  editarAuto(id_auto): void {
    const ruta = ['/administrador', 'ofertas', 'editar', id_auto];
    this._router.navigate(ruta);
  }
}
