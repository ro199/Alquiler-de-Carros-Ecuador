import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AutoService } from 'src/app/servicios/http/auto.service';

@Component({
  selector: 'app-clientealquilercard',
  templateUrl: './clientealquilercard.component.html',
  styleUrls: ['./clientealquilercard.component.css'],
})
export class ClientealquilercardComponent implements OnInit {
  @Input() nombreAuto: string;
  @Input() precioAuto: string;
  @Input() urlAutoimage: string;
  @Input() fechaRecogida: string;
  @Input() fechaEntrega: string;
  @Input() lugarRecogida: string;
  @Input() lugarEntrega: string;
  @Input() modoPago: string;
  @Input() idAuto: string;
  @Input() idUsuario: string;

  idAutoModel: string;
  Autos;
  estado: boolean = false;

  constructor(private readonly _autoService: AutoService) {}

  ngOnInit(): void {
    if (this.idAuto) {
      this.idAutoModel = this.idAuto;
    }
    this.getDataAuto();
    this.estado = false;
  }

  getDataAuto() {
    const obsAuto = this._autoService
      .getAutoCollectionForId(this.idAutoModel)
      .subscribe(
        (auto: any) => {
          this.Autos = auto.payload.data();
          this.nombreAuto = this.Autos.nombre;
          this.urlAutoimage = this.Autos.imageUrl;
          console.log(this.Autos);
        },
        (error) => console.error(error)
      );
  }

  cambiarEstado(id) {
    this.estado = true;
    this.idAuto = id;
    console.log(this.idAuto);
  }
}
