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

   url = 'http://127.0.0.1:3001/api/v1/car/';
  constructor(private http: HttpClient) {


   }
   getCar = (): Promise<any> =>{

    return (
      this.http
        .get<any>(this.url)
        .toPromise()
    );
   }


insertcar = (data:Car): Promise<any> =>{

  return (
    this.http.post<Car>(this.url, data).toPromise()
  );

}

updatecar = (data:Car,id:number): Promise<any> =>{

  return (
    this.http.put<Car>(`${this.url}${id}`, data).toPromise()
  );

}

deletecar = (id:number): Promise<any> =>{

  return (
    this.http.delete<Car>(`${this.url}${id}`).toPromise()
  );

}

   getModelCar = (): Promise<any> =>{

    return (
      this.http
        .get<any>(this.url+`getmodel`)
        .toPromise()
    );
   }
}
