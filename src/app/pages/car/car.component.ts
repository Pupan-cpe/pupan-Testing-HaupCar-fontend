import { Component, OnInit } from '@angular/core';
import {Car} from '../_model/car-model'
import {CarserviceService} from './carservice.service'
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  listCar: Array<Car>;


  constructor( private apicall : CarserviceService) {

    this.listCar = [] as Array<Car>
  }

  ngOnInit() {

    this.apicall.getCar().then((res)=>{

      this.listCar = res.data;
      console.log(res);
    })


  }

}
