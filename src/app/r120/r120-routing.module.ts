import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R120Component } from './r120.component';

const routes: Routes = [{ path: '', component: R120Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R120RoutingModule { }
