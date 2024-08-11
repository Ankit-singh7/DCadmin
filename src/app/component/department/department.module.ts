import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentComponent } from './department.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [DepartmentComponent],
  imports: [
    CommonModule,
    FormsModule,
    DepartmentRoutingModule
  ]
})
export class DepartmentModule { }
