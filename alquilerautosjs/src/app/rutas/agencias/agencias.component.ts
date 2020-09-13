import {Component, OnInit} from '@angular/core';
import {MapService} from '../../servicios/http/map.service';

@Component({
  selector: 'app-agencias',
  templateUrl: './agencias.component.html',
  styleUrls: ['./agencias.component.css']
})
export class AgenciasComponent implements OnInit {

  constructor(private map: MapService) {
  }

  ngOnInit(): void {
    this.map.buildMap();
  }

}
