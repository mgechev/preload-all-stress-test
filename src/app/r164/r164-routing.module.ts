import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R164Component } from './r164.component';

const routes: Routes = [{ path: '', component: R164Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R164RoutingModule { }
