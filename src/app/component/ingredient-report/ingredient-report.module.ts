import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngredientReportRoutingModule } from './ingredient-report-routing.module';
import { IngredientReportComponent } from './ingredient-report.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [IngredientReportComponent],
  imports: [
    CommonModule,
    IngredientReportRoutingModule,
    FormsModule
  ]
})
export class IngredientReportModule { }
