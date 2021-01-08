import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'game',
    loadChildren: () =>
      import('./game/game.module').then(
        (module) => module.GameModule
      )
  },
  {
    path:'badminton',
    loadChildren: () =>
      import('./game/badminton/badminton.module').then(
        (module) => module.BadmintonModule
      )
  },
  {
    path:'basket',
    loadChildren: () =>
    import('./game/basket/basket.module').then(
      (module)=>module.BasketModule
    )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
