import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R193Component } from './r193.component';

const routes: Routes = [{ path: '', component: R193Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R193RoutingModule { }
