import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Auto } from 'src/app/components/Clases/auto';
import { AutoService } from 'src/app/servicios/http/auto.service';
import { RentaService } from '../../servicios/http/renta.service';
import * as moment from 'moment';

@Component({
  selector: 'app-alquiler',
  templateUrl: './alquiler.component.html',
  styleUrls: ['./alquiler.component.css'],
})
export class AlquilerComponent implements OnInit {
  auto: Auto;
  id: string;
  imageUrl: string;
  nombreAuto: string;
  precioAuto: number;

  formRenta = new FormGroup({
    lugar_recogida: new FormControl(''),
    lugar_entrega: new FormControl(''),
    fecha_recogida: new FormControl(''),
    fecha_entrega: new FormControl(''),
    metodo_pago: new FormControl(''),
  });

  constructor(
    private readonly _autoService: AutoService,
    private readonly _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAutoData();
  }

  getAutoData() {
    const obsRuta = this._activatedRoute.params;
    obsRuta.subscribe((parametros: Params) => {
      this.id = parametros.id;
      console.log('el id es: ', this.id);
      const obsAuto = this._autoService.getAutoCollectionForId(this.id);
      obsAuto.subscribe(
        (auto: any) => {
          this.auto = auto.payload.data();
          (this.nombreAuto = this.auto.nombre),
            (this.precioAuto = this.auto.precio),
            (this.imageUrl = this.auto.imageUrl),
            console.log(this.auto);
        },
        (error) => {
          console.error(error);
        }
      );
    });
  }

  onSubmit() {
    console.log(this.formRenta.value);
    const diferencia = this.diferenciaDias(
      this.formRenta.value.fecha_recogida,
      this.formRenta.value.fecha_entrega
    );
    const valorPagar = diferencia * this.precioAuto;
    console.log('El Valor a pagar es: ', valorPagar);
  }

  diferenciaDias(fechaRecogida: string, fechaEntrega: string) {
    var fecha1 = moment(fechaRecogida);
    var fecha2 = moment(fechaEntrega);

    return fecha2.diff(fecha1, 'days');
  }
}
