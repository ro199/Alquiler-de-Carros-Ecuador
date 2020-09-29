import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-oferta-auto-card',
  templateUrl: './oferta-auto-card.component.html',
  styleUrls: ['./oferta-auto-card.component.css']
})
export class OfertaAutoCardComponent implements OnInit {
  @Input() id_Oferta: string;
  @Input() nombreOferta: string;
  @Input() precioOferta: string;
  @Input() porcentajeOferta: string;
  @Input() hidden: string;
  @Input() descripcionOferta: string;
  @Input() urlAutoimageOferta: string;
  @Input() id_auto: string;

  autoList: any;
  constructor() { }

  ngOnInit(): void {
  }


  alquilar(id): void {

  }

}
