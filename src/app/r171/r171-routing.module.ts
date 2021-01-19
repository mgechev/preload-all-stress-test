import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R171Component } from './r171.component';

const routes: Routes = [{ path: '', component: R171Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R171RoutingModule { }
