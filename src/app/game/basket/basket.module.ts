import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasketRoutingModule } from './basket-routing.module';
import { DetailBasketComponent } from './detail-basket/detail-basket.component';


@NgModule({
  declarations: [DetailBasketComponent],
  imports: [
    CommonModule,
    BasketRoutingModule
  ]
})
export class BasketModule { }
