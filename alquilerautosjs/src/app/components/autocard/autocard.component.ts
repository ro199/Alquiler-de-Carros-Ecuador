import { Component, Input, OnInit } from '@angular/core';
import { AutoService } from '../../servicios/http/auto.service';
import { Auto } from '../Clases/auto';

@Component({
  selector: 'app-autocard',
  templateUrl: './autocard.component.html',
  styleUrls: ['./autocard.component.css'],
})
export class AutocardComponent implements OnInit {
  @Input() urlAutoimage: string;
  @Input() nombreAuto: string;
  @Input() precioAuto: string;
  @Input() id: number;
  @Input() autos: Auto;

  autoList: any;

  constructor(private _autoService: AutoService) {}

  ngOnInit(): void {
    this.getAutoCollection();
  }

  getAutoCollection() {
    this._autoService.getAutoCollection().subscribe((autos) => {
      this.autoList = autos;
    });
  }
}
