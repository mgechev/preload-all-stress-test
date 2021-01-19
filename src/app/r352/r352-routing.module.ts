import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R352Component } from './r352.component';

const routes: Routes = [{ path: '', component: R352Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R352RoutingModule { }
