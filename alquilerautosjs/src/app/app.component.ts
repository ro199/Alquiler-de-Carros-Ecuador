import {Component, OnInit} from '@angular/core';
import {AuthService} from './servicios/http/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'alquilerautosjs';
  description = 'Angular-Fire-Demo';

  userStatus = this.firebaseService.userStatus;

  constructor(private firebaseService: AuthService) {
    console.log('COMPOENT MAIN FIRST');

  }

  async ngOnInit(): Promise<void> {
    await this.firebaseService.userChanges();
    this.firebaseService.userStatusChanges.subscribe(x => this.userStatus = x);
    console.log('UserStatusONINIT', this.userStatus);
  }

}
