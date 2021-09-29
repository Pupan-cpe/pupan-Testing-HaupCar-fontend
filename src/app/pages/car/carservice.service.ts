import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// import { MockAssetData } from 'src/app/features/assets/_mock-data/asset-mock-data';
import { Car } from '../_model/car-model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class CarserviceService {

  constructor(private http: HttpClient) {


   }
   getCar = (): Promise<any> =>{

    return (
      this.http
        .get<any>(`http://127.0.0.1:3001/api/v1/car`)
        .toPromise()
    );
   }
}
