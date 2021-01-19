import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R263Component } from './r263.component';

const routes: Routes = [{ path: '', component: R263Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R263RoutingModule { }
