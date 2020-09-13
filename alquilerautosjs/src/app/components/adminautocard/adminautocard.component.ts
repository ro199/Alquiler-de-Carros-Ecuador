import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-adminautocard',
  templateUrl: './adminautocard.component.html',
  styleUrls: ['./adminautocard.component.css']
})
export class AdminautocardComponent implements OnInit {
  @Input() nombreAuto: string;
  @Input() precioAuto: string;
  @Input() urlAutoimage: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
