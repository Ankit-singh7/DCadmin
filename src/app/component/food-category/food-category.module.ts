import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FoodCategoryRoutingModule } from './food-category-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FoodCategoryComponent } from './food-category.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [FoodCategoryComponent],
  imports: [
    CommonModule,
    FormsModule,
    FoodCategoryRoutingModule,
    SharedModule,
    NgxPaginationModule
  ]
})
export class FoodCategoryModule { }
