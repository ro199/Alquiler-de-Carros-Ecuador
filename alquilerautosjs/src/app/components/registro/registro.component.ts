import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {AuthService} from '../../servicios/http/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})

export class RegistroComponent implements OnInit {
  registerForm = new FormGroup({
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    telefono: new FormControl(''),
    cedula: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authSvc: AuthService) {
  }

  ngOnInit(): void {
  }

  async onRegister(): Promise<void> {
    try {
      await this.authSvc.register(this.registerForm.value);
    } catch (e) {
      console.log('Error Register', e);
    }

  }

}
