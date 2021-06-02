import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngredientRoutingModule } from './ingredient-routing.module';
import { IngredientComponent } from './ingredient.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import {NgxPaginationModule} from 'ngx-pagination'; 


@NgModule({
  declarations: [IngredientComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    NgxPaginationModule,
    IngredientRoutingModule
  ]
})
export class IngredientModule { }
