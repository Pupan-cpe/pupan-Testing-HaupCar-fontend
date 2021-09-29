import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Car } from '../_model/car-model';
import { CarserviceService } from './carservice.service';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  listCar: Array<Car>;
  isShowmodal: boolean;
  licensePate: string;
  annotation: string;
  modelCar: string;
  brandCar: string;
  validateForm!: FormGroup;
  isConfirmLoading:boolean;

  constructor(private apicall: CarserviceService, private fb: FormBuilder) {
    this.listCar = [] as Array<Car>;
    this.isShowmodal = false;
    this.licensePate = '';
    this.annotation = '';
    this.modelCar = '';
    this.brandCar = '';
    this.isConfirmLoading = false;
  }

  ngOnInit() {
    this.apicall.getCar().then((res) => {
      this.listCar = res.data;
      console.log(res);
    });

    this.validateForm = this.fb.group({
      note: [null, [Validators.required]],
      gender: [null, [Validators.required]],

    });
  }

  genderChange = (value: string): void => {
    this.validateForm
      .get('note')!
      .setValue(value === 'male' ? 'Hi, man!' : 'Hi, lady!');
  };

  submitForm = (): void => {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }

    if (this.validateForm.valid) {
      console.log("pass");

      this.submitdata();
    }
  };

  cancel = (): void => {
    this.isShowmodal = false;
  };
  submitdata = (): void => {
    var e = '';

    this.validateForm.controls.note.setValue(e);

    // this.validateForm.get('note')?.setValue(value === '');

    this.isShowmodal = false;

    // api call
  };
  addData = (): void => {
    this.isShowmodal = true;

    console.log('click');
  };
}
