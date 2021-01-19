import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R411Component } from './r411.component';

const routes: Routes = [{ path: '', component: R411Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R411RoutingModule { }
