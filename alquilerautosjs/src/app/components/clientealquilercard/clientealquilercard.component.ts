import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-clientealquilercard',
  templateUrl: './clientealquilercard.component.html',
  styleUrls: ['./clientealquilercard.component.css']
})
export class ClientealquilercardComponent implements OnInit {
  @Input() nombreAuto: string;
  @Input() precioAuto: string;
  @Input() urlAutoimage: string;
  @Input() fechaRecogida: string;
  @Input() fechaEntrega: string;
  @Input() lugarRecogida: string;
  @Input() lugarEntrega: string;
  @Input() modoPago: string;
  constructor() { }

  ngOnInit(): void {
  }

}
