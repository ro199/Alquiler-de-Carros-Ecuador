import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-autocard',
  templateUrl: './autocard.component.html',
  styleUrls: ['./autocard.component.css']
})
export class AutocardComponent implements OnInit {
  @Input() urlAutoimage: string;
  @Input() nombreAuto: string;
  @Input() precioAuto: string;
  @Input() id: number;
  constructor() { }

  ngOnInit(): void {
  }

}
