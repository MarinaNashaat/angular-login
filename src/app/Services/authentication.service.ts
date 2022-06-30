import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _HttpClient: HttpClient) { 
    if(localStorage.getItem('token')!=null){
      this.saveUserData();
    }
  }
  userData = new BehaviorSubject(null);
  register(signupData: Object): Observable<any> {
    return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signup', signupData);
  }
  login(loginData: Object): Observable<any> {
    return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signin', loginData);
  }
  saveUserData(): void {
    let encodedData = JSON.stringify(localStorage.getItem('token'));
    let decodedData: any = jwtDecode(encodedData);
    this.userData.next(decodedData);


  }
}
