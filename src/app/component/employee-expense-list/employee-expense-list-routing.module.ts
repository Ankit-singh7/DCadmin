import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeExpenseListComponent } from './employee-expense-list.component';


const routes: Routes = [
  {path:'', component: EmployeeExpenseListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeExpenseListRoutingModule { }
