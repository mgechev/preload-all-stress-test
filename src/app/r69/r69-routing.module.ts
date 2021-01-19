import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R69Component } from './r69.component';

const routes: Routes = [{ path: '', component: R69Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R69RoutingModule { }
