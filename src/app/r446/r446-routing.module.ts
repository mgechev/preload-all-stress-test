import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R446Component } from './r446.component';

const routes: Routes = [{ path: '', component: R446Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R446RoutingModule { }
