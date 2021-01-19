import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R89Component } from './r89.component';

const routes: Routes = [{ path: '', component: R89Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R89RoutingModule { }
