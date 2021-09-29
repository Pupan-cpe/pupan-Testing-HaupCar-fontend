import { NgModule } from '@angular/core';

import { CarRoutingModule } from './car-routing.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CarComponent } from './car.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  imports: [CarRoutingModule,NzTableModule,NzDividerModule,SharedModule],
  declarations: [CarComponent],
  exports: [CarComponent]
})
export class CarModule { }
