import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzFormModule } from 'ng-zorro-antd/form';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {SharedModule} from '../../shared/shared.module'


@NgModule({
  declarations: [
    LoginComponent,


  ],
  imports: [
    SharedModule,
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
