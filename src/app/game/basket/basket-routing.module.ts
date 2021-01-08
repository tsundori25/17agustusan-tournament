import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasketComponent } from './basket.component';
import { DetailBasketComponent } from './detail-basket/detail-basket.component';

const routes: Routes = [
  {
    path:'',
    component:BasketComponent,
    children:[
      {
        path:'detail',
        component:DetailBasketComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasketRoutingModule { }
