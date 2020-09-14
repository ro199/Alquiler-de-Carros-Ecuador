import { Component, Input, OnInit } from '@angular/core';
import { AutoService } from '../../servicios/http/auto.service';
import { Auto } from '../Clases/auto';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  autoList: any;

  constructor(private _autoService: AutoService) {}

  ngOnInit(): void {}
}
