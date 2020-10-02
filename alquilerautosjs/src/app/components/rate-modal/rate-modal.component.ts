import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/http/auth.service';
import { PuntuacionService } from '../../servicios/http/puntuacion.service';

@Component({
  selector: 'app-rate-modal',
  templateUrl: './rate-modal.component.html',
  styleUrls: ['./rate-modal.component.css'],
})
export class RateModalComponent implements OnInit {
  isSubmitted: boolean;

  @Input() idAuto: string;
  @Input() idUsuario: string;

  formValoracion = new FormGroup({
    numero_estellas: new FormControl('', Validators.required),
    comentario: new FormControl('', Validators.required),
  });

  constructor(
    private readonly _puntuacionService: PuntuacionService,
    private readonly _router: Router,
    private readonly _authService: AuthService,
    private readonly _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log('Estoy en elvalorar:', this.idAuto);
    console.log('Estoy en elvalorar:', this.idUsuario);
  }

  onSubmit(formValoracionValue) {
    this.isSubmitted = true;
    let datosPuntuacion;
    if (this.formValoracion.valid) {
      datosPuntuacion = formValoracionValue;
      datosPuntuacion.id_autos = this.idAuto;
      datosPuntuacion.id_usuario = this.idUsuario;
      this._puntuacionService.createPuntuacion(datosPuntuacion);
      console.log(datosPuntuacion);
      $('#modalRate').modal('hide');
      // const url = ['/cliente', 'info'];
      // this._router.navigate(url);
    }
  }

  get formControls() {
    return this.formValoracion.controls;
  }
}
