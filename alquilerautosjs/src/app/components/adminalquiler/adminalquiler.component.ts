import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-adminalquiler',
  templateUrl: './adminalquiler.component.html',
  styleUrls: ['./adminalquiler.component.css']
})
export class AdminalquilerComponent implements OnInit {
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
