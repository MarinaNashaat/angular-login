import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../Services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLogin: boolean = false;
  constructor(private _auth: AuthenticationService, private _Router:Router) { }

  ngOnInit(): void {
    this._auth.userData.subscribe(()=>{
      if (this._auth.userData.getValue() != null) {
        this.isLogin = true
      }
      else {
        this.isLogin = false;
      }
    })
    
  }

  logOut(){
    localStorage.removeItem('token')
    this._auth.userData.next(null);
    this._Router.navigate(['/login'])
  }
}
