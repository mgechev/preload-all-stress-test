import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R101Component } from './r101.component';

const routes: Routes = [{ path: '', component: R101Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R101RoutingModule { }
