import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodIngredientComponent } from './food-ingredient.component';


const routes: Routes = [
  {path:'', component: FoodIngredientComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodIngredientRoutingModule { }
