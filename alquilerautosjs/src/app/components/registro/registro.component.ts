import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../servicios/http/auth.service';
import { UsuarioService } from '../../servicios/http/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from '../Clases/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  usuario: Usuario;
  isSubmitted: boolean;

  registerForm = new FormGroup({
    cedula: new FormControl('', [
      Validators.required,
      Validators.minLength(9),
      Validators.maxLength(10),
    ]),
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private readonly _authSvc: AuthService,
    private readonly _usuarioService: UsuarioService,
    private readonly _router: Router
  ) {}

  ngOnInit(): void {}

  onRegister(formValue): void {
    this.isSubmitted = true;

    try {
      if (this.registerForm.valid) {
        this._usuarioService.createUsuario(formValue);
        const user = this._authSvc.register(
          formValue.nombre,
          formValue.email,
          formValue.password
        );
        if (user) {
          this._router.navigate(['/catalogo']);
        }
      } else {
        console.error('Error al validar el form ');
      }
    } catch (e) {
      console.error('Error al registrar el usuario ', e);
    }
  }
}
