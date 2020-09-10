import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {AuthService} from '../../servicios/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})

export class RegistroComponent implements OnInit {
  registerForm = new FormGroup({
    nombre: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authSvc: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onRegister(): void {
    const {nombre, email, password} = this.registerForm.value;
    try {
      const user = this.authSvc.register(nombre, email, password);
      if (user) {
        this.router.navigate(['/dashboard']);
      }
    } catch (e) {
      console.log('Error Register', e);
    }

  }

}
