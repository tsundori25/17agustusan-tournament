import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BadmintonComponent } from './badminton.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {
    path:'',
    component:BadmintonComponent,
    children:[
      {
        path:'detail',
        component:DetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BadmintonRoutingModule { }
