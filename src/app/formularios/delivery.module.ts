import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, Validators } from '@angular/forms';

import { DeliveryComponent } from './delivery/delivery.component';
import { DateComponent } from './date/date.component';
import { DeliveryRoutingModule } from './delivery-routing.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    DeliveryRoutingModule,
    ReactiveFormsModule,
  ]
})
export class DeliveryModule { }
