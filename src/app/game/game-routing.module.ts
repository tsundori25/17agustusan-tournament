import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BadmintonComponent } from './badminton/badminton.component';
import { GameComponent } from './game.component';

const routes: Routes = [
  {
    path:'',
    component:GameComponent,
    children:[
      {
        path:'badminton',
        component:BadmintonComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
