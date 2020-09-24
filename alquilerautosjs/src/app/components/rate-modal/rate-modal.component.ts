import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-rate-modal',
  templateUrl: './rate-modal.component.html',
  styleUrls: ['./rate-modal.component.css']
})
export class RateModalComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  getNumerStart(numStarts): void {
    console.log(numStarts);
  }

}
