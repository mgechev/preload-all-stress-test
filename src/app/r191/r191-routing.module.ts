import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R191Component } from './r191.component';

const routes: Routes = [{ path: '', component: R191Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R191RoutingModule { }
