import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngredientCatComponent } from './ingredient-cat.component';


const routes: Routes = [
  {
    path:'', component:IngredientCatComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngredientCatRoutingModule { }
