import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-adminofertacard',
  templateUrl: './adminofertacard.component.html',
  styleUrls: ['./adminofertacard.component.css']
})
export class AdminofertacardComponent implements OnInit {
  @Input() id_auto: string;
  @Input() nombreAuto: string;
  @Input() precioAuto: string;
  @Input() urlAutoimage: string;
  @Input() hidden: string;
  @Input() ofertatexto: string;

  constructor(private readonly _router: Router) {
  }

  ngOnInit(): void {
  }

  eliminarAuto(id_auto): void {
    // console.log('El id que se va aenviar es: ' + id_auto);
    // this._autoService.deleteAuto(id_auto);
  }

  editarAuto(id_auto): void {
    const ruta = ['/administrador', 'ofertas', 'editar', id_auto];
    this._router.navigate(ruta);
  }

}
