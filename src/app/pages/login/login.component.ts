import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {
  CanActivate,
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true],
    });
  }

  login = (): void => {
    var e = true;
    const data = {
      userName: this.validateForm.controls.userName.value as string,
      password: this.validateForm.controls.password.value as string,
    };

    console.log(data);
    if (e === true) {
      void this.router.navigateByUrl('/Managecar');

      this.loginService.login().then((res) => {
        // console.log(res, 'message from api ');

        // if (res.message === 'err') {

        //   alert(res.message);

        // } else {
        //   void this.router.navigateByUrl('/welcome');
        // }
      });
    }
  };
  submitForm = (): void => {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
    if (this.validateForm.valid) {
      this.login();
    }
  };
}
