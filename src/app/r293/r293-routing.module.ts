import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R293Component } from './r293.component';

const routes: Routes = [{ path: '', component: R293Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R293RoutingModule { }
