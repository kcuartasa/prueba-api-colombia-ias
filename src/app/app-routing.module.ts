import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'formularios',
    loadChildren: () => import('./formularios/delivery.module').then( m => m.DeliveryModule ),
  },    
  {
    path: '**',
    redirectTo: 'home'
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
