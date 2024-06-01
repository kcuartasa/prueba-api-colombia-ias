import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { DateComponent } from './date/date.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'direccionentrega', component: DeliveryComponent },
      { path: 'fechaentrega', component: DateComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryRoutingModule { }
