import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R481Component } from './r481.component';

const routes: Routes = [{ path: '', component: R481Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R481RoutingModule { }
