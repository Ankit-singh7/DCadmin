import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodListRoutingModule } from './food-list-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { FoodListComponent } from './food-list.component';
import {NgxPaginationModule} from 'ngx-pagination'; 

@NgModule({
  declarations: [FoodListComponent],
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
    FoodListRoutingModule,
    NgxPaginationModule
  ]
})
export class FoodListModule { }
