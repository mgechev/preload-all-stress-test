import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R416Component } from './r416.component';

const routes: Routes = [{ path: '', component: R416Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R416RoutingModule { }
