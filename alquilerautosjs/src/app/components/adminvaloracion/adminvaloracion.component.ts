import { Component, Input, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/http/usuario.service';

@Component({
  selector: 'app-adminvaloracion',
  templateUrl: './adminvaloracion.component.html',
  styleUrls: ['./adminvaloracion.component.css'],
})
export class AdminvaloracionComponent implements OnInit {
  @Input() comentario: string;
  @Input() numeroEstrellas: number;
  @Input() idUsuario: string;
  @Input() idAuto: string;

  usuario;
  nombreCompletoUsuario: string;

  constructor(private readonly _usuarioSrvice: UsuarioService) {}

  ngOnInit(): void {
    this.getUsuariosPuntuacion();
  }

  async getUsuariosPuntuacion() {
    const obsPuntuacion = await this._usuarioSrvice.getUsuarioPorId(
      this.idUsuario
    );
    await obsPuntuacion.subscribe(
      (usuarioPunt: any) => {
        this.usuario = usuarioPunt[0];
        this.nombreCompletoUsuario =
          this.usuario.nombre + ' ' + this.usuario.apellido;
      },
      (error) => console.error(error)
    );
  }
}
