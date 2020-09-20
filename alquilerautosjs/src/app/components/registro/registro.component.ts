import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../servicios/http/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  isSubmitted: boolean;

  registerForm = new FormGroup({
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    telefono: new FormControl(''),
    cedula: new FormControl(''),
    direccion: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private readonly _authSvc: AuthService) {}

  ngOnInit(): void {}

  async onRegister(): Promise<void> {
    this.isSubmitted = true;

    try {
      if (this.registerForm.valid) {
        await this._authSvc.register(this.registerForm.value);
      } else {
        console.error('Error al validar el form ');
      }
    } catch (e) {
      console.error('Error al registrar el usuario ', e);
    }
  }
}
