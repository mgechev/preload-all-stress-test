import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R383Component } from './r383.component';

const routes: Routes = [{ path: '', component: R383Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R383RoutingModule { }
