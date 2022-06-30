import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../Services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private _auth:AuthenticationService , private _Router:Router) { }
  loginError: string = ''
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });
  submitLoginInfo(loginInfo:FormGroup) {
   this._auth.login(loginInfo.value).subscribe(
     (response)=>{
       if(response.message=='success'){
         localStorage.setItem('token',response.token);
         this._auth.saveUserData();
         this._Router.navigate(['home'])
       }
       else{
         this.loginError=response.message;
         
       }
     }
   )

  }


  ngOnInit(): void {
  }

}
