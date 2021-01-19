import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R379Component } from './r379.component';

const routes: Routes = [{ path: '', component: R379Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R379RoutingModule { }
