import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R54Component } from './r54.component';

const routes: Routes = [{ path: '', component: R54Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R54RoutingModule { }
