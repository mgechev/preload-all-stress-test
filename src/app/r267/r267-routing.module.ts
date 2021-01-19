import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R267Component } from './r267.component';

const routes: Routes = [{ path: '', component: R267Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R267RoutingModule { }
