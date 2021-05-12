import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './container.component';


const routes: Routes = [
  {path:'', 
  component: ContainerComponent, children: [
    {
      path: 'employee',
      loadChildren: () => import('../../../app/component/employee/employee.module').then( m => m.EmployeeModule)
    },
    {
      path: 'billing',
      loadChildren: () => import('../../../app/component/billing/billing.module').then( m => m.BillingModule)
    },
    {
      path: 'session',
      loadChildren: () => import('../../../app/component/session/session.module').then( m => m.SessionModule)
    },
    {
      path: 'ingredient',
      loadChildren: () => import('../../../app/component/ingredient/ingredient.module').then( m => m.IngredientModule)
    },
    {
      path: 'ingredient-cat',
      loadChildren: () => import('../../../app/component/ingredient-cat/ingredient-cat.module').then( m => m.IngredientCatModule)
    },
    {
      path: 'unit',
      loadChildren: () => import('../../../app/component/unit/unit.module').then( m => m.UnitModule)
    },
    {
      path: 'food-cat',
      loadChildren: () => import('../../../app/component/food-category/food-category.module').then( m => m.FoodCategoryModule)
    },
    {
      path: 'food-list',
      loadChildren: () => import('../../../app/component/food-list/food-list.module').then( m => m.FoodListModule)
    },
    {
      path: 'food-ing',
      loadChildren: () => import('../../../app/component/food-ingredient/food-ingredient.module').then( m => m.FoodIngredientModule)
    },
    {
      path:'report',
      loadChildren: () => import('../../../app/component/ingredient-report/ingredient-report.module').then( m => m.IngredientReportModule)
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainerRoutingModule { }
