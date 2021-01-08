import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { BadmintonComponent } from './badminton/badminton.component';
import { TeamComponent } from './badminton/team/team.component';
import { BasketComponent } from './basket/basket.component';


@NgModule({
  declarations: [BadmintonComponent, TeamComponent, BasketComponent],
  imports: [
    CommonModule,
    GameRoutingModule
  ]
})
export class GameModule { }
