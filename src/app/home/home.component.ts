import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../Services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userInfo: any;
  constructor(private _auth: AuthenticationService) { }

  ngOnInit(): void {
    this.userInfo = this._auth.userData.getValue()
  }

}
