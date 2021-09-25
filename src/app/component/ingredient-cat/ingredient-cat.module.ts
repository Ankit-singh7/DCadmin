import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngredientCatRoutingModule } from './ingredient-cat-routing.module';
import { IngredientCatComponent } from './ingredient-cat.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [IngredientCatComponent],
  imports: [
    CommonModule,
    FormsModule,
    IngredientCatRoutingModule,
    SharedModule,
    NgxPaginationModule
  ]
})
export class IngredientCatModule { }