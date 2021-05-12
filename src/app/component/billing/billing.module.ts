import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BillingRoutingModule } from './billing-routing.module';
import { BillingComponent } from './billing.component';
import { SharedModule } from '../shared/shared.module';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';
import {DpDatePickerModule} from 'ng2-date-picker';
import { FilterPipe } from '../shared/pipe/filter.pipe';


@NgModule({
  declarations: [BillingComponent],
  imports: [
    CommonModule,
    FormsModule,
    BillingRoutingModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    DpDatePickerModule,
    SharedModule
  ],
  providers: [FilterPipe]
})
export class BillingModule { }
