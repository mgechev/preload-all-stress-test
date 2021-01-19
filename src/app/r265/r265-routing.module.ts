import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R265Component } from './r265.component';

const routes: Routes = [{ path: '', component: R265Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R265RoutingModule { }
