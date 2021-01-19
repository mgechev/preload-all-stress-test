import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R339Component } from './r339.component';

const routes: Routes = [{ path: '', component: R339Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R339RoutingModule { }
