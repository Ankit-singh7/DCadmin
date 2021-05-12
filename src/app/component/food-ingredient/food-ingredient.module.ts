import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodIngredientRoutingModule } from './food-ingredient-routing.module';
import { FoodIngredientComponent } from './food-ingredient.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [FoodIngredientComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    FoodIngredientRoutingModule
  ]
})
export class FoodIngredientModule { }
