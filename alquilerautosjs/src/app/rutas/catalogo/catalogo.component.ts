import { Component, OnInit } from '@angular/core';
import { AutoService } from 'src/app/servicios/http/auto.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
})
export class CatalogoComponent implements OnInit {
  arregloAutos: any = [];

  constructor(private _autoService: AutoService) {}

  ngOnInit(): void {
    this.getAutoCollection();
  }

  getAutoCollection() {
    this._autoService.getAutoCollection().subscribe((autos) => {
      this.arregloAutos = autos.map((item) => item.payload.doc.data());
    });
  }
}
