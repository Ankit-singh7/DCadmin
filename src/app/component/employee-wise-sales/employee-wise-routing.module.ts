import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeWiseComponent } from './employee-wise.component';


const routes: Routes = [
  {path:'', component: EmployeeWiseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeWiseRoutingModule { }
