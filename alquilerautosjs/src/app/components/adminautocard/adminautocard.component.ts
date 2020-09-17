import {Component, Input, OnInit} from '@angular/core';
import {AutoService} from 'src/app/servicios/http/auto.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-adminautocard',
  templateUrl: './adminautocard.component.html',
  styleUrls: ['./adminautocard.component.css'],
})
export class AdminautocardComponent implements OnInit {
  @Input() id_auto: string;
  @Input() nombreAuto: string;
  @Input() precioAuto: string;
  @Input() urlAutoimage: string;
  @Input() hidden: string;

  constructor(private readonly _autoService: AutoService, private readonly _router: Router) {
  }

  ngOnInit(): void {
    console.log('estoy en elinterior del admin autocard');
  }

  eliminarAuto(id_auto): void {
    console.log('El id que se va aenviar es: ' + id_auto);
    this._autoService.deleteAuto(id_auto);
  }

  editarAuto(id_auto): void {
    const ruta = ['/administrador', 'catalogo', 'editar', id_auto];
    this._router.navigate(ruta);
  }
}
