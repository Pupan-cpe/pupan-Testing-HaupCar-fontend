import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Car, ModelCar } from '../_model/car-model';
import { CarserviceService } from '../service/carservice.service';
import { NzModalService } from 'ng-zorro-antd/modal';

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
  modelCar: Array<ModelCar>;
  id: number;

  brandCar: string;
  validateForm!: FormGroup;
  isConfirmLoading: boolean;
  isShowmodalUpdated: boolean;

  constructor(
    private apicall: CarserviceService,
    private fb: FormBuilder,
    private modalService: NzModalService
  ) {
    this.listCar = [] as Array<Car>;
    this.isShowmodal = false;
    this.isShowmodalUpdated = false;
    this.licensePate = '';
    this.annotation = '';
    this.id = 0;

    this.modelCar = [] as Array<ModelCar>;
    this.brandCar = '';
    this.isConfirmLoading = false;
  }

  ngOnInit() {
    this.getdatacar();
    // <!-- <td>{{ data.brand }}</td>

    // <td>{{ data.model }}</td>
    // <td>{{ data.licensePate }}</td>
    // <td>{{ data.annotation }}</td> -->

    this.validateForm = this.fb.group({
      brand: [null, [Validators.required]],
      model: [null, [Validators.required]],
      licensePate: [null, [Validators.required]],
      annotation: [null],
    });
  }
  updatecar = (data: Car): void => {
    this.id = data.id;

    console.log(data.brand);

    this.validateForm = this.fb.group({
      brand: [data.brand],
      model: [data.model],
      licensePate: [data.licensePate],
      annotation: [data.annotation],

      // ischeckedEditAsset: [false],
      // AssetID: [data.data.asset_id],
      // warranty_startdate: [null],
      // businessID: [data.data.business_id],
      // warranty_enddate: [null],
      // data_type: [data.data.data_type],
    });

    this.isShowmodalUpdated = true;
  };
  deletecar = (id: number): void => {
    this.modalService.confirm({
      nzTitle: 'คุณแน่ใจว่าจะลบข้อมูลนี้?',
      nzContent: '<b></b>',
      nzOnOk: () => {
        this.apicall.deletecar(id).then((res) => {
          console.log(res);
          if (res.message === 'Delete data Succes') {
            this.success('ลบข้อมูลสำเร็จ');
            this.getdatacar();
          } else {
            this.error('ไม่สามารถทำรายการได้');
          }
        });
      },
    });

    console.log(id);
  };

  getdatacar = (): void => {
    this.apicall.getCar().then((res) => {
      this.listCar = res.data;
      console.log(res);
    });
  };

  getmodelcar = (): void => {
    this.apicall.getModelCar().then((res) => {
      this.modelCar = res.data;
      var e = [];
      e = res.data;
      console.log(res);

      console.log(this.modelCar);
    });
  };

  submitFormEdit = (): void => {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }

    if (this.validateForm.valid) {
      // brand: [null,],
      // model: [null, ],
      // licensePate: [null, ],
      // annotation: [null],

      if (this.validateForm.controls.annotation.value === null) {
        this.validateForm.get('annotation')?.setValue('-');
      }

      const data = {
        brand: this.validateForm.controls.brand.value as string,
        model: this.validateForm.controls.model.value as string,

        licensePate: this.validateForm.controls.licensePate.value as string,

        annotation: this.validateForm.controls.annotation.value as string,
      };
      // console.log(data);
      this.updateForm(data);
    }
  };

  updateForm = (data: any): void => {
    this.apicall.updatecar(data, this.id).then((res) => {
      if (res.message === 'Update data Succes') {
        this.success('แก้ไขข้อมูลสำเร็จ');
        this.isShowmodalUpdated = false;
        this.getdatacar();
      } else {
        this.error('ไม่สามารถทำรายการได้');
      }
    });
  };
  submitForm = (): void => {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }

    if (this.validateForm.valid) {
      console.log('pass');

      // brand: [null,],
      // model: [null, ],
      // licensePate: [null, ],
      // annotation: [null],

      if (this.validateForm.controls.annotation.value === null) {
        this.validateForm.get('annotation')?.setValue('-');
      }

      const data = {
        brand: this.validateForm.controls.brand.value as string,
        model: this.validateForm.controls.model.value as string,

        licensePate: this.validateForm.controls.licensePate.value as string,

        annotation: this.validateForm.controls.annotation.value as string,
      };
      // console.log(data);
      this.submitdata(data);
    }
  };
  cancelupdate = (): void => {
    this.validateForm = this.fb.group({
      brand: [null, [Validators.required]],
      model: [null, [Validators.required]],
      licensePate: [null, [Validators.required]],
      annotation: [null],
    });
    this.isShowmodalUpdated = false;
  };
  cancel = (): void => {
    this.validateForm = this.fb.group({
      brand: [null, [Validators.required]],
      model: [null, [Validators.required]],
      licensePate: [null, [Validators.required]],
      annotation: [null],
    });

    console.log('close');
    this.isShowmodal = false;
  };
  submitdata = (data: any): void => {
    console.log(data);

    this.apicall.insertcar(data).then((res) => {
      console.log(res.message);

      if (res.message === 'insert data Succes') {
        this.success('เพิ่มข้อมูลสำเร็จ');
        this.getdatacar();
      } else {
        this.error('เกิดข้อผิดพลาดกรุณาลองใหม่อีกครั้ง');
      }
    });

    this.validateForm = this.fb.group({
      id: [null, [Validators.required]],

      brand: [null, [Validators.required]],
      model: [null, [Validators.required]],
      licensePate: [null, [Validators.required]],
      annotation: [null],
    });
    var e = '';

    // this.validateForm.controls.note.setValue(e);

    // this.validateForm.get('note')?.setValue(value === '');

    this.isShowmodal = false;

    // api call
  };
  addData = (): void => {
    this.isShowmodal = true;

    this.getmodelcar();

    console.log('click');
  };

  success = (msg: string): void => {
    const modal = this.modalService.success({
      nzTitle: 'Success',
      nzContent: `${msg}`,
      nzOkText: null,
    });
    setTimeout(() => modal.destroy(), 2000);
  };

  error = (msg: string): void => {
    const modal = this.modalService.error({
      nzTitle: 'Error',
      nzContent: `${msg}`,
    });
    setTimeout(() => modal.destroy(), 5000);
  };
}
