import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeExpenseListRoutingModule } from './employee-expense-list-routing.module';
import { EmployeeExpenseListComponent } from './employee-expense-list.component';
import { SharedModule } from '../shared/shared.module';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';
import {DpDatePickerModule} from 'ng2-date-picker';
import { FilterPipe } from '../shared/pipe/filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [EmployeeExpenseListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EmployeeExpenseListRoutingModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    DpDatePickerModule,
    SharedModule,
    NgxPaginationModule,

  ],
  providers: [FilterPipe]
})
export class EmployeeExpenseListModule { }
