import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R378Component } from './r378.component';

const routes: Routes = [{ path: '', component: R378Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R378RoutingModule { }
