import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R156Component } from './r156.component';

const routes: Routes = [{ path: '', component: R156Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R156RoutingModule { }
