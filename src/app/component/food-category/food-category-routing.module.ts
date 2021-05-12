import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodCategoryComponent } from './food-category.component';


const routes: Routes = [
  {
    path:'', component: FoodCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodCategoryRoutingModule { }
