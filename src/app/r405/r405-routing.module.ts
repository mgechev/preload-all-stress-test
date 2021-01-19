import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R405Component } from './r405.component';

const routes: Routes = [{ path: '', component: R405Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R405RoutingModule { }
