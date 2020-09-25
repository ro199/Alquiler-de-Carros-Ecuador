import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/http/auth.service';
import { AutoService } from 'src/app/servicios/http/auto.service';
import { RentaService } from 'src/app/servicios/http/renta.service';

@Component({
  selector: 'app-ruta-cliente-alquiler',
  templateUrl: './ruta-cliente-alquiler.component.html',
  styleUrls: ['./ruta-cliente-alquiler.component.css'],
})
export class RutaClienteAlquilerComponent implements OnInit {
  id_usuario: string;
  rentas;
  autos;

  constructor(
    private readonly _rentaService: RentaService,
    private readonly _autoService: AutoService,
    private readonly _authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getAutosRentados();
  }

  async getAutosRentados() {
    await this.obtenerIdUsuario();

    console.log(this.id_usuario);
    const obsRentas = await this._rentaService.getRentaIdUsuario(
      this.id_usuario
    );
    await obsRentas.subscribe(
      (renta: any) => {
        this.rentas = renta;
      },
      (error) => console.error(error)
    );
  }

  async obtenerIdUsuario() {
    await this._authService
      .getCurrentUser()
      .then((user) => (this.id_usuario = user.uid))
      .catch((error) => {
        alert('Debes logearte');
        console.error(error);
      });
  }
}
