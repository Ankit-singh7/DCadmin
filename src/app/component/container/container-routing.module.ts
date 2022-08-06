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
      path: 'employee-wise',
      loadChildren: () => import('../../../app/component/employee-wise-sales/employee-wise.module').then( m => m.EmployeeWiseModule)
    },
    {
      path: 'branch',
      loadChildren: () => import('../../../app/component/branch/branch.module').then( m => m.BranchModule)
    },
    {
      path: 'popular-food',
      loadChildren: () => import('../../../app/component/popular-food/popular-food.module').then( m => m.PopularFoodModule)
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
    },
    {
      path:'sales-report',
      loadChildren: () => import('../../../app/component/sales-report/sales-report.module').then( m => m.SalesReportModule)
    },
    {
      path:'payment',
      loadChildren: () => import('../../../app/component/payment-mode/payment-mode.module').then( m => m.PaymentModeModule)
    },
    {
      path:'delivery',
      loadChildren: () => import('../../../app/component/delivery-mode/delivery-mode.module').then( m => m.DeliveryModeModule)
    },
    {
      path: 'sm',
      loadChildren: () => import('../../../app/component/stock-manager/stock-manager.module').then( m => m.StockManagerModule)
    },
    {
      path: 'stock-list',
      loadChildren: () => import('../../../app/component/stock-list/stock-list.module').then( m => m.StockListModule)
    },
    {
      path: 'stock-in',
      loadChildren: () => import('../../../app/component/stock-in/stock-in.module').then( m => m.StockInModule)
    },
    {
      path: 'stock-out',
      loadChildren: () => import('../../../app/component/stock-out/stock-out.module').then( m => m.StockOutModule)
    },
    {
      path: 'change-pass',
      loadChildren: () => import('../../../app/component/change-password/change-password.module').then( m => m.ChangePasswordModule)
    },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainerRoutingModule { }
