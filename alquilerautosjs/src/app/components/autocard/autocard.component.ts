import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-autocard',
  templateUrl: './autocard.component.html',
  styleUrls: ['./autocard.component.css'],
})
export class AutocardComponent implements OnInit {
  @Input() urlAutoimage: string;
  @Input() nombreAuto: string;
  @Input() precioAuto: string;
  @Input() id: string;

  autoList: any;

  constructor(private readonly _router: Router) {
  }

  ngOnInit(): void {
  }

  alquilar(id): void {
    console.log(id);
    const ruta = ['/alquiler', id];
    this._router.navigate(ruta);
  }
}
