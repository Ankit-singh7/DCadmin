import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopularFoodComponent } from './popular-food.component';


const routes: Routes = [
  {path: '', component: PopularFoodComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BranchRoutingModule { }
