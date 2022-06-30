import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../Services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private _auth: AuthenticationService, private _Router: Router) { }

  registerError: string = ''
  signupForm: FormGroup = new FormGroup({
    first_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    last_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    age: new FormControl(null, [Validators.required, Validators.min(12), Validators.max(80)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z]{1}[a-z0-9]{3,8}[!,@,#]$/)]),
  });

  submitRegisterInfo(registerInfo: FormGroup) {
    this._auth.register(registerInfo.value).subscribe((response) => {
      if (response.message == 'success') {
        this._Router.navigate(['login'])
      }
      else {
        this.registerError = response.errors.email.message;

      }

    })


  }

  ngOnInit(): void {
  }

}
