import { Component, Input, OnInit } from '@angular/core';
import { AutoService } from 'src/app/servicios/http/auto.service';

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

  constructor(private readonly _autoService: AutoService) {}

  ngOnInit(): void {
    console.log('estoy en elinterior del admin autocard');
  }

  eliminarAuto(id_auto) {
    console.log('El id que se va aenviar es: ' + id_auto);
    this._autoService.deleteAuto(id_auto);
  }
}
