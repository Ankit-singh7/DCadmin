import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeliveryModeComponent } from './delivery-mode.component';


const routes: Routes = [
  {
    path:'', component: DeliveryModeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryModeRoutingModule { }
