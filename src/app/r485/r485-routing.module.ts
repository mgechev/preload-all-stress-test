import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R485Component } from './r485.component';

const routes: Routes = [{ path: '', component: R485Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R485RoutingModule { }
