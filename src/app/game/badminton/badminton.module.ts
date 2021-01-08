import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BadmintonRoutingModule } from './badminton-routing.module';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [DetailComponent],
  imports: [
    CommonModule,
    BadmintonRoutingModule
  ]
})
export class BadmintonModule { }
