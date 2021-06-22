import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryModeRoutingModule } from './delivery-mode-routing.module';
import { DeliveryModeComponent } from './delivery-mode.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [DeliveryModeComponent],
  imports: [
    CommonModule,
    DeliveryModeRoutingModule,
    FormsModule
  ]
})
export class DeliveryModeModule { }
