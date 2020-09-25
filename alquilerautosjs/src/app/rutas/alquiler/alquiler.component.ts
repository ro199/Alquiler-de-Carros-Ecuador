import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Auto } from 'src/app/components/Clases/auto';
import { AutoService } from 'src/app/servicios/http/auto.service';
import { RentaService } from '../../servicios/http/renta.service';
import * as moment from 'moment';
import { AuthService } from 'src/app/servicios/http/auth.service';

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
  id_usuario: string;
  isSubmitted: boolean;

  formRenta = new FormGroup({
    lugar_recogida: new FormControl('', Validators.required),
    lugar_entrega: new FormControl('', Validators.required),
    fecha_recogida: new FormControl('', Validators.required),
    fecha_entrega: new FormControl('', Validators.required),
    metodo_pago: new FormControl('', Validators.required),
  });

  constructor(
    private readonly _autoService: AutoService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _rentaService: RentaService,
    private readonly _authService: AuthService,
    private readonly _router: Router
  ) {}

  ngOnInit(): void {
    this.getAutoData();
    this.resetForm();
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

  async onSubmit(formRentaValue) {
    this.isSubmitted = true;
    if (this.formRenta.valid) {
      const diferencia = await this.diferenciaDias(
        formRentaValue.fecha_recogida,
        formRentaValue.fecha_entrega
      );
      const valorPagar = diferencia * this.precioAuto;
      let datosRenta;
      datosRenta = formRentaValue;
      datosRenta.total_pagar = valorPagar;
      datosRenta.estado = 'Ocupado';
      datosRenta.id_autos = this.id;
      await this._authService
        .getCurrentUser()
        .then((user) => (datosRenta.id_usuario = user.uid))
        .catch((error) => {
          alert('Debes logearte');
          console.error(error);
        });

      console.log(datosRenta.id_usuario);
      this._rentaService.createRenta(datosRenta);
      const ruta = ['/cliente', 'alquiler'];
      this._router.navigate(ruta);
    }
  }

  async diferenciaDias(fechaRecogida: string, fechaEntrega: string) {
    var fecha1 = await moment(fechaRecogida);
    var fecha2 = await moment(fechaEntrega);

    return fecha2.diff(fecha1, 'days');
  }

  get formControls() {
    return this.formRenta.controls;
  }

  resetForm(): void {
    this.formRenta.reset();
    this.formRenta.setValue({
      lugar_recogida: '',
      lugar_entrega: '',
      fecha_recogida: '',
      fecha_entrega: '',
      metodo_pago: '',
    });
    this.isSubmitted = false;
  }
}
