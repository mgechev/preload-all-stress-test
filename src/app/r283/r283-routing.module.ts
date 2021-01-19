import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R283Component } from './r283.component';

const routes: Routes = [{ path: '', component: R283Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R283RoutingModule { }
