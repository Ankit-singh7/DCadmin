import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesReportRoutingModule } from './sales-report-routing.module';
import { SalesReportComponent } from './sales-report.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [SalesReportComponent],
  imports: [
    CommonModule,
    FormsModule,
    SalesReportRoutingModule,
    NgxPaginationModule
  ]
})
export class SalesReportModule { }
