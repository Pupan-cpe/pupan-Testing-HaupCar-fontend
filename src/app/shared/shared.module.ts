import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { HttpClientModule } from '@angular/common/http';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
@NgModule({
  declarations: [],
  imports: [
    NzCheckboxModule,
    NzTabsModule,
    NzCardModule,
    NzToolTipModule,
    NzCollapseModule,
    NzDividerModule,
    NzTableModule,
    NzDatePickerModule,
    NzSelectModule,
    NzSpaceModule,
    NzFormModule,
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    NzGridModule,
    FormsModule,
    ReactiveFormsModule,
    NzInputModule,
    NzButtonModule,
    HttpClientModule,
    NzSpinModule,
    NzIconModule,
    NzPageHeaderModule,
    NzMessageModule,
    NzModalModule,
    NzPaginationModule
  ],
  exports: [
    NzCheckboxModule,
    NzTabsModule,
    NzCardModule,
    NzTableModule,
    NzDatePickerModule,
    NzSelectModule,
    NzSpaceModule,
    NzFormModule,
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    NzGridModule,
    FormsModule,
    NzModalModule,
    ReactiveFormsModule,
    NzInputModule,
    NzButtonModule,
    HttpClientModule,
    NzSpinModule,
    NzIconModule,
    NzPageHeaderModule,
    NzMessageModule,
    NzCollapseModule,
    NzDividerModule,
    NzToolTipModule
  ]
})
export class SharedModule {}
