import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
// import { MockAssetData } from 'src/app/features/assets/_mock-data/asset-mock-data';
import { Car } from '../_model/car-model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login = (): Promise<any> => {

    var data = {
       "user": 'pupan',
       "pass": '1235'
    }

    return this.http
      .post(`http://127.0.0.1:3000/login`,{data})
      .toPromise();
  };
}
