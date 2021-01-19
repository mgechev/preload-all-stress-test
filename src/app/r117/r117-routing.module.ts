import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R117Component } from './r117.component';

const routes: Routes = [{ path: '', component: R117Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R117RoutingModule { }
