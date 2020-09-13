import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-adminvaloracion',
  templateUrl: './adminvaloracion.component.html',
  styleUrls: ['./adminvaloracion.component.css']
})
export class AdminvaloracionComponent implements OnInit {
  @Input() comentario: string;
  @Input() valoracion: number;
  @Input() nombreCliente: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
